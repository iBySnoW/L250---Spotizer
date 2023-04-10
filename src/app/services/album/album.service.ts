import { Injectable } from '@angular/core';
import { Album } from "../../Model/album"

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"
  private _albums : Array<Album> = []
  private _searchAlbums : Array<Album> = []
  get albums(): Array<Album> {
    return this._albums;
  }

  set albums(value: Array<Album>) {
    this._albums = value;
  }
  get searchAlbums(): Array<Album> {
    return this._searchAlbums;
  }

  set searchAlbums(value: Array<Album>) {
    this._searchAlbums = value;
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
  async getSearchAlbums(searchValue : string) : Promise<void> {
    return await fetch(`${this.BASE_URL}/api/albums?title=${searchValue}`, {
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

        this._searchAlbums = []
        data.forEach((album: Album) => {
          this._searchAlbums.push(album)
        })
      });
  }

  async getOneAlbum(id : number) : Promise<Album> {
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
