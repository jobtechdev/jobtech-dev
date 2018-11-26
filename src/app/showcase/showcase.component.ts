import {Component, OnInit} from '@angular/core';
import {ContentService} from '../shared/services/content.service';
import {Item} from '../shared/model/item';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  items: Observable<Item[]>;

  constructor( private contentService: ContentService) {
    this.items = this.contentService.getShowcases();
  }

  ngOnInit() {
  }

  goToUrl(url): void {
    // window.location.href=url;
    if (url === './showcase/portable-career' || './showcase/jobtechstore' ){
      window.location.href = url;
    } else {
      window.open(url, '_blank');
      console.log(url);
    }
  }

}
