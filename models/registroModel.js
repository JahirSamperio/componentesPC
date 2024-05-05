import { conexion } from "../db/conexion.js";

function registroUser(data){
    const {nombre, email, contraseña} = data;
    return new Promise((resolve, reject)=>{
        conexion.query(
            `INSERT INTO usuarios(nombre, email, contraseña)
            VALUES ('${nombre}', '${email}', '${contraseña}')`,
            function(error, result, field){
                if(error)
                    reject(error);
                return resolve(result);
            }
        )
    }) 
}

export {
    registroUser
}