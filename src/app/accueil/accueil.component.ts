import { Component } from '@angular/core';
import { SongService } from "../services/song/song.service";
import { AlbumService } from "../services/album/album.service";
import { ArtistService } from "../services/artist/artist.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(public songService : SongService,
              public artistService : ArtistService, public albumService : AlbumService) {
  }

  searchValueChange(value: string){

    this.songService.getSearchSongs(value)
    this.albumService.getSearchAlbums(value)
    this.artistService.getSearchArtists(value)
  }

}
