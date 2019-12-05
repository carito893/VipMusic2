'use strict'

const app = require('express')

var usuarioController = require('../controllers/usuarioController')
var multipart = require('connect-multiparty');
var md_upload = multipart(
    {uploadDir : './uploads/usuario'}
    );

var api = app.Router();

api.post('/cargar-imagen-usuario/:id',
md_upload,usuarioController.cargarImagenUsuario);
api.get('/obtener-imagen-usuario/:imageFile',
md_upload,usuarioController.obtenerImagenUsuario);
 api.post('/usuario',usuarioController.crearUsuario);
 api.post('/usuario-login',usuarioController.obtenerUsuario);
 api.put('/usuario/:id',usuarioController.actualizarUsuario);
 api.delete('/usuario/:id',usuarioController.eliminarUsuario);
 
 module.exports = api










/*  'use strict'

//Llamamos el módulo de express para gestionar las rutas de nuestra API
const app = require('express')
//Llamar el controlador de cada ruta
var usuarioController = require('../controllers/usuarioController')
//Instanciamos las rutas
var api = app.Router()

 //Establecer las rutas de nuestra API
 api.post('/usuario',usuarioController.crearUsuario)
 api.put('/usuario/:id',usuarioController.actualizarUsuario)
 api.delete('/usuario/:id',usuarioController.eliminarUsuario)

 module.exports = api */