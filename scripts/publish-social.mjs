import crypto from 'crypto'
import { articlesFromMarkdown, listNewsMarkdown, socialText, truncateForX } from './lib/news.mjs'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const newsRoot = path.join(root, 'news')

function loadDotEnv() {
  for (const name of ['.env.local', '.env']) {
    const envPath = path.join(root, name)
    if (!fs.existsSync(envPath)) continue
    const text = fs.readFileSync(envPath, 'utf8')
    for (const line of text.split(/\r?\n/)) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      const key = trimmed.slice(0, eq).trim()
      let value = trimmed.slice(eq + 1).trim()
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1)
      }
      if (process.env[key] === undefined) process.env[key] = value
    }
  }
}

loadDotEnv()

function percentEncode(value) {
  return encodeURIComponent(value).replace(/[!'()*]/g, (c) =>
    `%${c.charCodeAt(0).toString(16).toUpperCase()}`
  )
}

async function postToX(text) {
  const apiKey = process.env.X_API_KEY
  const apiSecret = process.env.X_API_SECRET
  const token = process.env.X_ACCESS_TOKEN
  const tokenSecret = process.env.X_ACCESS_TOKEN_SECRET
  if (!apiKey || !apiSecret || !token || !tokenSecret) {
    console.warn('[X] Skipped — missing X_API_KEY / X_API_SECRET / X_ACCESS_TOKEN / X_ACCESS_TOKEN_SECRET')
    return false
  }

  const url = 'https://api.x.com/2/tweets'
  const method = 'POST'
  const oauth = {
    oauth_consumer_key: apiKey,
    oauth_nonce: crypto.randomBytes(16).toString('hex'),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
    oauth_token: token,
    oauth_version: '1.0',
  }

  const baseParams = Object.keys(oauth)
    .sort()
    .map((key) => `${percentEncode(key)}=${percentEncode(oauth[key])}`)
    .join('&')
  const baseString = `${method}&${percentEncode(url)}&${percentEncode(baseParams)}`
  const signingKey = `${percentEncode(apiSecret)}&${percentEncode(tokenSecret)}`
  oauth.oauth_signature = crypto
    .createHmac('sha1', signingKey)
    .update(baseString)
    .digest('base64')

  const authHeader =
    'OAuth ' +
    Object.keys(oauth)
      .sort()
      .map((key) => `${percentEncode(key)}="${percentEncode(oauth[key])}"`)
      .join(', ')

  const res = await fetch(url, {
    method,
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: truncateForX(text) }),
  })

  if (!res.ok) {
    throw new Error(`[X] ${res.status} ${await res.text()}`)
  }
  console.log('[X] Posted')
  return true
}

async function postToFacebook(text) {
  const pageId = process.env.FACEBOOK_PAGE_ID
  const pageToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN
  if (!pageId || !pageToken) {
    console.warn('[Facebook] Skipped — missing FACEBOOK_PAGE_ID / FACEBOOK_PAGE_ACCESS_TOKEN')
    return false
  }

  const url = new URL(`https://graph.facebook.com/v21.0/${pageId}/feed`)
  url.searchParams.set('message', text)
  url.searchParams.set('access_token', pageToken)

  const res = await fetch(url, { method: 'POST' })
  if (!res.ok) {
    throw new Error(`[Facebook] ${res.status} ${await res.text()}`)
  }
  console.log('[Facebook] Posted')
  return true
}

async function postToLinkedIn(text) {
  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN
  const orgUrn = process.env.LINKEDIN_ORGANIZATION_URN
  if (!accessToken || !orgUrn) {
    console.warn('[LinkedIn] Skipped — missing LINKEDIN_ACCESS_TOKEN / LINKEDIN_ORGANIZATION_URN')
    return false
  }

  const res = await fetch('https://api.linkedin.com/rest/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0',
      'LinkedIn-Version': '202401',
    },
    body: JSON.stringify({
      author: orgUrn,
      commentary: text,
      visibility: 'PUBLIC',
      distribution: {
        feedDistribution: 'MAIN_FEED',
        targetEntities: [],
        thirdPartyDistributionChannels: [],
      },
      lifecycleState: 'PUBLISHED',
      isReshareDisabledByAuthor: false,
    }),
  })

  if (!res.ok) {
    throw new Error(`[LinkedIn] ${res.status} ${await res.text()}`)
  }
  console.log('[LinkedIn] Posted')
  return true
}

function collectArticles(filterPaths) {
  const files = [...listNewsMarkdown(newsRoot, 'en'), ...listNewsMarkdown(newsRoot, 'ko')]
  let selected = files
  if (filterPaths?.length) {
    const normalized = new Set(
      filterPaths.map((p) => p.replace(/\\/g, '/').replace(/^\.\//, ''))
    )
    selected = files.filter((file) => normalized.has(file.relativePath.replace(/\\/g, '/')))
  }
  return articlesFromMarkdown(selected).filter((article) => article._publishSocial)
}

async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const filesArgIndex = args.indexOf('--files')
  let filterPaths =
    filesArgIndex === -1
      ? null
      : args
          .slice(filesArgIndex + 1)
          .filter((arg) => !arg.startsWith('--'))
          .map((arg) => arg.replace(/\\/g, '/'))

  if ((!filterPaths || filterPaths.length === 0) && process.env.NEWS_FILES) {
    filterPaths = process.env.NEWS_FILES.split(/[\r\n]+/)
      .map((line) => line.trim().replace(/\\/g, '/'))
      .filter(Boolean)
  }

  const siteUrl = process.env.SITE_URL || 'https://www.student-b.com'
  const articles = collectArticles(filterPaths)

  if (articles.length === 0) {
    console.log('No new social-eligible news articles to publish.')
    return
  }

  for (const article of articles) {
    const text = socialText(article, siteUrl)
    console.log(`\n=== ${article._relativePath} ===\n${text}\n`)
    if (dryRun) {
      console.log('(dry-run) skipped network calls')
      continue
    }
    await postToX(text)
    await postToFacebook(text)
    await postToLinkedIn(text)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
