import { Injectable } from '@angular/core';
import { artist } from "../../Model/artiste";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"

  constructor() { }

  async getArtists() : Promise<Array<artist>> {
    return await fetch(`${this.BASE_URL}/api/artists`, {
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

  async getOneArtist(id : number) : Promise<Array<artist>> {
    return await fetch(`${this.BASE_URL}/api/artists/${id}`, {
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
