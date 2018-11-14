import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import './rxjs-extensions';
import {ToastrModule} from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CookieLawModule} from 'angular2-cookie-law';
import {TagInputModule} from 'ngx-chips';  // https://www.npmjs.com/package/ngx-chips

import {ContentService} from './shared/services/content.service';
import {KeycloakService} from './shared/services/keycloak/keycloak.service';
import {JobServiceRegistrationService} from './shared/services/job-service-registration.service';
import {OntologyService} from './shared/services/ontology.service';
import {UserService} from './shared/services/user.service';

import {KeycloakGuard} from './shared/services/keycloak/keycloak.guard';

import {AppComponent} from './app.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {PlatformComponent} from './platform/platform.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {NewsComponent} from './news/news.component';
import {ProfileComponent} from './account/profile/profile.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './layouts/footer/footer.component';
import {DetailsComponent} from './apidatasets/details/details.component';
import {JobServiceEditorComponent} from './account/job-service-editor/job-service-editor.component';
import {JobServiceListComponent} from './account/job-service-list/job-service-list.component';
import { OrganisationComponent } from './account/organisation/organisation.component';
import {OrganisationService} from './shared/services/organisation.service';
import {ImgmodalComponent} from './imgmodal/imgmodal.component';
import { AboutComponent } from './about/about.component';
import { ApidatasetsComponent } from './apidatasets/apidatasets.component';
import { PortableCareerComponent } from './showcase/portable-career/portable-career.component';
import { ContactComponent } from './contact/contact.component';
import { WhitepapersComponent } from './whitepapers/whitepapers.component';
import { WhitepaperdetailsComponent } from './whitepapers/whitepaperdetails/whitepaperdetails.component';
import {SafePipe} from './safepipe/safe.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PlatformComponent,
    ShowcaseComponent,
    NewsComponent,
    ProfileComponent,
    HomeComponent,
    FooterComponent,
    DetailsComponent,
    JobServiceListComponent,
    JobServiceEditorComponent,
    OrganisationComponent,
    ImgmodalComponent,
    AboutComponent,
    ApidatasetsComponent,
    PortableCareerComponent,
    ContactComponent,
    WhitepapersComponent,
    WhitepaperdetailsComponent,
    SafePipe
  ],
  imports: [
    PdfViewerModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    CookieLawModule,
    ToastrModule.forRoot({positionClass: 'toast-top-full-width'}),
    TagInputModule
  ],
  providers: [
    KeycloakGuard,
    ContentService,
    KeycloakService,
    JobServiceRegistrationService,
    OntologyService,
    UserService,
    OrganisationService
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
