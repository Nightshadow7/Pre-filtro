import mongoose from "mongoose";
const Schema = mongoose.Schema;

const DesarrolladorSchema = new Schema(
  {
    nombreDesarrollador: {
      type: String,
      required: true,
      unique: true,
    },
    paisOrigen: {
      type: String,
      required: true,
    },
    estado:{
      type: Boolean,
      required: false,
      default: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Desarrollador = mongoose.model(
  "Desarrolladores",
  DesarrolladorSchema,
  "Desarrolladores"
);

export default Desarrollador;
