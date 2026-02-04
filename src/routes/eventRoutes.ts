import { Router } from "express";
import validation from "../middleware/validation";
import eventSchema from "../schema/event/eventSchema";
import postEvent from "../controller/event/postEvent";

const router = Router();

router.post("/events", postEvent)

export default router;