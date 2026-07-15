'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
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

type WheelItem =
  | {
      kind: 'heading'
      id: string
      label: string
      sub?: string
    }
  | {
      kind: 'animal'
      id: string
      label: string
      animal: LabAnimal & { groupTitle: string; groupSubtitle?: string }
      color: string
    }

const WHEEL_COLORS = [
  '#ff8a4c',
  '#ff6b8a',
  '#d4a5ff',
  '#f5d76e',
  '#ff9f6b',
  '#e879a9',
  '#c4b5fd',
  '#fbbf24',
  '#fb923c',
  '#f472b6',
]

function slugLabel(animal: LabAnimal, language: 'en' | 'ko') {
  if (language === 'ko') return animal.nameKo
  return animal.name.toLowerCase()
}

export default function AnimalMusicLab() {
  const { language } = useLanguage()
  const [data, setData] = useState<MusicLabData | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioMissing, setAudioMissing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [orbitPaused, setOrbitPaused] = useState(false)
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

  const wheelItems = useMemo(() => {
    if (!data) return [] as WheelItem[]
    const items: WheelItem[] = []
    let colorIndex = 0

    data.groups.forEach((group) => {
      const groupTitle = language === 'ko' ? group.titleKo || group.title : group.title
      items.push({
        kind: 'heading',
        id: `heading-${group.id}`,
        label: groupTitle,
        sub: group.subtitle || undefined,
      })

      group.animals.forEach((animal) => {
        items.push({
          kind: 'animal',
          id: animal.id,
          label: slugLabel(animal, language),
          color: WHEEL_COLORS[colorIndex % WHEEL_COLORS.length],
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
    setOrbitPaused(true)
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

  const count = wheelItems.length

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

          <div className="music-lab-orbit-actions">
            <button
              type="button"
              className="music-lab-orbit-toggle"
              onClick={() => setOrbitPaused((v) => !v)}
            >
              {orbitPaused ? 'Resume wheel' : 'Pause wheel'}
            </button>
            <p className="music-lab-hint">{data.hint}</p>
          </div>
        </div>

        <div className="music-lab-wheel" aria-label="Animal wheel">
          <div
            className={`music-lab-wheel-spin ${orbitPaused ? 'is-paused' : ''}`}
            style={{ ['--wheel-count' as string]: count }}
          >
            {wheelItems.map((item, index) => {
              const angle = (360 / count) * index
              if (item.kind === 'heading') {
                return (
                  <div
                    key={item.id}
                    className="music-lab-wheel-spoke music-lab-wheel-spoke--heading"
                    style={{ ['--angle' as string]: `${angle}deg` }}
                  >
                    <span className="music-lab-wheel-label music-lab-wheel-label--heading">
                      {item.label}
                      {item.sub ? <em> · {item.sub}</em> : null}
                    </span>
                  </div>
                )
              }

              const isActive = item.id === selected.id
              return (
                <div
                  key={item.id}
                  className="music-lab-wheel-spoke"
                  style={{ ['--angle' as string]: `${angle}deg` }}
                >
                  <button
                    type="button"
                    className={`music-lab-wheel-label ${isActive ? 'is-active' : ''}`}
                    style={{ ['--chip-color' as string]: item.color }}
                    onClick={() => handleSelect(item.animal)}
                    aria-pressed={isActive}
                  >
                    {item.label}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
