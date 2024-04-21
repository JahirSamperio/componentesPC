import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config({path: '.env'})

const conexion = mysql.createConnection({
    host: process.env.BD_HOST,
    database: process.env.BD_NOMBRE,
    user: process.env.BD_USER,
    password: process.env.BD_PASSWORD,
});

const dbConnection = () => {
    conexion.connect(function (err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack);
            return;
        }
        console.log('Conectado con el identificador ' + conexion.threadId);
    });
}

export {
    conexion, 
    dbConnection
}