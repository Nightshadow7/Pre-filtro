import { Router } from "express";
import * as perfilUsuariosControllers from "../controllers/perfil_usuarios.controllers.js";

const router = Router();

router.get(`/`, perfilUsuariosControllers.getPerfil_Usuarios);
router.get(`/:id`, perfilUsuariosControllers.getOnePerfil_Usuario);
router.post(`/`, perfilUsuariosControllers.postPerfil_Usuario);
router.delete(`/:id`, perfilUsuariosControllers.deletePerfil_Usuario);
router.patch(`/:id`, perfilUsuariosControllers.updatePerfil_Usuario);

export default router;