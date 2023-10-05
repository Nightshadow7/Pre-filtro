import BibliotecaUsuario from "./../models/Biblioteca.js";
import Usuario from "./../models/Usuario.js";
import Juego from "../models/Juego.js";
import { date } from "./../helpers/DateValidator.js";
import { response } from "express";
import { httpError } from "./../helpers/handleError.js";

export const getBibliotecas = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0 } = req.query;
    const [total, biblioteca] = await Promise.all([
      BibliotecaUsuario.countDocuments(),
      BibliotecaUsuario.find()
        .populate("usuario", "-contraseña -estado")
        .populate({
          path: "juegoAdquirido",
          select: "-estado",
          populate: [
            {
              path: "desarrollador",
              select: ["-estado"],
            },
          ],
        })
        .skip(Number(desde))
        .limit(Number(hasta)),
    ]);
    res.json({
      total,
      biblioteca,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const getOneBiblioteca = async (req, res = response) => {
  try {
    const { id } = req.params;
    const onePerfil_Usuario = await BibliotecaUsuario.findById(id)
      .populate("usuario", "-contraseña -estado")
      .populate({
        path: "juegoAdquirido",
        select: "-estado",
        populate: [
          {
            path: "desarrollador",
            select: ["-estado"],
          },
        ],
      })
    res.json(onePerfil_Usuario);
  } catch (err) {
    httpError(res, err);
  }
};
export const postBiblioteca = async (req, res = response) => {
  try {
    const { usuario, juegoAdquirido, fechaAdquisicion } = req.body;
    const [usuarioDB, juego, fecha] = await Promise.all([
      Usuario.findOne({ _id: usuario }),
      Juego.findOne({ _id: juegoAdquirido }),
      date(fechaAdquisicion),
    ]);
    if (!usuarioDB && !juego) {
      return res.status(400).json({
        msg: `los datos registrados no son validos`,
      });
    } else if (!usuarioDB) {
      return res.status(400).json({
        msg: `El usuario ingresado no es valido`,
      });
    } else if (!juego) {
      return res.status(400).json({
        msg: `El juego ingresado no es valido`,
      });
    };
    const data = {
      usuario,
      juegoAdquirido,
      fecha_nacimiento: fecha,
    };
    const usuarios = new BibliotecaUsuario(data);
    await usuarios.save();
    res.status(201).json(usuarios);
  } catch (err) {
    httpError(res, err);
  }
};
export const deleteBiblioteca = async (req, res = response) => {
  try {
    const { id } = req.params;
    const BibliotecaEliminado = await BibliotecaUsuario.findByIdAndUpdate(
      id,
      { Estado: false },
      { new: true }
    );
    res.status(200).json({
      msg: `El usuario "${BibliotecaEliminado.nombre}", fue eliminado satisfactoriamente`,
    });
  } catch (err) {
    httpError(res, err);
  }
};
export const updateBiblioteca = async (req, res = response) => {
  try {
    const updatedBiblioteca = await BibliotecaUsuario.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({ status: "OK", data: updatedBiblioteca });
  } catch (err) {
    httpError(res, err);
  }
};
