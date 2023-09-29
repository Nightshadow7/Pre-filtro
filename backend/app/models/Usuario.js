import mongoose from "mongoose";
import {Schema} from 'mongoose';

const UsuarioSchema = new mongoose.Schema(
  {
    nombreUsuario:{
      type: String,
      required: [true, 'El nombre de usuario es Obligatoria'],
    },
    correo:{
      type: String,
      required: [true, 'Ingrese un correo valido'], 
      trim: true,
      unique: true
    },
    contraseña: {
      type: String,
      required: true
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true
    }
  },
  {
    timestamps: true, 
    versionKey: false
  }
);

const Usuario = mongoose.model( 'Usuarios' , UsuarioSchema , 'Usuarios');

export default Usuario;