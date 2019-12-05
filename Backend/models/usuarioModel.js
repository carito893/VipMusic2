const mongoose = require ('mongoose')

var Schema = mongoose.Schema 

var usuarioSchema = Schema({
    nombre: String,
    edad: Number,
    correo: String,
    password: String,
    imagen: String,
    role: {
        type: String,
        default: "regularUser"
    },
})

module.exports = mongoose.model('usuario', usuarioSchema, 'usuarioColeccion')









/* 
//Modulo para crear modelos, es mongoose
const mongoose = require ('mongoose')
//Schema es usado para crear el Esquema de nuestra colección
var Schema = mongoose.Schema 
//Creamos la estructura del Schema
var usuarioSchema = Schema({
    nombre: String,
    edad: Number,
    correo: String,
    password: String,
    imagen: String,
    role: {
        type: String,
        default: "regularUser"
    },
})

//Exportamos el esquema creado para nuestra API
module.exports = mongoose.model('usuario', usuarioSchema, 'usuarioColeccion')

// 1 parámetro es cómo se llama la colección, 2 es para el esquema que se está generando y el 3 es cómo se llama la colección en Mongo */