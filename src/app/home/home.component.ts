import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images: Array<object>;


  constructor() {
  }

  ngOnInit() {
    this.images = [
    {
      'header': 'Historical Job posting',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'image': '../../assets/images/showcaseSlideShow/History.PNG',
      'link': 'https://github.com/simonbe/afhistorik'
    },

    {
      'header': 'Ontologiutforskaren',
      'description': 'Lorem ipsum dolor sit amet.',
      'image': '../../assets/images/showcaseSlideShow/Kopetensutforskaren.PNG',
      'link': 'Show code',
      'demolink': 'http://pilot.arbetsformedlingen.se/kompetensutforskaren/#!/'

    },
      {
        'header': 'Job posting',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'image': '../../assets/images/showcaseSlideShow/JobPostings.PNG',
        'link': 'https://github.com/jobtechdev/vacancieswidget',
        'demolink': 'http://widget.northeurope.cloudapp.azure.com/kommun/vaxjo/'

      }
    ];
    console.log(this.images)
  }
}
