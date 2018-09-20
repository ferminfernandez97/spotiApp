import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable()
export class SpotifyService {
  



  constructor(public http: HttpClient) { 
    console.log('Servicio spotify listo');
  }

  getArtistas(){

    let url = 'https://api.spotify.com/v1/search?query=Nacho&type=artist&offset=0&limit=20'

    let headers = new HttpHeaders(
      {
        'authorization': 'Bearer BQDXIe-DeAk4Ww-xnSp8d-I-u9vMiXErC1bldX1eG-OApr80P6qXNCr7cmdtyClVciy-0CQt4owntxyfcAM'
      }
    );

    return this.http.get(url, { headers })
    

  }

}
