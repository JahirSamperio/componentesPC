import { insertImage } from "../models/ensambladosModel.js";
import {v2 as cloudinary} from 'cloudinary'
import uploadCloudinary from '../uploads/cloudinary.js';

const agregarImagen = async (req, res) => {
    try {
        const {id} = req.params

        //Cargar imagen a cloudinary y extraer url
        const secure_url = await uploadCloudinary(req);
        req.body.imagen = secure_url;

        console.log(req.body.imagen);

        

        await insertImage(req.body.imagen, id);

        return res.status(200).json({
            msg: "Agregado exitosamente"
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    agregarImagen
}