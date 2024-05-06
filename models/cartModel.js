import { conexion } from "../db/conexion.js";


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

function cart(usuario_id){
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT cart.*, ensamblados.*, usuarios.nombre as nombre_usuario, cart.id as id_cart
            FROM cart
            JOIN ensamblados ON cart.ensamblado_id = ensamblados.id
            JOIN usuarios ON cart.usuario_id = usuarios.id
            WHERE cart.usuario_id = '${usuario_id}';`,
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
            `DELETE FROM cart
            WHERE cart.id = '${id}';`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    agregar,
    cart,
    eliminar
}