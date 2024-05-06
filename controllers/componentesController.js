import {v2 as cloudinary} from 'cloudinary'
import uploadCloudinary from '../uploads/cloudinary.js';
import { newComponentes, insertImage, getComponentes, profileComponentes } from '../models/componentesModel.js';
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
config();

//Configurando cloudinary
cloudinary.config(process.env.CLOUDINARY_URL);

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
const agregarComponente = async (req, res) => {
    try {

        const response = await newComponentes(req.body);
        console.log(response);

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

const getComponente = async (req, res) => {
    try {
        const componentes =  await getComponentes();
        return res.status(200).json({
            componentes
        })
    } catch (error) {
        
    }
}

const profileComponente = async (req, res) => {
    try {
        const { id } = req.params;
        const componentes = await profileComponentes(id);

        const {_token} = req.cookies;

        let tokenId;
        let autenticado;
        if(_token){
            autenticado=true;
            const token = jwt.verify(_token, process.env.JWT_SECRET);
            tokenId = token.id;
        } else {
            autenticado=false
        }

        //Desestructura el arreglo
        const componente = componentes[0];

        res.render('product-details', {
            componente: componente, 
            autenticado: autenticado,
            token: tokenId
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    agregarComponente,
    agregarImagen,
    getComponente,
    profileComponente
}