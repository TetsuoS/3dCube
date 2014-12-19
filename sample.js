window.addEventListener("load", function(){


var canvas, camera, scene, renderer, geometry, materials, mesh;

init();
animate();

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 85, 300 / 300, 1, 10000 );
    camera.position.z = 500;
    scene.add( camera );

    light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 0, 1 ).normalize();
    scene.add( light );

    materials = [
         new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/logo1.png')}),
         new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/logo2.png')}),
         new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/logo3.png')}),
         new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/logo4.png')}),
         new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/logo5.png')}),
         new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('images/logo6.png')})
    ];

    //  CubeGeometry(x,y,z,....)   x y z でサイコロのサイズを変更する
    geometry = new THREE.CubeGeometry( 150, 150, 150, 2, 2, 2, materials );
    material = new THREE.MeshFaceMaterial();

    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );

    renderer = new THREE.CanvasRenderer();
    renderer.setSize( 150, 150 );  // ここでサイズを変更する

    canvas = document.getElementById('canvas');
    canvas.appendChild( renderer.domElement );
}

function animate() {
    requestAnimationFrame( animate );
    render();
}

function render() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
    mesh.rotation.z += 0.03;
    renderer.render( scene, camera );
}

}, false);
