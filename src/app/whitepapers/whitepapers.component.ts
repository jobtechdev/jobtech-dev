import {Component, OnInit} from '@angular/core';
import {ContentService} from '../shared/services/content.service';
import {Whitepapers} from '../shared/model/item';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-whitepapers',
  templateUrl: './whitepapers.component.html',
  styleUrls: ['./whitepapers.component.scss']
})
export class WhitepapersComponent implements OnInit {

  items: Observable<Whitepapers[]>;

  constructor( private contentService: ContentService) {
    this.items = this.contentService.getWhitepapers();
  }

  ngOnInit() {
  }

  goToUrl(url): void {
    // window.location.href=url;
    if (url === './whitepaper/portable-career'){
      window.location.href = url;
    } else {
      window.open(url, '_blank');
      console.log(url);
    }
  }

}
