import { Component } from '@angular/core';
import {ArtistService} from "../services/artist/artist.service";
import {Artist} from "../Model/artiste";
import { ActivatedRoute } from '@angular/router';
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

  constructor(public artistService : ArtistService, private route : ActivatedRoute)  {

  }

  async ngOnInit() {

    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'))

    this.artist = await this.artistService.getOneArtist(this.id)
  }

  getOneArtist(){

  }
}
