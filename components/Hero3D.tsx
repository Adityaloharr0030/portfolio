"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Stars, Float } from "@react-three/drei";
import { useTheme } from "next-themes";

function Scene({ theme }: { theme: string | undefined }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || theme === "dark";
  const materialColor = isDark ? "#6c63ff" : "#4f46e5";

  return (
    <>
      <ambientLight intensity={isDark ? 0.5 : 1.2} />
      <directionalLight position={[10, 10, 5]} intensity={isDark ? 1.5 : 2} />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#00d4ff" />
      
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} scale={2.4} position={[3, 0, -2]}>
          <MeshDistortMaterial
            color={materialColor}
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.2}
            metalness={isDark ? 0.8 : 0.4}
          />
        </Sphere>
      </Float>
      
      {isDark && mounted && (
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      )}
    </>
  );
}

export default function Hero3D() {
  const { resolvedTheme } = useTheme();

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", opacity: 0.8 }}>
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Scene theme={resolvedTheme} />
      </Canvas>
    </div>
  );
}
