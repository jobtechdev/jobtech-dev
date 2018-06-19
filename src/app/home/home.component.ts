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
      'link': 'https://github.com/simonbe/afhistorik',
      'demolink':'http://historik.azurewebsites.net/',
    },

    {
      'header': 'Ontologiutforskaren',
      'description': 'Lorem ipsum dolor sit amet.',
      'image': '../../assets/images/showcaseSlideShow/Kopetensutforskaren.jpg',
      'link': 'http://ontologi.arbetsformedlingen.se/ontology/v1/?url=swagger.json',
      'demolink': 'http://pilot.arbetsformedlingen.se/kompetensutforskaren/#!/',

    },
      {
        'header': 'Vacancieswidget ',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'image': '../../assets/images/showcaseSlideShow/jobposting.PNG',
        'link': 'https://github.com/jobtechdev/vacancieswidget',
        'demolink': 'http://widget.northeurope.cloudapp.azure.com/kommun/vaxjo/',

      },

      {
        'header': 'Jobb för dig ',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'image': '../../assets/images/showcaseSlideShow/Jobbfordig.PNG',
        'link': 'https://github.com/JobtechSwe/jobwidget',
        'demolink': 'http://www.digilab.se/jobwidget/examples/ki/utbildning/karriarservice.html'

      },

      {
        'header': 'Widget Jobskills ',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        'image': '../../assets/images/showcaseSlideShow/Widget_Jobskills.PNG',
        'link': 'https://github.com/Iteam1337/jobskills-widget',
        'demolink': 'http://s3-eu-west-1.amazonaws.com/seband/demo.html'

      },

         ];
    console.log(this.images)
  }
}
