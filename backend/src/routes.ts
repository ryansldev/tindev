import { Router } from "express";
import { DevController } from "./controllers/DevController";

const router = Router();

router.post("/devs", new DevController().store);

export { router };
