import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PerfilUsuarioSchema = new Schema(
  {
    usuario: {
      type: Schema.Types.ObjectId,
      ref: "Usuarios",
      required: true,
    },
    nombres: {
      type: String,
      required: true,
    },
    apellidos: {
      type: String,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      required: true,
    },
    pais: {
      type: String,
      required: true,
    },
    avatarPerfil: {
      type: String,
      required: true,
    },
    estado:{
      type: Boolean,
      required: false,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PerfilUsuario = mongoose.model(
  "PerfilesUsuarios",
  PerfilUsuarioSchema,
  "PerfilesUsuarios"
);

export default PerfilUsuario;
