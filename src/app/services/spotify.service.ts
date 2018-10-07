import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';



@Injectable()
export class SpotifyService {
  
  artistas: any[] = [];

  toptracks:any[] = [];
  

  token : string = 'BQDLjWucFRswumd9tAzdyPbaUW-1Vxf5-Z398UuSPkzOn71tgQ01e8Sth4YlSn5vzuHpDbNewsOsWr2sGL0'

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


 getTop(id:string){
   //https://api.spotify.com/v1/artists/{id}/top-tracks
   //https://api.spotify.com/v1/artists/2uEjXyVi0SA1HPpj3zquXh/top-tracks?country=US
   let url = `${ this.urlSpotify }artists/${id}/top-tracks?country=US`

   let headers = this.getHeaders();

   return this.http.get(url, { headers });
   
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
