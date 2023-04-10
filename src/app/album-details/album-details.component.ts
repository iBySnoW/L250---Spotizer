import { Component } from '@angular/core';
import {SongService} from "../services/song/song.service";
import { ActivatedRoute } from '@angular/router';
import { Album } from "../Model/album";
import { AlbumService } from "../services/album/album.service";


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent {
  id : number = 1
  album: Album =   {
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


  constructor(public albumService : AlbumService, public songService: SongService, private route : ActivatedRoute)  {

  }

  async ngOnInit() {
    this.id = parseInt(<string>this.route.snapshot.paramMap.get('id'))

    this.album = await this.albumService.getOneAlbum(this.id)
    console.log(this.album)
  }

  async getSong(idString: string) {
    let id = idString.split('/').pop()
    //let song = await this.songService.getOneSong(parseInt(id))
    //return song.title
  }
}
