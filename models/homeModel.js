import {conexion} from '../db/conexion.js'

//Selecciona informacion del inmueble
function getProductos() {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM ensamblados LIMIT 3`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

function profileEnsamblados(id){
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM ensamblados
            WHERE id='${id}'`,
            function  (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}
export {
    getProductos,
    profileEnsamblados
}