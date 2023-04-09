import { Injectable } from '@angular/core';
import { album } from "../../Model/album"

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"

  constructor() { }

  async getAlbums() : Promise<Array<album>> {
    return await fetch(`${this.BASE_URL}/api/albums`, {
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

  async getOneAlbum(id : number) : Promise<Array<album>> {
    return await fetch(`${this.BASE_URL}/api/albums/${id}`, {
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
