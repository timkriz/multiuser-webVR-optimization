AFRAME.registerComponent('hand', {
  schema: {
    handTemplate: {default: '#hand-template'},
    triggerKeyCode: {default: 32} 
  },

  init: function() {
    var that = this;
    document.body.onkeyup = function(e){
      if(e.keyCode == that.data.triggerKeyCode){
        that.triggerHand();
      }
    }
  },

  triggerHand: function() {
    var tip = document.querySelector('#hand_id'); // Check if its already in scene 
    if(!tip){
      this.createHand();
    }
  },

  createHand: function() {
    var tip = document.querySelector('#player');
    var el = document.createElement('a-sphere');
    el.setAttribute('id', "hand_id");

    el.object3D.name = "hand";
    el.setAttribute('networked', 'template:' + this.data.handTemplate);
    el.setAttribute('remove-in-seconds', 5);

    el.setAttribute('position', new THREE.Vector3(-0.5, -0.7, 0));

    el.setAttribute('animation', "property: object3D.rotation.x; to: 100; dir: alternate; dur: 2000; loop: true");
    document.getElementById("entity_creation_time").innerHTML = "Entiteto si ustvaril ob: " + Date.now();
    tip.appendChild(el)
  }
});
