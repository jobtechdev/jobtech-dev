import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import {KeycloakService} from './app/shared/services/keycloak/keycloak.service';

if (environment.production) {
    enableProdMode();
}

// const configOptions = {
//     url: environment.idp_url,
//     realm: 'master',
//     clientId: 'job-tech-dev'
// };

// You can also use a keycloak.json file generated from the Keycloak admin console.
// Just download the file and copy to your /assets directory.  Then uncomment
// below and use the url instead of the configOptions above.
// const configOptions:string = 'http://localhost:4200/assets/keycloak.json';

// debugger
KeycloakService.init(environment.keycloak, {onLoad: 'check-sso'})
    .then(() => {

        platformBrowserDynamic().bootstrapModule(AppModule)
            .catch(err => console.log(err));

    })
    .catch((e: any) => {
        console.log('Error in bootstrap: ' + JSON.stringify(e));
    });