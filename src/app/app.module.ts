import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxGalleryModule } from 'ngx-gallery-9';

import { AppComponent } from './app.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { HederComponent } from './heder/heder.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { OnamaComponent } from './onama/onama.component';
import { GalerijaComponent } from './galerija/galerija.component';
import { PonudaComponent } from './ponuda/ponuda.component';
import { PutComponent } from './ponuda/put/put.component';
import { TimComponent } from './tim/tim.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { FuterComponent } from './futer/futer.component';

import { TimService } from './servisi/tim.service';
import { OnamaService } from './servisi/onama.service';
import { PonudaService } from './servisi/ponuda.service';


import { PonudaPipe } from './pipe/ponuda.pipe';

import 'hammerjs';

/* Custom Hammer configuration */
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pan: {
      direction: Hammer.DIRECTION_ALL,
    }
  };
}
/* End Custom hammer configuration */


@NgModule({
  declarations: [
    AppComponent,
    NavigacijaComponent,
    HederComponent,
    PocetnaComponent,
    OnamaComponent,
    GalerijaComponent,
    TimComponent,
    KontaktComponent,
    FuterComponent,
    PonudaComponent,
    PonudaPipe,
    PutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxGalleryModule
  ],
  providers: [TimService, OnamaService, PonudaService, {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
