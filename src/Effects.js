import { extend, useThree, useFrame } from "@react-three/fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import React, { useRef, useState, useEffect } from "react";

extend({ EffectComposer, RenderPass, UnrealBloomPass });
export function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const [scene, setScene] = useState();
  const composer = useRef();
  useEffect(
    () => void scene && composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => scene && composer.current.render(), 1);
  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass
          attachArray="passes"
          args={[undefined, 1., 5, 0]}
        />{" "}
        {/* args are constructor(resolution: Vector2, strength: number, radius: number, threshold: number) */}
      </effectComposer>
    </>
  );
}
