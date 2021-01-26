import { Component, OnInit, Input } from '@angular/core';
import { PonudaService } from '../servisi/ponuda.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css'],
  animations: [
    trigger('stanje', [
      state('pokret', style({
        opacity: 1
      })),
      transition('void => *', [style({opacity: 0}),
      animate('1500ms ease-in')])
    ])
  ]
})

export class PonudaComponent implements OnInit {

  pokret = true;

  ponuda;
  searchText: string;


  constructor(private service: PonudaService) {}

    ngOnInit() {
      this.service.dohvatiPonudu().subscribe(
        response => {
          console.log(response);
          this.ponuda = response;
        } ,
        error => {
          console.log(error);
    } );
  }
}
