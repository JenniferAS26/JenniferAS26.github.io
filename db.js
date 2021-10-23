/*var mysql = require('mysql');*/
import mysql from 'mysql';

var conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'learn',
        user:'root',
        password:'password'
    }
);

conexion.connect(function(error)
    {
        if(error)
        {
            throw error;
        }
        else 
        {
            console.log("Conexión exitosa");
        }        
    }
);


/* Insertar Usuario*/
function insertar_registro (){ 
conexion.query("INSERT INTO usuarios(nombre_completo, email, password) VALUES ( '"+nombre_completo+"', '"+email+"', '"+password+"')", function(error, resultados)
    {
        if(error)
        {
            throw error;
        }
        else
        {
            console.log("Registro exitoso");
        }        
    }
)
};




/* Buscar registro*/

function buscar_registro (){
conexion.query("SELECT * FROM usuarios WHERE (nombre_completo, email, password) VALUES ( '"+nombre_completo+"', '"+email+"', '"+password+"')", function(error, resultados)
        {
            if(error == true)
            {
                throw error;
            }
            else
            {
                for (let i=0; i<resultados.length; i++)
                {
                    console.log("Usuario ");                       
                }
            }
        }
    );
};



/* Consultar tabla*/
/* 
function consultar_tabla(){
conexion.query('SELECT nombre_curso FROM Usuarios', function(error, resultados)
        {
            if(error)
            {
                throw error;
            }
            else
            {
                for (let i=0; i<cursos.length; i++)
                {
                    console.log(cursos[i].Nombre);                       
                }
            }
        }
    )
};*/

export {insertar_registro, insertar_registro };

/*conexion.end():*/