"use strict";
var cache = require('memory-cache');

const logger = require("winston");
/*
* Contenido (Texto, máximo 280 caracteres)
* Autor (Texto, máximo 32 caracteres)
* Ubicación (Texto, máximo 64 caracteres)
* Fecha de creación (Calculada a la hora de crear el contenido)
* Fecha de edición (Actualizada a la hora de editar el contenido)
*/
var local_storage = [];

exports.all = (req, res, next) => {
    res.json(JSON.stringify(local_storage));
};

exports.post = (req, res, next) => {
    logger.info(req.body);
    let user = req.body;
    var new_post;
    var contenido = req.body.contenido
    var autor = req.body.autor;
    var ubicacion = req.body.ubicacion;
    if (!contenido){
      return res.status(422).json({"error":"Campo Contenido no fue encontrado"});
    }
    if (!autor){
      return res.status(422).json({error:"Campo Autor no fue encontrado"});
    }
    if(!ubicacion){
      return res.status(422).json({error:"Campo Ubicacion no fue encontrado"});
    }
    if(contenido.length > 280){
      return res.status(422).json({error:"Campo Contenido excede los 280 caracteres"});
    }
    if(autor.length > 32){
      return res.status(422).json({error:"Campo Autor excede los 32 caracteres"});
    }
    if(ubicacion.length > 64){
      return res.status(422).json({error:"Campo ubicacion excede los 64 caracteres"});
    }
    new_post = {
      contenido: contenido,
      autor: autor,
      ubicacion: ubicacion,
      fecha_creacion: new Date().toLocaleString()
    };
    local_storage.push(new_post);
    res.json(new_post);

};

exports.get = (req, res, next) => {
    logger.info(req.params.id);
    logger.info(req.body);
    let id = req.params.id;
    var max = local_storage.length;
    if(id <= max && id > 0){
      res.json(local_storage[id-1]);
    }else{
      return res.status(422).json({"error":"anuncio no existe"});
    }
};

exports.put = (req, res, next) => {
    logger.info(req.params.id);
    logger.info(req.body);
    let id = req.params.id;
    var contenido = req.body.contenido;
    var autor = req.body.autor;
    var ubicacion = req.body.ubicacion;

    if (local_storage[id-1]){
      var to_update = local_storage[id-1];
      var mod_date = new Date().toLocaleString()
      if(contenido && to_update.contenido != contenido){
        to_update.contenido = contenido;
        to_update.fecha_modificacion = mod_date;
      }
      if(autor && to_update.autor != autor){
        to_update.autor = autor;
        to_update.fecha_modificacion = mod_date;
      }
      if(ubicacion && to_update.ubicacion != ubicacion){
        to_update.ubicacion = ubicacion;
        to_update.fecha_modificacion = mod_date;
      }
      return res.status(200).json(to_update);
    }else{
      return res.status(422).json({"error":"anuncio no existe"});
    }
};

exports.delete = (req, res, next) => {
    logger.info(req.params.id);
    let id = req.params.id;
    if (local_storage[id-1]){
      local_storage.splice(id-1,1);
      return res.status(200).json({"message": 'Anuncio eliminado'});
    }else{
      return res.status(422).json({"error":"anuncio no existe"});
    }
};
