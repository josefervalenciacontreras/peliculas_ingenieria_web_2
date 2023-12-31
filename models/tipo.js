/*Con el modelo ORM (object Relation Mapping) mapeado relacional de objetos se va a mapear las colecciones
que están dentro de mi base de datos Mongo DB y así poder manipularlas sin necesidad de sentencias
SQl sino con código*/

//Importamos con destructuring la clase Schema y la función model de la librería de mongoose
const { Schema, model} = require('mongoose')

//Instanciamos la clase Schema para pasarle el objeto con los atributos de la colección o tabla de mi BD
const TipoSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'Nombre tipó requerido'],
        minlength: 1,

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
    }
})
//La función model de la librería "mongoose" recibe dos parámetros: 1: el nombre del modelo y 2: esquema
//al que pertenece el modelo
module.exports = model('Tipo',TipoSchema)