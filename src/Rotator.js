import * as THREE from "three";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function SpheresRotation({ posSpheres }) {
  const axis = new THREE.Vector3(0, 0, 0);
  const angle = 90;
  const ref = useRef((group) => {
    group.rotateOnAxis(axis, angle);
  }, []);
  useFrame((state) => {
    ref.current.rotation.z += 0.001;
    ref.current.rotation.y += 0.001;
  });
  return <group ref={ref}>{posSpheres}</group>;
}
