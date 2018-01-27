"Use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
* Contenido (Texto, máximo 280 caracteres)
* Autor (Texto, máximo 32 caracteres)
* Ubicación (Texto, máximo 64 caracteres)
*/

const PostSchema = new Schema({
  content: {
      type: String,
      require: true
  },
  // TODO change author field to user
  author: {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },
  location: {
      type: String,
      require: true
  }
}, {
  timestamps: true
}
);

module.exports = mongoose.model("post", PostSchema);
