import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TarjetaComponent } from './modelo/tarjeta/tarjeta.component';
import { cardModelo } from './modelo/card.modelo';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    cardModelo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
