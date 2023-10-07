const app = require('./server')
require('./dataBase')

//Conección del server y con "require('./dataBase')" hace la conección con la base de datos
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'));
})