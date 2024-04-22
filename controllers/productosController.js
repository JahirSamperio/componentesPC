import { getProductos } from "../models/productosModel.js";

const productos = async (req, res) => {
    try {
        const listaProductos = await getProductos();
        res.render('products', {
            productos: listaProductos
        }) 
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    productos
}