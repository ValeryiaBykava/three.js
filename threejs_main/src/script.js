import * as THREE from 'three';
import './style.css';

const scene = new THREE.Scene();
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: 'purple', wireframe: true});

const group = new THREE.Group();

group.scale.y = 1.4;
group.rotation.x = Math.PI * 0.25;

const cube1 = new THREE.Mesh(geometry, material);
cube1.position.x = -1.3;

const cube2 = new THREE.Mesh(geometry, material);
cube2.position.x = 0;

const cube3 = new THREE.Mesh(geometry, material);
cube3.position.x = 1.3;

group.add(cube1);
group.add(cube2);
group.add(cube3);

scene.add(group);

// const mesh = new THREE.Mesh(geometry, material);

// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// scene.add(mesh);

const sizes = {
    width: 600,
    height: 600
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 4;
camera.position.y = 1;

scene.add(camera);

const canvas = document.querySelector('.canvas');

const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera)