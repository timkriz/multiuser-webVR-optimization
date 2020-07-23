AFRAME.registerComponent('teleport_point', {
    init: function () {
      var data = this.data;
      var el = this.el;  // <a-box>
      var lastIndex = -1;
      var COLORS = ['#FE6847', '#FBB13C', '2176AE', '#AD91A3', '#57CC99'];
        this.el.addEventListener('click', function (evt) {
            var posEl = el.getAttribute('position');
            document.querySelector('#player').setAttribute('position', {x:posEl.x, y:1.6, z:posEl.z});
            lastIndex = (lastIndex + 1) % COLORS.length;
            this.firstElementChild.setAttribute('material', 'color', COLORS[lastIndex]);
        });
    }
  });