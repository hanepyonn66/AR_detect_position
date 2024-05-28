AFRAME.registerComponent('click_pin_id1', {
    init: function () {
        this.el.addEventListener('click', function () {
            // クリック時の処理をここに記述
            const explain_id1 = document.getElementById("explain_id1");
            const isVisible = explain_id1.getAttribute('visible');
            explain_id1.setAttribute('visible', !isVisible);
        });
    }
});