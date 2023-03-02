import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Html } from '@react-three/drei'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getThree } from 'api/getThree'
import { Object3D } from 'three'

import Lights from './Lights'

interface ModalProps {
  model: Object3D | null;
  setModel: (any) => void;
  uri: string;
}

export default function Model({ uri, model, setModel }: ModalProps) {
  const router = useRouter();
  const controlsRef = useRef<any>(null);
  const groupRef = useRef<any>({ rotation: { x: 0, y: 0, z: 0 } });
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(uri, async (gltf: any) => {
      setModel(gltf.scene);
    });
  }, []);

  useEffect(() => {
    if (!controlsRef.current || !groupRef.current) return;
    controlsRef.current.addEventListener('change', () => {
      groupRef.current.rotation.y += 0.01;
    });
    return () => {
      controlsRef.current.removeEventListener('change', () => {});
    };
  }, [controlsRef, groupRef]);

  return (
    <Canvas camera={{ position: [0, 0, 4.5] }}>
      <Lights />
      <OrbitControls ref={controlsRef} />
      <directionalLight position={[-1, 0, 1]} intensity={0.5} />
      <meshStandardMaterial attach="material" color={0xa3b18a} />
      {model ? (
        <>
          <group ref={groupRef} position={[0, 0, 0]} dispose={null}>
            <primitive name="Object_0" object={model} />
          </group>
        </>
      ) : (
        <Html>Loading...</Html>
      )}
    </Canvas>
  );
}
