function checkNombreCom(valor) {
    let expreg = new RegExp(/^[A-Za-záéíóúñÁÉÍÓÚÑ ]+$/);

    if (valor == null || valor.length == 0) {
       alert('El Nombre no debe estar vacio!');
       return false;
    }
    else if(valor.length < 4 || valor.length > 50) {
        alert('El Nombre debe contener entre 4 y 50 caracteres');
        return false;
    }
    else if(!expreg.test(valor)) {
        alert('El Nombre no acepta caracteres especiales ni numéricos!');
        return false;
    }
    else {
        return true;
    }
}

function checkCorreo(valor){
    if(valor.length === 0){
        alert("El Email no debe estar vacío");
        return false;
    }else if (!/\S+@\S+\.\S+/.test(valor) || !valor.trim()) {
        alert("Debe ser un correo válido!");
        return false;
    }
    else{
        return true;
    }
}

function checkContrasena(valor){
    let expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

    if (valor == null || valor.length == 0){
        alert("La Constraseña no debe estar vacia")
        return false;
    }
    else if(!expresion.test(valor)){
        alert("La contraseña debe contener por lo menos una letra mayúscula, minúscula, un número y con una longitud mayor o igual a 8 dígitos");
        return false;
    }
    else{
        return true;
    }
}

function validateRegisterForm() {
    checkFunction = [];

    let nameCom = document.getElementById("#nombreCom").value;
    checkFunction.push(checkNombreCom(nameCom));

    let email = document.getElementById("#correo").value;
    checkFunction.push(checkCorreo(email));

    let password = document.getElementById("#contrasena").value;
    checkFunction.push(checkContrasena(password));

    let result = checkFunction.every(Boolean);
    let validate = document.querySelector('#valida');

    if(result) {
        validate.setAttribute('value', 1);
    }else{
        validate.setAttribute('value', 0);
    }

    return result;
}

module.exports = { checkNombreCom, checkCorreo, checkContrasena };