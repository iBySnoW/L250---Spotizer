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
    console.log(this.artist)
  }

  async getSong(idString: string) {
    let id = idString.split('/').pop()
    //let song = await this.songService.getOneSong(parseInt(id))
    //return song.title
  }
}
