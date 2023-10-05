import { Router } from "express";
import * as desarrolladoresControllers from "../controllers/desarrolladores.controllers.js";

const router = Router();

router.get(`/`, desarrolladoresControllers.getDesarrolladores);
router.get(`/:id`, desarrolladoresControllers.getOneDesarrollador);
router.post(`/`, desarrolladoresControllers.postDesarrollador);
router.delete(`/:id`, desarrolladoresControllers.deleteDesarrollador);
router.patch(`/:id`, desarrolladoresControllers.updateDesarrollador);

export default router;