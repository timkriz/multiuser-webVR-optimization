AFRAME.registerComponent("random-color", {
    update: function() {
        var colors = [ "AED6D6", "C2ADBB", "FDD79B", "98CAEB", "FFBDAE", "C7D1CD", "E1DFE1", "D6FFED", "FCD9E8", "EFF2C0", "E0E0E1", "DCE5C8", "D8DDE9"];
        var t = this.data,
            a = t.max,
            e = t.min;
        var item = colors[Math.floor(Math.random() * colors.length)];
        this.el.setAttribute("material", "color", "#" + item);
    }
})