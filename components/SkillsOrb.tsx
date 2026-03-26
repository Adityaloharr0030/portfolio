"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function SkillNode({ position, color, speed }: { position: [number, number, number]; color: string; speed: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const initialPos = useRef(position);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = initialPos.current[1] + Math.sin(clock.elapsedTime * speed) * 0.3;
      ref.current.rotation.x = clock.elapsedTime * speed * 0.5;
      ref.current.rotation.z = clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.12, 0]} />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.6} />
    </mesh>
  );
}

function ConnectionLines({ nodes }: { nodes: [number, number, number][] }) {
  const lineRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          (nodes[i][0] - nodes[j][0]) ** 2 +
          (nodes[i][1] - nodes[j][1]) ** 2 +
          (nodes[i][2] - nodes[j][2]) ** 2
        );
        if (dist < 2.5) {
          points.push(...nodes[i], ...nodes[j]);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));
    return geo;
  }, [nodes]);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = Math.sin(clock.elapsedTime * 0.08) * 0.15;
    }
  });

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial color="#00f0ff" transparent opacity={0.06} />
    </lineSegments>
  );
}

function FloatingGrid() {
  const gridRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.PI / 2;
      gridRef.current.position.y = Math.sin(clock.elapsedTime * 0.15) * 0.2 - 1.5;
    }
  });

  return (
    <mesh ref={gridRef} position={[0, -1.5, 0]}>
      <planeGeometry args={[12, 12, 20, 20]} />
      <meshBasicMaterial color="#00f0ff" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

export default function SkillsOrb() {
  const nodePositions: [number, number, number][] = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 24; i++) {
      const phi = Math.acos(-1 + (2 * i) / 24);
      const theta = Math.sqrt(24 * Math.PI) * phi;
      positions.push([
        Math.cos(theta) * Math.sin(phi) * 2,
        Math.sin(theta) * Math.sin(phi) * 2,
        Math.cos(phi) * 2,
      ]);
    }
    return positions;
  }, []);

  const colors = ["#00f0ff", "#7b2fff", "#65afff", "#00f0ff", "#7b2fff"];

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        style={{ pointerEvents: "auto" }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.1} />
        {nodePositions.map((pos, i) => (
          <SkillNode
            key={i}
            position={pos}
            color={colors[i % colors.length]}
            speed={0.3 + i * 0.08}
          />
        ))}
        <ConnectionLines nodes={nodePositions} />
        <FloatingGrid />
      </Canvas>
    </div>
  );
}
