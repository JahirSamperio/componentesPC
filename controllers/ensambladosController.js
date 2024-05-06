import { getComponentes } from "../models/ensambladosModel.js";

const callComponentes = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1; // Página actual, si no se especifica, será la primera
        const size = parseInt(req.query.size) || 5; // Tamaño de la página, si no se especifica, será 5

        const offset = (page - 1) * size; // Calcular el desplazamiento
        const componentes = await getComponentes(offset, size); // Obtener componentes para la página actual

        const hasNextPage = componentes.length === size; // Verificar si hay una página siguiente

        res.render('customization', {
            componentes: componentes,
            currentPage: page,
            hasNextPage: hasNextPage,
            size: size // Pasar el tamaño de la página a la vista
        });
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        });
    }
}

export {
    callComponentes
}
