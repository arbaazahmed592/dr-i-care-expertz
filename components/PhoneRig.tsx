"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function remap(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const t = THREE.MathUtils.clamp((value - inMin) / (inMax - inMin), 0, 1);
  return outMin + t * (outMax - outMin);
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

interface PhoneRigProps {
  progressRef: React.MutableRefObject<number>;
}

export default function PhoneRig({ progressRef }: PhoneRigProps) {
  const group = useRef<THREE.Group>(null);
  const screen = useRef<THREE.Group>(null);
  const battery = useRef<THREE.Mesh>(null);
  const camera = useRef<THREE.Group>(null);
  const port = useRef<THREE.Mesh>(null);
  const portGlow = useRef<THREE.PointLight>(null);
  const body = useRef<THREE.Group>(null);

  useFrame((state) => {
    const p = progressRef.current;
    const t = state.clock.getElapsedTime();

    if (group.current) {
      const entranceRotY = remap(p, 0, 0.12, Math.PI * 0.35, 0);
      const spinRotY = remap(p, 0.12, 0.42, 0, Math.PI * 2);
      const settleRotY = remap(p, 0.78, 1, 0, Math.PI * 0.12);
      group.current.rotation.y = entranceRotY + spinRotY + settleRotY;
      group.current.rotation.x = lerp(0.12, -0.04, remap(p, 0, 0.3, 0, 1)) + Math.sin(t * 0.4) * 0.02;
      group.current.position.y = Math.sin(t * 0.6) * 0.08 + remap(p, 0, 0.1, -0.4, 0);

      const scale = remap(p, 0, 0.08, 0.82, 1);
      group.current.scale.setScalar(scale);
    }

    const openAmount = remap(p, 0.42, 0.62, 0, 1);
    const closeAmount = remap(p, 0.78, 0.94, 0, 1);
    const exploded = openAmount * (1 - closeAmount);

    if (screen.current) {
      screen.current.position.z = lerp(0.051, 1.1, exploded);
      screen.current.rotation.x = lerp(0, -0.35, exploded);
    }

    if (battery.current) {
      battery.current.position.y = lerp(0, -1.3, exploded);
      battery.current.position.z = lerp(0, 0.65, exploded);
      battery.current.rotation.z = lerp(0, 0.25, exploded);
    }

    if (camera.current) {
      const camPop = remap(p, 0.5, 0.65, 0, 1) * (1 - remap(p, 0.78, 0.9, 0, 1));
      camera.current.position.z = lerp(0.051, 0.5, camPop);
      camera.current.scale.setScalar(lerp(1, 1.15, camPop));
    }

    if (port.current && portGlow.current) {
      const glow = remap(p, 0.62, 0.74, 0, 1) * (1 - remap(p, 0.78, 0.9, 0, 1));
      const mat = port.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = lerp(0.2, 3.5, glow);
      portGlow.current.intensity = lerp(0, 4, glow);
    }

    if (body.current) {
      body.current.rotation.y = Math.sin(t * 0.3) * 0.015;
    }
  });

  return (
    <group ref={group}>
      <group ref={body}>
        {/* Phone frame */}
        <RoundedBox args={[1.6, 3.3, 0.14]} radius={0.16} smoothness={6} position={[0, 0, 0]}>
          <meshStandardMaterial color="#2b2b2e" metalness={0.85} roughness={0.25} />
        </RoundedBox>

        {/* Screen */}
        <group ref={screen} position={[0, 0, 0.051]}>
          <RoundedBox args={[1.48, 3.08, 0.02]} radius={0.14} smoothness={6}>
            <meshStandardMaterial color="#0a0a0c" metalness={0.3} roughness={0.15} emissive="#2997ff" emissiveIntensity={0.15} />
          </RoundedBox>
        </group>

        {/* Camera module (back) */}
        <group ref={camera} position={[-0.48, 1.15, -0.09]}>
          <RoundedBox args={[0.62, 0.62, 0.05]} radius={0.12} smoothness={6}>
            <meshStandardMaterial color="#1d1d1f" metalness={0.9} roughness={0.2} />
          </RoundedBox>
          <mesh position={[0, 0, 0.03]}>
            <circleGeometry args={[0.16, 32]} />
            <meshStandardMaterial color="#111114" metalness={0.95} roughness={0.1} />
          </mesh>
        </group>

        {/* Battery pack (interior) */}
        <mesh ref={battery} position={[0, 0, -0.03]}>
          <boxGeometry args={[1.1, 1.9, 0.07]} />
          <meshStandardMaterial color="#c7c9cc" metalness={0.4} roughness={0.5} />
        </mesh>

        {/* Charging port */}
        <mesh ref={port} position={[0, -1.68, 0]}>
          <boxGeometry args={[0.3, 0.07, 0.1]} />
          <meshStandardMaterial color="#2997ff" emissive="#2997ff" emissiveIntensity={0.2} metalness={0.6} roughness={0.3} />
        </mesh>
        <pointLight ref={portGlow} position={[0, -1.68, 0.2]} color="#2997ff" intensity={0} distance={2} />
      </group>

      <Sparkles count={60} scale={[5, 5, 5]} size={2} speed={0.3} opacity={0.5} color="#2997ff" />
    </group>
  );
}
