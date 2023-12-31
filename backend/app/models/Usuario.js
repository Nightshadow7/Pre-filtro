import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema(
  {
    nombreUsuario: {
      type: String,
      required: true,
      unique: true,
    },
    correoElectronico: {
      type: String,
      required: true,
      unique: true,
    },
    contraseña: {
      type: String,
      required: true,
    },
    fechaRegistro: {
      type: Date,
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

const Usuario = mongoose.model("Usuarios", UsuarioSchema, "Usuarios");

export default Usuario;
