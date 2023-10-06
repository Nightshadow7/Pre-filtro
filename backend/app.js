import dotenv from "dotenv";
import Server from "./app/models/server.js";

dotenv.config();
const server = new Server();

server.listen();