//Aquí arranca la Api Rest

console.log('Hola José Dios te bendiga')

const app = require('./app')
//Se asigna a la aplicación un puerto de escucha donde va a arrancar la app que es el mismo del documento .env
// En caso de que no coja el puerto, se pone que igualmente se le asigne el puerto 4000
app.set('port',process.env.PORT || 4000)





// El listen recibe un valor que es el puerto de escucha y un call back al que se le asigna el arranque del servidor
// El call back siempre se ejecuta después de algo
//Se usan las `` template string para concatenar un string con una variable
app.listen(app.get('port'), () =>{console.log(`El servidor arrancó: ${app.get('port')}`)})