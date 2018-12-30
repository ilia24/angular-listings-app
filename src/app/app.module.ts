import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { ListingDetailsComponent } from './listings/listing-details/listing-details.component';
import { ListingIndexComponent } from './listings/listing-index/listing-index.component';
import { ListingItemComponent } from './listings/listing-index/listing-item/listing-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    ListingDetailsComponent,
    ListingIndexComponent,
    ListingItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
