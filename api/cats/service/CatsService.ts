import { CatsRepository } from "../repository/CatsRepository";
import { CatsModel } from "./../model/CatsModel";

export class CatsService {
  static async getCats(): Promise<CatsModel[]> {
    return await CatsRepository.getCats();
  }

  static async getCatById(id: number): Promise<CatsModel | null> {
    return await CatsRepository.getCatById(id);
  }
}
