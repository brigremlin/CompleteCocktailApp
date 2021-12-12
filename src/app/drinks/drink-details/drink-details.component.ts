
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Drink} from 'src/app/shared/drink.model';
import { DrinkService } from '../drink.service';
import { Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit {
  currentDrink: Drink;
  drinkList: Drink[]=[];
  id: number;
  drinkSubscription: Subscription;


  constructor(private route: ActivatedRoute, private drinkService: DrinkService ) { }
  name: string;

ngOnInit() {}

}
