import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HederComponent } from './../heder/heder.component';
import { PocetnaComponent } from './../pocetna/pocetna.component';
import { OnamaComponent } from './../onama/onama.component';
import { GalerijaComponent } from './../galerija/galerija.component';
import { PonudaComponent } from './../ponuda/ponuda.component';
import { PutComponent } from './../ponuda/put/put.component';
import { TimComponent } from './../tim/tim.component';
import { KontaktComponent } from './../kontakt/kontakt.component';


const routes: Routes = [
  {path: 'pocetna', component: PocetnaComponent},
  {path: 'galerija', component: GalerijaComponent},
  {path: 'o-nama', component: OnamaComponent},
  {path: 'ponuda', component: PonudaComponent},
  {path: 'ponuda/:id', component: PutComponent},
  {path: 'tim', component: TimComponent},
  {path: 'kontakt', component: KontaktComponent},
  {path: '', component: HederComponent},
  {path: '**', component: HederComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
