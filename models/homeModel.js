import { conexion } from '../db/conexion.js'

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

function profileEnsamblados(id) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM ensamblados WHERE id = '${id}'`,
            function (error, result, field) {
                if (error)
                    return reject(error);

                // Suponiendo que las especificaciones en 'descripcion' están separadas por ","
                const ensamblados = result.map(ensamblado => {
                    return {
                        ...ensamblado,
                        especificaciones: ensamblado.descripcion.split(",").map(spec => spec.trim())
                    };
                });

                return resolve(ensamblados);
            })
    })
}
export {
    getProductos,
    profileEnsamblados
}