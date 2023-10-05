import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PrecioJuegoSchema = new Schema(
  {
    juego: {
      type: Schema.Types.ObjectId,
      ref: "Juegos",
      required: true,
    },
    precioActual: {
      type: Number,
    },
    moneda: {
      type: String,
      required: true,
    },
    descuento: {
      type: Number,
      required: true,
      min: 1,
      max: 99,
    },
    precioOriginal: {
      type: Number,
      required: true,
    },
    fechaActualizacionPrecio: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PrecioJuego = mongoose.model(
  "PreciosJuegos",
  PrecioJuegoSchema,
  "PreciosJuegos"
);

export default PrecioJuego;
