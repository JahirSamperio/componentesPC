import express from 'express';
import { dbConnection } from '../db/conexion.js';
import cors from 'cors';
import routes from '../routes/routes.js'
import fileUpload from 'express-fileupload'; 

class Server {
    constructor() {
        this.app = express();

        this.port = process.env.PORT;

        //conectar base de datos
        this.conectarBD();

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();

        this.views();
    }

    async conectarBD() {
        try {
            dbConnection();
            console.log("Base de datos en linea");
        } catch (error) {
            throw new Error(error);
        }
    }
    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        // Middleware para analizar solicitudes con datos codificados en URL
        this.app.use(express.urlencoded({ extended: true }));

        //Habilitar cookie parser
        // this.app.use(cookieParser());

        //Habilitar CSRF
        // this.app.use(csrf({cookie: true}));
        //carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        })); 

    }

    routes() {
        this.app.use(routes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto', this.port);
        })
    }

    views(){
        //Habilitar HTML
        this.app.set('view engine', 'ejs')
        // Define the directory where your HTML files (views) are located
        this.app.set('views', 'views')

        //Carpeta publica
        this.app.use(express.static('public'))
    }
}

export default Server;