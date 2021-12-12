import { Pantry } from "../shared/pantry.model";

export class MyBarService {
  myBar: Pantry[] = [];

  addToBar() {
    this.myBar.slice();
  }
}
