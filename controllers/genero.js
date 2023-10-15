const Genero = require('../models/genero')
const { request, response } = require('express')

/**
 * Crear genero
 */
const createGenero = async (req = request, res = response) => {// endpoint
    const { nombre, descripcion} = req.body
    try {
        const generoDB = await Genero.findOne({ nombre })

        if(generoDB) {
            return res.status(400).json({msj: 'Ya existe nombre'})
        }// select * from generos where nombre = ?
        
        const datos = {
            nombre,
            descripcion
        }
    
        const genero = new Genero(datos)
    
        await genero.save()
    
        return res.status(201).json(genero)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

/**
 * consultar todos los géneros
 */

const getGeneros = async (req = request, res = response) => {// endpoint
    try {
        const { estado } = req.query

        const generos = await Genero.find({ estado })

        return res.json(generos)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}

/**
 * Consultar un género por su ID
 */

/**
 * Actualizar genero
 */
const updateGenero = async (req = request, res = response) =>{
    const { descripcion} = req.body

    try{
        const generoDB = await Genero.updateOne({descripcion},{
            $set: {
                descripcion
            }
        }
            
            )
            if(generoDB) {
                return res.status(400).json({msj: 'No se pudo modificar descripción'})
            }

            const datos = {
                nombre,
                descripcion
            }
            const genero = new Genero(datos)
            //await generoDB.save()
        
            return res.status(201).json(genero)
    
    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }

    }
    

/**
 * Borrar un género
 */
const deleteGeneros = async (req = request, res = response) => {// endpoint
    try {
        const { _id } = req.body

        const generos = await Genero.deleteOne({ _id })

        return res.json(generos)

    } catch(error) {
        console.log(error)
        return res.status(500).json({msj: error})
    }
}
module.exports = {
    createGenero,
    getGeneros,
    updateGenero,
    deleteGeneros
}