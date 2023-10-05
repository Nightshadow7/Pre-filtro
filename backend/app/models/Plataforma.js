import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PlataformaSchema = new Schema(
  {
    nombrePlataforma: {
      type: String,
      required: true,
    },
    fabricante: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Plataforma = mongoose.model(
  "Plataformas",
  PlataformaSchema,
  "Plataformas"
);

export default Plataforma;
