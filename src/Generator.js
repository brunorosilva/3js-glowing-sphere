import { SecSphere } from "./Spheres";
import { SpheresRotation } from "./Rotator";
import React, { useState, useMemo } from "react";
import * as THREE from "three";

function randomOnSphereEven(radius, PhiNum, thetaNum) {
  let points = [];
  const phiSpan = Math.PI / (PhiNum + 1);
  const thetaSpan = (Math.PI * 2) / thetaNum;
  let spherical = new THREE.Spherical();

  // create random spherical coordinate
  for (let i = 0; i < PhiNum + 1; i++) {
    var phi = phiSpan * i;
    for (let j = 0; j < thetaNum; j++) {
      var theta = thetaSpan * j;
      spherical.set(radius, phi, theta);
      let point = new THREE.Vector3();
      point.setFromSpherical(spherical);
      points.push(point);
    }
  }
  return points;
}

export function RandomSpheres() {
  const [geometry] = useState(() => new THREE.SphereGeometry(0.1, 40, 40), []);

  const data = useMemo(() => {
    const radius = 10;
    const sphereSize = .2;
    const spheresPerColumn = 50;
    const spheresPerLine = 50;
    let points = randomOnSphereEven(radius, spheresPerColumn, spheresPerLine);
    var p = points.map((el, _) => ({
      x: el.x,
      y: el.y,
      z: el.z,
      s: sphereSize,
    }));
    p.push({
      x: 0,
      y: radius,
      z: 0,
      s: sphereSize,
    });
    p.push({
      x: 0,
      y: -radius,
      z: 0,
      s: sphereSize,
    });
    return p;
  });
  const posSpheres = data.map((props, i) => (
    <SecSphere key={i} {...props} geometry={geometry} />
  ));
  return <SpheresRotation posSpheres={posSpheres} />;
}
