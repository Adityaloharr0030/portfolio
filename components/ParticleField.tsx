"use client";

import { useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 600 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const [positions, velocities, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const cyanColor = new THREE.Color("#00f0ff");
    const violetColor = new THREE.Color("#7b2fff");
    const blueColor = new THREE.Color("#65afff");
    const palette = [cyanColor, violetColor, blueColor];

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * viewport.width * 2.5;
      pos[i3 + 1] = (Math.random() - 0.5) * viewport.height * 2.5;
      pos[i3 + 2] = (Math.random() - 0.5) * 6;

      vel[i3] = (Math.random() - 0.5) * 0.003;
      vel[i3 + 1] = (Math.random() - 0.5) * 0.003;
      vel[i3 + 2] = (Math.random() - 0.5) * 0.001;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i3] = c.r;
      col[i3 + 1] = c.g;
      col[i3 + 2] = c.b;
    }
    return [pos, vel, col];
  }, [count, viewport.width, viewport.height]);

  useFrame(() => {
    if (!pointsRef.current) return;
    const posArr = pointsRef.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      posArr[i3] += velocities[i3];
      posArr[i3 + 1] += velocities[i3 + 1];
      posArr[i3 + 2] += velocities[i3 + 2];

      // Wrap around
      if (Math.abs(posArr[i3]) > viewport.width * 1.5) velocities[i3] *= -1;
      if (Math.abs(posArr[i3 + 1]) > viewport.height * 1.5) velocities[i3 + 1] *= -1;
      if (Math.abs(posArr[i3 + 2]) > 3) velocities[i3 + 2] *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function MovingGrid() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      const mat = ref.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.03 + Math.sin(clock.elapsedTime * 0.3) * 0.01;
    }
  });

  return (
    <mesh ref={ref} rotation={[Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeGeometry args={[30, 30, 40, 40]} />
      <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.03} />
    </mesh>
  );
}

export default function ParticleField() {
  const handleCreated = useCallback(({ gl }: { gl: THREE.WebGLRenderer }) => {
    gl.setClearColor(new THREE.Color("#080c10"), 0);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
        onCreated={handleCreated}
      >
        <Particles />
        <MovingGrid />
      </Canvas>
    </div>
  );
}
