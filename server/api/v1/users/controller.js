"use strict";
const User = require("./model");

const logger = require("winston");
/*
* Contenido (Texto, máximo 280 caracteres)
* Autor (Texto, máximo 32 caracteres)
* Ubicación (Texto, máximo 64 caracteres)
* Fecha de creación (Calculada a la hora de crear el contenido)
* Fecha de edición (Actualizada a la hora de editar el contenido)
*/

exports.find = (req, res, next, id) => {
    User.findById(id)
          .then( doc => {
            if(doc){
              req.doc = doc;
              next();
            }else{
                res.json({
                    message: "Document not found"
                });
            }
      })
      .catch( err => {
          next(new Error(err));
      });
};

exports.all = (req, res, next) => {
    const limit = Number(req.query.limit) || 10;
    const skip = Number(req.query.skip) || 0;

    User.find({active: true})
        .skip(skip)
        .limit(limit)
        .then( docs => {
          res.json({
            data: docs,
          })
        })
        .catch( err => {
          next(new Error(err));
        });
};


exports.all_inclusive = (req, res, next) => {
    User.find()
        .then( doc => {
          res.json(doc)
        })
        .catch( err => {
          next(new Error(err));
        });
};

exports.post = (req, res, next) => {
    logger.info(req.body);
    let post = req.body;

    let newUser = new User(post);
    newUser.save( (err, post) => {
      if (err){
        next(new Error(err));
      }else{
        res.json(post);
      }
    });
};

exports.get = (req, res, next) => {
    const doc = req.doc;
    res.json(doc);
};

exports.put = (req, res, next) => {
    let document = Object.assign(req.doc, req.body);

    document.save()
            .then(doc => {
              res.json(doc);
            })
            .catch(err => {
              next(new Error(err));
            });
};

exports.delete = (req, res, next) => {
  let document = Object.assign(req.doc, {active:false});

  document.save()
          .then(doc => {
            res.json(doc);
          })
          .catch(err => {
            next(new Error(err));
          });
    // const doc = req.doc;
    //
    // doc.remove()
    //   .then( deleted => {
    //     res.json(deleted);
    //   })
    //   .catch( err => {
    //     next(new Error(err));
    //   })
};
