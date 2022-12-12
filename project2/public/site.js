"use strict";
(function() {
    // const buttonE1 = document.querySelector(".globalnav__menu li");

    // const displayMenu = function() {
    //     buttonE1.classList.toggle("open");
    // }; 
    
    // buttonE1.addEventListener("click", displayMenu);
    const navE1 = document.querySelector(".globalnav");
    navE1.addEventListener("click", (event) => {
        if (!event.target.classList.contains("globalnav__title")) {
            return;
        }
        const menuE1 = event.target.closest(".globalnav");
        menuE1.classList.toggle("globalnav--open");
    });


    const emailLabelE1 = document.querySelector('.register-email')
    const emailE1 = document.querySelector('.register-email__input');
    emailE1.addEventListener('change', (event) => {
        emailLabelE1.classList.remove('register-email--invalid1');
        emailLabelE1.classList.remove('register-email--invalid2');
        emailE1.style.borderColor = "initial";
        if (!emailE1.value) {
            emailLabelE1.classList.add('register-email--invalid1');
            emailE1.style.borderColor = "red";
        } 
        else if (!emailE1.value.includes("@")) {
            emailLabelE1.classList.add('register-email--invalid2');
            emailE1.style.borderColor = "red";
        }
    });

    const confirmLabelE1 = document.querySelector(".register-confirm")
    const confirmE1 = document.querySelector(".register-confirm__input");
    confirmE1.addEventListener('change', (event) => {
        confirmLabelE1.classList.remove('register-confirm--invalid');
        confirmE1.style.borderColor = "initial";
        if (emailE1.value != confirmE1.value) {
            confirmLabelE1.classList.add('register-confirm--invalid');
            confirmE1.style.borderColor = "red";
        }
    });

    const formE1 = document.querySelector('.register');
    formE1.addEventListener('submit', (event) => {
        emailLabelE1.classList.remove('register-email--invalid1');
        emailLabelE1.classList.remove('register-email--invalid2');
        confirmLabelE1.classList.remove('register-confirm--invalid');
        emailE1.style.borderColor = "initial";
        confirmE1.style.borderColor = "initial";
        let isInvalid = false;
        if (!emailE1.value) {
            emailLabelE1.classList.add('register-email--invalid1');
            emailE1.style.borderColor = "red";
            isInvalid = true;
        } 
        else if (!emailE1.value.includes("@")) {
            emailLabelE1.classList.add('register-email--invalid2');
            emailE1.style.borderColor = "red";
            isInvalid = true;
        }

        if (emailE1.value != confirmE1.value) {
            confirmLabelE1.classList.add('register-confirm--invalid');
            confirmE1.style.borderColor = "red";
            isInvalid = true;
        }

        if (isInvalid) {
            event.preventDefault();
        }
    });

    const modalE1 = document.querySelector('.modal');
    // const openE1 = document.querySelector('.open');
    const closeE1 = document.querySelector('.close');
    const rootE1 = document.querySelector('#root_cats');
    rootE1.addEventListener('click', (event) => {
        if (!event.target.classList.contains('open')) {
            return;
        }
        modalE1.showModal();
    });
    // openE1.addEventListener('click', () => {modalE1.showModal();});
    closeE1.addEventListener('click', () => {modalE1.close();});
}

)();