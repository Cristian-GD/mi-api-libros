import { Router } from "express";
import { LibroController } from "./libro.controller";
import { asyncHandler } from "../../shared/middlewares/asyncHandler";

const router = Router();
const libroController = new LibroController();

router.post("/", asyncHandler(libroController.create));
router.get("/", asyncHandler(libroController.findAll));
router.get("/:id", asyncHandler(libroController.findById));
router.put("/:id", asyncHandler(libroController.update));
router.delete("/:id", asyncHandler(libroController.delete));

export default router;