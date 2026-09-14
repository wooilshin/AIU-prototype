import fs from 'fs'
import path from 'path'

export function parseFrontmatter(raw) {
  const normalized = raw.replace(/^\uFEFF/, '')
  const match = normalized.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) {
    return { data: {}, body: normalized.trim() }
  }

  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const colon = trimmed.indexOf(':')
    if (colon === -1) continue
    const key = trimmed.slice(0, colon).trim()
    let value = trimmed.slice(colon + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (value === 'true') data[key] = true
    else if (value === 'false') data[key] = false
    else data[key] = value
  }

  return { data, body: match[2].trim() }
}

export function listNewsMarkdown(newsRoot, lang) {
  const dir = path.join(newsRoot, lang)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.md'))
    .sort()
    .map((name) => {
      const filePath = path.join(dir, name)
      const raw = fs.readFileSync(filePath, 'utf8')
      const { data, body } = parseFrontmatter(raw)
      const slug = name.replace(/\.md$/, '')
      return { slug, filePath, relativePath: path.join('news', lang, name), data, body }
    })
}

export function articlesFromMarkdown(files) {
  return files
    .map((file, index) => {
      const title = String(file.data.title || file.slug).trim()
      const description = String(
        file.data.description || file.body.split(/\n\n/)[0] || ''
      ).trim()
      const date = String(file.data.date || '1970-01-01').trim()
      const link = file.data.link ? String(file.data.link).trim() : undefined
      const image = file.data.image ? String(file.data.image).trim() : undefined
      return {
        id: index + 1,
        title,
        description,
        date,
        ...(link ? { link } : {}),
        ...(image ? { image } : {}),
        _slug: file.slug,
        _publishSocial: Boolean(file.data.publish_social),
        _relativePath: file.relativePath,
        _body: file.body,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map((article, index) => ({
      ...article,
      id: index + 1,
    }))
}

export function socialText(article, siteUrl) {
  const url = article.link || (siteUrl ? `${siteUrl.replace(/\/$/, '')}/#aiu-news` : '')
  const parts = [article.title, '', article.description]
  if (url) {
    parts.push('', url)
  }
  return parts.join('\n').trim()
}

export function truncateForX(text, limit = 280) {
  if (text.length <= limit) return text
  return `${text.slice(0, limit - 1).trimEnd()}…`
}
