document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const menuContent = document.getElementById("menuContent");
  
    menuButton.onclick = function() {
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
  });