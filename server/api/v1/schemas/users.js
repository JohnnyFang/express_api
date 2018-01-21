"Use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const validator = require('validator');
//
// var nameValidator = [
//   validate({
//     validator: 'isLength',
//     arguments: [1,32],
//     message: ' Max. 32 caracteres'
//   })
// ];
//
// var emailValidator = [
//   validate({
//       validator: validator.isEmail,
//       message: '{VALUE} is not a valid email',
//       isAsync: false
//     }),
//     validate({
//       validator: 'isLength',
//       arguments: [1,64],
//       message: 'correo Max. 64 caracteres'
//     })
// ]
//
// var validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };

const UserSchema = new Schema({
  firstname: {
      type: String,
      require: true
      // validate: nameValidator
  },
  lastname: {
      type: String,
      require: true
      // validate: nameValidator
  },
  email: {
      type: String,
      require: true
      // validate: emailValidator
  },
  active: {
      type: Boolean,
      default: true,
      require: false
      // validate: emailValidator
  }
}, {
  timestamps: true
}
);

module.exports = mongoose.model("user", UserSchema);
