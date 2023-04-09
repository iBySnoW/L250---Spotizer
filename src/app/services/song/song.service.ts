import { Injectable } from '@angular/core';
import { Song } from "../../Model/song";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private BASE_URL : string = "https://mmi.unilim.fr/~morap01/L250/public/index.php"
  private _songs : Array<Song> = []
  constructor() {
    this.getSongs()
  }

  get songs(): Array<Song> {
    return this._songs;
  }

  set songs(value: Array<Song>) {
    this._songs = value;
  }

  async getSongs() : Promise<void> {
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
      .then((data) => {
        data.forEach((song: Song) => {
          this._songs.push(song)
        })
      })
  }

  async getOneSong(id : number) : Promise<Array<Song>> {
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
