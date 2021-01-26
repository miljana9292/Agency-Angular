import { TimService } from '../servisi/tim.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tim',
  templateUrl: './tim.component.html',
  styleUrls: ['./tim.component.css']
})
export class TimComponent implements OnInit {

  clanovi;

  constructor(private service: TimService) {}

  ngOnInit() {
    this.service.dohvatiClana().subscribe(
      response => {
        console.log(response);
        this.clanovi = response;
      } ,
      error => {
        console.log(error);
  } );
}
}
