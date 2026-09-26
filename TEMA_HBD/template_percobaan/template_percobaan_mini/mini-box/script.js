import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js";

import { RoundedBoxGeometry } from "https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/geometries/RoundedBoxGeometry.js";

/* =====================================================
   BASIC SETUP
===================================================== */

const container = document.getElementById("scene");

const scene = new THREE.Scene();

/* =====================================================
   CAMERA
===================================================== */

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
);

camera.position.set(0, 2.2, 8);

camera.lookAt(0, 0.7, 0);

/* =====================================================
   RENDERER
===================================================== */

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;

renderer.shadowMap.type = THREE.PCFSoftShadowMap;

container.appendChild(renderer.domElement);

/* =====================================================
   LIGHTING
===================================================== */

const ambientLight = new THREE.HemisphereLight(0xffffff, 0x555555, 2.5);

scene.add(ambientLight);

const mainLight = new THREE.DirectionalLight(0xffffff, 4);

mainLight.position.set(4, 8, 6);

mainLight.castShadow = true;

scene.add(mainLight);

const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);

fillLight.position.set(-5, 3, 4);

scene.add(fillLight);

/* =====================================================
   GIFT GROUP
===================================================== */

const gift = new THREE.Group();

gift.position.y = -0.7;

scene.add(gift);

/* =====================================================
   COLORS
===================================================== */

const BOX_COLOR = 0x075df5;

const RIBBON_COLOR = 0xff4164;

/* =====================================================
   BOX BODY
===================================================== */

const bodyGeometry = new RoundedBoxGeometry(2.6, 1.8, 2.4, 6, 0.18);

const bodyMaterial = new THREE.MeshStandardMaterial({
  color: BOX_COLOR,

  roughness: 0.38,

  metalness: 0.02,
});

const body = new THREE.Mesh(bodyGeometry, bodyMaterial);

body.position.y = 0;

body.castShadow = true;

body.receiveShadow = true;

gift.add(body);

/* =====================================================
   LID GROUP
===================================================== */

const lidGroup = new THREE.Group();

lidGroup.position.y = 1.0;

gift.add(lidGroup);

/* =====================================================
   LID
===================================================== */

const lidGeometry = new RoundedBoxGeometry(2.8, 0.45, 2.6, 6, 0.16);

const lidMaterial = new THREE.MeshStandardMaterial({
  color: BOX_COLOR,

  roughness: 0.35,
});

const lid = new THREE.Mesh(lidGeometry, lidMaterial);

lid.castShadow = true;

lid.receiveShadow = true;

lidGroup.add(lid);

/* =====================================================
   RIBBON HELPER
===================================================== */

function createRibbon(width, height, depth, position, rotation = [0, 0, 0]) {
  const geometry = new RoundedBoxGeometry(width, height, depth, 4, 0.08);

  const material = new THREE.MeshStandardMaterial({
    color: RIBBON_COLOR,

    roughness: 0.35,
  });

  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.set(position.x, position.y, position.z);

  mesh.rotation.set(rotation[0], rotation[1], rotation[2]);

  mesh.castShadow = true;

  return mesh;
}

/* =====================================================
   VERTICAL RIBBON
===================================================== */

const verticalRibbon = createRibbon(0.42, 1.92, 2.5, {
  x: 0,
  y: 0,
  z: 0,
});

gift.add(verticalRibbon);

/* =====================================================
   HORIZONTAL RIBBON
===================================================== */

const horizontalRibbon = createRibbon(2.7, 1.92, 0.42, {
  x: 0,
  y: 0,
  z: 0,
});

gift.add(horizontalRibbon);

/* =====================================================
   RIBBON ON LID
===================================================== */

const lidRibbon = createRibbon(0.44, 0.5, 2.65, {
  x: 0,
  y: 0,
  z: 0,
});

lidGroup.add(lidRibbon);

/* =====================================================
   BOW
===================================================== */

const bow = new THREE.Group();

bow.position.y = 1.32;

gift.add(bow);

/* Left loop */

const leftLoop = createRibbon(0.9, 0.28, 0.55, {
  x: -0.42,
  y: 0,
  z: 0,
});

leftLoop.rotation.z = -0.45;

bow.add(leftLoop);

/* Right loop */

const rightLoop = createRibbon(0.9, 0.28, 0.55, {
  x: 0.42,
  y: 0,
  z: 0,
});

rightLoop.rotation.z = 0.45;

bow.add(rightLoop);

/* Middle */

const bowCenter = createRibbon(0.38, 0.38, 0.6, {
  x: 0,
  y: 0,
  z: 0,
});

bow.add(bowCenter);

/* =====================================================
   RIBBON TAILS
===================================================== */

const tailLeft = createRibbon(0.22, 1.5, 0.25, {
  x: -0.35,
  y: -0.6,
  z: 0,
});

tailLeft.rotation.z = -0.35;

gift.add(tailLeft);

const tailRight = createRibbon(0.22, 1.5, 0.25, {
  x: 0.35,
  y: -0.6,
  z: 0,
});

tailRight.rotation.z = 0.35;

gift.add(tailRight);

/* =====================================================
   GIFT FLOOR SHADOW
===================================================== */

const shadowGeometry = new THREE.CircleGeometry(2.4, 64);

const shadowMaterial = new THREE.MeshBasicMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.13,
});

const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);

shadow.rotation.x = -Math.PI / 2;

shadow.position.y = -0.95;

shadow.scale.set(1.1, 0.55, 1);

scene.add(shadow);

/* =====================================================
   STATE
===================================================== */

let opened = false;

let openingAnimation = 0;

/* =====================================================
   CLICK DETECTION
===================================================== */

const raycaster = new THREE.Raycaster();

const mouse = new THREE.Vector2();

function handlePointer(event) {
  if (opened) {
    return;
  }

  const rect = renderer.domElement.getBoundingClientRect();

  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;

  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(gift.children, true);

  if (intersects.length > 0) {
    openGift();
  }
}

window.addEventListener("pointerdown", handlePointer);

/* =====================================================
   OPEN GIFT
===================================================== */

function openGift() {
  if (opened) {
    return;
  }

  opened = true;

  document.getElementById("instruction").classList.add("hide");

  document.getElementById("arrow").classList.add("hide");

  document.querySelector(".title").classList.add("hide");

  openingAnimation = 0;
}

/* =====================================================
   ANIMATION
===================================================== */

function animate() {
  requestAnimationFrame(animate);

  /* Idle animation */

  if (!opened) {
    gift.rotation.y = Math.sin(performance.now() * 0.0008) * 0.12;

    gift.position.y = -0.7 + Math.sin(performance.now() * 0.0015) * 0.06;
  }

  /* Opening */

  if (opened) {
    openingAnimation += 0.018;

    /* Box rises slightly */

    gift.position.y = THREE.MathUtils.lerp(gift.position.y, -0.35, 0.05);

    /* Lid rises */

    lidGroup.position.y = THREE.MathUtils.lerp(lidGroup.position.y, 2.1, 0.08);

    /* Lid rotates backwards */

    lidGroup.rotation.x = THREE.MathUtils.lerp(lidGroup.rotation.x, -0.8, 0.08);

    /* Bow flies away */

    bow.position.y = THREE.MathUtils.lerp(bow.position.y, 2.8, 0.07);

    bow.rotation.z += 0.04;

    bow.scale.multiplyScalar(0.985);

    /* Ribbon strips fall away */

    verticalRibbon.position.y = THREE.MathUtils.lerp(
      verticalRibbon.position.y,
      -2,
      0.035,
    );

    horizontalRibbon.position.y = THREE.MathUtils.lerp(
      horizontalRibbon.position.y,
      -2.2,
      0.035,
    );

    tailLeft.position.y = THREE.MathUtils.lerp(tailLeft.position.y, -2, 0.04);

    tailRight.position.y = THREE.MathUtils.lerp(tailRight.position.y, -2, 0.04);

    verticalRibbon.rotation.z += 0.015;

    horizontalRibbon.rotation.z -= 0.02;

    /* Camera zoom */

    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 7.2, 0.015);
  }

  renderer.render(scene, camera);
}

animate();

/* =====================================================
   RESIZE
===================================================== */

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
});
