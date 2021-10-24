let registros = [];

function login() {
    let validado = false;
    let email = document.querySelector('#correoL');
    let password = document.querySelector('#contrasenaL');
    
    registros.forEach(registro => {
        if (email === registro.correo) {
          if (password === registro.contrasena) {
            validado = true;        
          }
        }
    });

    if (validado){
        alert('Welcome');
      }else{
        alert('Datos incorrectos');
      }
}

module.exports.login = login;