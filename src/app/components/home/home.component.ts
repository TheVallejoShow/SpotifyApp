import { Component } from '@angular/core';
import { LoadingComponent } from '../shared/loading/loading.component';
import { CardsComponent } from '../cards/cards.component';
import { SpotifyService } from '../../services/spotify.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgIf, LoadingComponent, CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newSongs: any[] = [];
  loading: boolean;

  error: boolean;
  mensajeError: string = "";

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        console.log("data: ", data);
        this.newSongs = data;
        this.loading = false;
      }, (errorServicio) => {
        console.log("errorServicio: ", errorServicio);
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;

      });
  }
}
