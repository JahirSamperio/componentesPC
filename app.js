import {config} from 'dotenv';
import Server from './server/server.js';
// Ejecuta la función config() para cargar las variables de entorno desde el archivo .env
config();

const server = new Server();

//la funcion listen viene de la ckase server
server.listen();