import { Component, Input} from '@angular/core';
import {Album} from "../Model/album";
import {AlbumService} from "../services/album/album.service";

@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css']
})
export class AlbumDescriptionComponent {
  @Input() id: string | undefined;
  album: Album = {
    id: 1,
    title: '',
    songs: [
      {
        id: 1,
        title: '',
        length: 0,
        youtube: '',
      }
    ],
    albumtype: {
      id: 0,
      name: '',
    },
    artist: {
      id: 0,
    },
    image: ''
  }

  constructor(public albumService: AlbumService) {
  }

  async ngOnInit() {
    let albumId = 0;
    if (typeof this.id === "string") {
      albumId = parseInt(this.id)
    }
    this.album = await this.albumService.getOneAlbum(albumId)
  }
}

