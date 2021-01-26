import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css'],
})

export class PocetnaComponent implements OnInit {

  buttonClicked1: boolean;
  buttonClicked2: boolean;
  buttonClicked3: boolean;

   constructor() {}

   ngOnInit(): void {
   }


  isButtonToggle(x): void{
    switch (x){
      case 1:
        this.buttonClicked1 = !this.buttonClicked1;
        this.buttonClicked2 = false;
        this.buttonClicked3 = false;
        break;
      case 2:
        this.buttonClicked2 = !this.buttonClicked2;
        this.buttonClicked1 = false;
        this.buttonClicked3 = false;
        break;
        case 3:
        this.buttonClicked3 = !this.buttonClicked3;
        this.buttonClicked1 = false;
        this.buttonClicked2 = false;
        break;
    }
  }

 }
