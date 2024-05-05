import { getProductos, getTotalProductos } from "../models/productosModel.js";

const productos = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Página actual, si no se especifica, será la primera
        const size = parseInt(req.query.size) || 5; // Tamaño de la página, si no se especifica, será 5

        // Calcular el desplazamiento
        const offset = (page - 1) * size;

        // Obtener productos para la página actual
        const listaProductos = await getProductos(offset, size);

        // Determinar el número total de páginas
        const totalProductos = 10; // Total de productos en la base de datos
        const totalPages = Math.ceil(totalProductos / size); // Redondea hacia arriba para asegurarse de que no se pierdan registros

        res.render('products', {
            productos: listaProductos,
            currentPage: page,
            totalPages: totalPages,
            size: size
        });

    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
};

export {
    productos
}