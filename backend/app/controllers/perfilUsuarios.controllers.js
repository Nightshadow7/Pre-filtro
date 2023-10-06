import PerfilesUsuarios from "../models/PerfilUsuario.js";
import Usuario from "../models/Usuario.js";
import { date } from '../helpers/DateValidator.js';
import { response } from "express";
import { httpError } from "../helpers/handleError.js";

export const getPerfil_Usuarios = async (req, res ) => {
  try {
    const data = await PerfilesUsuarios.find()
    .populate('usuario', 'nombreUsuario ')
    res.json({
        alquiler: data
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const getOnePerfil_Usuario = async (req, res = response) => {
  try {
    const { id } = req.params;
    const onePerfil_Usuario = await PerfilesUsuarios.findById(id).populate(
      "usuario",
      "-contraseña"
    );

    res.json(onePerfil_Usuario);
  } catch (err) {
    httpError(res, err);
  }
};
export const postPerfil_Usuario = async (req, res = response) => {
  try {
    const { usuario, fecha_nacimiento, ...body } = req.body;
    const [nacimiento, usuarioDB, nombre] = await Promise.all([
      date(fecha_nacimiento),
      PerfilesUsuarios.findOne({ usuario: body.usuario }),
      Usuario.findOne({ _id: usuario }),
    ]);
    if (usuarioDB) {
      return res.status(400).json({
        msg: `El usuario ${nombre.nombre}, ya posee datos creados`,
      });
    }
    const data = {
      usuario: usuario,
      fecha_nacimiento: nacimiento,
      ...body,
    };
    const usuarios = new PerfilesUsuarios(data);
    await usuarios.save();
    res.status(201).json(usuarios);
  } catch (err) {
    httpError(res, err);
  }
};
export const deletePerfil_Usuario = async (req, res = response) => {
  try {
    const { id } = req.params;
    const Perfil_UsuarioEliminado = await PerfilesUsuarios.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true }
    );
    res.status(200).json({
      msg: `El usuario "${Perfil_UsuarioEliminado.nombres}", fue eliminado satisfactoriamente`,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const updatePerfil_Usuario = async (req, res = response) => {
  try {
    const updatedPerfil_Usuario = await PerfilesUsuarios.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({ status: "OK", data: updatedPerfil_Usuario });
  } catch (err) {
    httpError(res, err);
  }
};
