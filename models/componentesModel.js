import {conexion} from '../db/conexion.js'

//Selecciona informacion del inmueble
function newComponentes(data) {
    return new Promise((resolve, reject) => {
        const {nombre, descripcion, categoria, marca, modelo, precio, especificaciones, stock} = data;
        conexion.query(
            `INSERT INTO componentes(nombre, descripcion, categoria, marca, modelo, precio, especificaciones, stock)
            VALUES ('${nombre}', '${descripcion}', '${categoria}', '${marca}', '${modelo}', '${precio}', '${especificaciones}', '${stock}')`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

function insertImage(imagen, id) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `UPDATE componentes
            SET imagen = '${imagen}'
            WHERE id = '${id}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

function getComponentes(){
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * FROM componentes LIMIT 3`,
            function  (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
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
    newComponentes,
    insertImage,
    getComponentes,
    profileComponentes
}