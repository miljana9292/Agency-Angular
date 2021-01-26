import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { PonudaService } from '../../servisi/ponuda.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class PutComponent implements OnInit {

  id;
  ponuda;
  put;
  constructor(private service: PonudaService, private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id = +this.route.snapshot.params.id;
    });
  }

  ngOnInit() {
    this.service.dohvatiPonudu().subscribe(
      response => {
        this.ponuda = response;
        for (let i = 0; i < this.ponuda.length; i++){
          if (this.ponuda[i].id == this.id){
            this.put = this.ponuda[i];
            console.log(this.put);
            break;
          }
        }
      },
      error => {
        alert('Greška: ' + error);
      }
    );
  }
}
