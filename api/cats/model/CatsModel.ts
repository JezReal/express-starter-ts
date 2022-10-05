import { CatsWithIdDto } from "../dto/CatsDto";

export class CatsModel {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  static toCatsWithIdDto(cats: CatsModel[]): Array<CatsWithIdDto> {
    return cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
  }
}
