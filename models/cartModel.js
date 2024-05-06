import { conexion } from "../db/conexion";


//Selecciona informacion del inmueble
function agregar(usuario_id, ensamblado_id) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO cart(usuario_id, ensamblado_id)
            VALUES ('${usuario_id}', '${ensamblado_id}')`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

function favorites(usuario_id){
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT favoritos.*, ensamblados.*, usuarios.nombre as nombre_usuario, favoritos.id as id_favorito
            FROM favoritos
            JOIN ensamblados ON favoritos.ensamblado_id = ensamblados.id
            JOIN usuarios ON favoritos.usuario_id = usuarios.id
            WHERE favoritos.usuario_id = '${usuario_id}';`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

function eliminar(id){
    return new Promise((resolve, reject) => {
        conexion.query(
            `DELETE FROM favoritos
            WHERE favoritos.id = '${id}';`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    agregar,
    favorites,
    eliminar
}