import { Component, OnInit } from '@angular/core';
import CARDSLIST from 'src/app/constants';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
 cards: any;

  constructor() { }

  ngOnInit() {
    this.cards = CARDSLIST;
  }

}
