import { Router } from "express";
import { DevController } from "./controllers/DevController";
import { DislikeController } from "./controllers/DislikeController";
import { LikeController } from "./controllers/LikeController";

const router = Router();

router.get("/devs", new DevController().index);
router.post("/devs", new DevController().store);

router.post("/devs/:devId/likes", new LikeController().store);
router.post("/devs/:devId/dislikes", new DislikeController().store);

export { router };
