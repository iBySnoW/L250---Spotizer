import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtisteComponent } from './artiste/artiste.component';
import { MusiqueComponent } from './musique/musique.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AccueilComponent } from './accueil/accueil.component';

const routes: Routes = [
  {path : '', component : AccueilComponent},
  { path: 'artiste', component: ArtisteComponent },
  { path: 'musique', component: MusiqueComponent },
  { path: 'playlist', component: PlaylistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
