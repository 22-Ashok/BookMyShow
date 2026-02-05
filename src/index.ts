import "dotenv/config"
import express from "express"
import userRoutes from "./routes/userRoutes"
import eventRoutes from "./routes/eventRoutes"
import venueRoutes from "./routes/venueRoutes"
import errorHandler from "./middleware/errorHandler";
import {initMail} from "./lib/mail"

const app = express();

app.use(express.json());
app.use("/", userRoutes);
app.use("/", eventRoutes);
app.use("/", venueRoutes);


// error handler route
app.use(errorHandler)

initMail();
app.listen(process.env.PORT || 8000, () => console.log("app is listening"))