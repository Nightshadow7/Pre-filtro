import { Router } from "express";
import * as bibliotecaControllers from "../controllers/bibliotecas.controllers.js";

const router = Router();

router.get(`/`, bibliotecaControllers.getBibliotecas);
router.get(`/:id`, bibliotecaControllers.getOneBiblioteca);
router.post(`/`, bibliotecaControllers.postBiblioteca);
router.delete(`/:id`, bibliotecaControllers.deleteBiblioteca);
router.patch(`/:id`, bibliotecaControllers.updateBiblioteca);

export default router;