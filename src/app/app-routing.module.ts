import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtisteComponent } from './artiste/artiste.component';
import { ArtistDetailsComponent } from "./artist-details/artist-details.component";
import { MusiqueComponent } from './musique/musique.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumComponent} from "./album/album.component";
import { AlbumDetailsComponent } from "./album-details/album-details.component";

const routes: Routes = [
  { path: '',   redirectTo: '/musique', pathMatch: 'full' },
  { path: 'artiste', component: ArtisteComponent },
  { path: 'artiste/:id', component: ArtistDetailsComponent },
  { path: 'album/:id', component: AlbumDetailsComponent },
  { path: 'musique', component: MusiqueComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'album', component: AlbumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
