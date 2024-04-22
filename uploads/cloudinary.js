import {v2 as cloudinary} from 'cloudinary'
import 'dotenv/config'

//Configurando cloudinary
cloudinary.config(process.env.CLOUDINARY_URL);

const uploadCloudinary = async (req) =>{
    //Cargar imagen a cloudinary y extraer url
    try {
        const {imagen} = req.files
        
        // Subir el archivo a Cloudinary y obtener la URL segura
        const {secure_url} = await cloudinary.uploader.upload(
            imagen.tempFilePath, { 
                resource_type: "auto"
            });
            //Retorna la URL en un string
            return secure_url;

    } catch (error) {
        console.error('Error al cargar la imagen a Cloudinary:', error);
        throw new Error('Error al cargar la imagen a Cloudinary');
    }
}

export default uploadCloudinary;