import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayersService } from 'src/app/services/playersService';

@Component({
  selector: 'app-search-player',
  templateUrl: './search-player.component.html',
  styleUrls: ['./search-player.component.css']
})
export class SearchPlayerComponent implements OnInit {

   players!: Player[]
  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.GetPlayers();
  }
  GetPlayers(){
    this.playersService.GetPlayers().subscribe({
      //next (paso exitoso)
      next: (players) => { console.log(players); this.players = players as Player[]; },
      //nombre | (nombre) | () => { line1; line2 }
      //error (paso erroneo)
      error: (error) => { console.log(error); },
      //complete (paso sí o sí)
      complete: () => console.log("complete")
    });
  }
}
