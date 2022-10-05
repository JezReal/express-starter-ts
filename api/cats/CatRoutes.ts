import { CatsModel } from "./model/CatsModel";
import { CatsService } from "./service/CatsService";
import express, { NextFunction, Request, Response } from "express";

const router = express.Router();

router.get(
  "/cats",
  async (request: Request, response: Response, next: NextFunction) => {
    response.send(
      await CatsService.getCats()
        .then((cats) => CatsModel.toCatsWithIdDto(cats))
        .catch((error) => {
          next(error);
        })
    );
  }
);

router.get(
  "/cats/:id",
  async (request: Request, response: Response, next: NextFunction) => {
    const cat_id = parseInt(request.params.id);

    if (isNaN(cat_id)) {
      response.status(500);
      response.json({ message: "Invalid cat id" });
      return;
    }

    const cat = await CatsService.getCatById(cat_id);

    if (cat === null) {
      response.status(404);
      response.json({ message: "Cat not found" });
      return;
    }

    response.send(cat);
  }
);

export default router;
