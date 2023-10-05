import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CategoriaJuegoSchema = new Schema(
  {
    nombreCategoria: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CategoriaJuego = mongoose.model(
  "CategoriasJuegos",
  CategoriaJuegoSchema,
  "CategoriasJuegos"
);

export default CategoriaJuego;
