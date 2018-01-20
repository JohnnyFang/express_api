"Use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require('validator');

/*
* Contenido (Texto, máximo 280 caracteres)
* Autor (Texto, máximo 32 caracteres)
* Ubicación (Texto, máximo 64 caracteres)
*/

var emailValidator = [
  validate({
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email',
      isAsync: false
    }),
    validate({
      validator: 'isLength',
      arguments: [1,64],
      message: 'correo Max. 64 caracteres'
    })
]

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const PostSchema = new Schema({
  content: {
      type: String,
      require: true,
      validate: validate({
        validator: 'isLength',
        arguments: [1,280],
        message: ' Max. 32 caracteres'
      })
  },
  user: {
      type: String,
      require: true,
      validate: validate({
        validator: 'isLength',
        arguments: [1,64],
        message: ' Max. 32 caracteres'
      })
  },
  location: {
      type: String,
      require: true,
      validate: emailValidator
  }
}, {
  timestamps: true
}
);

module.exports = mongoose.model("post", PostSchema);
