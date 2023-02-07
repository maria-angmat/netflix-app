import { Component } from '@angular/core';
import { comedyFilms } from './components/modules/comedyFilms';
import { dramaFilms } from './components/modules/dramaFilms';
import { sciFiFilms } from './components/modules/scifiFilms';
import { horrorFilms } from './components/modules/horrorFilms';
import { topFive } from './components/modules/top5';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';

  comedyFilms = comedyFilms;
  dramaFilms = dramaFilms;
  sciFiFilms = sciFiFilms;
  horrorFilms = horrorFilms;
  topFive = topFive;

}