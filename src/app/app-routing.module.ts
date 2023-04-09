import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtisteComponent } from './artiste/artiste.component';
import { MusiqueComponent } from './musique/musique.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AlbumComponent} from "./album/album.component";

const routes: Routes = [
  { path: '',   redirectTo: '/musique', pathMatch: 'full' },
  { path: 'artiste', component: ArtisteComponent },
  { path: 'musique', component: MusiqueComponent },
  { path: 'playlist', component: PlaylistComponent },
  { path: 'album', component: AlbumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
