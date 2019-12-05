'use strict'

const express = require('express');

const bodyParser = require('body-parser');
var app = express();
var usuariosRoutes = require('./routes/usuarioRoute');
var cancionesRoutes = require('./routes/cancionRoute');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    //permitir acceso a nuestra api desde todos los dominios
    res.header('Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, X-Requested-With,Content-Type, Accept, Access-Control-Allow-Request-Method');
        //cabeceras necesarias para que el api
        //a nivel de ajax funcione
        res.header('Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE');
        //metodos mas comunes
        res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
        next();//finaliza middleware
    })

app.use('/api',usuariosRoutes);
app.use('/api',cancionesRoutes);

module.exports = app;







/* 
'use strict'

//Llamado de los módulos a utilizar
const express = require('express');

//Modulo encargado de estrablecer el tipo de información que permitirá nuestra API
const bodyParser = require('body-parser');
var app = express();
var usuariosRoutes = require('./routes/usuarioRoute');
var cancionesRoutes = require('./routes/cancionRoute');

//Especificar el tipo de datos que se aceptará en el API
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//La ruta a las colecciones
app.use('/api',usuariosRoutes);
app.use('/api',cancionesRoutes);

module.exports = app;
 */