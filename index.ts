import dotenv from "dotenv";
import express, { Express } from "express";
import apiRoutes from "./api/ApiRoutes";
import indexRoutes from "./IndexRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use("/", indexRoutes);
app.use("/api", apiRoutes);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
