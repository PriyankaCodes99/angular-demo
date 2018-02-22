import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//added for input to work
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //also added
  ],
  providers: [],    
  bootstrap: [AppComponent]
})
export class AppModule { }
