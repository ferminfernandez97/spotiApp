import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';



@Injectable()
export class SpotifyService {
  
  artistas: any[] = [];



  constructor(public http: HttpClient) { 
    console.log('Servicio spotify listo');
  }

  getArtistas(termino:string){

    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=10`

    let headers = new HttpHeaders(
      {
        'authorization': 'Bearer BQCjVnU-f0GwfpUJ72dxDLOM2AgvsYPG0Rykl7mL-nIH0RHin7JGZFRoKMJsJlsED6ewItJkfuyA7uwgGLE'
      }
    );

    return this.http.get(url, { headers })
               .pipe(map((resp:any) => {
                this.artistas=resp.artists.items;
                return this.artistas;
               }));
               
               
    

  }

}
