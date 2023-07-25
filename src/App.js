import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import "./styles.css";
import { Bloom } from "./Effects";
import { RandomSpheres } from "./Generator";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { CameraController } from "./Controller";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";
extend({ EffectComposer, RenderPass, UnrealBloomPass });

export default function App() {
  function Main({ children }) {
    const scene = useRef();
    const { gl, camera } = useThree();
    useFrame(() => {
      gl.autoClear = false;
      gl.clearDepth();
      gl.render(scene.current, camera);
    }, 2);
    return <scene ref={scene}>{children}</scene>;
  }

  return (
    <>
      <Canvas linear camera={{ position: [0, 0, 20] }}>
        <CameraController />
        <Main>
          <pointLight />
          <ambientLight />
        </Main>
        <Bloom>
          <ambientLight />
          <RandomSpheres />
        </Bloom>
      </Canvas>
    </>
  );
}
