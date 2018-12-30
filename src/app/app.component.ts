import { Component} from '@angular/core';
import { ListingService } from './listings/listing.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ListingService]
})

export class AppComponent{

}
