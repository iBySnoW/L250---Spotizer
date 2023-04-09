import { Component } from '@angular/core';
import {AlbumService} from "../services/album/album.service";
import {Album} from "../Model/album";



@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {
  public albums : Array<Album>
  constructor(public songService: AlbumService,) {
    this.albums = this.songService.albums;
  }
}
