import { conexion } from "../db/conexion.js";


//Selecciona informacion del inmueble
function agregar(usuario_id, ensamblado_id, cantidad, id) {
    console.log(cantidad);
    if(!id){
        return new Promise((resolve, reject) => {
            conexion.query(
                `INSERT INTO cart(usuario_id, ensamblado_id, cantidad)
                VALUES ('${usuario_id}', '${ensamblado_id}', '${cantidad}')`,
                function (error, result, field) {
                    if (error) 
                        return reject(error);
                    return resolve(result);
                })
        })
    } else {
        return new Promise((resolve, reject) => {
            conexion.query(
                `UPDATE cart
                SET usuario_id = '${usuario_id}', ensamblado_id = '${ensamblado_id}', cantidad = '${cantidad}'
                WHERE id = '${id}'`,
                function (error, result, field) {
                    if (error) 
                        return reject(error);
                    return resolve(result);
                })
        })
    }
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

function buscarProducto(usuario_id, ensamblado_id){
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM cart
            WHERE cart.ensamblado_id = '${ensamblado_id}'
            AND cart.usuario_id = '${usuario_id}'
            LIMIT 1;`,
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
    eliminar,
    buscarProducto
}