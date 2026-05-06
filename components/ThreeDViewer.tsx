"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

// A very stylized placeholder "Car" model using primitives
// Since we don't have a .glb file, this represents a futuristic aerodynamic shape
function StylizedCar({ color, wheelStyle }: { color: string, wheelStyle: string }) {
  const group = useRef<THREE.Group>(null);
  
  // Convert color to THREE.Color
  const carColor = new THREE.Color(color);
  const isDark = color === "#111111" || color === "#1E293B";

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* Main Body (Sleek aerodynamic shape) */}
        <mesh position={[0, 0.6, 0]} castShadow>
          <capsuleGeometry args={[0.8, 2.5, 4, 16]} />
          <meshPhysicalMaterial 
            color={carColor} 
            metalness={0.8} 
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Cabin (Glass) */}
        <mesh position={[0, 1.2, -0.2]} castShadow>
          <sphereGeometry args={[0.7, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshPhysicalMaterial 
            color="#000000" 
            metalness={0.9} 
            roughness={0} 
            transmission={0.9} 
            thickness={0.5} 
          />
        </mesh>

        {/* Wheels */}
        {[
          [-1, 0.4, 1.2], [1, 0.4, 1.2], 
          [-1, 0.4, -1.2], [1, 0.4, -1.2]
        ].map((pos: number[], i: number) => (
          <group key={i} position={pos as [number, number, number]}>
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
              <meshStandardMaterial color="#111" metalness={0.5} roughness={0.8} />
            </mesh>
            {/* Rims based on wheelStyle */}
            <mesh position={[pos[0] > 0 ? 0.16 : -0.16, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
              <torusGeometry args={[0.25, 0.05, 16, wheelStyle === "Sport" ? 5 : 8]} />
              <meshStandardMaterial color={wheelStyle === "Dark" ? "#222" : "#ccc"} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        ))}

        {/* Headlights (Neon Blue) */}
        <mesh position={[-0.5, 0.6, 1.9]}>
          <boxGeometry args={[0.4, 0.05, 0.1]} />
          <meshBasicMaterial color="#00e5ff" />
        </mesh>
        <mesh position={[0.5, 0.6, 1.9]}>
          <boxGeometry args={[0.4, 0.05, 0.1]} />
          <meshBasicMaterial color="#00e5ff" />
        </mesh>
        <pointLight position={[0, 0.6, 2.2]} color="#00e5ff" intensity={isDark ? 2 : 1} distance={5} />
      </Float>
    </group>
  );
}

export default function ThreeDViewer({ 
  carColor, 
  wheelStyle 
}: { 
  carColor: string; 
  wheelStyle: string; 
}) {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[600px] bg-gradient-to-b from-[#111] to-[#000] rounded-3xl overflow-hidden border border-white/10 relative">
      <Canvas shadows camera={{ position: [5, 2, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          
          <StylizedCar color={carColor} wheelStyle={wheelStyle} />
          
          <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={10} blur={2} far={4} />
          <OrbitControls 
            enablePan={false} 
            minPolarAngle={Math.PI / 4} 
            maxPolarAngle={Math.PI / 2 - 0.1}
            minDistance={4}
            maxDistance={10}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur text-xs px-3 py-1 rounded-full text-gray-400 border border-white/10 pointer-events-none">
        Interactive 3D Preview
      </div>
    </div>
  );
}
