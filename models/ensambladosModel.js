import {conexion} from '../db/conexion.js'

function getComponentes(offset, size) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM componentes LIMIT ?, ?`, [offset, size],
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            }
        );
    });
}

function profileComponentes(id){
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM componentes 
            WHERE id='${id}'`,
            function  (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    getComponentes,
    profileComponentes
}