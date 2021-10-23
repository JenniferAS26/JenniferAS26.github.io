export function validar_contraseña(campo){
    let array_campo = Array.from(campo); 
    let verificacion = 1;    
    let minuscula = 0;
    let mayuscula = 0;
    let numero = 0;
    if (campo != "") {
        if (array_campo.length >= 5){
            for (let i=0; i<array_campo.length; i++){
                if(array_campo[i] >= 0 && array_campo[i] < 9 ){
                    numero = 1;
                }
                else {
                    if(array_campo[i] == array_campo[i].toUpperCase()){
                        mayuscula = 1;
                    }
                    else if (array_campo[i] == array_campo[i].toLowerCase())
                    {
                        minuscula = 1;
                    }
                }
            } 
            
            if (minuscula == 0 || mayuscula == 0)
            {
                verificacion = 5;
            }
            if (numero == 0)
            {
                verificacion = 2;
            }
        
            if (minuscula && mayuscula && numero)
            {
                verificacion = 1;
            } 
        } 
        else {
            verificacion = 3;
        }  
    }
    else {
        verificacion = 4;
    }
    return verificacion;
}