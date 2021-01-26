import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimService {

  clanovi;
  constructor(private service: HttpClient) {}

    dohvatiClana(){
         const clanovi = this.service.get('http://localhost:4200/./../assets/jsons/tim.json');
         return clanovi;

    }
}

// 'https://agencijatour.firebaseio.com/tim.json'
