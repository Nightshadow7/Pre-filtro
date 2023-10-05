import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ComentarioUsuarioSchema = new Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuarios",
      required: true,
    },
    juegoComentado: {
      type: Schema.Types.ObjectId,
      ref: "Juegos",
      required: true,
    },
    comentario: {
      type: String,
      required: true,
    },
    puntuacion: {
      type: Number,
      min: 1,
      max: 5,
    },
    fechaComentario: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ComentarioUsuario = mongoose.model(
  "ComentariosUsuarios",
  ComentarioUsuarioSchema,
  "ComentariosUsuarios"
);

export default ComentarioUsuario;
