
    AFRAME.registerComponent('lambert', {
      schema: {
        color: {
          default: '#0F0'
        },
      },
      init: function() {},
      update: function(oldData) {
        let mesh = this.el.getObject3D('mesh')
        if (!mesh) {
          this.el.addEventListener('model-loaded', e => {
            this.update.call(this, this.data)
          })
          return;
        }
        this.changeColor(mesh, this.data.color);
      },
      changeColor: function(mesh, color) {
        var material = new THREE.MeshLambertMaterial({
          color: color,
        });
        
        mesh.traverse(function(node) {
          if(node.type != "Mesh") return;
          let tmp = node.material
          node.material = material
          tmp.dispose();
        })
      }
    });