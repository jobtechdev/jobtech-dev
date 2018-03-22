import { Component, OnInit } from '@angular/core';
import {OrganisationService} from '../../shared/services/organisation.service';
import {Organisation} from '../../shared/model/organisation';
import {Observable} from 'rxjs/Observable';
import {User} from '../../shared/model/user';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';
import {of} from 'rxjs/observable/of';
import {NgbTypeaheadConfig} from '@ng-bootstrap/ng-bootstrap';
import {KeycloakService} from '../../shared/services/keycloak/keycloak.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-organisation',
  templateUrl: './organisation.component.html',
  styleUrls: ['./organisation.component.scss'],
  providers: [ {provide: NgbTypeaheadConfig, useFactory: ngbTypeaheadDefaultConfigFactory}]
})
export class OrganisationComponent implements OnInit {

  public organisationAsync: Observable<Organisation>;
  public myOrganisation: Organisation;
  public hasAnOrganisation = false;
  public editMode = false;
  public joinRequestOrganisationName: string;
  public joinRequestMemberName: string;

  public edit: Organisation = new Organisation();
  public isCreateOrgCollapsed = true;
  public isJoinCollapsed = true;

  closeResult: string;

  constructor(private orgService: OrganisationService,
              private keycloakService: KeycloakService,
              private modalService: NgbModal) { }

  ngOnInit() {
    this.loadMyOrganisation();
    this.joinRequestMemberName = this.keycloakService.client().tokenParsed['name'];
  }

  private loadMyOrganisation() {
    // this.organisationAsync = this.orgService.getMyOrganisation();
    // console.log('loadMyOrganisation');
    // const sub = this.organisationAsync.subscribe(org => {
    //   console.log('organisationAsync ', org);
    //   this.hasAnOrganisation = org != null;
    //   this.myOrganisation = org;
    // }, error => {
    //   console.log('Can not load organisation: ', error);
    // }, () => {
    //   // sub.unsubscribe();
    // });

    //dummy data for dev.
    this.myOrganisation = new Organisation();
    this.myOrganisation.name = 'Monsters';
    this.myOrganisation.email = 'info@monsters.se';
    this.myOrganisation.joinRequestQueue = <User[]>[{name: 'Pär E'}, {name: 'David Druid'}, {name: 'Rickard Riddare'}];
    this.myOrganisation.members = <User[]>[{name: 'Olle'}, {name: 'Eva'}];
    this.hasAnOrganisation = true;
    this.organisationAsync = Observable.of(this.myOrganisation);
  }

  protected enterEditMode() {
    this.editMode = true;
    this.edit = this.myOrganisation;
  }

  protected exitEditMode() {
    this.editMode = false;
  }

  protected save() {
    this.exitEditMode();
  }

  protected cancel() {
    this.exitEditMode();
  }
  protected delete() {
    this.exitEditMode();
  }

  protected createNewOrganisation() {
    this.orgService.create(this.edit);
  }

  protected sendJoinRequest() {

  }

  protected acceptMemberRequest(user: User) {

  }

  protected rejectemberRequest(user: User) {

  }

  protected removeMember(user: User) {

  }

  public toggleCreateOrgCollapsed() {
    this.isCreateOrgCollapsed = !this.isCreateOrgCollapsed;
    this.isJoinCollapsed = true;
  }

  public toggleJoinCollapsed() {
    this.isJoinCollapsed = !this.isJoinCollapsed;
    this.isCreateOrgCollapsed = true;
  }

  public open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  typeaheadOrganisations = (text$: Observable<string>) =>
    text$
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term =>
        this.orgService.findNameOrganisations(term)
          .catch(() => {
            return of([]);
          }))

}

export function ngbTypeaheadDefaultConfigFactory(): NgbTypeaheadConfig {
  const typeaheadConfig = new NgbTypeaheadConfig();
  typeaheadConfig.editable = false;
  return typeaheadConfig;
}
