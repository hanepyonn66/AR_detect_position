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
    function toggleVisibility(toggleElement, targetClass) {
        const targets = document.querySelectorAll(targetClass);
        toggleElement.addEventListener("change", function () {
            const visibility = toggleElement.checked ? 'true' : 'false';
            targets.forEach(entity => {
                entity.setAttribute('visible', visibility);
            });
            updatePlanePosition();
        });

        // 初期状態をチェックボックスの状態に合わせる
        const initialVisibility = toggleElement.checked ? 'true' : 'false';
        targets.forEach(entity => {
            entity.setAttribute('visible', initialVisibility);
        });
    }

    function updatePlanePosition() {
        const planes = document.querySelectorAll(".planes");
        const isPlanesChecked = document.getElementById("togglePlanes").checked;
        const isBoxesChecked = document.getElementById("toggleBoxes").checked;

        const position = (isPlanesChecked && isBoxesChecked) ? "0 15 0" : "0 0 0";
        planes.forEach(entity => {
            entity.setAttribute('position', position);
        });
    }

    const togglePlanesCheckbox = document.getElementById("togglePlanes");
    toggleVisibility(togglePlanesCheckbox, ".planes");

    const toggleBoxesCheckbox = document.getElementById("toggleBoxes");
    toggleVisibility(toggleBoxesCheckbox, ".boxes");

    const togglePinCheckbox = document.getElementById("togglePin");
    toggleVisibility(togglePinCheckbox, ".pin");

    // 初期状態の位置を設定
    updatePlanePosition();
});