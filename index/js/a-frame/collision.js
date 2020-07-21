/* Collision script for camera */
AFRAME.registerComponent('collision-body', {
    init: function(){
        /*let cursor = document.createElement('a-cursor');
        // cursor on non-desktop devices
        if(AFRAME.utils.device.isMobile() || AFRAME.utils.device.isGearVR () || AFRAME.utils.device.isOculusGo ()){
            this.el.appendChild(cursor);
        }*/
    },
    tick: function () {
    
        var position = this.el.object3D.position;
        var x_limit = 9; //room size
        var z_limit_front = -18.5;
        var z_limit_back = 10.5;
        var bounce = 0.1;
        
        if(position.x>x_limit){
            this.el.setAttribute('position',{
                x: position.x-bounce,
                y: 1.6,
                z: position.z
            });
        }
        if(position.x<-x_limit){
            this.el.setAttribute('position',{
                x: position.x+bounce,
                y: 1.6,
                z: position.z
            });
        }
        if(position.z<z_limit_front){
            this.el.setAttribute('position',{
                x: position.x,
                y: 1.6,
                z: position.z+bounce
            });
        }
        if(position.z>z_limit_back){
            this.el.setAttribute('position',{
                x: position.x,
                y: 1.6,
                z: position.z-bounce
            });
        }
        // Middle wall
        if((position.z>3.2 && position.z<4.8) && (position.x>1.6 && position.x<8.4)){
            if(position.z>4) bounce*=-1;
            this.el.setAttribute('position',{
                x: position.x,
                y: 1.6,
                z: position.z-bounce
            });
        }
        // 1st cylinder
        var r = 2; //radius
        var posX = -6;
        var posZ = -8;
        if((position.z> posZ-r && position.z< posZ+r) && (position.x> posX-r && position.x< posX+r)){
            if(position.z<posZ && (position.x>posX - r/2 && position.x<posX + r/2)){
                this.el.setAttribute('position',{
                    x: position.x,
                    y: 1.6,
                    z: position.z-bounce
                });
            }
            else if(position.z>posZ && (position.x>posX - r/2 && position.x<posX + r/2)) {
                this.el.setAttribute('position',{
                    x: position.x,
                    y: 1.6,
                    z: position.z+bounce
                });
            }
            else {
                if(position.x>posX + r/2){
                    this.el.setAttribute('position',{
                        x: position.x+bounce,
                        y: 1.6,
                        z: position.z
                    });
                }
                else{
                    this.el.setAttribute('position',{
                        x: position.x-bounce,
                        y: 1.6,
                        z: position.z
                    });
                }
                
            }
        }
        // 2st cylinder
        var r = 3; //radius
        var posX = 5;
        var posZ = -13;
        if((position.z> posZ-r && position.z< posZ+r) && (position.x> posX-r && position.x< posX+r)){
            if(position.z<posZ && (position.x>posX - r/2 && position.x<posX + r/2)){
                this.el.setAttribute('position',{
                    x: position.x,
                    y: 1.6,
                    z: position.z-bounce
                });
            }
            else if(position.z>posZ && (position.x>posX - r/2 && position.x<posX + r/2)) {
                this.el.setAttribute('position',{
                    x: position.x,
                    y: 1.6,
                    z: position.z+bounce
                });
            }
            else {
                if(position.x>posX + r/2){
                    this.el.setAttribute('position',{
                        x: position.x+bounce,
                        y: 1.6,
                        z: position.z
                    });
                }
                else{
                    this.el.setAttribute('position',{
                        x: position.x-bounce,
                        y: 1.6,
                        z: position.z
                    });
                }
                
            }
        }
      }
});