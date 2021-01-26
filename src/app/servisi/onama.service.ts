import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OnamaService {

  onama;
  constructor(private service: HttpClient) {}

    dohvatiOnama(){
         const onama = this.service.get('http://localhost:4200/./../assets/jsons/onama.json');
         return onama;

    }
}
