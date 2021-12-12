import { HttpClient } from '@angular/common/http';
import {
  Component,
  ComponentFactoryResolver,
  Injectable,
  OnInit,
} from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Pantry } from 'src/app/shared/pantry.model';
import { PantryService } from 'src/app/shared/pantry.service';
import { environment } from 'src/environments/environment';
import { MyBarService } from './my-bar.service';
import { map } from 'rxjs/operators';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  myBar: Pantry[] = [];
  myCabinet: Pantry[] = [];
  addedItem = true;
  subscription: Subscription;
  name: string;
  imagePath: string[] = [];
  faSearch = faSearch;
  searchedList: Pantry[] = [];
  searchValue: string = '';
  searchSubscription: Subscription;

  constructor(
    private pantryService: PantryService,
    private barService: MyBarService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.subscription = this.pantryService
      .getIngredients()
      .subscribe((ingredients) => {
        this.myBar = ingredients;
        // ingredients.imagePath = "www.thecocktaildb.com/images/ingredients/" + this.name + ".png";

        this.myBar.forEach((element) => {
          this.name = element.strIngredient1;
          this.imagePath.push(
            'www.thecocktaildb.com/images/ingredients/' + this.name + '.png'
          );
        });
      });
  }

  onAddToCabinet(pantry: Pantry) {
    this.myCabinet = this.barService.myBar;
    if (!this.myCabinet.includes(pantry)) {
      this.myCabinet.push(pantry);
    }
  }

  onIngredientSearch(searchValue: string) {
    return this.searchSubscription = this.pantryService
      .onIngredientSearch(searchValue)
      .subscribe((ingredients) => {
        this.searchedList = ingredients;
        console.log(this.searchedList);
      });
  }
}
