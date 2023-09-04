import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  gameLabel:string = "";

  @Input()
  gameCover: string = "";

  @Input()
  gameType:string = "XPTO | PS4";

  @Input()
  gamePrice:string = "399,90"

  constructor() { }

  ngOnInit(): void {
  }

}
