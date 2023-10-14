
//Importando la librería de la base de datos
const mongoose = require('mongoose')

//Conexión a la base de datos de manera asíncrona con async para las promesas
const conexionMongo = async () =>{

    //Try: Para capturar los errores
    try{
        //Await espera a que se haga la conexión para responder si todo estuvo o no ok y connect la conecta
        //El tema de las promesas resulta de las peticiones que se realizan, como las peticiones pueden demorarse
        //por algunas fallas con el internet, por eso usamos el await que no trabaja sin el async
        await mongoose.connect(process.env.MONGO_URI, {
            
        })
        console.log('conexión ook')
    }catch (e){
        console.log('error conexión', e)
        throw new Error('Error de conexión')
    }

}

//Se exporta como un objeto el metodo de la conexión a bases de datos
//Se instala la librería dotenv para quitar la url de la conexión 
//a la base de datos y revisar las variables de entorno que le dan seguridad a la conexión
module.exports = { conexionMongo }