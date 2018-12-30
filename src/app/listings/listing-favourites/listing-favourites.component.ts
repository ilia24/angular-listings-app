import { Component, OnInit } from '@angular/core';

import { Listing } from '../listing.model'
import { ListingService } from '../listing.service'

@Component({
  selector: 'app-listing-favourites',
  templateUrl: './listing-favourites.component.html',
  styleUrls: ['./listing-favourites.component.scss']
})

export class ListingFavouritesComponent implements OnInit {
  favouriteListings: Listing[];

  constructor(private listingService: ListingService) { }

  ngOnInit(){
    this.favouriteListings = this.listingService.getFavourites()

    this.listingService.favouritesUpdated.subscribe(
      (listings: Listing[]) => {
        this.favouriteListings = listings
      }
    )
  }

}
