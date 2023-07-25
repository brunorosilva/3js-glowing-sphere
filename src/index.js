import { render } from "react-dom";
import React from "react";
import { extend} from "@react-three/fiber";
import "./styles.css";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import App from "./App";
extend({ EffectComposer, RenderPass, UnrealBloomPass });

render(
    <App />,
  document.querySelector("#root")
);
