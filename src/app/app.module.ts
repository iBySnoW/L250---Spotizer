import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { MusiqueComponent } from './musique/musique.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AlbumComponent } from './album/album.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    MusiqueComponent,
    PlaylistComponent,
    AccueilComponent,
    AlbumComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
