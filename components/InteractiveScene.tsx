'use client'

// @ts-ignore - React Three Fiber extends JSX types
import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

// GLB 모델 로드 및 캐릭터 컴포넌트
function Character({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const targetPosition = useRef(new THREE.Vector3(0, 0, 0)) // 초기 위치를 중앙으로
  const [modelLoaded, setModelLoaded] = useState(false)
  const [gltfScene, setGltfScene] = useState<THREE.Group | null>(null)
  
  // GLB 파일 로드
  useEffect(() => {
    if (typeof window === 'undefined') return
    
    const loader = new GLTFLoader()
    
    loader.load(
      '/models/Turtle.glb',
      (gltf) => {
        setGltfScene(gltf.scene)
        setModelLoaded(true)
      },
      (progress) => {
        // 로딩 진행 상황
      },
      (error) => {
        console.warn('GLB 파일을 로드할 수 없습니다. 기본 모델을 사용합니다.', error)
        setModelLoaded(false)
      }
    )
  }, [])
  
  useFrame((state, delta) => {
    if (groupRef.current && typeof window !== 'undefined') {
      // 마우스 위치를 3D 공간으로 변환 (화면 중앙 기준)
      // 화면 중앙(0.5, 0.5)이 3D 공간의 (0, 0)이 되도록 변환
      const x = ((mousePosition.x / window.innerWidth) - 0.5) * 4
      const y = -((mousePosition.y / window.innerHeight) - 0.5) * 4
      
      targetPosition.current.set(x, y, 0)
      
      // 더 빠르게 반응하도록 lerp 값 증가
      groupRef.current.position.lerp(targetPosition.current, 0.15)
      
      // 마우스 방향을 바라보도록 회전
      const direction = new THREE.Vector3()
      direction.subVectors(targetPosition.current, groupRef.current.position).normalize()
      if (direction.length() > 0.01) {
        groupRef.current.lookAt(
          groupRef.current.position.x + direction.x,
          groupRef.current.position.y + direction.y,
          groupRef.current.position.z
        )
      }
    }
  })

  // GLB 파일이 로드되었으면 사용, 없으면 기본 모델 표시
  if (modelLoaded && gltfScene) {
    return (
      <group ref={groupRef} scale={[3, 3, 3]}>
        <primitive object={gltfScene.clone()} />
      </group>
    )
  }

  // Fallback: 기본 모델 (GLB 파일이 없을 때)
  return (
    <group ref={groupRef} scale={[2, 2, 2]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#4a90e2" />
      </mesh>
      <mesh position={[0, 0, 0.26]}>
        <circleGeometry args={[0.15, 16]} />
        <meshStandardMaterial color="#ffd700" />
      </mesh>
      <mesh position={[-0.1, 0.05, 0.3]}>
        <circleGeometry args={[0.03, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      <mesh position={[0.1, 0.05, 0.3]}>
        <circleGeometry args={[0.03, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
    </group>
  )
}

export default function InteractiveScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === 'undefined') return
    
    // 초기 마우스 위치를 화면 중앙으로 설정
    setMousePosition({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
    
    // 약간의 지연을 두어 확실하게 클라이언트에서만 렌더링
    const timer = setTimeout(() => {
      setIsMounted(true)
    }, 0)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // 마우스 이벤트 리스너 등록
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // 서버 사이드나 마운트 전에는 아무것도 렌더링하지 않음
  if (typeof window === 'undefined' || !isMounted) {
    return <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#333' }}>Loading 3D Scene...</div>
  }

  return (
    <Canvas
      style={{ width: '100%', height: '100%', background: 'white' }}
      gl={{ antialias: true }}
      dpr={[1, 2]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 1.5]} fov={60} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <Character mousePosition={mousePosition} />
      
      {/* 바닥 그리드 */}
      <gridHelper args={[10, 10]} />
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

