import Usuario from "./../models/Usuario.js";
import { response } from "express";
import { httpError } from "./../helpers/handleError.js";

export const getUsuarios = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0 } = req.query;
    const query = {
      estado: true,
    };
    const [total, usuarios] = await Promise.all([
      Usuario.countDocuments(query),
      Usuario.find(query).skip(Number(desde)).limit(Number(hasta)),
    ]);
    res.json({
      total,
      usuarios,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const getOneUsuario = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneUsuario = await Usuario.findById(id);
    res.json(oneUsuario);
  } catch (err) {
    httpError(res, err);
  }
};
export const postUsuario = async (req, res = response) => {
  try {
    const { nombreUsuario, correoElectronico, ...body } = req.body;
    const [correoDB, nombreUser] = await Promise.all([
      Usuario.findOne({ correoElectronico: body.correoElectronico }),
      Usuario.findOne({ nombreUsuario: body.nombreUsuario }),
    ]);
    if (correoDB && nombreUser) {
      return res.status(400).json({
        msg: `El Usuario ya se encuentra registrado`,
      });
    } else if (correoDB) {
      return res.status(400).json({
        msg: `El Correo ${correoDB.correoElectronico}, ya se encuentra registrado`,
      });
    } else if (nombreUser) {
      return res.status(400).json({
        msg: `El Nombre de Usuario ${nombreUser.nombreUsuario}, ya se encuentra registrado`,
      });
    }
    const data = {
      nombreUsuario,
      correoElectronico,
      ...body,
    };
    const usuario = new Usuario(data);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (err) {
    httpError(res, err);
  }
};
export const deleteUsuario = async (req, res = response) => {
  try {
    const { id } = req.params;
    const usuarioEliminado = await Usuario.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true }
    );
    res.status(200).json({
      msg: `El usuario "${usuarioEliminado.nombre}", fue eliminado satisfactoriamente`,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const updateUsuario = async (req, res = response) => {
  try {
    const { nombreUsuario, correoElectronico, ...body } = req.body;
    const [correoDB, nombreUser] = await Promise.all([
      Usuario.findOne({ correoElectronico: body.correoElectronico }),
      Usuario.findOne({ nombreUsuario: body.nombreUsuario }),
    ]);
    if (correoDB && nombreUser) {
      return res.status(400).json({
        msg: `El Usuario ya se encuentra registrado`,
      });
    } else if (correoDB) {
      return res.status(400).json({
        msg: `El Correo ${correoDB.correoElectronico}, ya se encuentra registrado`,
      });
    } else if (nombreUser) {
      return res.status(400).json({
        msg: `El Nombre de Usuario ${nombreUser.nombreUsuario}, ya se encuentra registrado`,
      });
    }
    const data = {
      nombreUsuario,
      correoElectronico,
      ...body,
    };
    const updatedUsuario = await Usuario.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );
    res.json({ status: "OK", data: updatedUsuario });
  } catch (err) {
    httpError(res, err);
  }
};
