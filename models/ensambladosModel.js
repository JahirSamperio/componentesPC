import {conexion} from '../db/conexion.js'

function insertImage(imagen, id) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `UPDATE ensamblados
            SET imagen = '${imagen}'
            WHERE id = '${id}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    insertImage
}