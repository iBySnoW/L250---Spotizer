import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"

  constructor() { }

  async getPlaylists() : Promise<Array<any>> {
    return await fetch(`${this.BASE_URL}/api/playlists`, {
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

  async getOneArtist(id : number) : Promise<Array<any>> {
    return await fetch(`${this.BASE_URL}/api/playlists/${id}`, {
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
