"use strict";


const form = document.getElementById("signup");


form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    const pwd = document.getElementById("pwd");
    const pwd2 = document.getElementById("pwd2");

    
    let validationMessage = "";

    
    if (pwd.value !== pwd2.value) {
        validationMessage = "Your passwords must match";
    } else {
        
        if (pwd.value.length < 8) {
            validationMessage = "Your password must be at least 8 characters long";
        }
        
        else if (!(/[a-zA-Z]/.test(pwd.value) && /\d/.test(pwd.value))) {
            validationMessage = "Your password must contain at least one letter and one number";
        }
    }

    
    if (validationMessage !== "") {
        alert(validationMessage);
    }
});
