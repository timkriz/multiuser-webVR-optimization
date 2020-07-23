/* SCRIPT FOR MEASURING FRAME RATE WITH STATS.JS*/
var avgFPSarray= [];
measureFPSswitch = false;
javascript:(function() {
  var script = document.createElement('script');
  script.onload = function() {
    var stats = new Stats();
    //document.body.appendChild(stats.dom); // remove STATS.JS WIDGET
    requestAnimationFrame(function loop() {
      stats.update();
      requestAnimationFrame(loop);
    });
    var button = document.getElementById("buttonFPS");
    button.onclick = function(){
      textFPS = document.getElementById("averageFPStext");
      if(measureFPSswitch)measureFPSswitch = false;
      else measureFPSswitch = true;
    }
  };
  script.src = 'js/stats.js';
  document.head.appendChild(script);
  })()