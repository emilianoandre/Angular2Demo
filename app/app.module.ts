import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}	 from '@angular/forms';

//Components
import { AppComponent}	from './app.component';
import { DashboardComponent} from './hero/dashboard.component'
import { HeroesComponent} from './hero/heroes.component'
import { HeroDetailComponent } from './hero/hero-detail.component';

//Services
import { HeroService } from './hero/hero.service';

//Routing
import { routing }	from './app.routing';

@NgModule({
	imports : [ 
		BrowserModule,
		FormsModule,
		routing
	],
	
	declarations : [ 
		AppComponent,
		DashboardComponent,
		HeroesComponent,		
		HeroDetailComponent
	],
	
	bootstrap : [ AppComponent ],
	
	providers : [ HeroService ]
})

export class AppModule { }