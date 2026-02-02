import "dotenv/config"
import express from "express"
import userRouter from "./routes/userRoutes"
import errorHandler from "./middleware/errorHandler";
const app = express();

app.use(express.json());
app.use("/", userRouter);

// error handler route
app.use(errorHandler)

app.listen(process.env.PORT || 8000, () => console.log("app is listening"))