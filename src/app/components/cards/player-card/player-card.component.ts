import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { Player } from 'src/app/models/player';
@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css'],
})
export class PlayerCardComponent implements OnInit {
  @Input() player!: Player
  constructor() {}

  ngOnInit(): void {
    console.log(this.player)
  }


}
