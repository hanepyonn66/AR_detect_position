AFRAME.registerComponent('click_pin_id1', {
    init: function () {
      this.el.addEventListener('click', function () {
        // クリック時の処理をここに記述
        alert("ok")
        const explain_id1 = document.getElementById("explain_id1");
        explain_id1.setAttribute('visible','true')
      });
    }
  });