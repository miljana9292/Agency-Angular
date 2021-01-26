import { OnamaService } from '../servisi/onama.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onama',
  templateUrl: './onama.component.html',
  styleUrls: ['./onama.component.css']
})
export class OnamaComponent implements OnInit {

  onama;

  constructor(private service: OnamaService) { }

  ngOnInit(): void {
    this.service.dohvatiOnama().subscribe(
      response => {
        console.log(response);
        this.onama = response;
      } ,
      error => {
        console.log(error);
    } );
  }
}
