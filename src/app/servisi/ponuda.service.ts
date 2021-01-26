import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PonudaService {

  ponuda;
    constructor(private service: HttpClient) { }

    dohvatiPonudu(){
      const ponuda = this.service.get('http://localhost:4200/./../assets/jsons/ponuda.json');
      return ponuda;
    }
}
