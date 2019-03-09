import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { Heroes } from '../mock-hero'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // heroes: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  // heroes = 'Windstorm';

  heroes = Heroes;

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() { }

  ngOnInit() {

  }

}
