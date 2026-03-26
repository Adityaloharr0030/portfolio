"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireframeTorus() {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.15 + pointer.y * 0.3;
      meshRef.current.rotation.y = clock.elapsedTime * 0.25 + pointer.x * 0.3;
      meshRef.current.rotation.z = clock.elapsedTime * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.x = -clock.elapsedTime * 0.1 + pointer.y * 0.2;
      glowRef.current.rotation.y = -clock.elapsedTime * 0.2 + pointer.x * 0.2;
    }
  });

  return (
    <group>
      {/* Main wireframe torus knot */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.2, 0.35, 128, 16]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      {/* Inner glow sphere */}
      <mesh ref={glowRef} scale={0.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color="#7b2fff"
          wireframe
          transparent
          opacity={0.12}
        />
      </mesh>
    </group>
  );
}

function FloatingParticles({ count = 200 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.elapsedTime * 0.03;
      pointsRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00f0ff"
        size={0.02}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function DataRing() {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = Math.PI / 2 + Math.sin(clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -0.5]}>
      <torusGeometry args={[2, 0.01, 8, 80]} />
      <meshBasicMaterial color="#7b2fff" transparent opacity={0.15} />
    </mesh>
  );
}

export default function Hero3DScene() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        style={{ pointerEvents: "auto" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.1} />
        <WireframeTorus />
        <FloatingParticles />
        <DataRing />
      </Canvas>
    </div>
  );
}
