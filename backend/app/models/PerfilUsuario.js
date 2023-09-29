import mongoose from "mongoose";
import {Schema} from 'mongoose';

const Perfil_UsuariosSchema = new mongoose.Schema(
  {
    usuario:{
      type: Schema.Types.ObjectId,
      ref: 'Usuarios',
      required: true,
      unique: true,
    },
    nombres:{
      type: String,
      required: true,
      trim: true,
    },
    apellidos: {
      type: String,
      required: true
    },
    fecha_nacimiento:{
      type: Date,
      required: true,
      trim: true,
    },
    pais:{
      type: String,
      required: true,
      trim: true,
    },
    nombre_avatar:{
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true, 
    versionKey: false
  }
);

const Perfil_Usuario = mongoose.model( 'Perfil_Usuarios' , Perfil_UsuariosSchema , 'Perfil_Usuarios');

export default Perfil_Usuario;