const registerForm = document.querySelector("#register-form");

const formData = [];
let counter = 0;

registerForm.addEventListener('submit', agregarRegistro);

function agregarRegistro(parametro) {
    parametro.preventDefault();
    const checkForm = document.querySelector('#valida').getAttribute('value');
    if (checkForm == 1) {
        let nameCom = document.querySelector('#nombreCom').value; 
        let email = document.querySelector('#correo').value; 
        let password = document.querySelector('#contrasena').value; 

        let dataObject = {
            'nombreCom': nameCom,
            'correo': email,
            'contrasena': password,
            'registro': counter +=1,
        };

        formData.push(dataObject);
        registerForm.reset();
    }
}

module.exports = {agregarRegistro};