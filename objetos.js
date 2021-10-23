class Usuario{
    constructor(nameCompleto, email, password, courses){
        this.nombreCompleto = nameCompleto;
        this.correo = email;
        this.contraseña = password;
        this.cursos = courses;
    }    
}
var array_objetos = [];


export function IniciarSesion(email, password){
    let usuario = new usuario(email, password);
    array_objetos.push(usuario);
    return array_objetos;
};

var array_objetos = [];

export function Registrar_usuario(nombre_completo, email, password){
    let usuario = new Persona(nombre_completo, email, password);
    array_objetos.push(usuario);
    return array_objetos;
}

export function filtrar_array (nombre_curso){
    let nombre_curso = new Curso (nombre_curso);
    array_objetos.filtrar_array(nombre_curso);
    return(nombre_curso);
}
