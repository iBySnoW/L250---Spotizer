import {Component} from '@angular/core';
import { SongService } from '../services/song/song.service'
import { Song } from '../Model/song'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})

export class MusiqueComponent {
  public songs : Array<Song>
     constructor(public songService: SongService, public sanitizer: DomSanitizer) {
      console.log(this.songService.songs)
      this.songs = this.songService.songs
    }

  getSafeUrl(youtubeUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
  }
}
