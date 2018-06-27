import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Property to hold Hero object
  hero  : Hero ={
    id : 139838,
    name :'Prashant Kumar Singh'
  }

  constructor(private heroService : HeroService){}

  selectedHero : Hero;

  // The constant heroes array is mapped to heroes property
 // heroes = HEROES;
 heroes : Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  

  ngOnInit() {
    this.getHeroes();
  }

}
