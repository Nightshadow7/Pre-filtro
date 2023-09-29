import { Router } from "express";
import * as usuariosControllers from "../controllers/usuarios.controllers.js";

const router = Router();

router.get(`/`, usuariosControllers.getUsuarios);
router.get(`/:id`, usuariosControllers.getOneUsuario);
router.post(`/`, usuariosControllers.postUsuario);
router.delete(`/:id`, usuariosControllers.deleteUsuario);
router.patch(`/:id`, usuariosControllers.updateUsuario);

export default router;