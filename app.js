//Aquí se van a colocar todos los enpoints con la variable use de  la librería "express"
//Destructuring para importar el objeto de la conexión
const { conexionMongo } = require('./databases/configuration')
//Se llama  a la librería dotenv para poder que funcione la conexión a la base de datos
const dotEnv = require('dotenv').config()
//Se importa al proyecto la librería express
const express = require('express')
//Se instancia un objeto app de la clase o librería express
const app = express()

//importando el documento test de la carpeta routes
const test = require('./routes/test')

conexionMongo()


//End points con la variable use de express la cual es para lo que se llama midelware o capa intermedia
//Buena practica es poner la "v1" versión y un sustantivo "tests" en plurar para poner varios enpoints
//esta ruta es la consulta de postman que es la app que consume la api rest
app.use('/api/v1/tests', test )

//se exporta el documento app
module.exports = app