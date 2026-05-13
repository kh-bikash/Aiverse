import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

function TransformerCube({ position, index }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.28 + index;
      ref.current.position.y = position[1] + Math.sin(clock.elapsedTime + index) * 0.08;
    }
  });

  return (
    <mesh ref={ref} position={position} castShadow>
      <boxGeometry args={[0.72, 0.72, 0.72]} />
      <meshStandardMaterial color="#006666" emissive="#006666" emissiveIntensity={0.18} roughness={0.32} metalness={0.12} />
    </mesh>
  );
}

function TokenParticle({ index }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const angle = clock.elapsedTime * 0.45 + index;
    if (ref.current) {
      ref.current.position.x = Math.cos(angle) * (2 + (index % 4) * 0.22);
      ref.current.position.z = Math.sin(angle) * (2 + (index % 4) * 0.22);
    }
  });

  return (
    <mesh ref={ref} position={[0, (index % 5) * 0.28 - 0.65, 0]}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshStandardMaterial color="#00a63d" emissive="#00a63d" emissiveIntensity={0.45} />
    </mesh>
  );
}

export function Transformer3DScene() {
  return (
    <div className="neo-panel h-[420px] overflow-hidden p-2" aria-label="Interactive 3D transformer architecture">
      <Canvas shadows dpr={[1, 1.8]}>
        <PerspectiveCamera makeDefault position={[0, 2.2, 6]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 6, 4]} intensity={1.8} castShadow />
        <fog attach="fog" args={['#e7e5e4', 5.5, 12]} />
        {Array.from({ length: 9 }, (_, index) => (
          <TransformerCube key={index} index={index} position={[(index % 3) * 1.15 - 1.15, Math.floor(index / 3) * 0.95 - 0.9, 0]} />
        ))}
        {Array.from({ length: 42 }, (_, index) => (
          <TokenParticle key={index} index={index} />
        ))}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.65, 0]} receiveShadow>
          <planeGeometry args={[7, 7]} />
          <meshStandardMaterial color="#e7e5e4" />
        </mesh>
        <OrbitControls enablePan={false} minDistance={3.8} maxDistance={8} />
      </Canvas>
    </div>
  );
}
