import {conexion} from '../db/conexion.js'

//Selecciona informacion del inmueble
function agregar(usuario_id, ensamblado_id) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO favoritos(usuario_id, ensamblado_id)
            VALUES ('${usuario_id}', '${ensamblado_id}')`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    agregar
}