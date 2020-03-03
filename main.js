console.log("form validation");

function validar () {
    let enviar = true; 

    let form = document.getElementById("loginForm");

    /*console.log(form.Card.value); me muestra el valor que tengo dentro de creditcard*/

    /*let Card = document.getElementsByName ("Card");

    console.log(Card);*/

    if (!form.Card.value.trim().length > 0){
        enviar = false;
        form.Card.focus ();
        form.Card.classList.add("is-invalid");
    } else {
        form.Card.classList.remove("is-invalid");
        form.Card.classList.add("is-valid");
    }

    if (!form.CVC.value.trim().length > 0){
        enviar = false;
        form.CVC.focus ();
        form.CVC.classList.add("is-invalid");
    } else {
        form.CVC.classList.remove("is-invalid");
        form.CVC.classList.add("is-valid");
    }

    if (!form.Amount.value.trim().length > 0){
        enviar = false;
        form.Amount.focus ();
        form.Amount.classList.add("is-invalid");
    } else {
        form.Amount.classList.remove("is-invalid");
        form.Amount.classList.add("is-valid");
    }
    
    if (!form.firstName.value.trim().length > 0){
        enviar = false;
        form.firstName.focus ();
        form.firstName.classList.add("is-invalid");
    } else {
        form.firstName.classList.remove("is-invalid");
        form.firstName.classList.add("is-valid");
    }

    if (!form.lastName.value.trim().length > 0){
        enviar = false;
        form.lastName.focus ();
        form.lastName.classList.add("is-invalid");
    } else {
        form.lastName.classList.remove("is-invalid");
        form.lastName.classList.add("is-valid");
    }

    if (!form.City.value.trim().length > 0){
        enviar = false;
        form.City.focus ();
        form.City.classList.add("is-invalid");
    } else {
        form.City.classList.remove("is-invalid");
        form.City.classList.add("is-valid");
    }

    if (!form.inputState.value== "Choose"){
        enviar = false;
        form.inputState.focus ();
        form.inputState.classList.add("is-invalid");
    } else {
        form.inputState.classList.remove("is-invalid");
        form.inputState.classList.add("is-valid");
    }

    if (!form.postalCode.value.trim().length > 0){
        enviar = false;
        form.postalCode.focus ();
        form.postalCode.classList.add("is-invalid");
    } else {
        form.postalCode.classList.remove("is-invalid");
        form.postalCode.classList.add("is-valid");
    }
    

    return enviar;
}