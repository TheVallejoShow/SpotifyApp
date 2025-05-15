import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDgaDvNH2uXDv-JEtLnkFj-zaY7A0mGfiLEaZoSjGgS_H3LqW_PoZyrM8lqtutAAS3UKKSx35KI-PgyV7X-MCxPjZhFZvGt1WKppeflMsuM3QTg1x2Fjhz5y0jOpvp21Xp6IPBvpRg'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe( map((data: any) => data['albums'].items));
  }

  getArtists( termino: string ) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map((data: any) => data['artists'].items));
  }

  getArtist( id: string ) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
      .pipe( map((data: any) => data['tracks'].items));
  }
}
