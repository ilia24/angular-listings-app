import { Component, OnInit } from '@angular/core';

import { ListingService } from '../listing.service'
import { Listing } from '../listing.model'

@Component({
  selector: 'app-listing-index',
  templateUrl: './listing-index.component.html',
  styleUrls: ['./listing-index.component.scss']
})
export class ListingIndexComponent implements OnInit {
  listings: Listing[];

  constructor(private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings()

    this.listingService.searchExecuted.subscribe(
      (listings: Listing[]) => {
        this.listings = listings
      }
    )
  }

}
