import { Component } from '@angular/core';
import {ArtistService} from "../services/artist/artist.service";
import {DomSanitizer} from "@angular/platform-browser";
import {Artist} from "../Model/artiste";

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent {
  public artists : Array<Artist>
  constructor(public songService: ArtistService, public sanitizer: DomSanitizer) {
    this.artists = this.songService.artists
  }
}
