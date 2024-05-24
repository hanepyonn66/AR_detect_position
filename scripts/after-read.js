document.getElementById("menuButton").onclick = function() {
    var menu = document.getElementById("menuContent");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
};