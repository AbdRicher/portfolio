'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const PolyhedronMesh = () => {
  const outerMeshRef = useRef<THREE.Group>(null);
  const innerMeshRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Generate outer icosahedron geometry
  const outerGeo = useMemo(() => new THREE.IcosahedronGeometry(2.4, 1), []);
  const outerWireGeo = useMemo(() => new THREE.WireframeGeometry(outerGeo), [outerGeo]);

  // Generate inner geometric structure
  const innerGeo = useMemo(() => new THREE.OctahedronGeometry(1.4, 0), []);
  const innerWireGeo = useMemo(() => new THREE.WireframeGeometry(innerGeo), [innerGeo]);

  // Generate vertices points
  const vertexPointsGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = outerGeo.attributes.position.array;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return geo;
  }, [outerGeo]);

  // Generate floating constellation particles
  const particleCount = 180;
  const [particlesPos] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 14;
      pos[i + 1] = (Math.random() - 0.5) * 14;
      pos[i + 2] = (Math.random() - 0.5) * 14;
    }
    return [pos];
  }, []);

  const particlesGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(particlesPos, 3));
    return geo;
  }, [particlesPos]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x = t * 0.15;
      outerMeshRef.current.rotation.y = t * 0.22;
      outerMeshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x = -t * 0.25;
      innerMeshRef.current.rotation.z = t * 0.18;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.05;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Ambient and point lights */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f2fe" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />

      {/* Floating Constellation Field */}
      <points ref={pointsRef} geometry={particlesGeo}>
        <pointsMaterial
          size={0.04}
          color="#38bdf8"
          transparent
          opacity={0.65}
          sizeAttenuation
        />
      </points>

      {/* Outer Polyhedron Group */}
      <group ref={outerMeshRef}>
        {/* Wireframe lines */}
        <lineSegments geometry={outerWireGeo}>
          <lineBasicMaterial color="#00f2fe" transparent opacity={0.55} linewidth={1.5} />
        </lineSegments>

        {/* Vertices cyan glow dots */}
        <points geometry={vertexPointsGeo}>
          <pointsMaterial
            size={0.09}
            color="#67e8f9"
            transparent
            opacity={0.9}
            sizeAttenuation
          />
        </points>

        {/* Inner Octahedron Group */}
        <group ref={innerMeshRef}>
          <lineSegments geometry={innerWireGeo}>
            <lineBasicMaterial color="#818cf8" transparent opacity={0.7} linewidth={1.5} />
          </lineSegments>
        </group>
      </group>
    </group>
  );
};

export default PolyhedronMesh;
