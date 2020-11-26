import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChickenListComponent } from './chicken-list/chicken-list.component';
import { PoultryAboutComponent } from './poultry-about/poultry-about.component';
import { PoultryCartComponent } from './poultry-cart/poultry-cart.component';
import { PoultryBuysComponent } from './poultry-buys/poultry-buys.component';
import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChickenListComponent,
    PoultryAboutComponent,
    PoultryCartComponent,
    PoultryBuysComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
