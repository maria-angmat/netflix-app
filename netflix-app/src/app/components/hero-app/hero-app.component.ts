import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-app',
  templateUrl: './hero-app.component.html',
  styleUrls: ['./hero-app.component.scss']
})
export class HeroAppComponent {
  constructor() {
    this.section = '';
    this.films = [];
  }

  @Input() section: string;
  @Input() films: { title: string, image: string }[];
}
