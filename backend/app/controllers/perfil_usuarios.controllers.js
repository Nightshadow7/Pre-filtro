import Perfil_Usuario from './../models/Usuario.js';
import Usuario from './../models/Usuario.js';
import { date } from './../models/DateValidator.js';
import { response } from 'express';
import { httpError} from './../helpers/handleError.js'

export const getPerfil_Usuarios = async (req, res = response) => {
  try {
    const { hasta = 10, desde = 0} = req.query;
    const query = { 
      Estado: true 
    };
    const [ total, perfil_Usuarios ] = await Promise.all([
      Perfil_Usuario.countDocuments(query),
      Perfil_Usuario.find(query)
        .skip( Number( desde ) )
        .limit( Number( hasta ) )
    ]);
    res.json({
      total,
      perfil_Usuarios
    });
  } catch (err) {
    httpError(res, err);
  };
};
export const getOnePerfil_Usuario = async (req, res = response) => {
  try {
    const { id } = req.params;
    const onePerfil_Usuario = await Perfil_Usuario.findById( id )
    res.json(onePerfil_Usuario);
  } catch (err) {
    httpError(res, err);
  };
};
export const postPerfil_Usuario = async(req, res = response ) => {
  try {
    const { usuario , fecha_nacimiento , ...body } = req.body;
    const [nacimiento , usuarioDB, nombre] = await Promise.all([
      date(fecha_nacimiento),
      Perfil_Usuario.findOne({ usuario: body.usuario }),
      Usuario.findOne({_id: usuario })
    ]);
    if ( usuarioDB ) {
      return res.status(400).json({
        msg: `El usuario ${ nombre.nombre }, ya posee datos creados`
      });
    };
    const data = {
      usuario,
      fecha_nacimiento: nacimiento,
      ...body
    };
    const usuarios = new Perfil_Usuario( data );
    await usuarios.save();
    res.status(201).json(usuarios);
  } catch (err) {
    httpError(res, err);
  };
};
export const deletePerfil_Usuario = async (req, res = response) => {
  try {
    const { id } = req.params
    const Perfil_UsuarioEliminado = await Perfil_Usuario.findByIdAndUpdate( id, { Estado: false } , { new : true } );
    res.status(200).json({
      msg: `El usuario "${ Perfil_UsuarioEliminado.nombre }", fue eliminado satisfactoriamente`
    })
  } catch (err) {
    httpError(res, err);
  };
};
export const updatePerfil_Usuario = async (req, res = response) => {
  try {
    const updatedPerfil_Usuario = await Perfil_Usuario.findOneAndUpdate({ _id : req.params.id } , req.body , { new : true })
    res.json({ status: 'OK' , data : updatedPerfil_Usuario });
  } catch (err) {
    httpError(res, err);
  };
};