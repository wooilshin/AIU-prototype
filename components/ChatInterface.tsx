'use client'

import { useState, useRef, useEffect } from 'react'
import styles from './ChatInterface.module.css'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatInterfaceProps {
  playerId?: string;  // 플레이어 ID (선택사항, 없으면 기본값 사용)
  animalId?: string;  // 동물 ID (선택사항, 없으면 기본값 사용)
}

export default function ChatInterface({ 
  playerId = 'default-player-id',  // 기본 플레이어 ID (나중에 인증에서 가져올 수 있음)
  animalId = 'turtle'  // 기본 동물 ID (Turtle 캐릭터)
}: ChatInterfaceProps = {} as ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: '안녕하세요! 저는 Animal Intelligence의 3D 캐릭터입니다. 무엇을 도와드릴까요?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Supabase 기반 API 호출 (playerId, animalId, message 필요)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          playerId: playerId,    // 플레이어 ID
          animalId: animalId,    // 동물 ID
          message: input,         // 사용자 메시지
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      
      // 에러 처리
      if (data.error) {
        throw new Error(data.error)
      }
      
      // 응답 메시지 생성
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message || '죄송합니다. 응답을 생성하는데 문제가 발생했습니다.',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      console.error('Error:', error)
      const errorMessage: Message = {
        role: 'assistant',
        content: '죄송합니다. 연결에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <h2>대화하기</h2>
        <p>3D 캐릭터와 대화를 나눠보세요</p>
      </div>
      
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${styles.message} ${styles[message.role]}`}
          >
            <div className={styles.messageContent}>
              {message.content}
            </div>
            <div className={styles.messageTime}>
              {message.timestamp.toLocaleTimeString('ko-KR', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className={`${styles.message} ${styles.assistant}`}>
            <div className={styles.messageContent}>
              <span className={styles.typing}>입력 중...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.inputContainer}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="메시지를 입력하세요..."
          className={styles.input}
          rows={2}
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading || !input.trim()}
          className={styles.sendButton}
        >
          <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  )
}

