import { getProductos, profileEnsamblados } from "../models/homeModel.js"
import { registroUser } from "../models/registroModel.js";
import { productos } from "./productosController.js";

const home = async (req, res ) => {
    try {
        const productos = await getProductos();
        const {_token} = req.cookies;

        let autenticado;
        if(_token){
            autenticado=true;
        } else {
            autenticado=false
        }
        res.render('index', {
            productos: productos,
            autenticado: autenticado
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const registro = async (req, res) => {
    try {
        res.render('register');
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const perfilEnsamblado = async (req,res) => {
    try {
        const {id}=req.params
        const ensamblados = await profileEnsamblados(id);
        
        res.render('product-details', {
            componente: ensamblados[0]

        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }

}

const favoritos = async (req, res) => {
    try {
        res.render('favorites')
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const login = async (req, res) => {
    try {
        res.render('login')
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

export {
    home,
    perfilEnsamblado,
    registro, 
    favoritos,
    login
}