function checkNombreCom(valor) {
    let expreg = new RegExp(/^[A-Za-záéíóúñÁÉÍÓÚÑ ]+$/);

    if (valor == null || valor.length == 0) {
       console.log('El Nombre no debe estar vacio!');
       return false;
    }
    else if(valor.length < 4 || valor.length > 50) {
        console.log('El Nombre debe contener entre 4 y 50 caracteres');
        return false;
    }
    else if(!expreg.test(valor)) {
        console.log('El Nombre no acepta caracteres especiales ni numéricos!');
        return false;
    }
    else {
        return true;
    }
}

function checkCorreo(valor){
    if(valor.length === 0){
        console.log("El Email no debe estar vacío");
        return false;
    }else if (!/\S+@\S+\.\S+/.test(valor) || !valor.trim()) {
        console.log("Debe ser un correo válido!");
        return false;
    }
    else{
        return true;
    }
}

function checkContrasena(valor){
    let expresion = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/;

    if (valor == null || valor.length == 0){
        console.log("La Constraseña no debe estar vacia")
        return false;
    }
    else if(!expresion.test(valor)){
        console.log("La contraseña debe contener por lo menos una letra mayúscula, minúscula, un número y con una longitud mayor o igual a 8 dígitos");
        return false;
    }
    else{
        return true;
    }
}

function validateRegisterForm(name, username, password) {
    checkFunction = [];
    
    checkFunction.push(checkNombreCom(name));

    checkFunction.push(checkCorreo(username));

    checkFunction.push(checkContrasena(password));

    let result = checkFunction.every(Boolean);

    return result;
}

module.exports = validateRegisterForm;