import { Component, OnInit } from '@angular/core';
import {ContentService} from '../shared/services/content.service';
import {Itemm} from '../shared/model/item';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-apidatasets',
  templateUrl: './apidatasets.component.html',
  styleUrls: ['./apidatasets.component.scss']
})
export class ApidatasetsComponent implements OnInit {
  items: Observable<Itemm[]>;
  constructor(private contentService: ContentService) {
    this.items = this.contentService.getApidatasets();
  }
  ngOnInit() {}
}
