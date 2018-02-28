import {Component, OnInit, OnDestroy} from '@angular/core';
import {ContentService} from '../../shared/services/content.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit, OnDestroy {

  item: Observable<any>;
  name: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private contentService: ContentService) {

    this.sub = this.route.params.subscribe(params => {
      this.name = params['id'];
      this.item = this.contentService.getAssetByName(this.name);
    });
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
