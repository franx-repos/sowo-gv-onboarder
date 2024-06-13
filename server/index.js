import express from "express";
import "./db/server.js";
import booksRouter from "./routes/booksRouter.js";
import { errorHandler } from "./middlewares/ErrorHandler.js";

const app = express();
const PORT = 8001;

app.use(express.json());

//ROUTES

app.use("/books", booksRouter);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
