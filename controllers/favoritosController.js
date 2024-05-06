import {agregar} from '../models/favoritosModel.js'
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
config();

const agregarFavoritos = async(req, res) => {
    try {
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
        const {usuario_id, ensamblado_id} = req.params;

        await agregar(usuario_id, ensamblado_id);

        res.status(200).json({
            msg: "Agregado exitosamente"
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    agregarFavoritos
}