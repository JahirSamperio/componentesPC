import { check, validationResult } from 'express-validator';
import { generarJWT, generateId } from "../helpers/tokens.js";
import { verificarContraseña, verificarUsuario } from '../models/loginModel.js';
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
config();


//Autenticacion del usuario
const autenticar = async (req = request, res = response) => {
    try {
        //Validacion 
        await check('email').isEmail().withMessage('Correo no valido').run(req);
        await check('contraseña').notEmpty().withMessage('Contraseña obligatoria').run(req);
        let errores = validationResult(req);

        if (!errores.isEmpty()) {
            return res.status(400).json({
                errores: errores.array()
            });
        }

        //Extraer datos
        const { email, contraseña } = req.body;

        //Verificar si el usuario existe
        const usuario = await verificarUsuario(email);
        if (!usuario) {
            return res.status(404).json({
                msg: "Usuario no existente"
            })
        }

        //Revisar password
        const autentica = await verificarContraseña(email, contraseña)
        if (!autentica) {
            return res.status(401).json({
                msg: "La contraseña es incorrecta"
            })
        }
        //Autenticar usuario
        const token = generarJWT(usuario[0].id);
        //Almacenar en un cookie
        res.cookie('_token', token, {
            httpOnly: true,
            //secure: true
        })

        res.redirect('http://localhost:8080');


    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: 'Ocurrió un error al intentar autenticar'
        });
    }
}

const cerrarSesion = async(req, res) => {
    try {
         // Eliminar el token del lado del cliente (eliminar la cookie
        res.clearCookie('_token');

         // Redireccionar o enviar una respuesta JSON u HTML indicando que la sesión se ha cerrado
        res.redirect('http://localhost:8080');
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    autenticar,
    cerrarSesion
}