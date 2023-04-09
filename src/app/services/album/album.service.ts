import { Injectable } from '@angular/core';
import { Album } from "../../Model/album"

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"
  private _albums : Array<Album> = []
  get albums(): Array<Album> {
    return this._albums;
  }

  set albums(value: Array<Album>) {
    this._albums = value;
  }

  constructor() {
    this.getAlbums()
  }

  async getAlbums() : Promise<void> {
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
      .then((data) => {
        data.forEach((album: Album) => {
          this._albums.push(album)
        })
      });
  }

  async getOneAlbum(id : number) : Promise<Array<Album>> {
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
