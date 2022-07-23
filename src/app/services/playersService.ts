import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  baseUrl = environment.baseUrl + "players/";

  constructor(private httpClient: HttpClient) { }

  //Get Players
  GetPlayers() {
    return this.httpClient.get(this.baseUrl);
  }

  GetPlayerById(id: number){
    return this.httpClient.get(this.baseUrl + id);
  }

  AddPlayer(player: any){
    var data: {};
    console.log(player);
    return this.httpClient.post(this.baseUrl, player);
  }
  UpdatePet(playerId: number, player: any){
    return this.httpClient.put(this.baseUrl + playerId, player);
  }
}
