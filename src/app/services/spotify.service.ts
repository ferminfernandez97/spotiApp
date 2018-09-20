import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';



@Injectable()
export class SpotifyService {
  
  artistas: any[] = [];



  constructor(public http: HttpClient) { 
    console.log('Servicio spotify listo');
  }

  getArtistas(){

    let url = 'https://api.spotify.com/v1/search?query=Nacho&type=artist&offset=0&limit=10'

    let headers = new HttpHeaders(
      {
        'authorization': 'Bearer BQDVBeHhbvOYLrsbTTdBlqJZwgN_KfOKtQSa6Ac3GNl9nIYcmlFms0QgLsOSClxJAkrBuKNCS8h6h3BicEw'
      }
    );

    return this.http.get(url, { headers })
               .pipe(map((resp:any) => {
                this.artistas=resp.artists.items;
                return this.artistas;
               }));
               
               
    

  }

}
