import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent }  from './start/start.component';
import { MothertongueComponent }  from './mothertongue/mothertongue.component';
import { AgeComponent }  from './age/age.component';
import { WeatherComponent }  from './weather/weather.component';
import { FiguresComponent }  from './figures/figures.component';
import { CitiesComponent }  from './cities/cities.component';
import { WishlistComponent }  from './wishlist/wishlist.component';
import { DudeComponent }  from './dude/dude.component';
import { PartiesComponent }  from './parties/parties.component';
import { SignatureComponent }  from './signature/signature.component';
import { PosterComponent }  from './poster/poster.component';

const appRoutes: Routes = [
	{ path: '', component: StartComponent },
  { path: 'mother-tongue', component: MothertongueComponent },
  { path: 'age', component: AgeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'figures', component: FiguresComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'dude', component: DudeComponent },
  { path: 'parties', component: PartiesComponent },
  { path: 'signature', component: SignatureComponent },
  { path: 'poster', component: PosterComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);