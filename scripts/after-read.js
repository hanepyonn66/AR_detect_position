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
    //レイヤ1
    const togglePlanesCheckbox = document.getElementById("togglePlanes");
    const planes = document.querySelectorAll(".planes");

    togglePlanesCheckbox.addEventListener("change", function () {
        if (togglePlanesCheckbox.checked) {
            planes.forEach(entity => {
                entity.setAttribute('visible', 'true');
            });
        } else {
            planes.forEach(entity => {
                entity.setAttribute('visible', 'false');
            });
        }
    });

    // 初期状態をチェックボックスの状態に合わせる
    if (!togglePlanesCheckbox.checked) {
        planes.forEach(entity => {
            entity.setAttribute('visible', 'false');
        });
    }
    //レイヤ2
    const toggleBoxesCheckbox = document.getElementById("toggleBoxes");
    const boxes = document.querySelectorAll(".boxes");

    toggleBoxesCheckbox.addEventListener("change", function () {
        if (toggleBoxesCheckbox.checked) {
            boxes.forEach(entity => {
                entity.setAttribute('visible', 'true');
            });
        } else {
            boxes.forEach(entity => {
                entity.setAttribute('visible', 'false');
            });
        }
    });

    // 初期状態をチェックボックスの状態に合わせる
    if (!toggleBoxesCheckbox.checked) {
        boxes.forEach(entity => {
            entity.setAttribute('visible', 'false');
        });
    }

    //レイヤ3
    const togglePinCheckbox = document.getElementById("togglePin");
    const pin = document.querySelectorAll(".pin");

    togglePinCheckbox.addEventListener("change", function () {
        if (togglePinCheckbox.checked) {
            pin.forEach(entity => {
                entity.setAttribute('visible', 'true');
            });
        } else {
            pin.forEach(entity => {
                entity.setAttribute('visible', 'false');
            });
        }
    });

    // 初期状態をチェックボックスの状態に合わせる
    if (!togglePinCheckbox.checked) {
        pin.forEach(entity => {
            entity.setAttribute('visible', 'false');
        });
    }
});