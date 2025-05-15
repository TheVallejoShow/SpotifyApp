import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoimagePipe } from '../../pipes/noimage.pipe';

@Component({
  selector: 'app-cards',
  imports: [NgFor, NoimagePipe],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() songs: any[] = [];

  constructor( private router: Router ) { }

  showArtits( item: any ) {

    let artistaId;

    if ( item.type === 'artist' ) {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    
    this.router.navigate([ '/artist', artistaId  ]);
  }
}
