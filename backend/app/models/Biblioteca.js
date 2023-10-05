import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BibliotecaUsuarioSchema = new Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuarios",
      required: true,
    },
    juegoAdquirido: {
      type: Schema.Types.ObjectId,
      ref: "Juegos",
      required: true,
    },
    fechaAdquisicion: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BibliotecaUsuario = mongoose.model(
  "BibliotecasUsuarios",
  BibliotecaUsuarioSchema,
  "BibliotecasUsuarios"
);

export default BibliotecaUsuario;
