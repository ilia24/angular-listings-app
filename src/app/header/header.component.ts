import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ListingService } from '../listings/listing.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private listingService: ListingService){}

  submitSearch(searchForm: NgForm){
    const query = searchForm.value.searchInput;
    this.listingService.executeSearch(query);
  }

}
