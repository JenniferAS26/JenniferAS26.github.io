let registros = [];

function login() {
    let validado = false;
    let email = document.querySelector('#correo');
    let password = document.querySelector('#contrasena');
    
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