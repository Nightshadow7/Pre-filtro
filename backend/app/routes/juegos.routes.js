import { Router } from "express";
import * as juegosControllers from "../controllers/juegos.controllers.js";

const router = Router();

router.get(`/`, juegosControllers.getJuegos);
router.get(`/:id`, juegosControllers.getOneJuego);
router.post(`/`, juegosControllers.postJuego);
router.delete(`/:id`, juegosControllers.deleteJuego);
router.patch(`/:id`, juegosControllers.updateJuego);

export default router;