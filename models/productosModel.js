import { conexion } from '../db/conexion.js';

function getProductos(offset, size) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM ensamblados LIMIT ?, ?`, [offset, size],
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            }
        );
    });
}

function getTotalProductos() {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT COUNT(*) AS total FROM ensamblados`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result[0].total);
            }
        );
    });
}

export {
    getProductos,
    getTotalProductos
}
