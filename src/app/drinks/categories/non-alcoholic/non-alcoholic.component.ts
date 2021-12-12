import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Drink } from 'src/app/shared/drink.model';
import { DrinkService } from '../../drink.service';

@Component({
  selector: 'app-non-alcoholic',
  templateUrl: './non-alcoholic.component.html',
  styleUrls: ['./non-alcoholic.component.css'],
})
export class NonAlcoholicComponent implements OnInit {
  constructor(private http: HttpClient, private drinkService: DrinkService) {}
  subscription: Subscription;
  drinks: Drink[] = [];

  ngOnInit() {
    this.subscription = this.drinkService
      .getNonAlcoholic()
      .subscribe((drinks) => {
        this.drinks = drinks;
      });
  }
}
