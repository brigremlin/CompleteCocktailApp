import { Component, Injectable, OnInit } from '@angular/core';
import {
  faGlassWhiskey,
  faWineBottle,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { DrinkService } from '../drinks/drink.service';
import { Drink } from '../shared/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private drinkService: DrinkService) {}
  myDrinks: Drink[] = [];
  subscription: Subscription;
  popularSubscription: Subscription;
  popularDrinks: Drink[] = [];
  featuredSubscription: Subscription;
  featuredDrink: Drink;
  faWine = faWineBottle;
  public search = '';
  public cocktailList: Drink[] = [];
  public noResults = 'No Results Found';
  clicked: number;

  ngOnInit() {
    this.subscription = this.drinkService.getDrinks().subscribe((drinks) => {
      this.myDrinks = drinks;
    });
    this.popularSubscription = this.drinkService
      .getPopular()
      .subscribe((drinks) => {
        this.popularDrinks = drinks;
      });

    this.featuredSubscription = this.drinkService
      .getFeatured()
      .subscribe((drinks) => {
        this.featuredDrink = drinks;
      });
  }

  drinkDetail(id: string) {
    this.drinkService.getAlcoholicCocktail(id);
  }

  searchDrink(search: string) {
    this.clicked = 1;
    this.drinkService.getCocktailsByName(this.search).then((res) => {
      this.cocktailList = res;
    });
  }

  getMatchingList() {
    const matchingCocktail = [];
    for (const drink of this.cocktailList) {
      matchingCocktail.push(drink);
    }

    return matchingCocktail;
  }
}
