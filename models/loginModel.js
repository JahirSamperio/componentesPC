import {conexion} from '../db/conexion.js'

//Selecciona informacion del inmueble
function verificarUsuario(email) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM usuarios WHERE email='${email}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

function verificarContraseña(email, contraseña) {
    return new Promise((resolve, reject) => {
        conexion.query(
            `SELECT * 
            FROM usuarios WHERE email='${email}'
            AND contraseña='${contraseña}'`,
            function (error, result, field) {
                if (error) 
                    return reject(error);
                return resolve(result);
            })
    })
}

export {
    verificarUsuario,
    verificarContraseña
}