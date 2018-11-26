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
  //mye: string;

  constructor(private route: ActivatedRoute, private contentService: ContentService) {

    this.sub = this.route.params.subscribe(params => {
      this.name = params['id'];
      this.item = this.contentService.getApidatasetsByName(this.name);
    });
  }
  ngOnInit() {
    //this.mye = '<div class="btn btn-dark disabled" disabled> Request API-key</div>';
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  //check(e) {
  // console.log(this.mye);
  //if (e.target.checked) {
  //this.mye = '<a  class="btn btn-info" href="mailto:jobtechdev@arbetsformedlingen.se?subject=API request – Occupational Description&body= Name: %0dSurename: %0dCompany name (if applicable): %0dApplication name: %0dApplication  description:"> Request API-key</a>'


  //} else {
  //this.mye = '<div class="btn btn-dark disabled" > Request API-key</div>';

  //}
  //}

}

