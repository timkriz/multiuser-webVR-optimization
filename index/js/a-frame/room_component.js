AFRAME.registerComponent('room', {
    init: function () {
      var scene = document.querySelector('a-scene');
      var floorLm = new THREE.TextureLoader().load("/assets/a-frame/lightmaps/floor_2048.png");
      var leftLm = new THREE.TextureLoader().load("/assets/a-frame/lightmaps/left_1024.png");
      var rightLm = new THREE.TextureLoader().load("/assets/a-frame/lightmaps/right_1024.png");
      var frontLm = new THREE.TextureLoader().load("/assets/a-frame/lightmaps/front_1024.png");
      var backLm = new THREE.TextureLoader().load("/assets/a-frame/lightmaps/back_1024.png");
      var ceilingLm = new THREE.TextureLoader().load("/assets/a-frame/lightmaps/ceiling_2048.png");

      /* FLOOR */
      var geometry = new THREE.PlaneBufferGeometry( 20, 30 );
      geometry.rotateX(-Math.PI/2).translate(0, 0, -4);
      var uvs = geometry.attributes.uv.array;
      geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
      var materialFloor = new THREE.MeshStandardMaterial({metalness: 0, lightMapIntensity:2, lightMap:floorLm});
      var floor = new THREE.Mesh( geometry, materialFloor );
      scene.object3D.add(floor);
      
      /* LEFT WALL */
      geometry = new THREE.PlaneBufferGeometry( 30, 6 );
      geometry.rotateY(Math.PI/2).translate(-10, 3, -4);
      var uvs = geometry.attributes.uv.array;
      geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
      var materialLeft = new THREE.MeshStandardMaterial({metalness: 0, lightMapIntensity:2, lightMap:leftLm});
      var left_wall = new THREE.Mesh( geometry, materialLeft );
      scene.object3D.add(left_wall);

      /* RIGHT WALL */
      geometry = new THREE.PlaneBufferGeometry( 30, 6 );
      geometry.rotateY(-Math.PI/2).translate(10, 3, -4);
      var uvs = geometry.attributes.uv.array;
      geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
      var materialRight = new THREE.MeshStandardMaterial({metalness: 0, lightMapIntensity:2, lightMap:rightLm});
      var right_wall = new THREE.Mesh( geometry, materialRight );
      scene.object3D.add(right_wall);

      /* FRONT WALL */
      geometry = new THREE.PlaneBufferGeometry( 20, 6 );
      geometry.translate(0, 3, -19);
      var uvs = geometry.attributes.uv.array;
      geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
      var materialFront = new THREE.MeshStandardMaterial({metalness: 0, lightMapIntensity:2, lightMap:frontLm});
      var front_wall = new THREE.Mesh( geometry, materialFront );
      scene.object3D.add(front_wall);

      /* BACK WALL */
      geometry = new THREE.PlaneBufferGeometry( 20, 6 );
      geometry.rotateY(Math.PI).translate(0, 3, 11);
      var uvs = geometry.attributes.uv.array;
      geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
      var materialBack = new THREE.MeshStandardMaterial({metalness: 0, lightMapIntensity:2, lightMap:backLm});
      var back_wall = new THREE.Mesh( geometry, materialBack );
      scene.object3D.add(back_wall);

      /* CEILING */
      geometry = new THREE.PlaneBufferGeometry( 20, 30 );
      geometry.rotateX(Math.PI/2).translate(0, 6, -4);
      var uvs = geometry.attributes.uv.array;
      geometry.addAttribute( 'uv2', new THREE.BufferAttribute( uvs, 2 ) );
      var materialCeiling = new THREE.MeshStandardMaterial({metalness: 0, lightMapIntensity:2, lightMap:ceilingLm});
      var ceiling = new THREE.Mesh( geometry, materialCeiling );
      scene.object3D.add(ceiling);
    }
  });