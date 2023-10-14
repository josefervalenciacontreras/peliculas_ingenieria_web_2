//Este archivo maneja las reglas del negocio, consultas, actualizaciones, borrados y se van
// a utilizar los modelos

const testing = (req, res) => { //Esto se llama endpoint o punto final
    return res.json({
        msg: 'OK'
    })
}

module.exports = {testing}