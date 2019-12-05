const mongoose = require ('mongoose')

var Schema = mongoose.Schema 

var cancionSchema = Schema({
    titulo: String,
    duracion: String,
    genero: String,
    artista: String,
    song: String,
})

module.exports = mongoose.model('cancion', cancionSchema, 'cancionColeccion')
