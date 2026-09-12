import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { articlesFromMarkdown, listNewsMarkdown } from './lib/news.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const newsRoot = path.join(root, 'news')
const dataDir = path.join(root, 'public', 'data')

const META = {
  en: {
    sectionTitle: 'AIU News & Agent Reports',
    blurb: 'Human-world news delivered by our agents',
    outFile: 'aiu-news.json',
  },
  ko: {
    sectionTitle: 'AIU 뉴스 & 요원 리포트',
    blurb: '요원들이 전하는 인간 세상 소식',
    outFile: 'aiu-news.ko.json',
  },
}

function writeLang(lang) {
  const meta = META[lang]
  const files = listNewsMarkdown(newsRoot, lang)
  const articles = articlesFromMarkdown(files).map(
    ({ _slug, _publishSocial, _relativePath, _body, ...publicArticle }) => publicArticle
  )

  const payload = {
    sectionTitle: meta.sectionTitle,
    blurb: meta.blurb,
    articles,
  }

  fs.mkdirSync(dataDir, { recursive: true })
  const outPath = path.join(dataDir, meta.outFile)
  fs.writeFileSync(outPath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')
  console.log(`Wrote ${articles.length} ${lang} AIU articles → ${path.relative(root, outPath)}`)
}

writeLang('en')
writeLang('ko')
