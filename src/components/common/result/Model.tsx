import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Object3D } from 'three';
import { Html } from '@react-three/drei';
import Lights from './Lights';

interface GroupRef {
  rotation: {
    x: number;
    y: number;
    z: number;
  };
}
interface ModalProps {
  uri: string;
}

export default function Model({ uri }: ModalProps) {
  const controlsRef = useRef<any>(null);
  const groupRef = useRef<any>({ rotation: { x: 0, y: 0, z: 0 } });
  const [model, setModel] = useState<Object3D | null>(null);
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
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Lights />
      <OrbitControls ref={controlsRef} />
      <directionalLight position={[-1, 0, 1]} intensity={0.5} />
      <meshStandardMaterial attach="material" color={0xa3b18a} />
      {model ? (
        <>
          <group ref={groupRef} position={[24.5, -6.75, -8.25]} dispose={null}>
            <primitive name="Object_0" object={model} />
          </group>
        </>
      ) : (
        <Html>Loading...</Html>
      )}
    </Canvas>
  );
}
