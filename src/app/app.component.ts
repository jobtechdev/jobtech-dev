import { Component } from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {UserService} from './shared/services/user.service';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private userService: UserService,
              public router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }
  ngOnInit () {
    window.addEventListener("load", function(){
      window.cookieconsent.initialise({
        'palette': {
          'popup': {
            'background': '#343a40',

          },
          'button': {
            'background': '#0967b1',

          }
        },
        'showLink': false,
        'theme': "classic",
        "static": true,
        "content": {
          "message": "This website uses cookies to ensure you to get the best\n" +
            "experience. By continuing to browse the site, you're agreeing to our use of cookies."
        }
      })});

  }
}
