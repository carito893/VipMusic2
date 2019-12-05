'use strict'

//Lamamos a mongoose para hacer la conexión a la BD
const mongoose = require('mongoose')
const app = require('./app')
var port = 3977

//.connect(parametro1,parametro2) nos permite la conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/bitmusic',(err,res)=>{
    if(err){
        console.log('no se pudo conectar a la BD')
    }else{
        console.log("Conexión a la base de datos")
        //listen() --> forma para inicializar un servidor
        app.listen(port,()=>{
            console.log("Api escuchando en el puerto " + port)
            console.log(`Api escuchando en el puerto ${port}`)
        })
    }
})