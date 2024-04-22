import {conexion} from '../db/conexion.js'

//Selecciona informacion del inmueble
function getProductos() {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM componentes LIMIT 10`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    getProductos
}