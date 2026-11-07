import { Router } from "express";
import demoRoutes from "../../modules/demo/demo.routes";
import libroRoutes from "../../modules/libro/libro.routes";

const router = Router();

router.use("/demo", demoRoutes);
router.use("/libro", libroRoutes);

export default router;