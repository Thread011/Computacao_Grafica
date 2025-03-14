document.addEventListener('DOMContentLoaded', Start);

var cena = new THREE.Scene();
var camara = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth -15, window.innerHeight - 80);

renderer.setClearColor(0xaaaaaa);

document.body.appendChild(renderer.domElement);

var geometria = new THREE.BufferGeometry();
var vertices = new Float32Array([
    -0.5, -0.5, 0.0,
    0.5, -0.5, 0.0,
    0.0, 0.5, 0.0,
]);

const cores = new Float32Array([
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0,
]);

geometria.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
geometria.setAttribute('color', new THREE.BufferAttribute(new Float32Array(cores), 3));


var material = new THREE.MeshBasicMaterial({vertexColors: true, side: THREE.DoubleSide});

var mesh = new THREE.Mesh(geometria, material);

mesh.translateX(0.5);
mesh.translateY(0.5);
mesh.translateX(-1);
mesh.translateY(-0.9);


mesh.scale.set(0.25, 0.25, 0.25);
mesh.scale.multiplyScalar(3);

function loop(){
    mesh.rotateZ(Math.PI/180 * 1);
    mesh.rotateY(Math.PI/180 * 1);

    renderer.render(cena, camara);

    requestAnimationFrame(loop);
}

function Start(){
    cena.add(mesh);

    renderer.render(cena, camara);

    requestAnimationFrame(loop);
}