'use strict'

//Trabajar con ficheros
var fs = require('fs');
var path = require('path');

const Cancion = require('../models/cancionModel')

function crearCancion(req, res){
    var cancion = new Cancion()
    var params = req.body
    
    cancion.titulo = params.titulo
    cancion.duracion = params.duracion
    cancion.genero = params.genero
    cancion.artista = params.artista
    //cancion.archivo = params.archivo --> crearCancion no recibe archivo

    cancion.save()
        .then((cancionGuardada) => {
            if (!cancionGuardada) {
                res.status(404).send({ message: 'no se ha creado exitosamente la cancion' })
            } else {
                res.status(200).send({ cancion: cancionGuardada })
            }
        })
        .catch(err => {
            res.status(500).send({ message: 'Error al guardar cancion' })
        })
}

function eliminarCancion(req,res){
    var idCancion = req.params.id

    Cancion.findByIdAndRemove(idCancion).exec()
    .then((cancionEliminada)=>{
        if(!cancionEliminada){
            res.status(404).send({message:'no se ha eliminado exitosamente la cancion'})
        }else{
            res.status(200).send({cancion:cancionEliminada})
        }
    })
    .catch(err =>{
        res.status(500).send({message:'Error al eliminar cancion'})
    })
}

function obtenerCanciones(req,res){
    Cancion.find((err,canciones)=>{
        if(err){
            res.status(500).send({message: "error en el servidor"
            })
        }else{
            if(!canciones){
                res.status(200).send({
                    message: "no se pudo obtener las canciones"
                })
            }else{
                res.status(200).send({
                    canciones:canciones
                })
            }
        }
    })
}
 
function obtenerFicheroCancion(req,res){
    //nombre fichero
    var songFile = req.params.songFile;
    //ruta archivo
    var path_file = './uploads/canciones/'+songFile;
    //se comprueba si existe
    fs.exists(path_file,function(exists){
        if(exists){
            //devolvemos la cancion
            res.sendFile(path.resolve(path_file));
        }else{
            res.status(200).send({message:"no existe la cancion"});
        }
    });
}

function cargarFicheroCancion(req,res){
    var idCancion = req.params.id;
    var file_name = 'No subido...';

    //se valida si viene el archivo con la variable superglobal files
    if(req.files){
        var file_path = req.files.song.path;
        var file_split = file_path.split('\\');
        //se obtiene nombre del archivo
        var file_name = file_split[2];

        //se obtiene extension fichero
        var exp_split = file_name.split('\.');
        var file_ext = exp_split[1];

        if(file_ext == 'mp3'){
            Cancion.findByIdAndUpdate(idCancion,{song:file_name},(err,cancionActualizada)=>{
                if(err){
                    res.status(500).send({message:'Error en el servidor'});
                }else{
                    if(!cancionActualizada){
                        res.status(404).send({message:'No se ha podido actualizar la cancion'});
                    }else{
                        //devuelve la cancion antes de actualizarse
                        cancionActualizada.song = file_name;
                        res.status(200).send({cancion:cancionActualizada});
                    }
                }
            });
        }else{
            res.status(200).send({message:"Extension del archivo no correcta"});    
        }
    }else{
        res.status(200).send({message:"no ha subido ninguna cancion"});
    }
}


module.exports = {
    crearCancion,
    eliminarCancion,
    obtenerFicheroCancion,
    cargarFicheroCancion,
    obtenerCanciones
}

