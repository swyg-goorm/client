import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas, Camera, useFrame, useLoader } from '@react-three/fiber';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Test() {
  const router = useRouter();
  const controlsRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // load GLTF
  const gltf = useLoader(GLTFLoader, '../../public/example.gltf');

  // handle 3d model
  useFrame((state, delta, frame) => {
    const mesh = gltf.scene.children[0];
    mesh.rotation.y = mesh.rotation.z += 0.01;
    mesh.rotation.x = state.clock.getElapsedTime();
  });
  return (
    <div>
      <Canvas>
        <OrbitControls autoRotate={true} />
        <mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[-1, 0, 1]} intensity={0.5} />
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={0xa3b18a} />
        </mesh>
      </Canvas>
    </div>
  );
}
