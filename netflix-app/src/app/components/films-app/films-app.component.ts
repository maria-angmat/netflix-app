import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-films-app',
  templateUrl: './films-app.component.html',
  styleUrls: ['./films-app.component.scss']
})
export class FilmsAppComponent {

  constructor() {
    this.section = '';
    this.films = [];
  }

  @Input() section: string;
  @Input() films: { title: string, image: string }[]; 
}
