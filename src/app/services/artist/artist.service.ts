import { Injectable } from '@angular/core';
import { Artist } from "../../Model/artiste";
@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"
  private _artists : Array<Artist> = []
  private _searchArtists : Array<Artist> = []

  get artists(): Array<Artist> {
    return this._artists;
  }

  set artists(value: Array<Artist>) {
    this._artists = value;
  }
  get searchArtists(): Array<Artist> {
    return this._searchArtists;
  }

  set searchArtists(value: Array<Artist>) {
    this._searchArtists = value;
  }

  constructor() {
    this.getArtists()
  }

  async getArtists() : Promise<void> {
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
      .then((data) => {
        data.forEach((artist: Artist) => {
          this._artists.push(artist)
        })
      });
  }
  async getSearchArtists(searchValue : string) : Promise<void> {
    return await fetch(`${this.BASE_URL}/api/artists?name=${searchValue}`, {
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

        this.searchArtists = []
        data.forEach((artist: Artist) => {
          this._searchArtists.push(artist)
        })
      });
  }

  async getOneArtist(id : number) : Promise<Artist> {
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

  public getModelIndexById(id: number) {
    return this._artists.findIndex(function (element) {
      return element.id === id;
    });
  }
}
