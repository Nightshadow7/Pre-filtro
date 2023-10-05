import mongoose from "mongoose";
const Schema = mongoose.Schema;

const OfertaJuegoSchema = new Schema(
  {
    juego: {
      type: Schema.Types.ObjectId,
      ref: "Juegos",
      required: true,
    },
    descuentoOferta: {
      type: Number,
      required: true,
    },
    fechaInicioOferta: {
      type: Date,
      required: true,
    },
    fechaFinalizacionOferta: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OfertaJuego = mongoose.model("OfertasJuegos", OfertaJuegoSchema);

export default OfertaJuego;


//por ahora las ofertas del juego no son necesarias para la primer entrega del proyecto