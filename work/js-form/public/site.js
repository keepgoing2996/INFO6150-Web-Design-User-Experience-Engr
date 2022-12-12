"use strict";
(function() {
    const nameGroupE1 = document.querySelector('.register-name')
    const nameE1 = document.querySelector('.register-name__input');
    nameE1.addEventListener('change', (event) => {
        nameGroupE1.classList.remove('register-name--invalid');
        if (!nameE1.value) {
            nameGroupE1.classList.add('register-name--invalid');
        }
    });

    const emailLabelE1 = document.querySelector(".register-email__label")
    const emailE1 = document.querySelector(".register-email__input");

    const confirmLabelE1 = document.querySelector(".register-comfirm__label")
    const confirmE1 = document.querySelector(".register-confirm__input");

    const formE1 = document.querySelector('.register');
    formE1.addEventListener('submit', (event) => {
        let isInvalid = false;
        nameGroupE1.classList.remove('register-name--invalid');
        emailLabelE1.innerText = "Email *";
        emailLabelE1.style.color = "initial";
        confirmLabelE1.innerHTML = "Confirm Email *";
        confirmLabelE1.style.color = "initial";

        if (!nameE1.value) {
            nameGroupE1.classList.add('register-name--invalid');
            isInvalid = true;
        }

        if (!emailE1.value) {
            emailLabelE1.innerText = "This Email field is required *";
            emailLabelE1.style.color = "RED";
            isInvalid = true;
        }

        if (emailE1.value != confirmE1.value) {
            confirmLabelE1.innerText = "it needs to match Email";
            confirmLabelE1.style.color = "RED";
            isInvalid = true;
        }

        if (isInvalid) {
            event.preventDefault();
        }
    });
}

)();