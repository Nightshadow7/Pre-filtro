import PerfilUsuario from "./../models/Usuario.js";
import Usuario from "./../models/Usuario.js";
import { date } from './../helpers/DateValidator.js';
import { response } from "express";
import { httpError } from "./../helpers/handleError.js";

export const getPerfil_Usuarios = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0 } = req.query;
    const query = {
      estado: true,
    };
    const [total, perfil_Usuarios] = await Promise.all([
      PerfilUsuario.countDocuments(query),
      PerfilUsuario.find(query)
        .populate("usuario", "-contraseña -fechaRegistro -estado")
        .skip(Number(desde))
        .limit(Number(hasta)),
    ]);
    res.json({
      total,
      perfil_Usuarios,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const getOnePerfil_Usuario = async (req, res = response) => {
  try {
    const { id } = req.params;
    const onePerfil_Usuario = await PerfilUsuario.findById(id).populate(
      "usuario",
      "-contraseña -fechaRegistro"
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
      PerfilUsuario.findOne({ usuario: body.usuario }),
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
    const usuarios = new PerfilUsuario(data);
    await usuarios.save();
    res.status(201).json(usuarios);
  } catch (err) {
    httpError(res, err);
  }
};
export const deletePerfil_Usuario = async (req, res = response) => {
  try {
    const { id } = req.params;
    const Perfil_UsuarioEliminado = await PerfilUsuario.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true }
    );
    res.status(200).json({
      msg: `El usuario "${Perfil_UsuarioEliminado.nombre}", fue eliminado satisfactoriamente`,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const updatePerfil_Usuario = async (req, res = response) => {
  try {
    const updatedPerfil_Usuario = await PerfilUsuario.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({ status: "OK", data: updatedPerfil_Usuario });
  } catch (err) {
    httpError(res, err);
  }
};
