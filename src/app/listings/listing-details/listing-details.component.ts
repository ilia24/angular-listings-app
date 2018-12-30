import { Component, OnInit } from '@angular/core';

import { Listing } from '../listing.model'
import { ListingService } from '../listing.service'

@Component({
  selector: 'listing-details-modal',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.scss']
})
export class ListingDetailsComponent implements OnInit {
  modalOpen: boolean = false
  listing: Listing;
  constructor(private listingService: ListingService){}

  // this lets us completely encapsulate the open/close logic within the
  // component/service relationship
  ngOnInit() {
    this.listingService.listingSelected.subscribe(
      (selectedListing: Listing) => {
        this.listing = selectedListing
        this.modalOpen = true
      }
    )
  }

  closeListing(){
    this.modalOpen = false
  }

}
