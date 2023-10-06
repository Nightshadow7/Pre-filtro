import express from "express";
import conectarDB from "./../../config/mongo.js";
import allRoutes from "../routes/index.js";
import cors from "cors";

class Server {
  constructor() {
    this.port = process.env.PORT || 8000; // Establece un puerto predeterminado si no se proporciona PORT
    this.app = express();
    this.routesV1 = "/api";
    this.middlewares();
    this.connectDatabase();
    this.routes();
  }

  async connectDatabase() {
    await conectarDB();
  }

  middlewares() {
    // Configura las cabeceras CORS adecuadas
    this.app.use(cors());

    // Habilita el análisis de cuerpos JSON
    this.app.use(express.json());
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running on port http://localhost:${this.port}`);
    });
  }

  routes() {
    this.app.use(this.routesV1, allRoutes);
  }
}

export default Server;


