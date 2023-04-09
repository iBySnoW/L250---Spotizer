import { Injectable } from '@angular/core';
import { musique } from "../../Model/musique";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"

  constructor() { }

  async getSongs() : Promise<Array<musique>> {
    return await fetch(`${this.BASE_URL}/api/songs`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(function (res: Response) {
        return res.json();
      })
      .then(function (data) {
        return data;
      });
  }

  async getOneSong(id : number) : Promise<Array<musique>> {
    return await fetch(`${this.BASE_URL}/api/songs/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(function (res: Response) {
        return res.json();
      })
      .then(function (data) {
        return data;
      });
  }
}
