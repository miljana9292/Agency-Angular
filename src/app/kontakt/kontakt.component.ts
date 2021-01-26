import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
  animations: [
    trigger('showHide', [
      state('true', style({transform: 'scale(1)'})),
      state('false', style({transform: 'scale(0)'})),
      transition('false<=>true', animate('800ms ease'))
    ])
  ]
})

export class KontaktComponent implements OnInit {

  contactForm: FormGroup;
  isMessageDisplayed = false;
  name = '';

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      ime : new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
      email : new FormControl('', [Validators.required, Validators.email]),
      poruka : new FormControl('', [Validators.required])
    });
  }

  onFormSubmit(){
    console.log(this.contactForm);
    this.isMessageDisplayed = true;
    this.contactForm.reset();
  }

  onIme(event: Event){
    this.name = (event.target as HTMLInputElement).value;
  }
}
