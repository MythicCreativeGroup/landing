import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';
import modelPath from './assets/Artifact_v3_Baked.glb'; // <-- THIS IS THE FIX: We import the model from the assets folder.

function Model({ isScrolled, mousePosition }) {
  // We now use the imported path variable. This tells the build system to find the real file.
  const { scene } = useGLTF(modelPath); 
  const ref = useRef();

  useFrame(() => {
    // All the animation logic remains exactly the same
    const homePosition = new THREE.Vector3(0, 90, 0);
    const homeScale = new THREE.Vector3(0.2, 0.2, 0.2);
    const scrolledPosition = new THREE.Vector3(0, 400, 0);
    const scrolledScale = new THREE.Vector3(0.1, 0.1, 0.1);

    if (isScrolled) {
      ref.current.position.lerp(scrolledPosition, 0.05);
      ref.current.scale.lerp(scrolledScale, 0.05);
    } else {
      ref.current.position.lerp(homePosition, 0.05);
      ref.current.scale.lerp(homeScale, 0.05);
    }

    const targetTiltX = (mousePosition.y / window.innerHeight - 0.5) * 0.3;
    const targetTiltY = (mousePosition.x / window.innerWidth - 0.5) * 0.3;
    
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -targetTiltX, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetTiltY + ref.current.rotation.y, 0.02);
  });

  return (
    <primitive 
      ref={ref} 
      object={scene} 
      scale={0.1} 
      position={[0, 90, 0]} 
      rotation={[-0.2, 0.1, 0]} 
    />
  );
}

function Artifact({ isScrolled, mousePosition }) {
  return (
    <Canvas camera={{ position: [0, 0, 450], fov: 50 }}>
      <Environment preset="lobby" intensity={1} />
      <Model isScrolled={isScrolled} mousePosition={mousePosition} />
    </Canvas>
  );
}

// We no longer need this line, as the model is imported directly.
// useGLTF.preload('/Artifact_v3_Baked.glb');

export default Artifact;