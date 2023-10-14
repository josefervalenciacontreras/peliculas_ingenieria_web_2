// las rutas post, put. Etc
//Con destructuring se importa lo que tiene la clase Router de la librería expresss
const {Router} = require('express')

//Importo la función testing desde ell archivo test de la carpeta controller
const {testing} = require('../controllers/test')
//Con el constructor de la clase Router se realiza una instancia router
const router = Router()

//Se realiza la petición get que es un verbo http
//req = request de petición y res = response de respuesta
//responde en formato json a un objeto
//llamo a la función testing que contiene la lógica del endpoint
router.get('/',testing)

module.exports = router