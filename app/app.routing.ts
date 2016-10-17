import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { DashboardComponent}	from './hero/dashboard.component'
import { HeroesComponent }		from './hero/heroes.component';
import { HeroDetailComponent }	from './hero/hero-detail.component';

const appRoutes: Routes = [
	{
		path : '',
		redirectTo : '/dashboard',
		pathMatch : 'full'
	},
	{
		path : 'heroes',
		component : HeroesComponent
	},
	{
		path : 'dashboard',
		component : DashboardComponent
	},
	{
		path : 'detail/:id',
		component : HeroDetailComponent
	}
	
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);