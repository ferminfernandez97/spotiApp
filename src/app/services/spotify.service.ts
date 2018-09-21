import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';



@Injectable()
export class SpotifyService {
  
  artistas: any[] = [];

  token : string = 'BQBXLasg0AK1rh-s6G0-iRu71ySL5qLjMd-9RAK7u0rtacFeuwZ79nj04mXjGOntrXsAPVWQE7GZDeAs4F4'

  urlSpotify: string = 'https://api.spotify.com/v1/'

  constructor(public http: HttpClient) { 
    console.log('Servicio spotify listo');
  }


  getHeaders(): HttpHeaders {

    let headers = new HttpHeaders(
      {
        'authorization': 'Bearer ' + this.token
      }
    );

    return headers;

  }


  getArtista(id: string){
    let url = `${ this.urlSpotify }artists/${id}`

    let headers = this.getHeaders();

    return this.http.get(url, { headers });

    //               .pipe(map((resp:any) => {
//this.artistas=resp.artists.items;
    //  return this.artistas;
    // })) 
  }



  getArtistas(termino:string){

    let url = `${ this.urlSpotify }search?query=${termino}&type=artist&offset=0&limit=10`

    let headers = this.getHeaders();

    return this.http.get(url, { headers })
               .pipe(map((resp:any) => {
                this.artistas=resp.artists.items;
                return this.artistas;
               }));
               
               
    

  }

}
