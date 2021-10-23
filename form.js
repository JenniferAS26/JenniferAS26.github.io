import{validar_texto} from "./verificar_texto.js";
import{validar_contraseña} from "./verificar_contraseña.js"; /* NO OLVIDAR EL .JS AL FINAL*/
import{validar_correo} from "./verificar_correo.js";
import{Registrar_usuario, IniciarSesion, filtrar_array} from "./objetos.js";

document.querySelector("#boton_registrar").addEventListener('click', click_boton);
document.querySelector("#input-login-button").addEventListener('click', IniciarSesion);
document.querySelector("#search-icon").addEventListener('click', click_filtrar);

function click_boton(){    
    let name = document.getElementById("nombre_completo").value;
    let correo = document.getElementById("email").value;
    let contraseña = document.getElementById("password").value;    
    
    let val_name = registrar_campo(name, "nombre_completo");
    let val_correo = registrar_correo(correo, "email");
    let val_contraseña = registrar_contraseña(contraseña, "password");  

    if (val_name && val_contraseña && val_correo){
        console.clear();
        alert("EL USUARIO HA SIDO REGISTRADO EXITOSAMENTE");
        let array_usuario = Registrar_usuario(name, correo, contraseña);           
        console.log(array_usuario);
    }
    else 
    {
        alert("NO SE PUDO CREAR EL REGISTRO");
    }
}

function registrar_campo(campo, ref_campo){
    let verificacion = validar_texto(campo);
    if ( verificacion == 1){
        return true;
    }    
    else if (verificacion == 2)
    {
        alert("Error: en el campo " + ref_campo + " no se admiten números");
        return false;
    }
    else if (verificacion == 3)
    {
        alert("Error: en el campo " + ref_campo + " solo se pueden ingresar entre 4 y 7 caracteres");
        return false;
    }
    else if (verificacion == 4)
    {
        alert("Error: el campo " + ref_campo + " no puede dejarse vacío");
        return false;
    }
}


function registrar_contraseña(campo, ref_campo){
    let verificacion = validar_contraseña(campo);
    if ( verificacion == 1){
        return true;
    }    
    else if (verificacion == 2)
    {
        alert("Error: en el campo " + ref_campo + " debe ir al menos un digito");
        return false;
    }
    else if (verificacion == 3)
    {
        alert("Error: en el campo " + ref_campo + " minimo se deben ingresar 5 digitos");
        return false;
    }
    else if (verificacion == 4)
    {
        alert("Error: el campo " + ref_campo + " no puede dejarse vacío");
        return false;
    }
    else if (verificacion == 5)
    {
        alert("Error: el campo " + ref_campo + " debe ir al menos una letra minúscula y una mayúscula");
        return false;
    }
}

function registrar_correo(campo, ref_campo){
    let verificacion = validar_correo(campo);
    if ( verificacion == 1){
        return true;
    }    
    else if (verificacion == 2)
    {
        alert("Error: en el campo " + ref_campo + " debe utilizarse la siguiente estructura: usuario@correo.com");
        return false;
    }
    else if (verificacion == 3)
    {
        alert("Error: el campo " + ref_campo + " no puede dejarse vacío");
        return false;
    }
}
/*
function click_ordenar(){
    if (document.getElementById("selector_ordenar").value == "nombre"){
        var array_ordenado = ordenar_array(1);
    }
    else
    {
        var array_ordenado = ordenar_array(2);
    }    
    console.log("El array de objetos ordenado, es el siguiente: " + array_ordenado);
    console.log(array_ordenado);    
}*/

/*
function click_filtrar(){
    if (document.getElementById("selector_filtrar").value == "python"){
        filtrar_array(1);

    }
    else if (document.getElementById("selector_filtrar").value == "javascrpt")
    {
        alert("Error: en el campo " + ref_campo + " no se admiten números");
        return false;
    }
    else if (document.getElementById("selector_filtrar").value == "inlges")
    {
        alert("Error: en el campo " + ref_campo + " solo se pueden ingresar entre 4 y 7 caracteres");
        return false;
    }
    else if (document.getElementById("selector_filtrar").value == "marketing")
    {
        alert("Error: en el campo " + ref_campo + " solo se pueden ingresar entre 4 y 7 caracteres");
        return false;
        else if (document.getElementById("selector_filtrar").value == "coaching")
        {
            alert("Error: en el campo " + ref_campo + " solo se pueden ingresar entre 4 y 7 caracteres");
            return false;       
    }
    else {
        filtrar_array(2);
    } 
};

*/
