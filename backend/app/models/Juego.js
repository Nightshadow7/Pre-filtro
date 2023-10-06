import mongoose from "mongoose";
const Schema = mongoose.Schema;

const JuegoSchema = new Schema(
  {
    tituloJuego: {
      type: String,
      required: true,
      unique: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    desarrollador: {
      type: Schema.Types.ObjectId,
      ref: "Desarrolladores",
      required: true,
    },
    fechaLanzamiento: {
      type: Date,
      required: true,
    },
    clasificacionEdades: {
      type: String,
      required: true,
    },
    estado: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Juego = mongoose.model("Juegos", JuegoSchema , "Juegos");

export default Juego;
