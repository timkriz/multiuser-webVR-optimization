! function(t) {
    function e(i) {
        if (r[i]) return r[i].exports;
        var o = r[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return t[i].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
    }
    var r = {};
    return e.m = t, e.c = r, e.p = "", e(0)
}([function(t, e) {
    AFRAME.registerComponent("fps-counter", {
        schema: {
            enabled: {
                default: !0
            },
            for90fps: {
                default: !0
            }
        },
        init: function() {
            return this.data.enabled ? (this.el.setAttribute("text", {
                align: "center",
                side: "double"
            }), void this.el.sceneEl.setAttribute("stats", "")) : void this.el.sceneEl.removeBehavior(this)
        },
        tick: function(t, e) {
            var r, i, o = this;
            return this.fpsDiv ? (i = parseFloat(this.fpsDiv.innerHTML, 10), this.data.for90fps ? (i < 85 && (r = "yellow"), i < 80 && (r = "orange"), i < 75 && (r = "red")) : (i < 55 && (r = "yellow"), i < 50 && (r = "orange"), i < 45 && (r = "red")), r && (this.el.setAttribute("text", "color", r), setTimeout(function() {
                o.el.setAttribute("text", "color", "white")
            }, 500)), void this.el.setAttribute("text", "value", i.toFixed(0))) : void(this.fpsDiv = document.querySelector(".rs-counter-base:nth-child(2) .rs-counter-value"))
        }
    })
}]);