AFRAME.registerComponent('teleport_point', {
    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var lastIndex = -1;
      var COLORS = ['#FE6847', '#FBB13C', '2176AE', '#AD91A3', '#57CC99'];
        this.el.addEventListener('click', function (evt) {
            var posEl = el.getAttribute('position');
            /**** TIME OF CHANGED POSITION ****/
            var time = Date.now();
            document.querySelector('#player').setAttribute('position', {x:posEl.x, y:1.6, z:posEl.z});
            var position_update_time_el = document.getElementById("position_update_time")
            if(position_update_time_el) position_update_time_el.innerHTML = "You changed position at: " + time;
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.firstElementChild.setAttribute('material', 'color', COLORS[lastIndex]);
        });
    }
  });
  AFRAME.registerComponent('model1_interaction',{
    init: function () {
      var additional_model = document.getElementById("additional_info_model1")
      this.el.addEventListener('mouseenter', function (evt) {
        additional_model.setAttribute('visible', "true")
      });
      this.el.addEventListener('mouseleave', function (evt) {
        additional_model.setAttribute('visible', "false")
      });
    }
  });
  AFRAME.registerComponent('model2_interaction',{
    init: function () {
      var additional_model = document.getElementById("additional_info_model2")
      this.el.addEventListener('mouseenter', function (evt) {
        additional_model.setAttribute('visible', "true")
      });
      this.el.addEventListener('mouseleave', function (evt) {
        additional_model.setAttribute('visible', "false")
      });
    }
  });