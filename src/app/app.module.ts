import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { routing, appRoutingProviders } from './app.routing';

import { MothertongueComponent } from './mothertongue/mothertongue.component';
import { AgeComponent } from './age/age.component';
import { CitiesComponent } from './cities/cities.component';
import { DudeComponent } from './dude/dude.component';
import { FiguresComponent } from './figures/figures.component';
import { PartiesComponent } from './parties/parties.component';
import { PosterComponent } from './poster/poster.component';
import { SignatureComponent } from './signature/signature.component';
import { WeatherComponent } from './weather/weather.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    MothertongueComponent,
    AgeComponent,
    CitiesComponent,
    DudeComponent,
    FiguresComponent,
    PartiesComponent,
    PosterComponent,
    SignatureComponent,
    WeatherComponent,
    WishlistComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
