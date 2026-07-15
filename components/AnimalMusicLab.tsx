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

const CASCADE_COLORS = [
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

        <div className="music-lab-cascade" aria-label="Animal list">
          <div className="music-lab-cascade-stage">
            <div className="music-lab-cascade-track">
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="music-lab-cascade-inner"
                  aria-hidden={copy === 1 ? true : undefined}
                >
                  {data.groups.map((group) => (
                    <div key={`${copy}-${group.id}`} className="music-lab-cascade-group">
                      <div className="music-lab-cascade-heading">
                        <span>
                          {language === 'ko' ? group.titleKo || group.title : group.title}
                        </span>
                        {group.subtitle ? <em>{group.subtitle}</em> : null}
                      </div>
                      <div className="music-lab-cascade-row">
                        {group.animals.map((animal, index) => {
                          const isActive = animal.id === selected.id
                          const color = CASCADE_COLORS[index % CASCADE_COLORS.length]
                          return (
                            <button
                              key={`${copy}-${animal.id}`}
                              type="button"
                              className={`music-lab-chip ${isActive ? 'is-active' : ''}`}
                              style={{ ['--chip-color' as string]: color }}
                              onClick={() => handleSelect(animal)}
                              aria-pressed={isActive}
                              tabIndex={copy === 1 ? -1 : 0}
                            >
                              {slugLabel(animal, language)}
                            </button>
                          )
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
