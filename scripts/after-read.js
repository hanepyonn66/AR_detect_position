document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const menuContent = document.getElementById("menuContent");

    menuButton.onclick = function (event) {
        event.stopPropagation(); // イベントの伝播を防止
        if (menuContent.style.display === "none" || menuContent.style.display === "") {
            menuContent.style.display = "block";
            menuButton.textContent = "メニューを閉じる";
        } else {
            menuContent.style.display = "none";
            menuButton.textContent = "メニューを開く";
        }
    };

    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
            menuContent.style.display = "none";
            menuButton.textContent = "メニューを開く";
        }
    });

    menuContent.addEventListener("click", function (event) {
        event.stopPropagation(); // メニュー内クリックで閉じないように
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const togglePlanesCheckbox = document.getElementById("togglePlanes");
    const planes = document.querySelectorAll(".planes");

    togglePlanesCheckbox.addEventListener("change", function () {
        if (togglePlanesCheckbox.checked) {
            planes.forEach(entity => {
              entity.setAttribute('visible','false');
            });
        } else {
            planes.forEach(entity => {
                entity.setAttribute('visible', 'true');
              });
        }
    });

    // 初期状態をチェックボックスの状態に合わせる
    if (!togglePlanesCheckbox.checked) {
        planes.forEach(entity => {
            entity.setAttribute('visible','false');
          });
    }
});