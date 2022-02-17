import { Router } from "express";

import * as HomeController from "../controllers/homeController";
import * as InfoController from "../controllers/infoController";
import * as UserController from "../controllers/userController";

const router = Router();

router.get("/", HomeController.home);
router.post("/user/store", UserController.store);
router.get("/user/increment/:id", UserController.increment);
router.get("/user/decrement/:id", UserController.decrement);
router.get("/user/destroy/:id", UserController.destroy);

router.get("/contato", InfoController.contato);
router.get("/sobre", InfoController.sobre);

router.get("/nome", UserController.nome);
router.get("/idade", UserController.idadeForm);
router.post("/idade-resultado", UserController.idadeAction);

export default router;
