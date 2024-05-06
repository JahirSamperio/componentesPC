import {agregar} from '../models/favoritosModel.js'

const agregarFavoritos = async(req, res) => {
    try {
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