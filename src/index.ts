import "dotenv/config"
import express from "express"
import userRouter from "./routes/userRoutes"
import eventRouter from "./routes/eventRoutes"
import errorHandler from "./middleware/errorHandler";
import {initMail} from "./lib/mail"

const app = express();

app.use(express.json());
app.use("/", userRouter);
app.use("/", eventRouter);

// error handler route
app.use(errorHandler)

initMail();
app.listen(process.env.PORT || 8000, () => console.log("app is listening"))