import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

function Model({ isScrolled, mousePosition }) {
  const { scene } = useGLTF('/Artifact_v3_Baked.glb');
  const ref = useRef();

  useFrame(() => {
    // Animation logic is perfect and unchanged.
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

    // Mouse interaction logic is perfect and unchanged.
    const targetTiltX = (mousePosition.y / window.innerHeight - 0.5) * 0.3;
    const targetTiltY = (mousePosition.x / window.innerWidth - 0.5) * 0.3;
    
    // We add the base rotation back in here for a more dynamic feel
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -targetTiltX, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, targetTiltY + ref.current.rotation.y, 0.02); // Slower spin for stability
  });

  return (
    // We are adding back the initial rotation. This is the key.
    <primitive 
      ref={ref} 
      object={scene} 
      scale={0.1} 
      position={[0, 90, 0]} 
      rotation={[-0.2, 0.1, 0]} // <-- THIS IS THE FIX
    />
  );
}

function Artifact({ isScrolled, mousePosition }) {
  // We adjust the camera's Z position to bring the whole scene closer.
  return (
    <Canvas camera={{ position: [0, 0, 450], fov: 50 }}>
      <Environment preset="lobby" intensity={1} />
      <Model isScrolled={isScrolled} mousePosition={mousePosition} />
    </Canvas>
  );
}

useGLTF.preload('/Artifact_v3_Baked.glb');

export default Artifact;