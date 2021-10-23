export function validar_texto(campo){
    let array_campo = Array.from(campo); 
    let verificacion = 1;    
    if (campo != "") {
        if (array_campo.length <= 10 && array_campo.length >= 4){
            for (let i=0; i<array_campo.length; i++){
                if(array_campo[i] == '0' || array_campo[i] == '1' || array_campo[i] == '2'|| array_campo[i] == '3'|| array_campo[i] == '4' || array_campo[i] == '5' || array_campo[i] == '6' || array_campo[i] == '7' || array_campo[i] == '8' || array_campo[i] == '9'){
                    verificacion = 2;
                    i = array_campo.length;
                }
            }    
        } 
        else {
            verificacion = 3;
        }
    }
    else {
        verificacion = 4;
    }
    return verificacion
}