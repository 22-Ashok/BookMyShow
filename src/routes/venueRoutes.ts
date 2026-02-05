import { Router } from "express";
import userAuth from "../middleware/userAuth";
import validation from "../middleware/validation";
import addVenue from "../controller/venue/addVenue";
import venueSchema from "../schema/venueSchema";

const router = Router();

router.post("/venues", userAuth, validation(venueSchema), addVenue);

export default router;