import {Component} from '@angular/core';
import { SongService } from '../services/song/song.service'
import { Song } from '../Model/song'

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})

export class MusiqueComponent {

  public songs : Array<Song>
     constructor(public songService: SongService) {
      console.log(this.songService.songs)
      this.songs = this.songService.songs
    }


}
