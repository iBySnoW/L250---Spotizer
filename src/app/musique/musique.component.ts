import {Component} from '@angular/core';
import { SongService } from '../services/song/song.service'
import { ArtistService } from "../services/artist/artist.service";
import { Song } from '../Model/song'
import { Artist } from "../Model/artiste";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})

export class MusiqueComponent {
  public songs : Array<Song>
  public artists : Array<Artist>

     constructor(public songService: SongService, public artistService : ArtistService ,public sanitizer: DomSanitizer) {
      this.songs = this.songService.songs
      this.artists = this.artistService.artists
    }

  getSafeUrl(youtubeUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeUrl);
  }

}
