import { Component } from '@angular/core';
import {ArtistService} from "../services/artist/artist.service";
import {Artist} from "../Model/artiste";
import { ActivatedRoute } from '@angular/router';
import {SongService} from "../services/song/song.service";
@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent {
  id : number = 1
  artist : Artist = {
    name : '',
    id : 0,
    songs : [],
    albums : []
  }

  constructor(public artistService : ArtistService, public songService: SongService, private route : ActivatedRoute)  {
  }

  async ngOnInit() {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'))
    this.artist = await this.artistService.getOneArtist(this.id)
  }

  getSongId(song: string): string {
    if (typeof song === 'string') {
      return song.split('/')?.pop() || '';
    }
    return '';
  }
  getAlbumId(album: string): string {
    if (typeof album === 'string') {
    return album.split('/')?.pop() || '';
  }
  return '';
  }
}
