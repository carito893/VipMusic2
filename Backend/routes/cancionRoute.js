'use strict'
const app = require('express')

var cancionController = require('../controllers/cancionController');
var multipart = require('connect-multiparty');
var md_upload = multipart({
    uploadDir: './uploads/canciones'});

var api = app.Router()

 api.post('/cancion',cancionController.crearCancion);
 api.delete('/cancion/:id',cancionController.eliminarCancion);
 api.get('/canciones',
 cancionController.obtenerCanciones);
 api.post('/cargar-fichero-cancion/:id',
 md_upload,cancionController.cargarFicheroCancion);
 api.get('/obtener-fichero-cancion/:songFile',
 md_upload,cancionController.obtenerFicheroCancion);

 module.exports = api