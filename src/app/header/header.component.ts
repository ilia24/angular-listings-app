import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  submitSearch(searchForm: NgForm){
    // const query = searchForm.value.searchInput
  }

}
