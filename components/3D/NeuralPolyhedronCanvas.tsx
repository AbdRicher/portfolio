'use client';

import { Suspense, FC, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import PolyhedronMesh from "./PolyhedronMesh";

const PolyhedronCanvas: FC<{ className?: string }> = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative ${className} pointer-events-none sm:pointer-events-auto`}>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.8}
            maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 2.4}
          />
          <PolyhedronMesh />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default memo(PolyhedronCanvas);
