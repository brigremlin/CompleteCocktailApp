import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Pantry } from './pantry.model';

@Injectable()
export class PantryService {
  constructor(private http: HttpClient) {}

  pantryIngredients: Pantry[] = [];
  searchValue:string;


  getIngredients() {
    return this.http
      .get<any>(
        'https://www.thecocktaildb.com/api/json/v2/' + environment.cocktailDBKey + '/list.php?i=list'
      )
      .pipe(
        map((ingredients) => {
          console.log(ingredients.drinks);
          return ingredients.drinks;
        })
      );
  }

  onIngredientSearch(searchValue: string) {
    return this.http
      .get<any>(
        'http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + searchValue
      )
      .pipe(
        map((ingredients) => {
          console.log(ingredients.drinks);
          return ingredients.drinks;
        })
      );
  }

}