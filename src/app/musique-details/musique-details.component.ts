import {Component, Input} from '@angular/core';
import {Song} from "../Model/song";
import {AlbumService} from "../services/album/album.service";
import {SongService} from "../services/song/song.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-musique-details',
  templateUrl: './musique-details.component.html',
  styleUrls: ['./musique-details.component.css']
})
export class MusiqueDetailsComponent {
  @Input() id: string | undefined;
  song: Song = {
    id: 1,
    title: '',
    artist: '',
    album: '',
    length: 0,
    youtube: '',
  }

  constructor(public songService: SongService) {
  }

  async ngOnInit() {
    let musicId = 0;
    if (typeof this.id === "string") {
      musicId = parseInt(this.id)
    }
    this.song = await this.songService.getOneSong(musicId)
  }
}
