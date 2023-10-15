/*Con el modelo ORM (object Relation Mapping) mapeado relacional de objetos se va a mapear las colecciones
que están dentro de mi base de datos Mongo DB y así poder manipularlas sin necesidad de sentencias
SQl sino con código*/

//Importamos con destructuring la clase Schema y la función model de la librería de mongoose
const { Schema, model} = require('mongoose')

//Instanciamos la clase Schema para pasarle el objeto con los atributos de la colección o tabla de mi BD
const MediaSchema = Schema({
    serial:{
        type: String,
        require: [true, 'Serial requerido'],
        unique: [true, 'Media ya existe']
    },
    titulo:{
        type: String,
        require: [true, 'Título requerido']
    },
    url:{
        type: String,
    },
    imagen: {
        type: String
    },
    sinopsis:{
        type: String,
        Require: [true, 'Agregue una sinopsis']
    },
    anhoEstreno:{
        type: String,
        require: [true, 'Año de estreno requerido']

    },
    fechaCreacion: {
        type: Date,
        default: new Date()

    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    descripcion: {
        type: String
    },
    genero:{
        //Referencia a la llave foránea de un esquema
        type: Schema.Types.ObjectId,
        //Se referencia la colección(tabla) con la que se relaciona y se pone el nombre del modelo
        ref: 'Genero',
        require: true
    },
    director:{
        type: Schema.Types.ObjectId,
        ref: 'Director',
        require: true
    },
    productora:{
        type: Schema.Types.ObjectId,
        ref: 'Productora',
        require: true
    },
    tipo:{
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        require: true
    }
})
//La función model de la librería "mongoose" recibe dos parámetros: 1: el nombre del modelo y 2: esquema
//al que pertenece el modelo
module.exports = model('Media',MediaSchema)