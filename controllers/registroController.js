import {check, validationResult} from 'express-validator'
import {registroUser} from '../models/registroModel.js'

const registrarUsuario = async (req, res) => {
    try {
        console.log(req.body);
        await check('nombre').notEmpty().withMessage('El nombre es obligatorio').run(req);
        await check('email').notEmpty().withMessage('El correo es obligatorio').run(req);
        await check('contraseña').notEmpty().withMessage('La contraseña es obligatoria').run(req);

        let errores = validationResult(req);

        if(!errores.isEmpty()){
            return res.status(400).json({
                errores: errores.array()
            })
        }

        // const {nombre, email, password} = req.body;

        const signup = await registroUser(req.body)
        return res.status(200).json({
            msg: "Usuario registrado exitosamente"
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    registrarUsuario
}