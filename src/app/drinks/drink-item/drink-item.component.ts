import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Drink } from 'src/app/shared/drink.model';
import { DrinkService } from '../drink.service';
import { FavoriteService } from '../favorite.service';
@Component({
  selector: 'app-drink-item',
  templateUrl: './drink-item.component.html',
  styleUrls: ['./drink-item.component.css'],
})
export class DrinkItemComponent {
  @Input() drink;
  @Input() index;
  @Input() id;

  isFavorited = false;

  constructor(
    private router: Router,
    private favoriteService: FavoriteService,
    private drinkService: DrinkService,
    private route: ActivatedRoute
  ) {}


  onFavoritedDrinks(drink: Drink) {
    this.isFavorited = this.favoriteService.isFavorited(drink);
    if (!this.favoriteService.isFavorited(drink)) {
      this.favoriteService.favoriteList.push(drink);
      this.isFavorited = !this.isFavorited;
    } else {
      this.favoriteService.favoriteList.splice(this.index, 1);
    }
  }

}
