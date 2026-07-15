'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface LabCharacter {
  id: string
  name: string
  genre: string
  description: string
  color: string
  accent: string
  audio: string
}

interface MusicLabData {
  title: string
  subtitle: string
  hint: string
  playingLabel: string
  pausedLabel: string
  audioSoonLabel: string
  characters: LabCharacter[]
}

export default function AnimalMusicLab() {
  const { language } = useLanguage()
  const [data, setData] = useState<MusicLabData | null>(null)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioMissing, setAudioMissing] = useState(false)
  const [orbitPaused, setOrbitPaused] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const dataFile = language === 'ko' ? '/data/music-lab.ko.json' : '/data/music-lab.json'
    fetch(dataFile)
      .then((res) => res.json())
      .then((json: MusicLabData) => {
        setData(json)
        if (json.characters.length > 0) {
          setSelectedId((prev) => prev ?? json.characters[0].id)
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

  if (!data) return null

  const selected =
    data.characters.find((c) => c.id === selectedId) ?? data.characters[0]

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }
    setIsPlaying(false)
  }

  const playCharacter = async (character: LabCharacter) => {
    stopAudio()
    setAudioMissing(false)

    const audio = new Audio(character.audio)
    audioRef.current = audio

    audio.addEventListener('ended', () => setIsPlaying(false))
    audio.addEventListener('error', () => {
      setAudioMissing(true)
      setIsPlaying(false)
      audioRef.current = null
    })

    try {
      await audio.play()
      setIsPlaying(true)
    } catch {
      setAudioMissing(true)
      setIsPlaying(false)
    }
  }

  const handleSelect = (character: LabCharacter) => {
    setSelectedId(character.id)
    setOrbitPaused(true)
    void playCharacter(character)
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

    void playCharacter(selected)
  }

  const count = data.characters.length

  return (
    <section className="music-lab">
      <div className="container music-lab-header">
        <p className="music-lab-kicker">Experimental</p>
        <h1>{data.title}</h1>
        <p className="music-lab-subtitle">{data.subtitle}</p>
      </div>

      <div className="music-lab-stage">
        <div className={`music-lab-orbit ${orbitPaused ? 'is-paused' : ''}`}>
          <div className="music-lab-orbit-ring" aria-hidden="true" />

          <div className="music-lab-spokes">
            {data.characters.map((character, index) => {
              const angle = (360 / count) * index - 90
              const isActive = character.id === selected?.id
              return (
                <div
                  key={character.id}
                  className="music-lab-spoke"
                  style={{ ['--angle' as string]: `${angle}deg` }}
                >
                  <button
                    type="button"
                    className={`music-lab-node ${isActive ? 'is-active' : ''}`}
                    style={{
                      ['--node-color' as string]: character.color,
                      ['--node-accent' as string]: character.accent,
                    }}
                    onClick={() => handleSelect(character)}
                    aria-pressed={isActive}
                  >
                    <span className="music-lab-node-label">{character.name}</span>
                  </button>
                </div>
              )
            })}
          </div>

          <div className="music-lab-center">
            {selected && (
              <>
                <div
                  className={`music-lab-avatar ${isPlaying ? 'is-playing' : ''}`}
                  style={{
                    background: `radial-gradient(circle at 30% 28%, ${selected.accent} 0%, ${selected.color} 55%, #2a2a2a 100%)`,
                  }}
                >
                  <span className="music-lab-avatar-initial">
                    {selected.name
                      .split(' ')
                      .map((w) => w[0])
                      .join('')
                      .slice(0, 2)}
                  </span>
                  {isPlaying && <span className="music-lab-pulse" aria-hidden="true" />}
                </div>
                <h2 className="music-lab-name">{selected.name}</h2>
                <p className="music-lab-genre">{selected.genre}</p>
                <p className="music-lab-desc">{selected.description}</p>
                <div className="music-lab-controls">
                  <button type="button" className="music-lab-play" onClick={togglePlay}>
                    <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'}`} />
                    <span>{isPlaying ? data.playingLabel : data.pausedLabel}</span>
                  </button>
                  <button
                    type="button"
                    className="music-lab-orbit-toggle"
                    onClick={() => setOrbitPaused((v) => !v)}
                  >
                    {orbitPaused ? 'Resume orbit' : 'Pause orbit'}
                  </button>
                </div>
                {audioMissing && (
                  <p className="music-lab-audio-note">{data.audioSoonLabel}</p>
                )}
              </>
            )}
          </div>
        </div>
        <p className="music-lab-hint">{data.hint}</p>
      </div>
    </section>
  )
}
