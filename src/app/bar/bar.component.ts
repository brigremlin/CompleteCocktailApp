import { Injectable, Component, OnInit } from '@angular/core';

@Injectable()
@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
})
export class BarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
