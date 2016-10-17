import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Models
import { Hero } from './hero';

//Services
import { HeroService } from './hero.service';

@Component({
	moduleId 	: module.id, 
	selector 	: 'my-heroes',
	templateUrl : 'heroes.component.html',
	styleUrls	: ['heroes.component.css']
})

export class HeroesComponent implements OnInit{
	
	selectedHero : Hero;
	heroes : Hero[];
	
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
	
	constructor(
			private router: Router,
			private heroService: HeroService
			) { }
	
	ngOnInit(): void {
		this.getHeroes();
	}
	
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	
	gotoDetail(): void {
		this.router.navigate(['/detail', this.selectedHero.id]);
	}
}