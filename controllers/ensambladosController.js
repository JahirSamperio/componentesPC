import { getComponentes, profileComponentes } from "../models/ensambladosModel.js";
import { conexion } from "../db/conexion.js";

const getCategorias = () => {
    return new Promise((resolve, reject) => {
        conexion.query('SELECT DISTINCT categoria FROM componentes', function(error, result) {
            if (error) return reject(error);
            return resolve(result.map(item => item.categoria));
        });
    });
}

const callComponentes = async (req, res) => {
    try {
        const categories = await getCategorias(); // Obtener categorías de la base de datos
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 5;

        const offset = (page - 1) * size;
        const componentes = await getComponentes(offset, size);

        const hasNextPage = componentes.length === size;

        res.render('customization', {
            categories: categories,
            componentes: componentes,
            currentPage: page,
            hasNextPage: hasNextPage,
            size: size
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error en el servidor" });

    }
}

export {
    callComponentes,
    getCategorias
}
