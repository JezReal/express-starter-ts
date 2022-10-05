import { CatsModel } from "../model/CatsModel";

const cats: CatsModel[] = [
  {
    id: 1,
    name: "kitsu",
  },
  {
    id: 2,
    name: "meow",
  },
  {
    id: 3,
    name: "mingming",
  },
];

export class CatsRepository {
  static async getCats(): Promise<CatsModel[]> {
    return Promise.resolve(cats);
  }

  static async getCatById(id: number): Promise<CatsModel | null> {
    const cat = cats.find((cat) => cat.id === id);

    if (cat) {
      return Promise.resolve(cat);
    }

    return Promise.resolve(null);
  }
}
