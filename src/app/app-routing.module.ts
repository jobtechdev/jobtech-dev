import {RouterModule, Routes} from '@angular/router';
import {AssetsComponent} from './assets/assets.component';
import {DetailsComponent} from './assets/details/details.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';
import {PlatformComponent} from './platform/platform.component';
import {ProfileComponent} from './account/profile/profile.component';
import {ShowcaseComponent} from './showcase/showcase.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {KeycloakGuard} from './shared/services/keycloak/keycloak.guard';
import { JobServiceListComponent } from './account/job-service-list/job-service-list.component';
import { JobServiceEditorComponent } from './account/job-service-editor/job-service-editor.component';
import {OrganisationComponent} from './account/organisation/organisation.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'race-list', pathMatch: 'full' },
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'assets', component: AssetsComponent},
  {path: 'assets/:id', component: DetailsComponent},
  {path: 'news', component: NewsComponent},
  {path: 'platform', component: PlatformComponent},
  {path: 'showcase', component: ShowcaseComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [KeycloakGuard]},
  {path: 'services', component: JobServiceListComponent, canActivate: [KeycloakGuard]},
  {path: 'service/add', component: JobServiceEditorComponent, canActivate: [KeycloakGuard]},
  {path: 'service/:id', component: JobServiceEditorComponent, canActivate: [KeycloakGuard]},
  {path: 'organisation', component: OrganisationComponent, canActivate: [KeycloakGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [KeycloakGuard]},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule {
}
