import { Injectable, EventEmitter } from '@angular/core';

import { Listing } from './listing.model'

@Injectable({
  providedIn: 'root'
})

export class ListingService {
  listingSelected = new EventEmitter<Listing>();
  searchExecuted = new EventEmitter<Listing[]>();

  private listings: Listing[] = [
    new Listing('33 Yorkville Ave', 'https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1'),
    new Listing('23 Davenport Road','https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg?v=8'),
    new Listing('7768 8th line','https://peopledotcom.files.wordpress.com/2018/03/10-things-i-hate-about-you-house-6.jpg'),
    new Listing('2321 Richmond','https://studio.pinotspalette.com/edwardsville/images/house-images-2013-3.jpg'),
    new Listing('33 Yorkville Ave', 'https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1'),
    new Listing('872 Bathurst','https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'),
    new Listing('7768 8th line','https://peopledotcom.files.wordpress.com/2018/03/10-things-i-hate-about-you-house-6.jpg'),
    new Listing('2321 Richmond','https://studio.pinotspalette.com/edwardsville/images/house-images-2013-3.jpg'),
    new Listing('25 Jarvis','https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg'),
    new Listing('33 Yorkville Ave', 'https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1'),
    new Listing('23 Davenport Road','https://cdn.houseplans.com/product/q5qkhirat4bcjrr4rpg9fk3q94/w800x533.jpg?v=8')
  ]

  getListings() {
    return this.listings.slice()
  }

  executeSearch(input){
    const query = new RegExp(`${input}`, 'gi');
    const foundListings = this.listings.filter(({name}) => name.match(query));
    this.searchExecuted.emit(foundListings)
  }
}
