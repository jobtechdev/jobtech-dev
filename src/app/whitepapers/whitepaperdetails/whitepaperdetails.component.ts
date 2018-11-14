import {Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import {ContentService} from '../../shared/services/content.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-whitepaperdetails',
  templateUrl: './whitepaperdetails.component.html',
  styleUrls: ['./whitepaperdetails.component.scss']
})

export class WhitepaperdetailsComponent implements OnInit, OnDestroy {


  item: Observable<any>;
  name: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private contentService: ContentService) {



    this.sub = this.route.params.subscribe(params => {
      this.name = params['id'];
      this.item = this.contentService.getWhitepaperByName(this.name);
      console.log(this.item);

    });

  }
  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
