document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const menuContent = document.getElementById("menuContent");
  
    menuButton.onclick = function(event) {
      event.stopPropagation(); // イベントの伝播を防止
      if (menuContent.style.display === "none" || menuContent.style.display === "") {
        menuContent.style.display = "block";
      } else {
        menuContent.style.display = "none";
      }
    };
  
    document.addEventListener("click", function(event) {
      if (!menuButton.contains(event.target) && !menuContent.contains(event.target)) {
        menuContent.style.display = "none";
      }
    });
  
    menuContent.addEventListener("click", function(event) {
      event.stopPropagation(); // メニュー内クリックで閉じないように
    });
  });