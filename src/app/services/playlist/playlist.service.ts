import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {
  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"
  private _playlists : Array<any> = []
  get playlists(): Array<any> {
    return this._playlists;
  }

  set playlists(value: Array<any>) {
    this._playlists = value;
  }

  constructor() {
    this.getPlaylists()
  }

  async getPlaylists() : Promise<void> {
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
      .then((data) => {
        data.forEach((playlist: any) => {
          this._playlists.push(playlist)
        })
      })
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
