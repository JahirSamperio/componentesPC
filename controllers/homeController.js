import { getProductos } from "../models/homeModel.js"

const home = async (req, res ) => {
    try {
        const productos = await getProductos();
        res.render('index', {
            productos: productos
        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    home
}