export function validar_correo(campo){
    let array_campo = Array.from(campo);
    let arroba = 0;
    let punto = 0;
    let com = 0;
    let verificacion;
    if (campo != "") {
        for (let i=0; i<array_campo.length; i++){
            if(array_campo[i] == '@' || arroba == 1){
                arroba = 1;
                if(array_campo[i] == '.' || punto == 1){
                    if(array_campo[i+1] == 'c' && array_campo[i+2] == 'o' && array_campo[i+3] == 'm'){
                        com = 1;
                        i = array_campo.length;
                        verificacion = 1;
                    }                
                }               
            }  
        }
        if (com == 0){
            verificacion = 2;
        }
    }
    else {
        verificacion = 3;       
    }
    return verificacion;
}