import { Component, Input } from '@angular/core';

import { Listing } from '../../listing.model'
import { ListingService } from '../../listing.service'


@Component({
  selector: 'app-listing-item',
  templateUrl: './listing-item.component.html',
  styleUrls: ['./listing-item.component.scss']
})
export class ListingItemComponent {
  @Input() listing: Listing
  
  constructor(private listingService: ListingService){}

  selectListing(){
    this.listingService.listingSelected.emit(this.listing)
  }
}
