
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Drink} from 'src/app/shared/drink.model';
import { DrinkService } from '../drink.service';



@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit {
  id;
  drink;
  drinks: Drink[]  = [];



  constructor(private route: ActivatedRoute, private drinkService: DrinkService ) { }
  ngOnInit(){
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id)
      this.drink = this.drinkService.getDrink(this.id);
      console.log(this.drink);
    });
  }

}
