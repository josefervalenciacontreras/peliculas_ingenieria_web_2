//Este archivo maneja las reglas del negocio, consultas, actualizaciones, borrados y se van
// a utilizar los modelos
const { request, response } = require('express')

const testing = (req = request, res = response) => { //Esto se llama endpoint o punto final
    const { msj, msj2 } = req.query
    return res.json({
        msj: `${msj} ${msj2}`
    })
}

module.exports = {testing}