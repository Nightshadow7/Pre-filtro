import Desarrollador from "./../models/Desarrollador.js";
import { response } from "express";
import { httpError } from "./../helpers/handleError.js";

export const getDesarrolladores = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0 } = req.query;
    const query = {
      estado: true,
    };
    const [total, desarrolladores] = await Promise.all([
      Desarrollador.countDocuments(query),
      Desarrollador.find(query).skip(Number(desde)).limit(Number(hasta)),
    ]);
    res.json({
      total,
      desarrolladores,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const getOneDesarrollador = async (req, res = response) => {
  try {
    const { id } = req.params;
    const oneDesarrollador = await Desarrollador.findById(id);
    res.json(oneDesarrollador);
  } catch (err) {
    httpError(res, err);
  }
};
export const postDesarrollador = async (req, res = response) => {
  try {
    const { nombreDesarrollador, ...body } = req.body;
    const [desarrolladorDB] = await Desarrollador.findOne({
      nombreDesarrollador: body.nombreDesarrollador,
    });
    if (desarrolladorDB) {
      return res.status(400).json({
        msg: `El desarrollador ${desarrolladorDB.nombreDesarrollador}, ya se encuentra registrado`,
      });
    }
    const data = {
      nombreDesarrollador,
      ...body,
    };
    const usuarios = new Desarrollador(data);
    await usuarios.save();
    res.status(201).json(usuarios);
  } catch (err) {
    httpError(res, err);
  }
};
export const deleteDesarrollador = async (req, res = response) => {
  try {
    const { id } = req.params;
    const DesarrolladorEliminado = await Desarrollador.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true }
    );
    res.status(200).json({
      msg: `El usuario "${DesarrolladorEliminado.nombreDesarrollador}", fue eliminado satisfactoriamente`,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const updateDesarrollador = async (req, res = response) => {
  try {
    const { nombreDesarrollador, ...body } = req.body;
    const [desarrolladorDB] = await Desarrollador.findOne({
      nombreDesarrollador: body.nombreDesarrollador,
    });
    if (desarrolladorDB) {
      return res.status(400).json({
        msg: `El desarrollador ${desarrolladorDB.nombreDesarrollador}, no puede tener un nombre de usuario ya registrado`,
      });
    }
    const data = {
      nombreDesarrollador,
      ...body,
    };
    const updatedDesarrollador = await Desarrollador.findOneAndUpdate(
      { _id: req.params.id },
      data,
      { new: true }
    );
    res.json({ status: "OK", data: updatedDesarrollador });
  } catch (err) {
    httpError(res, err);
  }
};
