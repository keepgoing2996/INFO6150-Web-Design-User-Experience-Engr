 "use strict";
 (function() {
    const buttonE1 = document.querySelector(".globalnav__menu li");

    const displayMenu = function() {
        buttonE1.classList.toggle("open");
    }; 
    
    buttonE1.addEventListener("click", displayMenu);
 })();