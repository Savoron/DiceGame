var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
		camera.position.z = 5;

var renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setPixelRatio( window.devicePixelRatio );
		renderer.setSize( window.innerWidth, window.innerHeight );
		renderer.setClearColor( 0x000000, 1 );
		document.body.appendChild( renderer.domElement );

var orbit = new THREE.OrbitControls( camera, renderer.domElement );

var geometry = new THREE.ConeBufferGeometry( 2, 3, 3 );
var material = new THREE.MeshBasicMaterial( {color: 0x00aaff} );
var cone = new THREE.Mesh( geometry, material );
scene.add( cone );


var render = function () {
	requestAnimationFrame( render );

	cone.rotation.y += 0.01;

	renderer.render(scene, camera);
};

render();
