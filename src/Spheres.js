import React, { useRef, useState } from "react";
import * as THREE from "three";

export function CenterSphere() {
  const [geometry] = useState(() => new THREE.SphereGeometry(1, 40, 40), []);
  const ref = useRef();
  const scale = 3;
  return (
    <mesh
      position={[0, 0, 0]}
      scale={[scale, scale, scale]}
      geometry={geometry}
    >
      <meshStandardMaterial color="red" roughness={1} wireframe={false} />
    </mesh>
  );
}

export function SecSphere({ geometry, x, y, z, s }) {
  return (
    <mesh position={[x, y, z]} scale={[s, s, s]} geometry={geometry}>
      <meshStandardMaterial color="paleturquoise" wireframe={false} />
    </mesh>
  );
}

export function SecSphereNegative({ geometry, x, y, z, s }) {
  return (
    <mesh position={[-x, -y, -z]} scale={[s, s, s]} geometry={geometry}>
      <meshStandardMaterial
        color="lightskyblue"
        roughness={1}
        transparent={true}
        wireframe={false}
      />
    </mesh>
  );
}
