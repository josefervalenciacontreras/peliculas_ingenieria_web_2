const { Router } = require('express')
const {createGenero, getGeneros, updateGenero, deleteGeneros} = require('../controllers/genero')

const router = Router()

/**
 * Crear genero
 */
router.post('/', createGenero)

/**
 * consultar todos los géneros
 */
router.get('/', getGeneros)
/**
 * Consultar un género por su ID
 */

/**
 * Actualizar genero
 */
router.post('/', updateGenero)

/**
 * Borrar un género
 */
router.delete('/', deleteGeneros)

module.exports = router