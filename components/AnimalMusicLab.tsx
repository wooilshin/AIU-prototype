'use client'

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface LabAnimal {
  id: string
  name: string
  nameKo: string
  note?: string
  audio: string
}

interface LabGroup {
  id: string
  title: string
  titleKo: string
  subtitle?: string
  animals: LabAnimal[]
}

interface MusicLabData {
  title: string
  subtitle: string
  hint: string
  playingLabel: string
  pausedLabel: string
  audioSoonLabel: string
  prevLabel: string
  nextLabel: string
  groups: LabGroup[]
}

type ListItem = {
  kind: 'animal'
  id: string
  label: string
  animal: LabAnimal & { groupTitle: string; groupSubtitle?: string }
  color: string
}

const LIST_COLORS = [
  '#e06b2c',
  '#d9486e',
  '#9b5fd4',
  '#c9a016',
  '#e07040',
  '#c43d78',
  '#7c5cd6',
  '#d4920a',
  '#d95f18',
  '#c93a7a',
]

function slugLabel(animal: LabAnimal, language: 'en' | 'ko') {
  if (language === 'ko') return animal.nameKo
  return animal.name.toLowerCase()
}

/** 같은 id면 항상 같은 “랜덤” 배치가 나오도록 해시 기반 오프셋 */
function scatterStyle(seed: string, index: number) {
  let hash = 2166136261
  const text = `${seed}:${index}`
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 16777619)
  }
  const h = hash >>> 0
  const left = 2 + (h % 82)
  const topGap = 2 + (h % 22)
  const size = 15 + (h % 7)
  const tilt = ((h % 15) - 7) * 0.55
  const opacity = 0.78 + ((h >> 8) % 22) / 100

  return {
    marginLeft: `${left}%`,
    marginTop: `${topGap}px`,
    fontSize: `${size}px`,
    transform: `rotate(${tilt.toFixed(2)}deg)`,
    opacity,
  } as CSSProperties
}

export default function AnimalMusicLab() {
  const { language } = useLanguage()
  const [data, setData] = useState<MusicLabData | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioMissing, setAudioMissing] = useState(false)
  const [progress, setProgress] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const dataFile = language === 'ko' ? '/data/music-lab.ko.json' : '/data/music-lab.json'
    fetch(dataFile)
      .then((res) => res.json())
      .then((json: MusicLabData) => {
        setData(json)
        const first = json.groups[0]?.animals[0]
        if (first) {
          setSelectedId((prev) => prev ?? first.id)
        }
      })
      .catch((err) => console.error('Error loading music lab data:', err))
  }, [language])

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const flatAnimals = useMemo(() => {
    if (!data) return [] as Array<LabAnimal & { groupTitle: string; groupSubtitle?: string }>
    return data.groups.flatMap((group) =>
      group.animals.map((animal) => ({
        ...animal,
        groupTitle: language === 'ko' ? group.titleKo || group.title : group.title,
        groupSubtitle: group.subtitle,
      }))
    )
  }, [data, language])

  const listItems = useMemo(() => {
    if (!data) return [] as ListItem[]
    const items: ListItem[] = []
    let colorIndex = 0

    data.groups.forEach((group) => {
      const groupTitle = language === 'ko' ? group.titleKo || group.title : group.title

      group.animals.forEach((animal) => {
        items.push({
          kind: 'animal',
          id: animal.id,
          label: slugLabel(animal, language),
          color: LIST_COLORS[colorIndex % LIST_COLORS.length],
          animal: {
            ...animal,
            groupTitle,
            groupSubtitle: group.subtitle,
          },
        })
        colorIndex += 1
      })
    })

    return items
  }, [data, language])

  const selected =
    flatAnimals.find((a) => a.id === selectedId) ?? flatAnimals[0] ?? null

  const selectedIndex = selected
    ? flatAnimals.findIndex((a) => a.id === selected.id)
    : -1

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setIsPlaying(false)
    setProgress(0)
  }

  const playAnimal = async (animal: LabAnimal) => {
    stopAudio()
    setAudioMissing(false)

    const audio = new Audio(animal.audio)
    audioRef.current = audio

    const onTimeUpdate = () => {
      if (!audio.duration || Number.isNaN(audio.duration)) return
      setProgress(audio.currentTime / audio.duration)
    }

    audio.addEventListener('timeupdate', onTimeUpdate)
    audio.addEventListener('ended', () => {
      setIsPlaying(false)
      setProgress(0)
    })
    audio.addEventListener('error', () => {
      setAudioMissing(true)
      setIsPlaying(false)
      audioRef.current = null
      setProgress(0)
    })

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setAudioMissing(true)
      setIsPlaying(false)
    }
  }

  const handleSelect = (animal: LabAnimal) => {
    setSelectedId(animal.id)
    void playAnimal(animal)
  }

  const togglePlay = () => {
    if (!selected) return

    if (isPlaying && audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
      return
    }

    if (audioRef.current?.src.includes(selected.audio.replace(/^\//, ''))) {
      void audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          setAudioMissing(true)
          setIsPlaying(false)
        })
      return
    }

    void playAnimal(selected)
  }

  const goRelative = (delta: number) => {
    if (flatAnimals.length === 0 || selectedIndex < 0) return
    const next =
      flatAnimals[(selectedIndex + delta + flatAnimals.length) % flatAnimals.length]
    handleSelect(next)
  }

  if (!data || !selected) return null

  const displayName = language === 'ko' ? selected.nameKo : selected.name
  const displayNote =
    selected.note ||
    (language === 'ko' ? selected.name : selected.nameKo)

  const renderList = (copy: number) =>
    listItems.map((item, index) => {
      const layout = scatterStyle(item.id, index)
      const isActive = item.id === selected.id

      return (
        <button
          key={`${copy}-${item.id}`}
          type="button"
          className={`music-lab-scroll-item ${isActive ? 'is-active' : ''}`}
          style={{
            ['--chip-color' as string]: item.color,
            marginLeft: layout.marginLeft,
            marginTop: layout.marginTop,
            fontSize: layout.fontSize,
            transform: layout.transform,
            opacity: isActive ? 1 : layout.opacity,
          }}
          onClick={() => handleSelect(item.animal)}
          aria-pressed={isActive}
          tabIndex={copy === 1 ? -1 : 0}
        >
          {item.label}
        </button>
      )
    })

  return (
    <section className="music-lab">
      <div className="music-lab-shell">
        <div className="music-lab-left">
          <p className="music-lab-kicker">Experimental · AIU Music Lab</p>
          <h1 className="music-lab-title">{data.title}</h1>
          <p className="music-lab-subtitle">{data.subtitle}</p>

          <div className="music-lab-player">
            <div className="music-lab-player-meta">
              <span className="music-lab-player-group">{selected.groupTitle}</span>
              {selected.groupSubtitle ? (
                <span className="music-lab-player-group-sub">{selected.groupSubtitle}</span>
              ) : null}
              <h2 className="music-lab-player-name">{displayName}</h2>
              <p className="music-lab-player-note">{displayNote}</p>
            </div>

            <div className="music-lab-player-controls">
              <button
                type="button"
                className="music-lab-icon-btn"
                onClick={() => goRelative(-1)}
                aria-label={data.prevLabel}
              >
                <i className="fas fa-backward-step" />
              </button>
              <button
                type="button"
                className="music-lab-icon-btn music-lab-icon-btn--play"
                onClick={togglePlay}
                aria-label={isPlaying ? data.pausedLabel : data.playingLabel}
              >
                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
              </button>
              <button
                type="button"
                className="music-lab-icon-btn"
                onClick={() => goRelative(1)}
                aria-label={data.nextLabel}
              >
                <i className="fas fa-forward-step" />
              </button>
            </div>

            <div className="music-lab-progress" aria-hidden="true">
              <div
                className="music-lab-progress-fill"
                style={{ width: `${Math.max(2, progress * 100)}%` }}
              />
            </div>

            {audioMissing && (
              <p className="music-lab-audio-note">{data.audioSoonLabel}</p>
            )}
          </div>

          <p className="music-lab-hint">{data.hint}</p>
        </div>

        <div className="music-lab-scroll" aria-label="Animal list">
          <div className="music-lab-scroll-track">
            <div className="music-lab-scroll-set">{renderList(0)}</div>
            <div className="music-lab-scroll-set" aria-hidden="true">
              {renderList(1)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
