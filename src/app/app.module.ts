import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtisteComponent } from './artiste/artiste.component';
import { MusiqueComponent } from './musique/musique.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { MusiqueDetailsComponent } from './musique-details/musique-details.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtisteComponent,
    MusiqueComponent,
    PlaylistComponent,
    AccueilComponent,
    AlbumComponent,
    ArtistDetailsComponent,
    AlbumDetailsComponent,
    MusiqueDetailsComponent,
    AlbumDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
