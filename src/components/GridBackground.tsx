import { useRef, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useTheme } from 'next-themes'

const fragmentShader = `
  uniform float time;
  uniform vec2 mouse;

  void main() {
    vec2 uv = gl_FragCoord.xy / 1000.0;
    vec2 p = uv * 2.0 - 1.0;
    
    // Animación base
    float t = time * 0.2;
    float wave1 = sin(p.x * 5.0 + t) * 0.5;
    float wave2 = sin(p.y * 3.0 - t * 1.5) * 0.5;
    
    // Efecto del mouse
    vec2 m = mouse * 2.0 - 1.0;
    float dist = length(p - m);
    float mouseWave = sin(dist * 10.0 - time) * exp(-dist * 3.0);
    
    // Combinar efectos
    float pattern = wave1 + wave2;
    pattern += mouseWave;
    pattern = pattern * 0.5 + 0.5;
    
    vec3 color = vec3(pattern);
    gl_FragColor = vec4(color, 1.0);
  }
`

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`

function FluidEffect() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const mousePos = useRef([0.5, 0.5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = [
        e.clientX / window.innerWidth,
        1.0 - e.clientY / window.innerHeight
      ]
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime()
      materialRef.current.uniforms.mouse.value = mousePos.current
    }
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          time: { value: 0 },
          mouse: { value: [0.5, 0.5] }
        }}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <Canvas
      gl={{
        alpha: false,
        antialias: false,
        powerPreference: "high-performance"
      }}
      camera={{ position: [0, 0, 1] }}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0
      }}
    >
      <FluidEffect />
    </Canvas>
  )
}

const DynamicScene = dynamic(() => Promise.resolve(Scene), {
  ssr: false
})

export default function Background() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div className={`fixed inset-0 ${isDark ? 'bg-[#050505]' : 'bg-[#f5f5f5]'} overflow-hidden transition-colors duration-300`}>
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-[0.25]' : 'opacity-[0.15]'} animate-tv-noise`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='${isDark ? 'white' : 'black'}'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          mixBlendMode: isDark ? 'screen' : 'multiply'
        }}
      />
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-[0.2]' : 'opacity-[0.1]'} animate-tv-noise-fast`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='${isDark ? 'white' : 'black'}'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px',
          mixBlendMode: isDark ? 'screen' : 'multiply'
        }}
      />
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-[0.15]' : 'opacity-[0.08]'} animate-tv-noise-slow`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' fill='${isDark ? 'white' : 'black'}'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          mixBlendMode: isDark ? 'screen' : 'multiply'
        }}
      />
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-25' : 'opacity-15'} animate-scan`}
        style={{
          backgroundImage: `linear-gradient(transparent 2px, ${isDark ? '#050505' : '#f5f5f5'} 2px)`,
          backgroundSize: '100% 3px',
          backgroundRepeat: 'repeat'
        }}
      />
    </div>
  )
} 