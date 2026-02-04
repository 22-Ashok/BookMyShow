import "dotenv/config"
import express from "express"
import userRouter from "./routes/userRoutes"
import errorHandler from "./middleware/errorHandler";
import {initMail} from "./lib/mail"

const app = express();

app.use(express.json());
app.use("/", userRouter);

// error handler route
app.use(errorHandler)

initMail();
app.listen(process.env.PORT || 8000, () => console.log("app is listening"))