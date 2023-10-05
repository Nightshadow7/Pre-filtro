import Juego from "./../models/Juego.js";
import Usuario from "./../models/Usuario.js";
import { date } from './../helpers/DateValidator.js';
import { response } from "express";
import { httpError } from "./../helpers/handleError.js";

export const getJuegos = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0 } = req.query;
    const query = {
      estado: true,
    };
    const [total, juegos_Disponibles] = await Promise.all([
      Juego.countDocuments(query),
      Juego.find(query)
        .populate("desarrollador", "-estado")
        .skip(Number(desde))
        .limit(Number(hasta)),
    ]);
    res.json({
      total,
      juegos_Disponibles,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const getOneJuego = async (req, res = response) => {
  try {
    const { id } = req.params;
    const onePerfil_Usuario = await Juego.findById(id).populate(
      "desarrollador",
      "-estado"
    );
    res.json(onePerfil_Usuario);
  } catch (err) {
    httpError(res, err);
  }
};
export const postJuego = async (req, res = response) => {
  try {
    const { usuario, fecha_nacimiento, ...body } = req.body;
    const [nacimiento, usuarioDB, nombre] = await Promise.all([
      date(fecha_nacimiento),
      Juego.findOne({ usuario: body.usuario }),
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
    const usuarios = new Juego(data);
    await usuarios.save();
    res.status(201).json(usuarios);
  } catch (err) {
    httpError(res, err);
  }
};
export const deleteJuego = async (req, res = response) => {
  try {
    const { id } = req.params;
    const JuegoEliminado = await Juego.findByIdAndUpdate(
      id,
      { estado: false },
      { new: true }
    );
    res.status(200).json({
      msg: `El usuario "${JuegoEliminado.nombre}", fue eliminado satisfactoriamente`,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const updateJuego = async (req, res = response) => {
  try {
    const updatedJuego = await Juego.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({ status: "OK", data: updatedJuego });
  } catch (err) {
    httpError(res, err);
  }
};
