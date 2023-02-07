import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavAppComponent } from './components/nav-app/nav-app.component';
import { HeroAppComponent } from './components/hero-app/hero-app.component';
import { FilmsAppComponent } from './components/films-app/films-app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavAppComponent,
    HeroAppComponent,
    FilmsAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
