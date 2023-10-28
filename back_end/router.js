import { Router } from "express";
import * as controller from "./controller.js";
const router=Router();
router.route("/register").post(controller.AddMovie);
router.route("/movies").get(controller.getMovie);
router.route("/movieDetails/:id").post(controller.getDetails);
export default router;