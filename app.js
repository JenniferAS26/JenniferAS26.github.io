class IniciarSesion{
    constructor(email, password){
        this.correo = email;
        this.contraseña = password;
    }    
}
var array_objetos = [];

export function IniciarSesion(email, password){
    let usuario = new usuario(email, password);
    array_objetos.push(usuario);
    return array_objetos;
}

class Registro{
    constructor(nameCompleto, email, password){
        this.nombre = nameCompleto;
        this.correo = email;
        this.contraseña = password;
    }    
}
var array_objetos = [];

export function Registrar_usuario(nameCompleto, email, password){
    let usuario = new Persona(nameCompleto, email, password);
    array_objetos.push(usuario);
    return array_objetos;
}
