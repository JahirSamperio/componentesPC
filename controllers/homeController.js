import { getProductos, profileEnsamblados } from "../models/homeModel.js"
import { registroUser } from "../models/registroModel.js";
import { productos } from "./productosController.js";
import { agregar, favorites } from "../models/favoritosModel.js";
import { cart } from "../models/cartModel.js";
import jwt from 'jsonwebtoken';
import {config} from 'dotenv';
config();

const home = async (req, res ) => {
    try {
        const productos = await getProductos();
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

        res.render('index', {
            productos: productos,
            autenticado: autenticado,
            token: tokenId
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
        const {id}=req.params
        const ensamblados = await profileEnsamblados(id);

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
        console.log(tokenId);
        res.render('register',  {
            autenticado: autenticado,
            token: tokenId 
        });
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
        console.log(tokenId);
        
        res.render('product-details', {
            componente: ensamblados[0],
            autenticado: autenticado,
            token: tokenId

        })
    } catch (error) {
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }

}

const favoritos = async (req, res) => {
    try {
        const {_token} = req.cookies;

        let tokenId;
        let autenticado;
        let favorite;
        if(_token){
            autenticado=true;
            const token = jwt.verify(_token, process.env.JWT_SECRET);
            tokenId = token.id;

            //Buscar favoritos por medio del id 
            favorite = await favorites(tokenId);
        } else {
            autenticado=false
        }
        res.render('favorites', {
            favoritos: favorite,
            autenticado: autenticado,
            token: tokenId
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const login = async (req, res) => {
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
        res.render('login', {
            autenticado: autenticado,
            token: tokenId
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Error en el servidor"
        })
    }
}

const shopping_cart = async(req, res) => {
    try {
        const {_token} = req.cookies;

        let carrito;
        let tokenId;
        let autenticado;
        if(_token){
            autenticado=true;
            const token = jwt.verify(_token, process.env.JWT_SECRET);
            tokenId = token.id;
            carrito = await cart(tokenId)
        } else {
            autenticado=false
        }



        res.render('cart', {
            carrito: carrito,
            autenticado: autenticado,
            token: tokenId
        })
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
    login,
    shopping_cart
}