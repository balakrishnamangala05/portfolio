import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  Lightformer,
  Float,
  MeshTransmissionMaterial,
  Points,
  PointMaterial,
  Torus,
  Icosahedron,
  Sphere,
} from '@react-three/drei';
import * as THREE from 'three';

/* Fibonacci sphere of points: the "embedding space" around the core. */
function useEmbeddingCloud(count: number, radius: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const jitter = radius * (0.82 + Math.random() * 0.36);
      positions[i * 3] = Math.cos(theta) * r * jitter;
      positions[i * 3 + 1] = y * jitter;
      positions[i * 3 + 2] = Math.sin(theta) * r * jitter;
    }
    return positions;
  }, [count, radius]);
}

const EmbeddingCloud: React.FC<{ count: number }> = ({ count }) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useEmbeddingCloud(count, 3.4);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.05;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, state.pointer.y * 0.25, 0.04);
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#9fb4ff" size={0.022} sizeAttenuation depthWrite={false} opacity={0.85} />
    </Points>
  );
};

const OrbitTokens: React.FC = () => {
  const group = useRef<THREE.Group>(null);
  const tokens = useMemo(
    () =>
      [
        { r: 2.15, speed: 0.45, tilt: 0.4, color: '#5CE1E6', size: 0.11, phase: 0 },
        { r: 2.55, speed: -0.32, tilt: -0.7, color: '#FFB86B', size: 0.08, phase: 2 },
        { r: 1.85, speed: 0.6, tilt: 1.1, color: '#8B6CFF', size: 0.13, phase: 4 },
        { r: 2.85, speed: 0.22, tilt: 0.15, color: '#F2F4FF', size: 0.06, phase: 1 },
      ],
    []
  );
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  useFrame(state => {
    const t = state.clock.elapsedTime;
    tokens.forEach((tk, i) => {
      const m = refs.current[i];
      if (!m) return;
      const a = t * tk.speed + tk.phase;
      m.position.set(Math.cos(a) * tk.r, Math.sin(a) * tk.r * Math.sin(tk.tilt), Math.sin(a) * tk.r * Math.cos(tk.tilt));
    });
  });
  return (
    <group ref={group}>
      {tokens.map((tk, i) => (
        <Sphere key={i} args={[tk.size, 32, 32]} ref={(el: THREE.Mesh | null) => (refs.current[i] = el)}>
          <meshStandardMaterial color={tk.color} emissive={tk.color} emissiveIntensity={2.2} toneMapped={false} />
        </Sphere>
      ))}
      <Torus args={[2.15, 0.006, 16, 220]} rotation={[Math.PI / 2 - 0.4, 0, 0]}>
        <meshBasicMaterial color="#5CE1E6" transparent opacity={0.35} />
      </Torus>
      <Torus args={[2.55, 0.005, 16, 220]} rotation={[Math.PI / 2 + 0.7, 0.3, 0]}>
        <meshBasicMaterial color="#FFB86B" transparent opacity={0.28} />
      </Torus>
      <Torus args={[1.85, 0.006, 16, 220]} rotation={[Math.PI / 2 - 1.1, -0.2, 0]}>
        <meshBasicMaterial color="#8B6CFF" transparent opacity={0.4} />
      </Torus>
    </group>
  );
};

const GlassCore: React.FC<{ quality: 'high' | 'low' }> = ({ quality }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.12;
      mesh.current.rotation.y += delta * 0.18;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.4;
      inner.current.rotation.z += delta * 0.2;
    }
  });
  return (
    <group>
      <Icosahedron ref={inner} args={[0.62, 1]}>
        <meshStandardMaterial
          color="#7C5CFF"
          emissive="#6a4dff"
          emissiveIntensity={1.6}
          wireframe
          toneMapped={false}
        />
      </Icosahedron>
      <Sphere args={[0.28, 32, 32]}>
        <meshStandardMaterial color="#5CE1E6" emissive="#5CE1E6" emissiveIntensity={3} toneMapped={false} />
      </Sphere>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.25, quality === 'high' ? 12 : 4]} />
        {quality === 'high' ? (
          <MeshTransmissionMaterial
            backside
            samples={6}
            resolution={512}
            thickness={1.4}
            roughness={0.04}
            ior={1.35}
            chromaticAberration={0.35}
            anisotropy={0.2}
            distortion={0.45}
            distortionScale={0.4}
            temporalDistortion={0.15}
            clearcoat={1}
            attenuationDistance={2.5}
            attenuationColor="#b9c4ff"
            color="#eef1ff"
          />
        ) : (
          <meshPhysicalMaterial
            transmission={1}
            thickness={1.2}
            roughness={0.05}
            ior={1.35}
            clearcoat={1}
            color="#eef1ff"
            transparent
            opacity={0.95}
          />
        )}
      </mesh>
    </group>
  );
};

const Rig: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const group = useRef<THREE.Group>(null);
  useFrame(state => {
    if (!group.current) return;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.45, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.3, 0.05);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.pointer.x * 0.6, 0.03);
    state.camera.lookAt(0, 0, 0);
  });
  return <group ref={group}>{children}</group>;
};

const HeroScene: React.FC = () => {
  const small = typeof window !== 'undefined' && window.innerWidth < 820;
  const reduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <Canvas
      className="hero-canvas"
      dpr={[1, small ? 1.5 : 2]}
      camera={{ position: [0, 0, small ? 8.6 : 7], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      frameloop={reduced ? 'demand' : 'always'}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 5]} intensity={1.4} />
      <pointLight position={[-4, -2, 3]} intensity={30} color="#7C5CFF" />
      <pointLight position={[4, 2, -2]} intensity={24} color="#5CE1E6" />

      <Rig>
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
          <GlassCore quality={small ? 'low' : 'high'} />
          <OrbitTokens />
        </Float>
        <EmbeddingCloud count={small ? 1400 : 2600} />
      </Rig>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={2} />
          <Lightformer form="circle" intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={2} />
          <Lightformer form="ring" color="#7C5CFF" intensity={6} rotation-y={Math.PI / 2} position={[-5, -1, -1]} scale={4} />
          <Lightformer form="rect" color="#5CE1E6" intensity={5} rotation-y={-Math.PI / 2} position={[10, 1, 0]} scale={[10, 2, 1]} />
          <Lightformer form="rect" color="#FFB86B" intensity={2} position={[0, -6, 2]} scale={[8, 1, 1]} />
        </group>
      </Environment>
    </Canvas>
  );
};

export default HeroScene;
