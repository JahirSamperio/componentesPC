import { getComponentes } from "../models/ensambladosModel.js";

const callComponentes = async (req,res) => {
    try {
        const componentes = await getComponentes()

        res.render('customization', {
            componentes: componentes
        })
    } catch (error) {
        return res.status(500).json({
            error:"Error en el servidor"
        })
    }

}

export {
    callComponentes
}