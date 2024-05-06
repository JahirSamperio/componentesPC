import { agregar, eliminar, buscarProducto } from '../models/cartModel.js'
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const agregarCarrito = async (req, res) => {
    try {
        const { _token } = req.cookies;

        let tokenId;
        let autenticado;
        if (_token) {
            autenticado = true;
            const token = jwt.verify(_token, process.env.JWT_SECRET);
            tokenId = token.id;
        } else {
            autenticado = false
        }

        //Agregar
        const { usuario_id, ensamblado_id } = req.params;
        let cantidad = 1;
        //Buscar si ya existe
        const existente = await buscarProducto(usuario_id, ensamblado_id)
        if (existente.length > 0) {
            let cantidadArray = existente[0].cantidad;
            let id = existente[0].id;
            console.log(existente);

            if (typeof cantidadArray === 'number' && !isNaN(cantidadArray)) {
                cantidadArray += 1;
            } 
            await agregar(usuario_id, ensamblado_id, cantidadArray, id);
        } else if(existente.length === 0){
            await agregar(usuario_id, ensamblado_id, cantidad);
        }



        res.status(200).json({
            msg: "Agregado exitosamente"

        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const eliminarCarrito = async (req, res) => {
    try {
        const { id_favorito } = req.params

        await eliminar(id_favorito)

        res.status(200).json({
            success: true,
            msg: "Eliminado exitosamente"
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    agregarCarrito,
    eliminarCarrito
}