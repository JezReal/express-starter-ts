import express, { Request, Response } from "express";
import catRoutes from "./cats/CatRoutes";

const router = express.Router();

router.get("/", (request: Request, response: Response) => {
  response.json({ message: "Api index" });
});

router.use("/", catRoutes);

export default router;
