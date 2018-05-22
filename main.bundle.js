webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account/job-service-editor/job-service-editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2 mb-2\">\r\n  <div class=\"card\" *ngIf=\"service; else loading\">\r\n\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">{{isNew ? \"Create a new service\": \"Edit your service\"}}</h5>\r\n\r\n      <form (ngSubmit)=\"onSave(theForm)\" #theForm=\"ngForm\" novalidate>\r\n        <div class=\"row \">\r\n          <div class=\"col-12 col-md-6\">\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"nameInput\">Name</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"nameInput\" aria-describedby=\"nameHelp\"\r\n                     placeholder=\"Enter name\" #name=\"ngModel\" [(ngModel)]=\"service.name\"\r\n                     name=\"name\" required>\r\n              <small id=\"nameHelp\" [hidden]=\"name.valid || name.pristine\"\r\n                     class=\"alert alert-danger form-text text-muted\">Enter a title\r\n              </small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"inputDescription\">Description</label>\r\n              <textarea class=\"form-control\" id=\"inputDescription\" name=\"description\" aria-describedby=\"descriptionHelp\"\r\n                        placeholder=\"Enter description\" [(ngModel)]=\"service.description\" rows=\"3\"\r\n\r\n                        required #description=\"ngModel\"></textarea>\r\n              <small id=\"descriptionHelp\" [hidden]=\"description.valid || description.pristine\"\r\n                     class=\"alert alert-danger form-text text-muted\">Enter the service description\r\n              </small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"homepageInput\">Link</label>\r\n              <div class=\"input-group\">\r\n                <div class=\"input-group-prepend\">\r\n                  <div class=\"input-group-text\" id=\"btnGroupFavicon\">\r\n                    <img [src]=\"'https://www.google.com/s2/favicons?domain_url='+doEncodeURI(service.homepage)\" alt=\"favicon\">\r\n                  </div>\r\n                </div>\r\n                <input type=\"text\" class=\"form-control\" id=\"homepageInput\" name=\"homepage\" aria-describedby=\"homepageHelp\"\r\n                       placeholder=\"Enter url\"\r\n                       [(ngModel)]=\"service.homepage\" #homepage=\"ngModel\" required>\r\n              </div>\r\n\r\n              <small id=\"homepageHelp\" [hidden]=\"homepage.valid || homepage.pristine\"\r\n                     class=\"alert alert-danger form-text text-muted\">Enter what url the service is targeting\r\n              </small>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"logoInput\">Logo</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"logoInput\" name=\"logo\" aria-describedby=\"logoHelp\"\r\n                     placeholder=\"Enter logo\"\r\n                     [(ngModel)]=\"service.logoUrl\" #logo=\"ngModel\" required>\r\n              <small id=\"logoHelp\" [hidden]=\"logo.valid || logo.pristine\"\r\n                     class=\"alert alert-danger form-text text-muted\">Enter a logo url to the service\r\n              </small>\r\n\r\n              <img [src]=\"service.logoUrl\" title=\"logo\" alt=\"logo\">\r\n            </div>\r\n\r\n          </div>\r\n          <div class=\"col-12 col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"inputCategory\">Category</label>\r\n              <select class=\"form-control custom-select\" [ngModel]=\"service.category\"\r\n                      (ngModelChange)=\"service.category=$event\" id=\"inputCategory\" name=\"category\" required>\r\n                <option value=\"\" disabled default>Select Category</option>\r\n                <option *ngFor=\"let option of categories | async\" [value]=\"option\">{{option}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"professionsInput\">Professions</label>\r\n\r\n              <tag-input class=\"form-control\" [(ngModel)]=\"professions\" #_professions=\"ngModel\"\r\n                         id=\"professionsInput\" name=\"_professions\">\r\n                <tag-input-dropdown [autocompleteObservable]=\"autocompleteForProfessions\"></tag-input-dropdown>\r\n              </tag-input>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"competencesInput\">Competences</label>\r\n\r\n              <tag-input class=\"form-control\" [(ngModel)]=\"competences\" #_competences=\"ngModel\"\r\n                         id=\"competencesInput\" name=\"_competences\">\r\n                <tag-input-dropdown [autocompleteObservable]=\"autocompleteForCompetences\"></tag-input-dropdown>\r\n              </tag-input>\r\n            </div>\r\n\r\n            <div class=\"form-group form-check\">\r\n              <input class=\"form-check-input\" type=\"checkbox\" id=\"publishedCheck\" name=\"published\"\r\n                     [(ngModel)]=\"service.published\">\r\n              <label class=\"form-check-label\" for=\"publishedCheck\">\r\n                Is this service ready to publish to JobStore?\r\n              </label>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onBackToList()\"><i class=\"fa fa-hand-o-left\"></i>\r\n                Back to list\r\n              </button>\r\n\r\n              <button type=\"button\" class=\"btn btn-secondary ml-1\" (click)=\"onDelete()\" *ngIf=\"isNew === false\"><i\r\n                class=\"fa fa-eraser\"></i> Delete\r\n              </button>\r\n              <button type=\"button\" class=\"btn btn-secondary ml-1\" (click)=\"onReset()\"><i\r\n                class=\"fa fa-undo\"></i> Reset\r\n              </button>\r\n              <button type=\"submit\" [disabled]=\"theForm.form.invalid || !theForm.dirty\"\r\n                      class=\"btn btn-primary pull-right\"><i class=\"fa fa-save\"></i> Save\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>Laddar ...</ng-template>\r\n"

/***/ }),

/***/ "./src/app/account/job-service-editor/job-service-editor.component.scss":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\nselect {\n  text-transform: capitalize; }\n\noption {\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/account/job-service-editor/job-service-editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobServiceEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model_registration__ = __webpack_require__("./src/app/shared/model/registration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_job_service_registration_service__ = __webpack_require__("./src/app/shared/services/job-service-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_ontology_service__ = __webpack_require__("./src/app/shared/services/ontology.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var JobServiceEditorComponent = /** @class */ (function () {
    function JobServiceEditorComponent(formBuilder, router, route, toastrService, jobServicesService, ontologyService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.toastrService = toastrService;
        this.jobServicesService = jobServicesService;
        this.ontologyService = ontologyService;
        this.isNew = true;
        this.industries = [];
        this.professions = [];
        this.competences = [];
        this.autocompleteForProfessions = function (text) {
            return _this.ontologyService.professions(text);
        };
        this.autocompleteForCompetences = function (text) {
            return _this.ontologyService.competences(text);
        };
    }
    JobServiceEditorComponent_1 = JobServiceEditorComponent;
    JobServiceEditorComponent.arrayToString = function (arr) {
        if (arr == null || arr.length === 0) {
            return 'All';
        }
        return arr.map(function (value) { return value.value ? value.value : value; }).join(',');
    };
    JobServiceEditorComponent.stringToArray = function (text) {
        if (text == null || text.trim().length === 0) {
            return [{ 'value': 'all', 'display': 'All' }];
        }
        return text.split(',');
    };
    JobServiceEditorComponent.prototype.doEncodeURI = function (url) {
        return encodeURI(url);
    };
    JobServiceEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categories = this.jobServicesService.getCategories();
        this.subscription = this.route.params.subscribe(function (params) {
            _this.registrationId = params['id'];
            if (_this.registrationId) {
                // console.log('Got registrationId: ' + this.registrationId + ' from route');
                _this.registration = _this.jobServicesService.get(_this.registrationId);
                _this.registration.subscribe(function (reg) {
                    _this.isNew = false;
                    _this.originalService = reg;
                    _this.service = new __WEBPACK_IMPORTED_MODULE_3__shared_model_registration__["a" /* Registration */]();
                    Object.assign(_this.service, reg);
                    _this.industries = JobServiceEditorComponent_1.stringToArray(_this.service.industries);
                    _this.professions = JobServiceEditorComponent_1.stringToArray(_this.service.professions);
                    _this.competences = JobServiceEditorComponent_1.stringToArray(_this.service.competences);
                    // console.log('got registration:', this.service);
                });
            }
            else {
                _this.service = new __WEBPACK_IMPORTED_MODULE_3__shared_model_registration__["a" /* Registration */]();
                _this.industries = JobServiceEditorComponent_1.stringToArray(_this.service.industries);
                _this.professions = JobServiceEditorComponent_1.stringToArray(_this.service.professions);
                _this.competences = JobServiceEditorComponent_1.stringToArray(_this.service.competences);
            }
        });
    };
    JobServiceEditorComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    JobServiceEditorComponent.prototype.onDelete = function () {
        var _this = this;
        if (confirm('Do you really want to delete this service?')) {
            var sub_1 = this.jobServicesService.remove(this.registrationId).subscribe(function () {
                _this.toastrService.success('Removed service');
                _this.router.navigate(['/service']);
            }, function (error) {
                _this.toastrService.error('Failed to remove the service');
                console.error('Failed to remove the service', error);
            }, function () { return sub_1.unsubscribe(); });
        }
    };
    JobServiceEditorComponent.prototype.onSave = function (theForm) {
        var _this = this;
        if (theForm.form.valid) {
            this.service.industries = JobServiceEditorComponent_1.arrayToString(this.industries);
            this.service.professions = JobServiceEditorComponent_1.arrayToString(this.professions);
            this.service.competences = JobServiceEditorComponent_1.arrayToString(this.competences);
            console.log('onSave ', this.service);
            if (this.isNew) {
                var sub_2 = this.jobServicesService.add(this.service)
                    .subscribe(function () {
                    _this.toastrService.success('The service was successfully registered');
                    _this.router.navigate(['/service']);
                }, function (error) {
                    _this.toastrService.error('Failed to register the service');
                    console.error('Failed to register the service', error);
                }, function () { return sub_2.unsubscribe(); });
            }
            else {
                var sub_3 = this.jobServicesService.update(this.service)
                    .subscribe(function () {
                    _this.toastrService.success('Changes was saved successful');
                    _this.router.navigate(['/service']);
                }, function (error) {
                    _this.toastrService.error('Failed to save the changes');
                    console.error('Failed to save the changes', error);
                }, function () { return sub_3.unsubscribe(); });
            }
        }
        else {
            this.toastrService.error('Can not save or update the service, the form contains errors');
            return false;
        }
    };
    JobServiceEditorComponent.prototype.onReset = function () {
        this.service = Object.create(this.originalService);
        this.industries = JobServiceEditorComponent_1.stringToArray(this.originalService.industries);
        this.professions = JobServiceEditorComponent_1.stringToArray(this.originalService.professions);
        this.competences = JobServiceEditorComponent_1.stringToArray(this.originalService.competences);
    };
    JobServiceEditorComponent.prototype.onBackToList = function () {
        this.router.navigate(['/service']);
    };
    JobServiceEditorComponent = JobServiceEditorComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-service-editor',
            template: __webpack_require__("./src/app/account/job-service-editor/job-service-editor.component.html"),
            styles: [__webpack_require__("./src/app/account/job-service-editor/job-service-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_job_service_registration_service__["a" /* JobServiceRegistrationService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_ontology_service__["a" /* OntologyService */]])
    ], JobServiceEditorComponent);
    return JobServiceEditorComponent;
    var JobServiceEditorComponent_1;
}());



/***/ }),

/***/ "./src/app/account/job-service-list/job-service-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2 mb-2\" *ngIf=\"myRegistrations | async; let registrations; else loading\">\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">List of your registered services</h5>\r\n        <!-- <p>{{myOrganisation | json}}</p> -->\r\n      <!-- Organistaion Check & Presentation -->\r\n      <div id=\"serviceHeader\">\r\n        <div *ngIf=\"myOrganisation.name; else showRegInfo\">\r\n          <h2>{{myOrganisation.name}}</h2>\r\n        </div>\r\n        <!-- Presents user to register an organisation if it has none -->\r\n        <ng-template #showRegInfo>\r\n          <h2>Please join or register an organisation to add services <a class=\"btn btn-primary\" [routerLink]=\"['/organisation']\">Organisation</a></h2>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <div class=\"table-responsive-sm\">\r\n        <table class=\"table table-striped\">\r\n          <colgroup>\r\n            <col width=\"5%\">\r\n            <col>\r\n            <col width=\"30%\">\r\n            <col width=\"20%\">\r\n            <col width=\"10%\">\r\n            <col width=\"10%\">\r\n          </colgroup>\r\n          <thead>\r\n          <tr>\r\n            <th scope=\"col\"></th>\r\n            <th scope=\"col\">Name</th>\r\n            <th scope=\"col\">Category</th>\r\n            <th scope=\"col\">Competences</th>\r\n            <th scope=\"col\" title=\"If the service is published public on Job store\">Published</th>\r\n            <th scope=\"col\">Action</th>\r\n          </tr>\r\n          </thead>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"5\">&nbsp;</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn btn-primary\" (click)=\"onAddNew()\" [disabled]=\"!myOrganisation.name\"><i class=\"fa fa-plus-circle\"></i> Add</button>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n          <tbody>\r\n            <tr *ngFor=\"let registration of registrations\">\r\n              <td><img [src]=\"'https://www.google.com/s2/favicons?domain_url='+doEncodeURI(registration.homepage)\" alt=\"logo\"></td>\r\n              <th scope=\"row\">{{ registration.name }}</th>\r\n              <td class=\"category\">{{ registration.category }}</td>\r\n              <td>{{ registration.competences }}</td>\r\n              <td >\r\n                <i [class]=\"registration.published ? 'fa fa-toggle-on' : 'fa fa-toggle-off'\" (click)=\"togglePublish(registration)\"> {{ registration.published?'Yes':'No' }}</i>\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onEdit(registration.id)\"><i\r\n                  class=\"fa fa-wrench\"></i> Edit\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>Laddar ...</ng-template>\r\n"

/***/ }),

/***/ "./src/app/account/job-service-list/job-service-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".category {\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/account/job-service-list/job-service-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobServiceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_job_service_registration_service__ = __webpack_require__("./src/app/shared/services/job-service-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_model_organisation__ = __webpack_require__("./src/app/shared/model/organisation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobServiceListComponent = /** @class */ (function () {
    function JobServiceListComponent(router, toastrService, jobServicesService) {
        this.router = router;
        this.toastrService = toastrService;
        this.jobServicesService = jobServicesService;
    }
    JobServiceListComponent.prototype.ngOnInit = function () {
        this.myRegistrations = this.jobServicesService.list();
        //dummy data for UI dev.
        this.myOrganisation = new __WEBPACK_IMPORTED_MODULE_4__shared_model_organisation__["a" /* Organisation */]();
        this.myOrganisation.name = 'Monsters';
        this.myOrganisation.email = 'info@monsters.se';
        //this.myOrganisation.joinRequestQueue = <User[]>[{name: 'Pär E'}];
        //this.myOrganisation.members = <User[]>[{name: 'Olle'}, {name: 'Eva'}];
        //this.hasAnOrganisation = true;
    };
    JobServiceListComponent.prototype.onAddNew = function () {
        this.router.navigate(['/service/add']);
    };
    JobServiceListComponent.prototype.onEdit = function (id) {
        this.router.navigate(['/service', id]);
    };
    JobServiceListComponent.prototype.doEncodeURI = function (url) {
        return encodeURI(url);
    };
    JobServiceListComponent.prototype.togglePublish = function (registration) {
        var _this = this;
        if (registration.published) {
            var sub_1 = this.jobServicesService.unpublish(registration)
                .subscribe(function () { _this.toastrService.info('registration was unpublish successful'); }, function (error) {
                _this.toastrService.error('Failed to unpublish registration');
                console.error('Failed to unpublish registration', error);
            }, function () { return sub_1.unsubscribe(); });
        }
        else {
            var sub_2 = this.jobServicesService.publish(registration)
                .subscribe(function () { _this.toastrService.info('registration was publish successful'); }, function (error) {
                _this.toastrService.error('Failed to publish registration');
                console.error('Failed to publish registration', error);
            }, function () { return sub_2.unsubscribe(); });
        }
    };
    JobServiceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-job-services-list',
            template: __webpack_require__("./src/app/account/job-service-list/job-service-list.component.html"),
            styles: [__webpack_require__("./src/app/account/job-service-list/job-service-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services_job_service_registration_service__["a" /* JobServiceRegistrationService */]])
    ], JobServiceListComponent);
    return JobServiceListComponent;
}());



/***/ }),

/***/ "./src/app/account/organisation/organisation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container orgContent\">\r\n  <div *ngIf=\"organisationAsync; else loading\">\r\n    <!-- If user are apart on an organisation -->\r\n    <div *ngIf=\"hasAnOrganisation\">\r\n      <div class=\"container-fluid card orgInfoCard\">\r\n        <div *ngIf=\"!editMode\">\r\n          <div class=\"row\">\r\n            <div class=\"col-8\">\r\n              <h2>{{myOrganisation.name}}</h2>\r\n            </div>\r\n            <div class=\"col-4 text-right\">\r\n              <button class=\"btn btn-secondary\" (click)=\"openDialog(deleteOrgDialogTemplate)\"><i class=\"fa fa-eraser\"></i>Delete</button>\r\n              <button class=\"btn btn-primary\" (click)=\"enterEditMode()\"><i class=\"fa fa-wrench\"></i>Edit</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"mt-4 row\">\r\n            <div class=\"col\">\r\n              <p>Pending join requests:</p>\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\" *ngFor=\"let member of pendingMembers | async\">\r\n                  <p class=\"memberReqName\">{{member.name}}</p>\r\n                  <div class=\"memberDecideButtons\">\r\n                    <button class=\"btn btn-success\" (click)=\"acceptMemberRequest(member)\"><i class=\"fa fa-plus-circle\"></i>Accept</button>\r\n                    <button class=\"btn btn-danger\" (click)=\"rejectMemberRequest(member)\"><i class=\"fa fa-minus-circle\"></i>Reject</button>\r\n                  </div>\r\n                </li>\r\n                <li class=\"list-group-item\" *ngIf=\"(pendingMembers | async | json) == '[]'\">No pending request</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n\r\n          <p>Members:</p>\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item\" *ngFor=\"let member of members | async\">{{member.name}}\r\n              <button type=\"button\" class=\"btn btn-link text-danger pull-right\"\r\n                      (click)=\"removeMember(member)\"\r\n                      *ngIf=\"(members | async)?.length > 1\"><i class=\"fa fa-minus-circle\"></i>Remove</button>\r\n            </li>\r\n            <li class=\"list-group-item\" *ngIf=\"(members | async | json) == '[]'\">No members is attached</li>\r\n          </ul>\r\n        </div>\r\n        <!--Edit organisation view -->\r\n        <div *ngIf=\"editMode\">\r\n          <form #theForm=\"ngForm\" novalidate>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"nameInput\">Name</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"editOrgNameInput\" name=\"name\"\r\n                         aria-describedby=\"editOrgNameHelp\" placeholder=\"Organisation name\" [(ngModel)]=\"edit.name\"\r\n                         required>\r\n                  <small id=\"editOrgNameHelp\" hidden=\"true\" class=\"alert alert-danger form-text text-muted\">Enter a logo\r\n                    url to the service\r\n                  </small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"editDescriptionInput\">Description</label>\r\n                  <textarea class=\"form-control\" id=\"editDescriptionInput\" name=\"description\"\r\n                            aria-describedby=\"editDescriptionHelp\" [(ngModel)]=\"edit.description\" required></textarea>\r\n                  <small id=\"editDescriptionHelp\" hidden=\"true\" class=\"alert alert-danger form-text text-muted\">Enter\r\n                    short description of your organisation\r\n                  </small>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"editNumberInput\">Number</label>\r\n                  <input type=\"text\" class=\"form-control\" id=\"editNumberInput\" name=\"number\"\r\n                         placeholder=\"Organisation number\" [(ngModel)]=\"edit.number\" required>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"contactInput\">Contact email</label>\r\n                  <input type=\"email\" class=\"form-control\" id=\"editOrgContactInput\" name=\"contact\"\r\n                         aria-describedby=\"contactHelp\" placeholder=\"Contact email\" [(ngModel)]=\"edit.email\" email\r\n                         required>\r\n                  <small id=\"editOrgContactHelp\" hidden=\"true\" class=\"alert alert-danger form-text text-muted\">Enter a\r\n                    logo url to the service\r\n                  </small>\r\n                </div>\r\n\r\n                <div class=\"text-right\">\r\n                  <button class=\"btn\" (click)=\"cancel()\">Cancel</button>\r\n                  <button class=\"btn btn-primary\" (click)=\"save()\"><i class=\"fa fa-save\"></i> Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- if user is not apart of an organisation, presenting options -->\r\n    <div *ngIf=\"!hasAnOrganisation\">\r\n      <div class=\"container\">\r\n        <div class=\"row  orgChoiceCardContainer\">\r\n          <div class=\"col-md-6 orgChoiceCardWrap\">\r\n            <!--<form>-->\r\n            <div class=\"col-md-12 orgChoiceCard\">\r\n              <h4>New Organisation</h4>\r\n              <button class=\"btn btn-primary\" (click)=\"openDialog(createOrg)\"><i class=\"fa fa-plus-circle\"></i> CREATE</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 orgChoiceCardWrap\">\r\n            <div class=\"col-md-12 orgChoiceCard\">\r\n              <h4>Join a Organisation</h4>\r\n              <button class=\"btn btn-primary\" (click)=\"openDialog(joinOrg)\"><i class=\"fa fa-user-plus\"></i> JOIN</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>Laddar ...</ng-template>\r\n\r\n<ng-template #createOrg>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Create an Organisation</h4>\r\n    <button type=\"button\" class=\"close text-left\" aria-label=\"Close\" (click)=\"closeDialog('Close click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #theForm=\"ngForm\" novalidate>\r\n      <div class=\"form-group\">\r\n        <label for=\"nameInput\">Name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"nameInput\" name=\"name\" aria-describedby=\"nameHelp\"\r\n               placeholder=\"Organisation name\" [(ngModel)]=\"edit.name\" required>\r\n        <small id=\"nameHelp\" hidden=\"true\" class=\"alert alert-danger form-text text-muted\">Enter name for your\r\n          organisation\r\n        </small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"descriptionInput\">Description</label>\r\n        <textarea class=\"form-control\" id=\"descriptionInput\" name=\"description\" aria-describedby=\"descriptionHelp\"\r\n                  [(ngModel)]=\"edit.description\" required></textarea>\r\n        <small id=\"descriptionHelp\" hidden=\"true\" class=\"alert alert-danger form-text text-muted\">Enter short\r\n          description of your organisation\r\n        </small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"numberInput\">Number</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"numberInput\" name=\"number\" placeholder=\"Organisation number\"\r\n               [(ngModel)]=\"edit.number\" required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"contactInput\">Contact email</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"contactInput\" name=\"contact\" aria-describedby=\"contactHelp\"\r\n               placeholder=\"Contact email\" [(ngModel)]=\"edit.email\" email required>\r\n        <small id=\"contactHelp\" hidden=\"true\" class=\"alert alert-danger form-text text-muted\">Enter a logo url to the\r\n          service\r\n        </small>\r\n      </div>\r\n      <button class=\"btn btn-success\" (click)=\"createNewOrganisation();\"><i class=\"fa fa-plus-circle\"></i> Create new organisation</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"closeDialog('Close click')\">Abort</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #joinOrg>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Join a Organisation</h4>\r\n    <button type=\"button\" class=\"close text-left\" aria-label=\"Close\" (click)=\"closeDialog('Close click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form>\r\n      <div class=\"form-group\">\r\n        <label for=\"reqOrgNameInput\">Organisation name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"reqOrgNameInput\" name=\"reqOrgNameInput\"\r\n               placeholder=\"Organisation name\" [(ngModel)]=\"joinRequestOrganisation\"\r\n               [ngbTypeahead]=\"typeaheadOrganisations\" [resultFormatter]=\"formatter\" [inputFormatter]=\"formatter\" #modelElement=\"ngModel\"\r\n               required>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"reqMemNameInput\">Your name</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"reqMemNameInput\" name=\"reqMemNameInput\"\r\n               aria-describedby=\"reqMemNameHelp\" placeholder=\"Your name\" [(ngModel)]=\"joinRequestMemberName\" required>\r\n        <small id=\"reqMemNameHelp\" hidden=\"true\" class=\"alert alert-danger form-text text-muted\">Enter a logo url to the\r\n          service\r\n        </small>\r\n      </div>\r\n      <button class=\"btn btn-success\" (click)=\"sendJoinRequest();\">Join one</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"closeDialog('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #deleteOrgDialogTemplate>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Delete Organisation</h4>\r\n    <button type=\"button\" class=\"close text-left\" aria-label=\"Close\" (click)=\"closeDialog('Close click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <h5>Are you sure to delete this organisation?</h5>\r\n    <button type=\"button\" class=\"mt-2 btn btn-danger\" (click)=\"closeDialog('Close click')\">No keep it</button>\r\n    <button class=\"btn btn-success pull-right\" (click)=\"delete();\">Yes delete it</button>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/account/organisation/organisation.component.scss":
/***/ (function(module, exports) {

module.exports = ".ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n\n.orgContent {\n  min-height: 100vh; }\n\n.orgInfoCard {\n  padding: 2%; }\n\n.orgChoiceCardContainer {\n  margin-right: 20px;\n  margin-left: 20px;\n  margin-top: 10%; }\n\n.orgChoiceCardWrap {\n  margin-bottom: 20px; }\n\n.orgChoiceCard {\n  height: 500px;\n  max-width: 400px;\n  margin: auto;\n  text-align: center;\n  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 2px;\n  background-color: #FFF; }\n\n.orgChoiceCard h4 {\n    padding-top: 50px; }\n\n.orgChoiceCard button {\n    margin-top: 20%;\n    width: 50%;\n    height: 20%;\n    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); }\n\n.orgEditBtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin-top: 10px;\n  margin-right: 10px;\n  padding: 10px 20px 10px 20px; }\n\n.memberReqName {\n  display: inline-block; }\n\n.memberDecideButtons {\n  float: right; }\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {\n  .orgChoiceCard {\n    height: 350px; } }\n"

/***/ }),

/***/ "./src/app/account/organisation/organisation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationComponent; });
/* unused harmony export ngbTypeaheadDefaultConfigFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_organisation_service__ = __webpack_require__("./src/app/shared/services/organisation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model_organisation__ = __webpack_require__("./src/app/shared/model/organisation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_keycloak_keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/switchMap';





var OrganisationComponent = /** @class */ (function () {
    function OrganisationComponent(orgService, keycloakService, modalService, toastrService) {
        var _this = this;
        this.orgService = orgService;
        this.keycloakService = keycloakService;
        this.modalService = modalService;
        this.toastrService = toastrService;
        this.hasAnOrganisation = false;
        this.editMode = false;
        this.edit = new __WEBPACK_IMPORTED_MODULE_2__shared_model_organisation__["a" /* Organisation */]();
        this.isCreateOrgCollapsed = true;
        this.isJoinCollapsed = true;
        this.formatter = function (org) { return org.name; };
        this.typeaheadOrganisations = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .switchMap(function (term) {
                return _this.orgService.findNameOrganisations(term)
                    .do(function (response) { return console.log("typeaheadOrganisations " + term + " response:", response); })
                    .catch(function (err) {
                    console.log("typeaheadOrganisations " + term + " err:", err);
                    return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])([]);
                });
            });
        };
    }
    OrganisationComponent.prototype.ngOnInit = function () {
        this.loadMyOrganisation();
        this.joinRequestMemberName = this.keycloakService.client().tokenParsed['name'];
    };
    OrganisationComponent.prototype.loadMyOrganisation = function () {
        var _this = this;
        this.organisationAsync = this.orgService.getMyOrganisation();
        console.log('loadMyOrganisation');
        var sub = this.organisationAsync.subscribe(function (org) {
            console.log('organisationAsync ', org);
            _this.hasAnOrganisation = org != null;
            _this.myOrganisation = org;
            if (org != null) {
                _this.members = _this.orgService.findOrganisationMembers(org, true);
                _this.pendingMembers = _this.orgService.findOrganisationMembers(org, false);
            }
        }, function (error) {
            _this.hasAnOrganisation = null;
            _this.myOrganisation = null;
            console.log('Can not load organisation: ', error);
        }, function () {
            console.log('getMyOrganisation done');
            // sub.unsubscribe();
        });
        // dummy data for dev.
        // this.myOrganisation = new Organisation();
        // this.myOrganisation.name = 'Monsters';
        // this.myOrganisation.email = 'info@monsters.se';
        // this.myOrganisation.joinRequestQueue = <User[]>[{name: 'Pär E'}, {name: 'David Druid'}, {name: 'Rickard Riddare'}];
        // this.myOrganisation.members = <User[]>[{name: 'Olle'}, {name: 'Eva'}];
        // this.hasAnOrganisation = true;
        // this.organisationAsync = Observable.of(this.myOrganisation);
    };
    OrganisationComponent.prototype.enterEditMode = function () {
        this.editMode = true;
        this.edit = this.myOrganisation;
    };
    OrganisationComponent.prototype.exitEditMode = function () {
        this.editMode = false;
    };
    OrganisationComponent.prototype.save = function () {
        var _this = this;
        console.log('Organisation save: ', this.edit);
        this.orgService.update(this.edit).subscribe(function (saved) {
            console.log('Organisation was saved: ', saved);
            _this.loadMyOrganisation();
            _this.exitEditMode();
        }, function (error) {
            console.log('Organisation failed to be saved: ', error);
            _this.toastrService.error('Failed to create the organisation');
        });
    };
    OrganisationComponent.prototype.cancel = function () {
        this.exitEditMode();
    };
    OrganisationComponent.prototype.delete = function () {
        var _this = this;
        this.orgService.delete(this.myOrganisation).subscribe(function (respond) {
            _this.toastrService.info("Delete the organisation: " + _this.myOrganisation.name);
            _this.loadMyOrganisation();
            _this.closeDialog('Success to delete organisation');
        }, function (error) {
            console.log('Failed to deltete the Organisation: ', error);
            _this.toastrService.error('Failed to delete the organisation');
        });
    };
    OrganisationComponent.prototype.createNewOrganisation = function () {
        var _this = this;
        console.log('createNewOrganisation, ', this.edit);
        this.orgService.create(this.edit).subscribe(function (saved) {
            console.log('Organisation was added: ', saved);
            _this.loadMyOrganisation();
            _this.closeDialog('User click');
        }, function (error) {
            console.log('Organisation failed to be added: ', error);
            _this.toastrService.error('Failed to create the organisation');
        });
    };
    OrganisationComponent.prototype.sendJoinRequest = function () {
        var _this = this;
        console.log('sendJoinRequest, ', this.joinRequestOrganisation);
        this.orgService.requestMembership(this.joinRequestOrganisation).subscribe(function (response) {
            console.log('sendJoinRequestd: ', response);
            _this.toastrService.info('Your request has been sent');
            _this.closeDialog('User click');
        }, function (error) {
            console.log('Organisation failed to be added: ', error);
            _this.toastrService.error('Failed to create the organisation');
        });
        this.closeDialog('User click');
    };
    OrganisationComponent.prototype.acceptMemberRequest = function (member) {
        var _this = this;
        this.orgService.acceptOrRejectOrganisationMember(this.myOrganisation, member, true).subscribe(function (response) {
            console.log('acceptMemberRequest: ', response);
            _this.loadMyOrganisation();
        }, function (error) {
            console.log('Failed to accept member: ', error);
            _this.toastrService.error('Failed to accept member');
        });
    };
    OrganisationComponent.prototype.rejectMemberRequest = function (member) {
        var _this = this;
        this.orgService.acceptOrRejectOrganisationMember(this.myOrganisation, member, false).subscribe(function (response) {
            console.log('rejectMemberRequest: ', response);
            _this.loadMyOrganisation();
        }, function (error) {
            console.log('Failed to reject member: ', error);
            _this.toastrService.error('Failed to reject member');
        });
    };
    OrganisationComponent.prototype.removeMember = function (member) {
        var _this = this;
        this.orgService.removeOrganisationMember(this.myOrganisation, member).subscribe(function (response) {
            console.log('removeMember: ', response);
            _this.loadMyOrganisation();
        }, function (error) {
            console.log('Failed to remove member: ', error);
            _this.toastrService.error('Failed to remove member');
        });
    };
    OrganisationComponent.prototype.toggleCreateOrgCollapsed = function () {
        this.isCreateOrgCollapsed = !this.isCreateOrgCollapsed;
        this.isJoinCollapsed = true;
    };
    OrganisationComponent.prototype.toggleJoinCollapsed = function () {
        this.isJoinCollapsed = !this.isJoinCollapsed;
        this.isCreateOrgCollapsed = true;
    };
    OrganisationComponent.prototype.openDialog = function (template) {
        var _this = this;
        this.dialog = this.modalService.open(template);
        this.dialog.result.then(function (result) {
            console.log('dialog result closed, ', result);
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            console.log('dialog result dismissed, ', reason);
        }).catch(function (result) {
            console.log('Failed to open dialog, ', result);
        });
    };
    OrganisationComponent.prototype.closeDialog = function (reason) {
        this.dialog.close(reason);
        this.exitEditMode();
    };
    OrganisationComponent.prototype.dismissDialog = function (reason) {
        this.dialog.dismiss(reason);
    };
    OrganisationComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    OrganisationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-organisation',
            template: __webpack_require__("./src/app/account/organisation/organisation.component.html"),
            styles: [__webpack_require__("./src/app/account/organisation/organisation.component.scss")],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbTypeaheadConfig */], useFactory: ngbTypeaheadDefaultConfigFactory }]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_organisation_service__["a" /* OrganisationService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_keycloak_keycloak_service__["a" /* KeycloakService */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_toastr__["b" /* ToastrService */]])
    ], OrganisationComponent);
    return OrganisationComponent;
}());

function ngbTypeaheadDefaultConfigFactory() {
    var typeaheadConfig = new __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbTypeaheadConfig */]();
    typeaheadConfig.editable = false;
    return typeaheadConfig;
}


/***/ }),

/***/ "./src/app/account/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-2 mb-2\">\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Contact\r\n          <div class=\"pull-right\">\r\n            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"doEditProfile()\">\r\n              <i class=\"fa fa-cog\"></i>\r\n              <span class=\"sr-only\">Edit</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div>Name: {{ idp.client().tokenParsed['name'] }}</div>\r\n          <div>Email: {{ idp.client().tokenParsed['email'] }}</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/account/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_keycloak_keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(idp) {
        this.idp = idp;
    }
    ProfileComponent.prototype.doEditProfile = function () {
        this.idp.client().accountManagement()
            .success(function () { return console.log('accountManagement ok'); })
            .error(function (error) { return console.log('accountManagement error', error); });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/account/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/account/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_keycloak_keycloak_service__["a" /* KeycloakService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_assets_component__ = __webpack_require__("./src/app/assets/assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_details_details_component__ = __webpack_require__("./src/app/assets/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news_component__ = __webpack_require__("./src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__platform_platform_component__ = __webpack_require__("./src/app/platform/platform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_profile_profile_component__ = __webpack_require__("./src/app/account/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__showcase_showcase_component__ = __webpack_require__("./src/app/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_services_keycloak_keycloak_guard__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__account_job_service_list_job_service_list_component__ = __webpack_require__("./src/app/account/job-service-list/job-service-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__account_job_service_editor_job_service_editor_component__ = __webpack_require__("./src/app/account/job-service-editor/job-service-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__account_organisation_organisation_component__ = __webpack_require__("./src/app/account/organisation/organisation.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    // { path: '', redirectTo: 'race-list', pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'assets', component: __WEBPACK_IMPORTED_MODULE_1__assets_assets_component__["a" /* AssetsComponent */] },
    { path: 'assets/:id', component: __WEBPACK_IMPORTED_MODULE_2__assets_details_details_component__["a" /* DetailsComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_4__news_news_component__["a" /* NewsComponent */] },
    { path: 'platform', component: __WEBPACK_IMPORTED_MODULE_5__platform_platform_component__["a" /* PlatformComponent */] },
    { path: 'showcase', component: __WEBPACK_IMPORTED_MODULE_7__showcase_showcase_component__["a" /* ShowcaseComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__account_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_keycloak_keycloak_guard__["a" /* KeycloakGuard */]] },
    { path: 'service', component: __WEBPACK_IMPORTED_MODULE_11__account_job_service_list_job_service_list_component__["a" /* JobServiceListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_keycloak_keycloak_guard__["a" /* KeycloakGuard */]] },
    { path: 'service/add', component: __WEBPACK_IMPORTED_MODULE_12__account_job_service_editor_job_service_editor_component__["a" /* JobServiceEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_keycloak_keycloak_guard__["a" /* KeycloakGuard */]] },
    { path: 'service/:id', component: __WEBPACK_IMPORTED_MODULE_12__account_job_service_editor_job_service_editor_component__["a" /* JobServiceEditorComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_keycloak_keycloak_guard__["a" /* KeycloakGuard */]] },
    { path: 'organisation', component: __WEBPACK_IMPORTED_MODULE_13__account_organisation_organisation_component__["a" /* OrganisationComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_keycloak_keycloak_guard__["a" /* KeycloakGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__account_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__shared_services_keycloak_keycloak_guard__["a" /* KeycloakGuard */]] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<cookie-law></cookie-law>\r\n<div class=\"main\">\r\n  <app-navbar></app-navbar>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"footer\">\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main {\n  min-height: 100%;\n  padding-bottom: 62px; }\n\n.footer {\n  height: 62px;\n  margin-top: -62px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'app';
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rxjs_extensions__ = __webpack_require__("./src/app/rxjs-extensions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/esm5/ngx-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_cookie_law__ = __webpack_require__("./node_modules/angular2-cookie-law/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_chips__ = __webpack_require__("./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_keycloak_keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_services_job_service_registration_service__ = __webpack_require__("./src/app/shared/services/job-service-registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_ontology_service__ = __webpack_require__("./src/app/shared/services/ontology.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_services_keycloak_keycloak_guard__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layouts_navbar_navbar_component__ = __webpack_require__("./src/app/layouts/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__assets_assets_component__ = __webpack_require__("./src/app/assets/assets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__platform_platform_component__ = __webpack_require__("./src/app/platform/platform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__showcase_showcase_component__ = __webpack_require__("./src/app/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__news_news_component__ = __webpack_require__("./src/app/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__account_profile_profile_component__ = __webpack_require__("./src/app/account/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__layouts_footer_footer_component__ = __webpack_require__("./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__assets_details_details_component__ = __webpack_require__("./src/app/assets/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__account_job_service_editor_job_service_editor_component__ = __webpack_require__("./src/app/account/job-service-editor/job-service-editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__account_job_service_list_job_service_list_component__ = __webpack_require__("./src/app/account/job-service-list/job-service-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__account_organisation_organisation_component__ = __webpack_require__("./src/app/account/organisation/organisation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__shared_services_organisation_service__ = __webpack_require__("./src/app/shared/services/organisation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__imgmodal_imgmodal_component__ = __webpack_require__("./src/app/imgmodal/imgmodal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










 // https://www.npmjs.com/package/ngx-chips






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__layouts_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__assets_assets_component__["a" /* AssetsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__platform_platform_component__["a" /* PlatformComponent */],
                __WEBPACK_IMPORTED_MODULE_21__showcase_showcase_component__["a" /* ShowcaseComponent */],
                __WEBPACK_IMPORTED_MODULE_22__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__account_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_26__layouts_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_27__assets_details_details_component__["a" /* DetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__account_job_service_list_job_service_list_component__["a" /* JobServiceListComponent */],
                __WEBPACK_IMPORTED_MODULE_28__account_job_service_editor_job_service_editor_component__["a" /* JobServiceEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_30__account_organisation_organisation_component__["a" /* OrganisationComponent */],
                __WEBPACK_IMPORTED_MODULE_32__imgmodal_imgmodal_component__["a" /* ImgmodalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_25__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_angular2_cookie_law__["a" /* CookieLawModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_toastr__["a" /* ToastrModule */].forRoot({ positionClass: 'toast-top-full-width' }),
                __WEBPACK_IMPORTED_MODULE_10_ngx_chips__["a" /* TagInputModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__shared_services_keycloak_keycloak_guard__["a" /* KeycloakGuard */],
                __WEBPACK_IMPORTED_MODULE_11__shared_services_content_service__["a" /* ContentService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_keycloak_keycloak_service__["a" /* KeycloakService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_services_job_service_registration_service__["a" /* JobServiceRegistrationService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_services_ontology_service__["a" /* OntologyService */],
                __WEBPACK_IMPORTED_MODULE_15__shared_services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_31__shared_services_organisation_service__["a" /* OrganisationService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/assets/assets.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n\r\n<div class=\"container-fluid\">\r\n  <div>\r\n    <h2 class=\"showcase-description text-center\">API:s / Widgets / Datasets</h2>\r\n    <p class=\"showcase-description text-center\">Built an application using our assets?\r\n      <a href=\"mailto:jobtechdev@arbetsformedlingen.se\">Email us</a> and tell us about it!</p>\r\n  </div>\r\n\r\n\r\n  <div class=\"mt-3 card-group\" *ngIf=\"items | async; let items; else loading\">\r\n    <a class=\"card mb-4\" *ngFor=\"let item of items\" [routerLink]=\"['./', item.name]\" routerLinkActive=\"active\">\r\n\r\n        <img class=\"card-img-top\" [src]=\"item.image\" [alt]=\"item.title\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{item.title}}</h5>\r\n          <p class=\"card-text\">{{item.shortDescription }}</p>\r\n        </div>\r\n\r\n    </a>\r\n\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>Laddar ...</ng-template>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/assets/assets.component.scss":
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n@-ms-viewport {\n  width: device-width; }\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\ndt {\n  font-weight: 700; }\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\nblockquote {\n  margin: 0 0 1rem; }\ndfn {\n  font-style: italic; }\nb,\nstrong {\n  font-weight: bolder; }\nsmall {\n  font-size: 80%; }\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\nsub {\n  bottom: -.25em; }\nsup {\n  top: -.5em; }\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\na:hover {\n    color: #0056b3;\n    text-decoration: underline; }\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\na:not([href]):not([tabindex]):focus {\n    outline: 0; }\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\nfigure {\n  margin: 0 0 1rem; }\nimg {\n  vertical-align: middle;\n  border-style: none; }\nsvg:not(:root) {\n  overflow: hidden; }\ntable {\n  border-collapse: collapse; }\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\nth {\n  text-align: inherit; }\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\nbutton {\n  border-radius: 0; }\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\nbutton,\ninput {\n  overflow: visible; }\nbutton,\nselect {\n  text-transform: none; }\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0; }\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\ntextarea {\n  overflow: auto;\n  resize: vertical; }\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\nprogress {\n  vertical-align: baseline; }\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\noutput {\n  display: inline-block; }\nsummary {\n  display: list-item;\n  cursor: pointer; }\ntemplate {\n  display: none; }\n[hidden] {\n  display: none !important; }\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\nh1, .h1 {\n  font-size: 2.5rem; }\nh2, .h2 {\n  font-size: 2rem; }\nh3, .h3 {\n  font-size: 1.75rem; }\nh4, .h4 {\n  font-size: 1.5rem; }\nh5, .h5 {\n  font-size: 1.25rem; }\nh6, .h6 {\n  font-size: 1rem; }\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n.list-inline-item {\n  display: inline-block; }\n.list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n.blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n.figure {\n  display: inline-block; }\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d; }\ncode,\nkbd,\npre,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word; }\na > code {\n    color: inherit; }\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\npre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n.order-last {\n  -webkit-box-ordinal-group: 14;\n      -ms-flex-order: 13;\n          order: 13; }\n.order-0 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0; }\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4; }\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5; }\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6; }\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n      -ms-flex-order: 7;\n          order: 7; }\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n      -ms-flex-order: 8;\n          order: 8; }\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n      -ms-flex-order: 9;\n          order: 9; }\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n      -ms-flex-order: 10;\n          order: 10; }\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n      -ms-flex-order: 11;\n          order: 11; }\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n      -ms-flex-order: 12;\n          order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-box-ordinal-group: 14;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-box-ordinal-group: 14;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-box-ordinal-group: 14;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-box-ordinal-group: 14;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db; }\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #c8cbcf; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n.form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.form-control::-webkit-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control:-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control::-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px); }\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n  .input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text,\n  .input-group-sm > .input-group-append > .form-control-plaintext.input-group-text,\n  .input-group-sm > .input-group-prepend > .form-control-plaintext.btn,\n  .input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n  .input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text,\n  .input-group-lg > .input-group-append > .form-control-plaintext.input-group-text,\n  .input-group-lg > .input-group-prepend > .form-control-plaintext.btn,\n  .input-group-lg > .input-group-append > .form-control-plaintext.btn {\n    padding-right: 0;\n    padding-left: 0; }\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\n.input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]),\n.input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]),\n.input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px); }\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\n.input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]),\n.input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]),\n.input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px); }\n.form-group {\n  margin-bottom: 1rem; }\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n.form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n.form-check-input:disabled ~ .form-check-label {\n    color: #6c757d; }\n.form-check-label {\n  margin-bottom: 0; }\n.form-check-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n.form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745; }\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem; }\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745; }\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus {\n    border-color: #28a745;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.was-validated .form-control:valid ~ .valid-feedback,\n  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n  .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback,\n  .was-validated\n  .custom-select:valid ~ .valid-tooltip,\n  .custom-select.is-valid ~ .valid-feedback,\n  .custom-select.is-valid ~ .valid-tooltip {\n    display: block; }\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745; }\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745; }\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    background-color: #71dd8a; }\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #34ce57; }\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745; }\n.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\n    border-color: inherit; }\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem; }\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545; }\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus {\n    border-color: #dc3545;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545; }\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545; }\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    background-color: #efa2a9; }\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #e4606d; }\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545; }\n.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\n    border-color: inherit; }\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.form-inline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.form-inline .form-check {\n    width: 100%; }\n@media (min-width: 576px) {\n    .form-inline label {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group {\n      width: auto; }\n    .form-inline .form-check {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n.btn:hover, .btn:focus {\n    text-decoration: none; }\n.btn:focus, .btn.focus {\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.btn.disabled, .btn:disabled {\n    opacity: 0.65; }\n.btn:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\n    background-image: none; }\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n.btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc; }\n.btn-primary:focus, .btn-primary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-primary.disabled, .btn-primary:disabled {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf; }\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n.btn-secondary:hover {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62; }\n.btn-secondary:focus, .btn-secondary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-secondary.disabled, .btn-secondary:disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b; }\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n.btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n.btn-success:focus, .btn-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430; }\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n.btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b; }\n.btn-info:focus, .btn-info.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f; }\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n.btn-warning:hover {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n.btn-warning:focus, .btn-warning.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-warning.disabled, .btn-warning:disabled {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500; }\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n.btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n.btn-danger:focus, .btn-danger.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-danger.disabled, .btn-danger:disabled {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d; }\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n.btn-light:hover {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n.btn-light:focus, .btn-light.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-light.disabled, .btn-light:disabled {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df; }\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n.btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n.btn-dark:focus, .btn-dark.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d; }\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff; }\n.btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #007bff;\n    background-color: transparent; }\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-primary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-outline-secondary {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d; }\n.btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-secondary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745; }\n.btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-outline-success:focus, .btn-outline-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent; }\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-success.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8; }\n.btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-outline-info:focus, .btn-outline-info.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent; }\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-info.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107; }\n.btn-outline-warning:hover {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-warning.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-danger.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa; }\n.btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-outline-light:focus, .btn-outline-light.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-light.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40; }\n.btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-dark.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent; }\n.btn-link:hover {\n    color: #0056b3;\n    text-decoration: underline;\n    background-color: transparent;\n    border-color: transparent; }\n.btn-link:focus, .btn-link.focus {\n    text-decoration: underline;\n    border-color: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.btn-link:disabled, .btn-link.disabled {\n    color: #6c757d; }\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n.btn-block {\n  display: block;\n  width: 100%; }\n.btn-block + .btn-block {\n    margin-top: 0.5rem; }\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n.fade.show {\n    opacity: 1; }\n.collapse {\n  display: none; }\n.collapse.show {\n    display: block; }\ntr.collapse.show {\n  display: table-row; }\ntbody.collapse.show {\n  display: table-row-group; }\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease; }\n.dropup,\n.dropdown {\n  position: relative; }\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent; }\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropright .dropdown-menu {\n  margin-top: 0;\n  margin-left: 0.125rem; }\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n.dropleft .dropdown-menu {\n  margin-top: 0;\n  margin-right: 0.125rem; }\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n.dropleft .dropdown-toggle::after {\n  display: none; }\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n.dropdown-item:hover, .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n.dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff; }\n.dropdown-item.disabled, .dropdown-item:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n.dropdown-menu.show {\n  display: block; }\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle; }\n.btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n.btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n.btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n.btn-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.btn-toolbar .input-group {\n    width: auto; }\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n.dropdown-toggle-split::after {\n    margin-left: 0; }\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n.btn-group-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%; }\n.btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n.btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n.btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n.input-group {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  width: 100%; }\n.input-group > .form-control,\n  .input-group > .custom-select,\n  .input-group > .custom-file {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n.input-group > .form-control:focus,\n    .input-group > .custom-select:focus,\n    .input-group > .custom-file:focus {\n      z-index: 3; }\n.input-group > .form-control + .form-control,\n    .input-group > .form-control + .custom-select,\n    .input-group > .form-control + .custom-file,\n    .input-group > .custom-select + .form-control,\n    .input-group > .custom-select + .custom-select,\n    .input-group > .custom-select + .custom-file,\n    .input-group > .custom-file + .form-control,\n    .input-group > .custom-file + .custom-select,\n    .input-group > .custom-file + .custom-file {\n      margin-left: -1px; }\n.input-group > .form-control:not(:last-child),\n  .input-group > .custom-select:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n.input-group > .form-control:not(:first-child),\n  .input-group > .custom-select:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n.input-group > .custom-file {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n    .input-group > .custom-file:not(:last-child) .custom-file-label::before {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n.input-group > .custom-file:not(:first-child) .custom-file-label,\n    .input-group > .custom-file:not(:first-child) .custom-file-label::before {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n.input-group-prepend,\n.input-group-append {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.input-group-prepend .btn,\n  .input-group-append .btn {\n    position: relative;\n    z-index: 2; }\n.input-group-prepend .btn + .btn,\n  .input-group-prepend .btn + .input-group-text,\n  .input-group-prepend .input-group-text + .input-group-text,\n  .input-group-prepend .input-group-text + .btn,\n  .input-group-append .btn + .btn,\n  .input-group-append .btn + .input-group-text,\n  .input-group-append .input-group-text + .input-group-text,\n  .input-group-append .input-group-text + .btn {\n    margin-left: -1px; }\n.input-group-prepend {\n  margin-right: -1px; }\n.input-group-append {\n  margin-left: -1px; }\n.input-group-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n.input-group-text input[type=\"radio\"],\n  .input-group-text input[type=\"checkbox\"] {\n    margin-top: 0; }\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem; }\n.custom-control-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 1rem; }\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n.custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #007bff; }\n.custom-control-input:focus ~ .custom-control-label::before {\n    -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-control-input:active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #b3d7ff; }\n.custom-control-input:disabled ~ .custom-control-label {\n    color: #6c757d; }\n.custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e9ecef; }\n.custom-control-label {\n  margin-bottom: 0; }\n.custom-control-label::before {\n    position: absolute;\n    top: 0.25rem;\n    left: 0;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background-color: #dee2e6; }\n.custom-control-label::after {\n    position: absolute;\n    top: 0.25rem;\n    left: 0;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 50% 50%; }\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff; }\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #007bff; }\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff; }\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n.custom-select:focus {\n    border-color: #80bdff;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\n            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5); }\n.custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n.custom-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n.custom-select::-ms-expand {\n    opacity: 0; }\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n.custom-select-lg {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%; }\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0; }\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0; }\n.custom-file-input:focus ~ .custom-file-control {\n    border-color: #80bdff;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-file-input:focus ~ .custom-file-control::before {\n      border-color: #80bdff; }\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n.custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: calc(calc(2.25rem + 2px) - 1px * 2);\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    content: \"Browse\";\n    background-color: #e9ecef;\n    border-left: 1px solid #ced4da;\n    border-radius: 0 0.25rem 0.25rem 0; }\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n.nav-link:hover, .nav-link:focus {\n    text-decoration: none; }\n.nav-link.disabled {\n    color: #6c757d; }\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n.nav-tabs .nav-item {\n    margin-bottom: -1px; }\n.nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n.nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n.nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff; }\n.nav-fill .nav-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center; }\n.tab-content > .tab-pane {\n  display: none; }\n.tab-content > .active {\n  display: block; }\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem; }\n.navbar > .container,\n  .navbar > .container-fluid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n.navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n.navbar-toggler:hover, .navbar-toggler:focus {\n    text-decoration: none; }\n.navbar-toggler:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; }\n    .navbar-expand-sm .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; }\n    .navbar-expand-md .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; }\n    .navbar-expand-lg .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; }\n    .navbar-expand-xl .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n.navbar-expand {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-expand .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n.navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto; }\n.navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n.navbar-expand .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto; }\n.navbar-expand .navbar-toggler {\n    display: none; }\n.navbar-expand .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%; }\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n.navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n.navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n      color: rgba(0, 0, 0, 0.9); }\n.navbar-dark .navbar-brand {\n  color: #fff; }\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n.navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n.navbar-dark .navbar-text a {\n    color: #fff; }\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n      color: #fff; }\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n.card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n.card > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n.card > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n.card-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1.25rem; }\n.card-title {\n  margin-bottom: 0.75rem; }\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n.card-text:last-child {\n  margin-bottom: 0; }\n.card-link:hover {\n  text-decoration: none; }\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n.card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n.card-header + .list-group .list-group-item:first-child {\n    border-top: 0; }\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n.card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px); }\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n.card-deck {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.card-deck .card {\n    margin-bottom: 15px; }\n@media (min-width: 576px) {\n    .card-deck {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck .card {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 0%;\n                flex: 1 0 0%;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n.card-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.card-group > .card {\n    margin-bottom: 15px; }\n@media (min-width: 576px) {\n    .card-group {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap; }\n      .card-group > .card {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 0%;\n                flex: 1 0 0%;\n        margin-bottom: 0; }\n        .card-group > .card + .card {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group > .card:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group > .card:first-child .card-img-top,\n          .card-group > .card:first-child .card-header {\n            border-top-right-radius: 0; }\n          .card-group > .card:first-child .card-img-bottom,\n          .card-group > .card:first-child .card-footer {\n            border-bottom-right-radius: 0; }\n        .card-group > .card:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group > .card:last-child .card-img-top,\n          .card-group > .card:last-child .card-header {\n            border-top-left-radius: 0; }\n          .card-group > .card:last-child .card-img-bottom,\n          .card-group > .card:last-child .card-footer {\n            border-bottom-left-radius: 0; }\n        .card-group > .card:only-child {\n          border-radius: 0.25rem; }\n          .card-group > .card:only-child .card-img-top,\n          .card-group > .card:only-child .card-header {\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem; }\n          .card-group > .card:only-child .card-img-bottom,\n          .card-group > .card:only-child .card-footer {\n            border-bottom-right-radius: 0.25rem;\n            border-bottom-left-radius: 0.25rem; }\n        .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n          border-radius: 0; }\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n            border-radius: 0; } }\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n            column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n.breadcrumb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #6c757d;\n  content: \"/\"; }\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n.breadcrumb-item.active {\n  color: #6c757d; }\n.pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n.page-link:hover {\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n.page-link:focus {\n    z-index: 2;\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.page-link:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n.badge:empty {\n    display: none; }\n.btn .badge {\n  position: relative;\n  top: -1px; }\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n.badge-primary {\n  color: #fff;\n  background-color: #007bff; }\n.badge-primary[href]:hover, .badge-primary[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0062cc; }\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d; }\n.badge-secondary[href]:hover, .badge-secondary[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #545b62; }\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\n.badge-success[href]:hover, .badge-success[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1e7e34; }\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\n.badge-info[href]:hover, .badge-info[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #117a8b; }\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107; }\n.badge-warning[href]:hover, .badge-warning[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #d39e00; }\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n.badge-danger[href]:hover, .badge-danger[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130; }\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa; }\n.badge-light[href]:hover, .badge-light[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #dae0e5; }\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n.badge-dark[href]:hover, .badge-dark[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1d2124; }\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n@media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n.alert-heading {\n  color: inherit; }\n.alert-link {\n  font-weight: 700; }\n.alert-dismissible {\n  padding-right: 4rem; }\n.alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff; }\n.alert-primary hr {\n    border-top-color: #9fcdff; }\n.alert-primary .alert-link {\n    color: #002752; }\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db; }\n.alert-secondary hr {\n    border-top-color: #c8cbcf; }\n.alert-secondary .alert-link {\n    color: #202326; }\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n.alert-success hr {\n    border-top-color: #b1dfbb; }\n.alert-success .alert-link {\n    color: #0b2e13; }\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n.alert-info hr {\n    border-top-color: #abdde5; }\n.alert-info .alert-link {\n    color: #062c33; }\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n.alert-warning hr {\n    border-top-color: #ffe8a1; }\n.alert-warning .alert-link {\n    color: #533f03; }\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n.alert-danger hr {\n    border-top-color: #f1b0b7; }\n.alert-danger .alert-link {\n    color: #491217; }\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n.alert-light hr {\n    border-top-color: #ececf6; }\n.alert-light .alert-link {\n    color: #686868; }\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n.alert-dark hr {\n    border-top-color: #b9bbbe; }\n.alert-dark .alert-link {\n    color: #040505; }\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n.progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n.progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #007bff;\n  -webkit-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite; }\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n.media-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n.list-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n.list-group-item-action:hover, .list-group-item-action:focus {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n.list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n.list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n.list-group-item:hover, .list-group-item:focus {\n    z-index: 1;\n    text-decoration: none; }\n.list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    background-color: #fff; }\n.list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff; }\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #004085;\n    background-color: #9fcdff; }\n.list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #004085;\n    border-color: #004085; }\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db; }\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #383d41;\n    background-color: #c8cbcf; }\n.list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #383d41;\n    border-color: #383d41; }\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #155724;\n    background-color: #b1dfbb; }\n.list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #0c5460;\n    background-color: #abdde5; }\n.list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #856404;\n    background-color: #ffe8a1; }\n.list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #721c24;\n    background-color: #f1b0b7; }\n.list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #818182;\n    background-color: #ececf6; }\n.list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n.list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n.close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    opacity: .75; }\n.close:not(:disabled):not(.disabled) {\n    cursor: pointer; }\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n.modal-open {\n  overflow: hidden; }\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n.modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n.modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n    -webkit-transform: translate(0, -25%);\n            transform: translate(0, -25%); }\n.modal.show .modal-dialog {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n.modal-dialog-centered {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: calc(100% - (0.5rem * 2)); }\n.modal-content {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n.modal-backdrop.fade {\n    opacity: 0; }\n.modal-backdrop.show {\n    opacity: 0.5; }\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n.modal-header .close {\n    padding: 1rem;\n    margin: -1rem -1rem -1rem auto; }\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1rem; }\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #e9ecef; }\n.modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n.modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-centered {\n    min-height: calc(100% - (1.75rem * 2)); }\n  .modal-sm {\n    max-width: 300px; } }\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n.tooltip.show {\n    opacity: 0.9; }\n.tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n.tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n.popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n.popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem; }\n.bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow {\n    bottom: calc((0.5rem + 1px) * -1); }\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n  .bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-width: 0.5rem 0.5rem 0; }\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n    bottom: 0;\n    border-top-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    bottom: 1px;\n    border-top-color: #fff; }\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem; }\n.bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow {\n    left: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n  .bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-width: 0.5rem 0.5rem 0.5rem 0; }\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n    left: 0;\n    border-right-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    left: 1px;\n    border-right-color: #fff; }\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem; }\n.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n    top: calc((0.5rem + 1px) * -1); }\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n  .bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-width: 0 0.5rem 0.5rem 0.5rem; }\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n    top: 0;\n    border-bottom-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    top: 1px;\n    border-bottom-color: #fff; }\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f7f7f7; }\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem; }\n.bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow {\n    right: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n  .bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-width: 0.5rem 0 0.5rem 0.5rem; }\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n    right: 0;\n    border-left-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    right: 1px;\n    border-left-color: #fff; }\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n.popover-header:empty {\n    display: none; }\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n.carousel {\n  position: relative; }\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n.carousel-item {\n  position: relative;\n  display: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.6s ease;\n  transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0; }\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0); } }\n.carousel-item-next,\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-next,\n    .active.carousel-item-right {\n      -webkit-transform: translate3d(100%, 0, 0);\n              transform: translate3d(100%, 0, 0); } }\n.carousel-item-prev,\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-prev,\n    .active.carousel-item-left {\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0); } }\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n.carousel-control-prev {\n  left: 0; }\n.carousel-control-next {\n  right: 0; }\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n.carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    background-color: rgba(255, 255, 255, 0.5); }\n.carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n.carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n.carousel-indicators .active {\n    background-color: #fff; }\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n.align-baseline {\n  vertical-align: baseline !important; }\n.align-top {\n  vertical-align: top !important; }\n.align-middle {\n  vertical-align: middle !important; }\n.align-bottom {\n  vertical-align: bottom !important; }\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n.align-text-top {\n  vertical-align: text-top !important; }\n.bg-primary {\n  background-color: #007bff !important; }\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important; }\n.bg-secondary {\n  background-color: #6c757d !important; }\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important; }\n.bg-success {\n  background-color: #28a745 !important; }\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important; }\n.bg-info {\n  background-color: #17a2b8 !important; }\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important; }\n.bg-warning {\n  background-color: #ffc107 !important; }\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important; }\n.bg-danger {\n  background-color: #dc3545 !important; }\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important; }\n.bg-light {\n  background-color: #f8f9fa !important; }\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important; }\n.bg-dark {\n  background-color: #343a40 !important; }\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important; }\n.bg-white {\n  background-color: #fff !important; }\n.bg-transparent {\n  background-color: transparent !important; }\n.border {\n  border: 1px solid #dee2e6 !important; }\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n.border-right {\n  border-right: 1px solid #dee2e6 !important; }\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n.border-left {\n  border-left: 1px solid #dee2e6 !important; }\n.border-0 {\n  border: 0 !important; }\n.border-top-0 {\n  border-top: 0 !important; }\n.border-right-0 {\n  border-right: 0 !important; }\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n.border-left-0 {\n  border-left: 0 !important; }\n.border-primary {\n  border-color: #007bff !important; }\n.border-secondary {\n  border-color: #6c757d !important; }\n.border-success {\n  border-color: #28a745 !important; }\n.border-info {\n  border-color: #17a2b8 !important; }\n.border-warning {\n  border-color: #ffc107 !important; }\n.border-danger {\n  border-color: #dc3545 !important; }\n.border-light {\n  border-color: #f8f9fa !important; }\n.border-dark {\n  border-color: #343a40 !important; }\n.border-white {\n  border-color: #fff !important; }\n.rounded {\n  border-radius: 0.25rem !important; }\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n.rounded-circle {\n  border-radius: 50% !important; }\n.rounded-0 {\n  border-radius: 0 !important; }\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n.embed-responsive::before {\n    display: block;\n    content: \"\"; }\n.embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n.embed-responsive-21by9::before {\n  padding-top: 42.85714286%; }\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important; }\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n      flex-wrap: wrap-reverse !important; }\n.justify-content-start {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n.justify-content-end {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n.justify-content-center {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important; }\n.align-items-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n.align-items-end {\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n.align-items-center {\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n      align-content: flex-start !important; }\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n      align-content: flex-end !important; }\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important; }\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n      align-content: space-between !important; }\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n      align-content: space-around !important; }\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n      align-content: stretch !important; }\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n      -ms-grid-row-align: auto !important;\n      align-self: auto !important; }\n.align-self-start {\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important; }\n.align-self-end {\n  -ms-flex-item-align: end !important;\n      align-self: flex-end !important; }\n.align-self-center {\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important; }\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n      align-self: baseline !important; }\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n      -ms-grid-row-align: stretch !important;\n      align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n.float-left {\n  float: left !important; }\n.float-right {\n  float: right !important; }\n.float-none {\n  float: none !important; }\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n.position-static {\n  position: static !important; }\n.position-relative {\n  position: relative !important; }\n.position-absolute {\n  position: absolute !important; }\n.position-fixed {\n  position: fixed !important; }\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important; }\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n  border: 0; }\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  -webkit-clip-path: none;\n          clip-path: none; }\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.m-0 {\n  margin: 0 !important; }\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n.m-1 {\n  margin: 0.25rem !important; }\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n.m-2 {\n  margin: 0.5rem !important; }\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n.m-3 {\n  margin: 1rem !important; }\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n.m-4 {\n  margin: 1.5rem !important; }\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n.m-5 {\n  margin: 3rem !important; }\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n.p-0 {\n  padding: 0 !important; }\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n.p-1 {\n  padding: 0.25rem !important; }\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n.p-2 {\n  padding: 0.5rem !important; }\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n.p-3 {\n  padding: 1rem !important; }\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n.p-4 {\n  padding: 1.5rem !important; }\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n.p-5 {\n  padding: 3rem !important; }\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n.m-auto {\n  margin: auto !important; }\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n.text-justify {\n  text-align: justify !important; }\n.text-nowrap {\n  white-space: nowrap !important; }\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.text-left {\n  text-align: left !important; }\n.text-right {\n  text-align: right !important; }\n.text-center {\n  text-align: center !important; }\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n.text-lowercase {\n  text-transform: lowercase !important; }\n.text-uppercase {\n  text-transform: uppercase !important; }\n.text-capitalize {\n  text-transform: capitalize !important; }\n.font-weight-light {\n  font-weight: 300 !important; }\n.font-weight-normal {\n  font-weight: 400 !important; }\n.font-weight-bold {\n  font-weight: 700 !important; }\n.font-italic {\n  font-style: italic !important; }\n.text-white {\n  color: #fff !important; }\n.text-primary {\n  color: #007bff !important; }\na.text-primary:hover, a.text-primary:focus {\n  color: #0062cc !important; }\n.text-secondary {\n  color: #6c757d !important; }\na.text-secondary:hover, a.text-secondary:focus {\n  color: #545b62 !important; }\n.text-success {\n  color: #28a745 !important; }\na.text-success:hover, a.text-success:focus {\n  color: #1e7e34 !important; }\n.text-info {\n  color: #17a2b8 !important; }\na.text-info:hover, a.text-info:focus {\n  color: #117a8b !important; }\n.text-warning {\n  color: #ffc107 !important; }\na.text-warning:hover, a.text-warning:focus {\n  color: #d39e00 !important; }\n.text-danger {\n  color: #dc3545 !important; }\na.text-danger:hover, a.text-danger:focus {\n  color: #bd2130 !important; }\n.text-light {\n  color: #f8f9fa !important; }\na.text-light:hover, a.text-light:focus {\n  color: #dae0e5 !important; }\n.text-dark {\n  color: #343a40 !important; }\na.text-dark:hover, a.text-dark:focus {\n  color: #1d2124 !important; }\n.text-muted {\n  color: #6c757d !important; }\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n.visible {\n  visibility: visible !important; }\n.invisible {\n  visibility: hidden !important; }\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n  a:not(.btn) {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body {\n    min-width: 992px !important; }\n  .container {\n    min-width: 992px !important; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n.card-group .card {\n  margin-right: 1.2em;\n  cursor: pointer;\n  min-width: 15rem;\n  max-width: 200px; }\n.card-group .card img {\n    /* Do not scale the image */\n    -o-object-position: bottom;\n       object-position: bottom;\n    /* Center the image within the element */\n    max-width: 15rem; }\n@media (min-width: 576px) {\n  .card-group .card {\n    max-width: 15rem; } }\na {\n  color: inherit; }\na:hover {\n  color: inherit;\n  text-decoration: inherit; }\n.card-group .card {\n  -webkit-transition: all 200ms ease-in;\n  -webkit-transform: scale(1);\n  -ms-transition: all 200ms ease-in;\n  -ms-transform: scale(1);\n  -moz-transition: all 200ms ease-in;\n  -moz-transform: scale(1);\n  transition: all 200ms ease-in;\n  transform: scale(1); }\n.card-group .card:hover {\n  -webkit-box-shadow: 0px 0px 2em #000000;\n          box-shadow: 0px 0px 2em #000000;\n  z-index: 2;\n  -webkit-transition: all 200ms ease-in;\n  -webkit-transform: scale(1.05);\n  -ms-transition: all 200ms ease-in;\n  -ms-transform: scale(1.05);\n  -moz-transition: all 200ms ease-in;\n  -moz-transform: scale(1.05);\n  transition: all 200ms ease-in;\n  transform: scale(1.05); }\n"

/***/ }),

/***/ "./src/app/assets/assets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AssetsComponent = /** @class */ (function () {
    function AssetsComponent(contentService) {
        this.contentService = contentService;
        this.items = this.contentService.getAssets();
    }
    AssetsComponent.prototype.ngOnInit = function () {
    };
    AssetsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-assets',
            template: __webpack_require__("./src/app/assets/assets.component.html"),
            styles: [__webpack_require__("./src/app/assets/assets.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/assets/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"item | async; let item; else loading\">\r\n\r\n  <nav aria-label=\"breadcrumb\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/']\">Home</a></li>\r\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/assets']\">Assets</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">{{item.title}}</li>\r\n    </ol>\r\n  </nav>\r\n\r\n  <div class=\"card\">\r\n\r\n    <div class=\"jumbotron\" [ngStyle]=\"{'background-image':'url('+(item.headimage ? item.headimage : item.image)+')'}\">\r\n      <h2>{{item.title}}</h2>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-9 col-sm-8 col-lg-9\">\r\n          <div class=\"card-text\" *ngFor=\"let item of item.texts\">\r\n            <h4>{{item.header}}</h4>\r\n            <p [innerHTML]=\"item.description\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 col-sm-4 col-lg-3 card-downloads\" *ngIf=\"item.files?.length > 0\">\r\n          <h4>Downloads</h4>\r\n          <div *ngFor=\"let item of item.files\">\r\n            <a href=\"{{item.url}}\" target=\"_blank\">{{item.name}} </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" align=\"center\">\r\n        <div class=\"links col-12\">\r\n          <a *ngFor=\"let item of item.externallinks\" class=\"btn btn-info card-link\" href=\"{{item.link}}\" target=\"_blank\">\r\n            {{item.name}}\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-footer\"></div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>Laddar ...</ng-template>\r\n"

/***/ }),

/***/ "./src/app/assets/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = "/*!\n * Bootstrap v4.0.0 (https://getbootstrap.com)\n * Copyright 2011-2018 The Bootstrap Authors\n * Copyright 2011-2018 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n:root {\n  --blue: #007bff;\n  --indigo: #6610f2;\n  --purple: #6f42c1;\n  --pink: #e83e8c;\n  --red: #dc3545;\n  --orange: #fd7e14;\n  --yellow: #ffc107;\n  --green: #28a745;\n  --teal: #20c997;\n  --cyan: #17a2b8;\n  --white: #fff;\n  --gray: #6c757d;\n  --gray-dark: #343a40;\n  --primary: #007bff;\n  --secondary: #6c757d;\n  --success: #28a745;\n  --info: #17a2b8;\n  --warning: #ffc107;\n  --danger: #dc3545;\n  --light: #f8f9fa;\n  --dark: #343a40;\n  --breakpoint-xs: 0;\n  --breakpoint-sm: 576px;\n  --breakpoint-md: 768px;\n  --breakpoint-lg: 992px;\n  --breakpoint-xl: 1200px;\n  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\nhtml {\n  font-family: sans-serif;\n  line-height: 1.15;\n  -webkit-text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -ms-overflow-style: scrollbar;\n  -webkit-tap-highlight-color: transparent; }\n@-ms-viewport {\n  width: device-width; }\narticle, aside, dialog, figcaption, figure, footer, header, hgroup, main, nav, section {\n  display: block; }\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  text-align: left;\n  background-color: #fff; }\n[tabindex=\"-1\"]:focus {\n  outline: 0 !important; }\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box;\n  height: 0;\n  overflow: visible; }\nh1, h2, h3, h4, h5, h6 {\n  margin-top: 0;\n  margin-bottom: 0.5rem; }\np {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  border-bottom: 0; }\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit; }\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem; }\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0; }\ndt {\n  font-weight: 700; }\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0; }\nblockquote {\n  margin: 0 0 1rem; }\ndfn {\n  font-style: italic; }\nb,\nstrong {\n  font-weight: bolder; }\nsmall {\n  font-size: 80%; }\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline; }\nsub {\n  bottom: -.25em; }\nsup {\n  top: -.5em; }\na {\n  color: #007bff;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects; }\na:hover {\n    color: #0056b3;\n    text-decoration: underline; }\na:not([href]):not([tabindex]) {\n  color: inherit;\n  text-decoration: none; }\na:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {\n    color: inherit;\n    text-decoration: none; }\na:not([href]):not([tabindex]):focus {\n    outline: 0; }\npre,\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  -ms-overflow-style: scrollbar; }\nfigure {\n  margin: 0 0 1rem; }\nimg {\n  vertical-align: middle;\n  border-style: none; }\nsvg:not(:root) {\n  overflow: hidden; }\ntable {\n  border-collapse: collapse; }\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom; }\nth {\n  text-align: inherit; }\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem; }\nbutton {\n  border-radius: 0; }\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color; }\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\nbutton,\ninput {\n  overflow: visible; }\nbutton,\nselect {\n  text-transform: none; }\nbutton,\nhtml [type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  padding: 0;\n  border-style: none; }\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0; }\ninput[type=\"date\"],\ninput[type=\"time\"],\ninput[type=\"datetime-local\"],\ninput[type=\"month\"] {\n  -webkit-appearance: listbox; }\ntextarea {\n  overflow: auto;\n  resize: vertical; }\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0; }\nlegend {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal; }\nprogress {\n  vertical-align: baseline; }\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n[type=\"search\"] {\n  outline-offset: -2px;\n  -webkit-appearance: none; }\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button; }\noutput {\n  display: inline-block; }\nsummary {\n  display: list-item;\n  cursor: pointer; }\ntemplate {\n  display: none; }\n[hidden] {\n  display: none !important; }\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\nh1, .h1 {\n  font-size: 2.5rem; }\nh2, .h2 {\n  font-size: 2rem; }\nh3, .h3 {\n  font-size: 1.75rem; }\nh4, .h4 {\n  font-size: 1.5rem; }\nh5, .h5 {\n  font-size: 1.25rem; }\nh6, .h6 {\n  font-size: 1rem; }\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n.list-inline-item {\n  display: inline-block; }\n.list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n.blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\n.img-fluid {\n  max-width: 100%;\n  height: auto; }\n.img-thumbnail {\n  padding: 0.25rem;\n  background-color: #fff;\n  border: 1px solid #dee2e6;\n  border-radius: 0.25rem;\n  max-width: 100%;\n  height: auto; }\n.figure {\n  display: inline-block; }\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1; }\n.figure-caption {\n  font-size: 90%;\n  color: #6c757d; }\ncode,\nkbd,\npre,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; }\ncode {\n  font-size: 87.5%;\n  color: #e83e8c;\n  word-break: break-word; }\na > code {\n    color: inherit; }\nkbd {\n  padding: 0.2rem 0.4rem;\n  font-size: 87.5%;\n  color: #fff;\n  background-color: #212529;\n  border-radius: 0.2rem; }\nkbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: 700; }\npre {\n  display: block;\n  font-size: 87.5%;\n  color: #212529; }\npre code {\n    font-size: inherit;\n    color: inherit;\n    word-break: normal; }\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n@media (min-width: 576px) {\n    .container {\n      max-width: 540px; } }\n@media (min-width: 768px) {\n    .container {\n      max-width: 720px; } }\n@media (min-width: 992px) {\n    .container {\n      max-width: 960px; } }\n@media (min-width: 1200px) {\n    .container {\n      max-width: 1140px; } }\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto; }\n.row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px; }\n.no-gutters {\n  margin-right: 0;\n  margin-left: 0; }\n.no-gutters > .col,\n  .no-gutters > [class*=\"col-\"] {\n    padding-right: 0;\n    padding-left: 0; }\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto {\n  position: relative;\n  width: 100%;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px; }\n.col {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  max-width: 100%; }\n.col-auto {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  width: auto;\n  max-width: none; }\n.col-1 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 8.33333333%;\n          flex: 0 0 8.33333333%;\n  max-width: 8.33333333%; }\n.col-2 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 16.66666667%;\n          flex: 0 0 16.66666667%;\n  max-width: 16.66666667%; }\n.col-3 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 25%;\n          flex: 0 0 25%;\n  max-width: 25%; }\n.col-4 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.33333333%;\n          flex: 0 0 33.33333333%;\n  max-width: 33.33333333%; }\n.col-5 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 41.66666667%;\n          flex: 0 0 41.66666667%;\n  max-width: 41.66666667%; }\n.col-6 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%;\n  max-width: 50%; }\n.col-7 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 58.33333333%;\n          flex: 0 0 58.33333333%;\n  max-width: 58.33333333%; }\n.col-8 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 66.66666667%;\n          flex: 0 0 66.66666667%;\n  max-width: 66.66666667%; }\n.col-9 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 75%;\n          flex: 0 0 75%;\n  max-width: 75%; }\n.col-10 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 83.33333333%;\n          flex: 0 0 83.33333333%;\n  max-width: 83.33333333%; }\n.col-11 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 91.66666667%;\n          flex: 0 0 91.66666667%;\n  max-width: 91.66666667%; }\n.col-12 {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 100%;\n          flex: 0 0 100%;\n  max-width: 100%; }\n.order-first {\n  -webkit-box-ordinal-group: 0;\n      -ms-flex-order: -1;\n          order: -1; }\n.order-last {\n  -webkit-box-ordinal-group: 14;\n      -ms-flex-order: 13;\n          order: 13; }\n.order-0 {\n  -webkit-box-ordinal-group: 1;\n      -ms-flex-order: 0;\n          order: 0; }\n.order-1 {\n  -webkit-box-ordinal-group: 2;\n      -ms-flex-order: 1;\n          order: 1; }\n.order-2 {\n  -webkit-box-ordinal-group: 3;\n      -ms-flex-order: 2;\n          order: 2; }\n.order-3 {\n  -webkit-box-ordinal-group: 4;\n      -ms-flex-order: 3;\n          order: 3; }\n.order-4 {\n  -webkit-box-ordinal-group: 5;\n      -ms-flex-order: 4;\n          order: 4; }\n.order-5 {\n  -webkit-box-ordinal-group: 6;\n      -ms-flex-order: 5;\n          order: 5; }\n.order-6 {\n  -webkit-box-ordinal-group: 7;\n      -ms-flex-order: 6;\n          order: 6; }\n.order-7 {\n  -webkit-box-ordinal-group: 8;\n      -ms-flex-order: 7;\n          order: 7; }\n.order-8 {\n  -webkit-box-ordinal-group: 9;\n      -ms-flex-order: 8;\n          order: 8; }\n.order-9 {\n  -webkit-box-ordinal-group: 10;\n      -ms-flex-order: 9;\n          order: 9; }\n.order-10 {\n  -webkit-box-ordinal-group: 11;\n      -ms-flex-order: 10;\n          order: 10; }\n.order-11 {\n  -webkit-box-ordinal-group: 12;\n      -ms-flex-order: 11;\n          order: 11; }\n.order-12 {\n  -webkit-box-ordinal-group: 13;\n      -ms-flex-order: 12;\n          order: 12; }\n.offset-1 {\n  margin-left: 8.33333333%; }\n.offset-2 {\n  margin-left: 16.66666667%; }\n.offset-3 {\n  margin-left: 25%; }\n.offset-4 {\n  margin-left: 33.33333333%; }\n.offset-5 {\n  margin-left: 41.66666667%; }\n.offset-6 {\n  margin-left: 50%; }\n.offset-7 {\n  margin-left: 58.33333333%; }\n.offset-8 {\n  margin-left: 66.66666667%; }\n.offset-9 {\n  margin-left: 75%; }\n.offset-10 {\n  margin-left: 83.33333333%; }\n.offset-11 {\n  margin-left: 91.66666667%; }\n@media (min-width: 576px) {\n  .col-sm {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-sm-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-sm-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-sm-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-sm-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-sm-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-sm-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-sm-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-sm-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-sm-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-sm-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-sm-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-sm-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-sm-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-sm-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-sm-last {\n    -webkit-box-ordinal-group: 14;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-sm-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-sm-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-sm-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-sm-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-sm-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-sm-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-sm-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-sm-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-sm-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-sm-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-sm-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-sm-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-sm-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-sm-0 {\n    margin-left: 0; }\n  .offset-sm-1 {\n    margin-left: 8.33333333%; }\n  .offset-sm-2 {\n    margin-left: 16.66666667%; }\n  .offset-sm-3 {\n    margin-left: 25%; }\n  .offset-sm-4 {\n    margin-left: 33.33333333%; }\n  .offset-sm-5 {\n    margin-left: 41.66666667%; }\n  .offset-sm-6 {\n    margin-left: 50%; }\n  .offset-sm-7 {\n    margin-left: 58.33333333%; }\n  .offset-sm-8 {\n    margin-left: 66.66666667%; }\n  .offset-sm-9 {\n    margin-left: 75%; }\n  .offset-sm-10 {\n    margin-left: 83.33333333%; }\n  .offset-sm-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 768px) {\n  .col-md {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-md-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-md-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-md-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-md-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-md-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-md-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-md-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-md-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-md-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-md-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-md-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-md-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-md-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-md-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-md-last {\n    -webkit-box-ordinal-group: 14;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-md-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-md-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-md-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-md-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-md-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-md-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-md-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-md-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-md-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-md-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-md-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-md-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-md-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-md-0 {\n    margin-left: 0; }\n  .offset-md-1 {\n    margin-left: 8.33333333%; }\n  .offset-md-2 {\n    margin-left: 16.66666667%; }\n  .offset-md-3 {\n    margin-left: 25%; }\n  .offset-md-4 {\n    margin-left: 33.33333333%; }\n  .offset-md-5 {\n    margin-left: 41.66666667%; }\n  .offset-md-6 {\n    margin-left: 50%; }\n  .offset-md-7 {\n    margin-left: 58.33333333%; }\n  .offset-md-8 {\n    margin-left: 66.66666667%; }\n  .offset-md-9 {\n    margin-left: 75%; }\n  .offset-md-10 {\n    margin-left: 83.33333333%; }\n  .offset-md-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 992px) {\n  .col-lg {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-lg-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-lg-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-lg-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-lg-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-lg-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-lg-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-lg-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-lg-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-lg-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-lg-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-lg-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-lg-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-lg-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-lg-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-lg-last {\n    -webkit-box-ordinal-group: 14;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-lg-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-lg-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-lg-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-lg-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-lg-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-lg-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-lg-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-lg-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-lg-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-lg-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-lg-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-lg-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-lg-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-lg-0 {\n    margin-left: 0; }\n  .offset-lg-1 {\n    margin-left: 8.33333333%; }\n  .offset-lg-2 {\n    margin-left: 16.66666667%; }\n  .offset-lg-3 {\n    margin-left: 25%; }\n  .offset-lg-4 {\n    margin-left: 33.33333333%; }\n  .offset-lg-5 {\n    margin-left: 41.66666667%; }\n  .offset-lg-6 {\n    margin-left: 50%; }\n  .offset-lg-7 {\n    margin-left: 58.33333333%; }\n  .offset-lg-8 {\n    margin-left: 66.66666667%; }\n  .offset-lg-9 {\n    margin-left: 75%; }\n  .offset-lg-10 {\n    margin-left: 83.33333333%; }\n  .offset-lg-11 {\n    margin-left: 91.66666667%; } }\n@media (min-width: 1200px) {\n  .col-xl {\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    max-width: 100%; }\n  .col-xl-auto {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 auto;\n            flex: 0 0 auto;\n    width: auto;\n    max-width: none; }\n  .col-xl-1 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 8.33333333%;\n            flex: 0 0 8.33333333%;\n    max-width: 8.33333333%; }\n  .col-xl-2 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 16.66666667%;\n            flex: 0 0 16.66666667%;\n    max-width: 16.66666667%; }\n  .col-xl-3 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 25%;\n            flex: 0 0 25%;\n    max-width: 25%; }\n  .col-xl-4 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 33.33333333%;\n            flex: 0 0 33.33333333%;\n    max-width: 33.33333333%; }\n  .col-xl-5 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 41.66666667%;\n            flex: 0 0 41.66666667%;\n    max-width: 41.66666667%; }\n  .col-xl-6 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 50%;\n            flex: 0 0 50%;\n    max-width: 50%; }\n  .col-xl-7 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 58.33333333%;\n            flex: 0 0 58.33333333%;\n    max-width: 58.33333333%; }\n  .col-xl-8 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 66.66666667%;\n            flex: 0 0 66.66666667%;\n    max-width: 66.66666667%; }\n  .col-xl-9 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 75%;\n            flex: 0 0 75%;\n    max-width: 75%; }\n  .col-xl-10 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 83.33333333%;\n            flex: 0 0 83.33333333%;\n    max-width: 83.33333333%; }\n  .col-xl-11 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 91.66666667%;\n            flex: 0 0 91.66666667%;\n    max-width: 91.66666667%; }\n  .col-xl-12 {\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 100%;\n            flex: 0 0 100%;\n    max-width: 100%; }\n  .order-xl-first {\n    -webkit-box-ordinal-group: 0;\n        -ms-flex-order: -1;\n            order: -1; }\n  .order-xl-last {\n    -webkit-box-ordinal-group: 14;\n        -ms-flex-order: 13;\n            order: 13; }\n  .order-xl-0 {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0; }\n  .order-xl-1 {\n    -webkit-box-ordinal-group: 2;\n        -ms-flex-order: 1;\n            order: 1; }\n  .order-xl-2 {\n    -webkit-box-ordinal-group: 3;\n        -ms-flex-order: 2;\n            order: 2; }\n  .order-xl-3 {\n    -webkit-box-ordinal-group: 4;\n        -ms-flex-order: 3;\n            order: 3; }\n  .order-xl-4 {\n    -webkit-box-ordinal-group: 5;\n        -ms-flex-order: 4;\n            order: 4; }\n  .order-xl-5 {\n    -webkit-box-ordinal-group: 6;\n        -ms-flex-order: 5;\n            order: 5; }\n  .order-xl-6 {\n    -webkit-box-ordinal-group: 7;\n        -ms-flex-order: 6;\n            order: 6; }\n  .order-xl-7 {\n    -webkit-box-ordinal-group: 8;\n        -ms-flex-order: 7;\n            order: 7; }\n  .order-xl-8 {\n    -webkit-box-ordinal-group: 9;\n        -ms-flex-order: 8;\n            order: 8; }\n  .order-xl-9 {\n    -webkit-box-ordinal-group: 10;\n        -ms-flex-order: 9;\n            order: 9; }\n  .order-xl-10 {\n    -webkit-box-ordinal-group: 11;\n        -ms-flex-order: 10;\n            order: 10; }\n  .order-xl-11 {\n    -webkit-box-ordinal-group: 12;\n        -ms-flex-order: 11;\n            order: 11; }\n  .order-xl-12 {\n    -webkit-box-ordinal-group: 13;\n        -ms-flex-order: 12;\n            order: 12; }\n  .offset-xl-0 {\n    margin-left: 0; }\n  .offset-xl-1 {\n    margin-left: 8.33333333%; }\n  .offset-xl-2 {\n    margin-left: 16.66666667%; }\n  .offset-xl-3 {\n    margin-left: 25%; }\n  .offset-xl-4 {\n    margin-left: 33.33333333%; }\n  .offset-xl-5 {\n    margin-left: 41.66666667%; }\n  .offset-xl-6 {\n    margin-left: 50%; }\n  .offset-xl-7 {\n    margin-left: 58.33333333%; }\n  .offset-xl-8 {\n    margin-left: 66.66666667%; }\n  .offset-xl-9 {\n    margin-left: 75%; }\n  .offset-xl-10 {\n    margin-left: 83.33333333%; }\n  .offset-xl-11 {\n    margin-left: 91.66666667%; } }\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent; }\n.table th,\n  .table td {\n    padding: 0.75rem;\n    vertical-align: top;\n    border-top: 1px solid #dee2e6; }\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #dee2e6; }\n.table tbody + tbody {\n    border-top: 2px solid #dee2e6; }\n.table .table {\n    background-color: #fff; }\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem; }\n.table-bordered {\n  border: 1px solid #dee2e6; }\n.table-bordered th,\n  .table-bordered td {\n    border: 1px solid #dee2e6; }\n.table-bordered thead th,\n  .table-bordered thead td {\n    border-bottom-width: 2px; }\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: rgba(0, 0, 0, 0.05); }\n.table-hover tbody tr:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-primary,\n.table-primary > th,\n.table-primary > td {\n  background-color: #b8daff; }\n.table-hover .table-primary:hover {\n  background-color: #9fcdff; }\n.table-hover .table-primary:hover > td,\n  .table-hover .table-primary:hover > th {\n    background-color: #9fcdff; }\n.table-secondary,\n.table-secondary > th,\n.table-secondary > td {\n  background-color: #d6d8db; }\n.table-hover .table-secondary:hover {\n  background-color: #c8cbcf; }\n.table-hover .table-secondary:hover > td,\n  .table-hover .table-secondary:hover > th {\n    background-color: #c8cbcf; }\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #c3e6cb; }\n.table-hover .table-success:hover {\n  background-color: #b1dfbb; }\n.table-hover .table-success:hover > td,\n  .table-hover .table-success:hover > th {\n    background-color: #b1dfbb; }\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #bee5eb; }\n.table-hover .table-info:hover {\n  background-color: #abdde5; }\n.table-hover .table-info:hover > td,\n  .table-hover .table-info:hover > th {\n    background-color: #abdde5; }\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #ffeeba; }\n.table-hover .table-warning:hover {\n  background-color: #ffe8a1; }\n.table-hover .table-warning:hover > td,\n  .table-hover .table-warning:hover > th {\n    background-color: #ffe8a1; }\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f5c6cb; }\n.table-hover .table-danger:hover {\n  background-color: #f1b0b7; }\n.table-hover .table-danger:hover > td,\n  .table-hover .table-danger:hover > th {\n    background-color: #f1b0b7; }\n.table-light,\n.table-light > th,\n.table-light > td {\n  background-color: #fdfdfe; }\n.table-hover .table-light:hover {\n  background-color: #ececf6; }\n.table-hover .table-light:hover > td,\n  .table-hover .table-light:hover > th {\n    background-color: #ececf6; }\n.table-dark,\n.table-dark > th,\n.table-dark > td {\n  background-color: #c6c8ca; }\n.table-hover .table-dark:hover {\n  background-color: #b9bbbe; }\n.table-hover .table-dark:hover > td,\n  .table-hover .table-dark:hover > th {\n    background-color: #b9bbbe; }\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover {\n  background-color: rgba(0, 0, 0, 0.075); }\n.table-hover .table-active:hover > td,\n  .table-hover .table-active:hover > th {\n    background-color: rgba(0, 0, 0, 0.075); }\n.table .thead-dark th {\n  color: #fff;\n  background-color: #212529;\n  border-color: #32383e; }\n.table .thead-light th {\n  color: #495057;\n  background-color: #e9ecef;\n  border-color: #dee2e6; }\n.table-dark {\n  color: #fff;\n  background-color: #212529; }\n.table-dark th,\n  .table-dark td,\n  .table-dark thead th {\n    border-color: #32383e; }\n.table-dark.table-bordered {\n    border: 0; }\n.table-dark.table-striped tbody tr:nth-of-type(odd) {\n    background-color: rgba(255, 255, 255, 0.05); }\n.table-dark.table-hover tbody tr:hover {\n    background-color: rgba(255, 255, 255, 0.075); }\n@media (max-width: 575.98px) {\n  .table-responsive-sm {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-sm > .table-bordered {\n      border: 0; } }\n@media (max-width: 767.98px) {\n  .table-responsive-md {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-md > .table-bordered {\n      border: 0; } }\n@media (max-width: 991.98px) {\n  .table-responsive-lg {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-lg > .table-bordered {\n      border: 0; } }\n@media (max-width: 1199.98px) {\n  .table-responsive-xl {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar; }\n    .table-responsive-xl > .table-bordered {\n      border: 0; } }\n.table-responsive {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar; }\n.table-responsive > .table-bordered {\n    border: 0; }\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n.form-control::-ms-expand {\n    background-color: transparent;\n    border: 0; }\n.form-control:focus {\n    color: #495057;\n    background-color: #fff;\n    border-color: #80bdff;\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.form-control::-webkit-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control:-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control::-ms-input-placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control::placeholder {\n    color: #6c757d;\n    opacity: 1; }\n.form-control:disabled, .form-control[readonly] {\n    background-color: #e9ecef;\n    opacity: 1; }\nselect.form-control:not([size]):not([multiple]) {\n  height: calc(2.25rem + 2px); }\nselect.form-control:focus::-ms-value {\n  color: #495057;\n  background-color: #fff; }\n.form-control-file,\n.form-control-range {\n  display: block;\n  width: 100%; }\n.col-form-label {\n  padding-top: calc(0.375rem + 1px);\n  padding-bottom: calc(0.375rem + 1px);\n  margin-bottom: 0;\n  font-size: inherit;\n  line-height: 1.5; }\n.col-form-label-lg {\n  padding-top: calc(0.5rem + 1px);\n  padding-bottom: calc(0.5rem + 1px);\n  font-size: 1.25rem;\n  line-height: 1.5; }\n.col-form-label-sm {\n  padding-top: calc(0.25rem + 1px);\n  padding-bottom: calc(0.25rem + 1px);\n  font-size: 0.875rem;\n  line-height: 1.5; }\n.form-control-plaintext {\n  display: block;\n  width: 100%;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n  line-height: 1.5;\n  background-color: transparent;\n  border: solid transparent;\n  border-width: 1px 0; }\n.form-control-plaintext.form-control-sm, .input-group-sm > .form-control-plaintext.form-control,\n  .input-group-sm > .input-group-prepend > .form-control-plaintext.input-group-text,\n  .input-group-sm > .input-group-append > .form-control-plaintext.input-group-text,\n  .input-group-sm > .input-group-prepend > .form-control-plaintext.btn,\n  .input-group-sm > .input-group-append > .form-control-plaintext.btn, .form-control-plaintext.form-control-lg, .input-group-lg > .form-control-plaintext.form-control,\n  .input-group-lg > .input-group-prepend > .form-control-plaintext.input-group-text,\n  .input-group-lg > .input-group-append > .form-control-plaintext.input-group-text,\n  .input-group-lg > .input-group-prepend > .form-control-plaintext.btn,\n  .input-group-lg > .input-group-append > .form-control-plaintext.btn {\n    padding-right: 0;\n    padding-left: 0; }\n.form-control-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\n.input-group-sm > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\n.input-group-sm > .input-group-append > select.input-group-text:not([size]):not([multiple]),\n.input-group-sm > .input-group-prepend > select.btn:not([size]):not([multiple]),\n.input-group-sm > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height: calc(1.8125rem + 2px); }\n.form-control-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\n.input-group-lg > .input-group-prepend > select.input-group-text:not([size]):not([multiple]),\n.input-group-lg > .input-group-append > select.input-group-text:not([size]):not([multiple]),\n.input-group-lg > .input-group-prepend > select.btn:not([size]):not([multiple]),\n.input-group-lg > .input-group-append > select.btn:not([size]):not([multiple]) {\n  height: calc(2.875rem + 2px); }\n.form-group {\n  margin-bottom: 1rem; }\n.form-text {\n  display: block;\n  margin-top: 0.25rem; }\n.form-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin-right: -5px;\n  margin-left: -5px; }\n.form-row > .col,\n  .form-row > [class*=\"col-\"] {\n    padding-right: 5px;\n    padding-left: 5px; }\n.form-check {\n  position: relative;\n  display: block;\n  padding-left: 1.25rem; }\n.form-check-input {\n  position: absolute;\n  margin-top: 0.3rem;\n  margin-left: -1.25rem; }\n.form-check-input:disabled ~ .form-check-label {\n    color: #6c757d; }\n.form-check-label {\n  margin-bottom: 0; }\n.form-check-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 0;\n  margin-right: 0.75rem; }\n.form-check-inline .form-check-input {\n    position: static;\n    margin-top: 0;\n    margin-right: 0.3125rem;\n    margin-left: 0; }\n.valid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #28a745; }\n.valid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(40, 167, 69, 0.8);\n  border-radius: .2rem; }\n.was-validated .form-control:valid, .form-control.is-valid, .was-validated\n.custom-select:valid,\n.custom-select.is-valid {\n  border-color: #28a745; }\n.was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated\n  .custom-select:valid:focus,\n  .custom-select.is-valid:focus {\n    border-color: #28a745;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.was-validated .form-control:valid ~ .valid-feedback,\n  .was-validated .form-control:valid ~ .valid-tooltip, .form-control.is-valid ~ .valid-feedback,\n  .form-control.is-valid ~ .valid-tooltip, .was-validated\n  .custom-select:valid ~ .valid-feedback,\n  .was-validated\n  .custom-select:valid ~ .valid-tooltip,\n  .custom-select.is-valid ~ .valid-feedback,\n  .custom-select.is-valid ~ .valid-tooltip {\n    display: block; }\n.was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {\n  color: #28a745; }\n.was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {\n  color: #28a745; }\n.was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {\n    background-color: #71dd8a; }\n.was-validated .custom-control-input:valid ~ .valid-feedback,\n.was-validated .custom-control-input:valid ~ .valid-tooltip, .custom-control-input.is-valid ~ .valid-feedback,\n.custom-control-input.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {\n  background-color: #34ce57; }\n.was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {\n  border-color: #28a745; }\n.was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {\n    border-color: inherit; }\n.was-validated .custom-file-input:valid ~ .valid-feedback,\n.was-validated .custom-file-input:valid ~ .valid-tooltip, .custom-file-input.is-valid ~ .valid-feedback,\n.custom-file-input.is-valid ~ .valid-tooltip {\n  display: block; }\n.was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25); }\n.invalid-feedback {\n  display: none;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #dc3545; }\n.invalid-tooltip {\n  position: absolute;\n  top: 100%;\n  z-index: 5;\n  display: none;\n  max-width: 100%;\n  padding: .5rem;\n  margin-top: .1rem;\n  font-size: .875rem;\n  line-height: 1;\n  color: #fff;\n  background-color: rgba(220, 53, 69, 0.8);\n  border-radius: .2rem; }\n.was-validated .form-control:invalid, .form-control.is-invalid, .was-validated\n.custom-select:invalid,\n.custom-select.is-invalid {\n  border-color: #dc3545; }\n.was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated\n  .custom-select:invalid:focus,\n  .custom-select.is-invalid:focus {\n    border-color: #dc3545;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.was-validated .form-control:invalid ~ .invalid-feedback,\n  .was-validated .form-control:invalid ~ .invalid-tooltip, .form-control.is-invalid ~ .invalid-feedback,\n  .form-control.is-invalid ~ .invalid-tooltip, .was-validated\n  .custom-select:invalid ~ .invalid-feedback,\n  .was-validated\n  .custom-select:invalid ~ .invalid-tooltip,\n  .custom-select.is-invalid ~ .invalid-feedback,\n  .custom-select.is-invalid ~ .invalid-tooltip {\n    display: block; }\n.was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {\n  color: #dc3545; }\n.was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {\n  color: #dc3545; }\n.was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {\n    background-color: #efa2a9; }\n.was-validated .custom-control-input:invalid ~ .invalid-feedback,\n.was-validated .custom-control-input:invalid ~ .invalid-tooltip, .custom-control-input.is-invalid ~ .invalid-feedback,\n.custom-control-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {\n  background-color: #e4606d; }\n.was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {\n  border-color: #dc3545; }\n.was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {\n    border-color: inherit; }\n.was-validated .custom-file-input:invalid ~ .invalid-feedback,\n.was-validated .custom-file-input:invalid ~ .invalid-tooltip, .custom-file-input.is-invalid ~ .invalid-feedback,\n.custom-file-input.is-invalid ~ .invalid-tooltip {\n  display: block; }\n.was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {\n  -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); }\n.form-inline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.form-inline .form-check {\n    width: 100%; }\n@media (min-width: 576px) {\n    .form-inline label {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      margin-bottom: 0; }\n    .form-inline .form-group {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 auto;\n              flex: 0 0 auto;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      margin-bottom: 0; }\n    .form-inline .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .form-inline .form-control-plaintext {\n      display: inline-block; }\n    .form-inline .input-group {\n      width: auto; }\n    .form-inline .form-check {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      width: auto;\n      padding-left: 0; }\n    .form-inline .form-check-input {\n      position: relative;\n      margin-top: 0;\n      margin-right: 0.25rem;\n      margin-left: 0; }\n    .form-inline .custom-control {\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n    .form-inline .custom-control-label {\n      margin-bottom: 0; } }\n.btn {\n  display: inline-block;\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out; }\n.btn:hover, .btn:focus {\n    text-decoration: none; }\n.btn:focus, .btn.focus {\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.btn.disabled, .btn:disabled {\n    opacity: 0.65; }\n.btn:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n.btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {\n    background-image: none; }\na.btn.disabled,\nfieldset:disabled a.btn {\n  pointer-events: none; }\n.btn-primary {\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n.btn-primary:hover {\n    color: #fff;\n    background-color: #0069d9;\n    border-color: #0062cc; }\n.btn-primary:focus, .btn-primary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-primary.disabled, .btn-primary:disabled {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #0062cc;\n    border-color: #005cbf; }\n.btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-primary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-secondary {\n  color: #fff;\n  background-color: #6c757d;\n  border-color: #6c757d; }\n.btn-secondary:hover {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62; }\n.btn-secondary:focus, .btn-secondary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-secondary.disabled, .btn-secondary:disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b; }\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-secondary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-success {\n  color: #fff;\n  background-color: #28a745;\n  border-color: #28a745; }\n.btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34; }\n.btn-success:focus, .btn-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n  .show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430; }\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-success.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-info {\n  color: #fff;\n  background-color: #17a2b8;\n  border-color: #17a2b8; }\n.btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b; }\n.btn-info:focus, .btn-info.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n  .show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f; }\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-info.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-warning {\n  color: #212529;\n  background-color: #ffc107;\n  border-color: #ffc107; }\n.btn-warning:hover {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00; }\n.btn-warning:focus, .btn-warning.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-warning.disabled, .btn-warning:disabled {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500; }\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-warning.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-danger {\n  color: #fff;\n  background-color: #dc3545;\n  border-color: #dc3545; }\n.btn-danger:hover {\n    color: #fff;\n    background-color: #c82333;\n    border-color: #bd2130; }\n.btn-danger:focus, .btn-danger.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-danger.disabled, .btn-danger:disabled {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #bd2130;\n    border-color: #b21f2d; }\n.btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-danger.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-light {\n  color: #212529;\n  background-color: #f8f9fa;\n  border-color: #f8f9fa; }\n.btn-light:hover {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5; }\n.btn-light:focus, .btn-light.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-light.disabled, .btn-light:disabled {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n  .show > .btn-light.dropdown-toggle {\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df; }\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-light.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-dark {\n  color: #fff;\n  background-color: #343a40;\n  border-color: #343a40; }\n.btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124; }\n.btn-dark:focus, .btn-dark.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d; }\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-dark.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-outline-primary {\n  color: #007bff;\n  background-color: transparent;\n  background-image: none;\n  border-color: #007bff; }\n.btn-outline-primary:hover {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-outline-primary:focus, .btn-outline-primary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\n    color: #007bff;\n    background-color: transparent; }\n.btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-primary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5); }\n.btn-outline-secondary {\n  color: #6c757d;\n  background-color: transparent;\n  background-image: none;\n  border-color: #6c757d; }\n.btn-outline-secondary:hover {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n.btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d; }\n.btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-secondary.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.5); }\n.btn-outline-success {\n  color: #28a745;\n  background-color: transparent;\n  background-image: none;\n  border-color: #28a745; }\n.btn-outline-success:hover {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-outline-success:focus, .btn-outline-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-outline-success.disabled, .btn-outline-success:disabled {\n    color: #28a745;\n    background-color: transparent; }\n.btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-success.dropdown-toggle {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745; }\n.btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-success.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.5); }\n.btn-outline-info {\n  color: #17a2b8;\n  background-color: transparent;\n  background-image: none;\n  border-color: #17a2b8; }\n.btn-outline-info:hover {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-outline-info:focus, .btn-outline-info.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-outline-info.disabled, .btn-outline-info:disabled {\n    color: #17a2b8;\n    background-color: transparent; }\n.btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-info.dropdown-toggle {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8; }\n.btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-info.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5); }\n.btn-outline-warning {\n  color: #ffc107;\n  background-color: transparent;\n  background-image: none;\n  border-color: #ffc107; }\n.btn-outline-warning:hover {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-outline-warning:focus, .btn-outline-warning.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\n    color: #ffc107;\n    background-color: transparent; }\n.btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107; }\n.btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-warning.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.5); }\n.btn-outline-danger {\n  color: #dc3545;\n  background-color: transparent;\n  background-image: none;\n  border-color: #dc3545; }\n.btn-outline-danger:hover {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-outline-danger:focus, .btn-outline-danger.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\n    color: #dc3545;\n    background-color: transparent; }\n.btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #dc3545;\n    border-color: #dc3545; }\n.btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-danger.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.5); }\n.btn-outline-light {\n  color: #f8f9fa;\n  background-color: transparent;\n  background-image: none;\n  border-color: #f8f9fa; }\n.btn-outline-light:hover {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-outline-light:focus, .btn-outline-light.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-outline-light.disabled, .btn-outline-light:disabled {\n    color: #f8f9fa;\n    background-color: transparent; }\n.btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-light.dropdown-toggle {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa; }\n.btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-light.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(248, 249, 250, 0.5); }\n.btn-outline-dark {\n  color: #343a40;\n  background-color: transparent;\n  background-image: none;\n  border-color: #343a40; }\n.btn-outline-dark:hover {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-outline-dark:focus, .btn-outline-dark.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-outline-dark.disabled, .btn-outline-dark:disabled {\n    color: #343a40;\n    background-color: transparent; }\n.btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n  .show > .btn-outline-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40; }\n.btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n    .show > .btn-outline-dark.dropdown-toggle:focus {\n      -webkit-box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5);\n              box-shadow: 0 0 0 0.2rem rgba(52, 58, 64, 0.5); }\n.btn-link {\n  font-weight: 400;\n  color: #007bff;\n  background-color: transparent; }\n.btn-link:hover {\n    color: #0056b3;\n    text-decoration: underline;\n    background-color: transparent;\n    border-color: transparent; }\n.btn-link:focus, .btn-link.focus {\n    text-decoration: underline;\n    border-color: transparent;\n    -webkit-box-shadow: none;\n            box-shadow: none; }\n.btn-link:disabled, .btn-link.disabled {\n    color: #6c757d; }\n.btn-lg, .btn-group-lg > .btn {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  line-height: 1.5;\n  border-radius: 0.3rem; }\n.btn-sm, .btn-group-sm > .btn {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem; }\n.btn-block {\n  display: block;\n  width: 100%; }\n.btn-block + .btn-block {\n    margin-top: 0.5rem; }\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n.fade.show {\n    opacity: 1; }\n.collapse {\n  display: none; }\n.collapse.show {\n    display: block; }\ntr.collapse.show {\n  display: table-row; }\ntbody.collapse.show {\n  display: table-row-group; }\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition: height 0.35s ease;\n  transition: height 0.35s ease; }\n.dropup,\n.dropdown {\n  position: relative; }\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0;\n  border-left: 0.3em solid transparent; }\n.dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 10rem;\n  padding: 0.5rem 0;\n  margin: 0.125rem 0 0;\n  font-size: 1rem;\n  color: #212529;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem; }\n.dropup .dropdown-menu {\n  margin-top: 0;\n  margin-bottom: 0.125rem; }\n.dropup .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0;\n  border-right: 0.3em solid transparent;\n  border-bottom: 0.3em solid;\n  border-left: 0.3em solid transparent; }\n.dropup .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropright .dropdown-menu {\n  margin-top: 0;\n  margin-left: 0.125rem; }\n.dropright .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-bottom: 0.3em solid transparent;\n  border-left: 0.3em solid; }\n.dropright .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropright .dropdown-toggle::after {\n  vertical-align: 0; }\n.dropleft .dropdown-menu {\n  margin-top: 0;\n  margin-right: 0.125rem; }\n.dropleft .dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\"; }\n.dropleft .dropdown-toggle::after {\n  display: none; }\n.dropleft .dropdown-toggle::before {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: 0.255em;\n  vertical-align: 0.255em;\n  content: \"\";\n  border-top: 0.3em solid transparent;\n  border-right: 0.3em solid;\n  border-bottom: 0.3em solid transparent; }\n.dropleft .dropdown-toggle:empty::after {\n  margin-left: 0; }\n.dropleft .dropdown-toggle::before {\n  vertical-align: 0; }\n.dropdown-divider {\n  height: 0;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  border-top: 1px solid #e9ecef; }\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 0.25rem 1.5rem;\n  clear: both;\n  font-weight: 400;\n  color: #212529;\n  text-align: inherit;\n  white-space: nowrap;\n  background-color: transparent;\n  border: 0; }\n.dropdown-item:hover, .dropdown-item:focus {\n    color: #16181b;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n.dropdown-item.active, .dropdown-item:active {\n    color: #fff;\n    text-decoration: none;\n    background-color: #007bff; }\n.dropdown-item.disabled, .dropdown-item:disabled {\n    color: #6c757d;\n    background-color: transparent; }\n.dropdown-menu.show {\n  display: block; }\n.dropdown-header {\n  display: block;\n  padding: 0.5rem 1.5rem;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  color: #6c757d;\n  white-space: nowrap; }\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle; }\n.btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto; }\n.btn-group > .btn:hover,\n    .btn-group-vertical > .btn:hover {\n      z-index: 1; }\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 1; }\n.btn-group .btn + .btn,\n  .btn-group .btn + .btn-group,\n  .btn-group .btn-group + .btn,\n  .btn-group .btn-group + .btn-group,\n  .btn-group-vertical .btn + .btn,\n  .btn-group-vertical .btn + .btn-group,\n  .btn-group-vertical .btn-group + .btn,\n  .btn-group-vertical .btn-group + .btn-group {\n    margin-left: -1px; }\n.btn-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.btn-toolbar .input-group {\n    width: auto; }\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n.btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.dropdown-toggle-split {\n  padding-right: 0.5625rem;\n  padding-left: 0.5625rem; }\n.dropdown-toggle-split::after {\n    margin-left: 0; }\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\n  padding-right: 0.375rem;\n  padding-left: 0.375rem; }\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\n  padding-right: 0.75rem;\n  padding-left: 0.75rem; }\n.btn-group-vertical {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n.btn-group-vertical .btn,\n  .btn-group-vertical .btn-group {\n    width: 100%; }\n.btn-group-vertical > .btn + .btn,\n  .btn-group-vertical > .btn + .btn-group,\n  .btn-group-vertical > .btn-group + .btn,\n  .btn-group-vertical > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0; }\n.btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n  .btn-group-vertical > .btn-group:not(:last-child) > .btn {\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0; }\n.btn-group-vertical > .btn:not(:first-child),\n  .btn-group-vertical > .btn-group:not(:first-child) > .btn {\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn {\n  margin-bottom: 0; }\n.btn-group-toggle > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn input[type=\"checkbox\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"radio\"],\n  .btn-group-toggle > .btn-group > .btn input[type=\"checkbox\"] {\n    position: absolute;\n    clip: rect(0, 0, 0, 0);\n    pointer-events: none; }\n.input-group {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  width: 100%; }\n.input-group > .form-control,\n  .input-group > .custom-select,\n  .input-group > .custom-file {\n    position: relative;\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 auto;\n            flex: 1 1 auto;\n    width: 1%;\n    margin-bottom: 0; }\n.input-group > .form-control:focus,\n    .input-group > .custom-select:focus,\n    .input-group > .custom-file:focus {\n      z-index: 3; }\n.input-group > .form-control + .form-control,\n    .input-group > .form-control + .custom-select,\n    .input-group > .form-control + .custom-file,\n    .input-group > .custom-select + .form-control,\n    .input-group > .custom-select + .custom-select,\n    .input-group > .custom-select + .custom-file,\n    .input-group > .custom-file + .form-control,\n    .input-group > .custom-file + .custom-select,\n    .input-group > .custom-file + .custom-file {\n      margin-left: -1px; }\n.input-group > .form-control:not(:last-child),\n  .input-group > .custom-select:not(:last-child) {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0; }\n.input-group > .form-control:not(:first-child),\n  .input-group > .custom-select:not(:first-child) {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0; }\n.input-group > .custom-file {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n.input-group > .custom-file:not(:last-child) .custom-file-label,\n    .input-group > .custom-file:not(:last-child) .custom-file-label::before {\n      border-top-right-radius: 0;\n      border-bottom-right-radius: 0; }\n.input-group > .custom-file:not(:first-child) .custom-file-label,\n    .input-group > .custom-file:not(:first-child) .custom-file-label::before {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\n.input-group-prepend,\n.input-group-append {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n.input-group-prepend .btn,\n  .input-group-append .btn {\n    position: relative;\n    z-index: 2; }\n.input-group-prepend .btn + .btn,\n  .input-group-prepend .btn + .input-group-text,\n  .input-group-prepend .input-group-text + .input-group-text,\n  .input-group-prepend .input-group-text + .btn,\n  .input-group-append .btn + .btn,\n  .input-group-append .btn + .input-group-text,\n  .input-group-append .input-group-text + .input-group-text,\n  .input-group-append .input-group-text + .btn {\n    margin-left: -1px; }\n.input-group-prepend {\n  margin-right: -1px; }\n.input-group-append {\n  margin-left: -1px; }\n.input-group-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n.input-group-text input[type=\"radio\"],\n  .input-group-text input[type=\"checkbox\"] {\n    margin-top: 0; }\n.input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0; }\n.input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0; }\n.custom-control {\n  position: relative;\n  display: block;\n  min-height: 1.5rem;\n  padding-left: 1.5rem; }\n.custom-control-inline {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-right: 1rem; }\n.custom-control-input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0; }\n.custom-control-input:checked ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #007bff; }\n.custom-control-input:focus ~ .custom-control-label::before {\n    -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 1px #fff, 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-control-input:active ~ .custom-control-label::before {\n    color: #fff;\n    background-color: #b3d7ff; }\n.custom-control-input:disabled ~ .custom-control-label {\n    color: #6c757d; }\n.custom-control-input:disabled ~ .custom-control-label::before {\n      background-color: #e9ecef; }\n.custom-control-label {\n  margin-bottom: 0; }\n.custom-control-label::before {\n    position: absolute;\n    top: 0.25rem;\n    left: 0;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    pointer-events: none;\n    content: \"\";\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    background-color: #dee2e6; }\n.custom-control-label::after {\n    position: absolute;\n    top: 0.25rem;\n    left: 0;\n    display: block;\n    width: 1rem;\n    height: 1rem;\n    content: \"\";\n    background-repeat: no-repeat;\n    background-position: center center;\n    background-size: 50% 50%; }\n.custom-checkbox .custom-control-label::before {\n  border-radius: 0.25rem; }\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff; }\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\"); }\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {\n  background-color: #007bff; }\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\"); }\n.custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-radio .custom-control-label::before {\n  border-radius: 50%; }\n.custom-radio .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #007bff; }\n.custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\"); }\n.custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {\n  background-color: rgba(0, 123, 255, 0.5); }\n.custom-select {\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  vertical-align: middle;\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\n  background-size: 8px 10px;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none; }\n.custom-select:focus {\n    border-color: #80bdff;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5);\n            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075), 0 0 5px rgba(128, 189, 255, 0.5); }\n.custom-select:focus::-ms-value {\n      color: #495057;\n      background-color: #fff; }\n.custom-select[multiple], .custom-select[size]:not([size=\"1\"]) {\n    height: auto;\n    padding-right: 0.75rem;\n    background-image: none; }\n.custom-select:disabled {\n    color: #6c757d;\n    background-color: #e9ecef; }\n.custom-select::-ms-expand {\n    opacity: 0; }\n.custom-select-sm {\n  height: calc(1.8125rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 75%; }\n.custom-select-lg {\n  height: calc(2.875rem + 2px);\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  font-size: 125%; }\n.custom-file {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin-bottom: 0; }\n.custom-file-input {\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0; }\n.custom-file-input:focus ~ .custom-file-control {\n    border-color: #80bdff;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.custom-file-input:focus ~ .custom-file-control::before {\n      border-color: #80bdff; }\n.custom-file-input:lang(en) ~ .custom-file-label::after {\n    content: \"Browse\"; }\n.custom-file-label {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem; }\n.custom-file-label::after {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 3;\n    display: block;\n    height: calc(calc(2.25rem + 2px) - 1px * 2);\n    padding: 0.375rem 0.75rem;\n    line-height: 1.5;\n    color: #495057;\n    content: \"Browse\";\n    background-color: #e9ecef;\n    border-left: 1px solid #ced4da;\n    border-radius: 0 0.25rem 0.25rem 0; }\n.nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.nav-link {\n  display: block;\n  padding: 0.5rem 1rem; }\n.nav-link:hover, .nav-link:focus {\n    text-decoration: none; }\n.nav-link.disabled {\n    color: #6c757d; }\n.nav-tabs {\n  border-bottom: 1px solid #dee2e6; }\n.nav-tabs .nav-item {\n    margin-bottom: -1px; }\n.nav-tabs .nav-link {\n    border: 1px solid transparent;\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n.nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {\n      border-color: #e9ecef #e9ecef #dee2e6; }\n.nav-tabs .nav-link.disabled {\n      color: #6c757d;\n      background-color: transparent;\n      border-color: transparent; }\n.nav-tabs .nav-link.active,\n  .nav-tabs .nav-item.show .nav-link {\n    color: #495057;\n    background-color: #fff;\n    border-color: #dee2e6 #dee2e6 #fff; }\n.nav-tabs .dropdown-menu {\n    margin-top: -1px;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0; }\n.nav-pills .nav-link {\n  border-radius: 0.25rem; }\n.nav-pills .nav-link.active,\n.nav-pills .show > .nav-link {\n  color: #fff;\n  background-color: #007bff; }\n.nav-fill .nav-item {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  text-align: center; }\n.nav-justified .nav-item {\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  text-align: center; }\n.tab-content > .tab-pane {\n  display: none; }\n.tab-content > .active {\n  display: block; }\n.navbar {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 0.5rem 1rem; }\n.navbar > .container,\n  .navbar > .container-fluid {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n.navbar-brand {\n  display: inline-block;\n  padding-top: 0.3125rem;\n  padding-bottom: 0.3125rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n  line-height: inherit;\n  white-space: nowrap; }\n.navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n.navbar-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n.navbar-nav .nav-link {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-nav .dropdown-menu {\n    position: static;\n    float: none; }\n.navbar-text {\n  display: inline-block;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n.navbar-collapse {\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n.navbar-toggler {\n  padding: 0.25rem 0.75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n.navbar-toggler:hover, .navbar-toggler:focus {\n    text-decoration: none; }\n.navbar-toggler:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n.navbar-toggler-icon {\n  display: inline-block;\n  width: 1.5em;\n  height: 1.5em;\n  vertical-align: middle;\n  content: \"\";\n  background: no-repeat center center;\n  background-size: 100% 100%; }\n@media (max-width: 575.98px) {\n  .navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 576px) {\n  .navbar-expand-sm {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-sm .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-sm .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-sm .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-sm > .container,\n    .navbar-expand-sm > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-sm .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-sm .navbar-toggler {\n      display: none; }\n    .navbar-expand-sm .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 767.98px) {\n  .navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 768px) {\n  .navbar-expand-md {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-md .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-md .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-md .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-md .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-md > .container,\n    .navbar-expand-md > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-md .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-md .navbar-toggler {\n      display: none; }\n    .navbar-expand-md .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 991.98px) {\n  .navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 992px) {\n  .navbar-expand-lg {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-lg .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-lg .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-lg .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-lg > .container,\n    .navbar-expand-lg > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-lg .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-lg .navbar-toggler {\n      display: none; }\n    .navbar-expand-lg .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n@media (max-width: 1199.98px) {\n  .navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; } }\n@media (min-width: 1200px) {\n  .navbar-expand-xl {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: row nowrap;\n            flex-flow: row nowrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n    .navbar-expand-xl .navbar-nav {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu {\n        position: absolute; }\n      .navbar-expand-xl .navbar-nav .dropdown-menu-right {\n        right: 0;\n        left: auto; }\n      .navbar-expand-xl .navbar-nav .nav-link {\n        padding-right: 0.5rem;\n        padding-left: 0.5rem; }\n    .navbar-expand-xl > .container,\n    .navbar-expand-xl > .container-fluid {\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n    .navbar-expand-xl .navbar-collapse {\n      display: -webkit-box !important;\n      display: -ms-flexbox !important;\n      display: flex !important;\n      -ms-flex-preferred-size: auto;\n          flex-basis: auto; }\n    .navbar-expand-xl .navbar-toggler {\n      display: none; }\n    .navbar-expand-xl .dropup .dropdown-menu {\n      top: auto;\n      bottom: 100%; } }\n.navbar-expand {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row nowrap;\n          flex-flow: row nowrap;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    padding-right: 0;\n    padding-left: 0; }\n.navbar-expand .navbar-nav {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n.navbar-expand .navbar-nav .dropdown-menu {\n      position: absolute; }\n.navbar-expand .navbar-nav .dropdown-menu-right {\n      right: 0;\n      left: auto; }\n.navbar-expand .navbar-nav .nav-link {\n      padding-right: 0.5rem;\n      padding-left: 0.5rem; }\n.navbar-expand > .container,\n  .navbar-expand > .container-fluid {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n.navbar-expand .navbar-collapse {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important;\n    -ms-flex-preferred-size: auto;\n        flex-basis: auto; }\n.navbar-expand .navbar-toggler {\n    display: none; }\n.navbar-expand .dropup .dropdown-menu {\n    top: auto;\n    bottom: 100%; }\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.5); }\n.navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {\n    color: rgba(0, 0, 0, 0.7); }\n.navbar-light .navbar-nav .nav-link.disabled {\n    color: rgba(0, 0, 0, 0.3); }\n.navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active {\n  color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-toggler {\n  color: rgba(0, 0, 0, 0.5);\n  border-color: rgba(0, 0, 0, 0.1); }\n.navbar-light .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n.navbar-light .navbar-text {\n  color: rgba(0, 0, 0, 0.5); }\n.navbar-light .navbar-text a {\n    color: rgba(0, 0, 0, 0.9); }\n.navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {\n      color: rgba(0, 0, 0, 0.9); }\n.navbar-dark .navbar-brand {\n  color: #fff; }\n.navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {\n    color: #fff; }\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5); }\n.navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {\n    color: rgba(255, 255, 255, 0.75); }\n.navbar-dark .navbar-nav .nav-link.disabled {\n    color: rgba(255, 255, 255, 0.25); }\n.navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active {\n  color: #fff; }\n.navbar-dark .navbar-toggler {\n  color: rgba(255, 255, 255, 0.5);\n  border-color: rgba(255, 255, 255, 0.1); }\n.navbar-dark .navbar-toggler-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E\"); }\n.navbar-dark .navbar-text {\n  color: rgba(255, 255, 255, 0.5); }\n.navbar-dark .navbar-text a {\n    color: #fff; }\n.navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {\n      color: #fff; }\n.card {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem; }\n.card > hr {\n    margin-right: 0;\n    margin-left: 0; }\n.card > .list-group:first-child .list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n.card > .list-group:last-child .list-group-item:last-child {\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n.card-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1.25rem; }\n.card-title {\n  margin-bottom: 0.75rem; }\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0; }\n.card-text:last-child {\n  margin-bottom: 0; }\n.card-link:hover {\n  text-decoration: none; }\n.card-link + .card-link {\n  margin-left: 1.25rem; }\n.card-header {\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 0;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }\n.card-header:first-child {\n    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }\n.card-header + .list-group .list-group-item:first-child {\n    border-top: 0; }\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: rgba(0, 0, 0, 0.03);\n  border-top: 1px solid rgba(0, 0, 0, 0.125); }\n.card-footer:last-child {\n    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }\n.card-header-tabs {\n  margin-right: -0.625rem;\n  margin-bottom: -0.75rem;\n  margin-left: -0.625rem;\n  border-bottom: 0; }\n.card-header-pills {\n  margin-right: -0.625rem;\n  margin-left: -0.625rem; }\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem; }\n.card-img {\n  width: 100%;\n  border-radius: calc(0.25rem - 1px); }\n.card-img-top {\n  width: 100%;\n  border-top-left-radius: calc(0.25rem - 1px);\n  border-top-right-radius: calc(0.25rem - 1px); }\n.card-img-bottom {\n  width: 100%;\n  border-bottom-right-radius: calc(0.25rem - 1px);\n  border-bottom-left-radius: calc(0.25rem - 1px); }\n.card-deck {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.card-deck .card {\n    margin-bottom: 15px; }\n@media (min-width: 576px) {\n    .card-deck {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap;\n      margin-right: -15px;\n      margin-left: -15px; }\n      .card-deck .card {\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 0%;\n                flex: 1 0 0%;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        margin-right: 15px;\n        margin-bottom: 0;\n        margin-left: 15px; } }\n.card-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n.card-group > .card {\n    margin-bottom: 15px; }\n@media (min-width: 576px) {\n    .card-group {\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-flow: row wrap;\n              flex-flow: row wrap; }\n      .card-group > .card {\n        -webkit-box-flex: 1;\n            -ms-flex: 1 0 0%;\n                flex: 1 0 0%;\n        margin-bottom: 0; }\n        .card-group > .card + .card {\n          margin-left: 0;\n          border-left: 0; }\n        .card-group > .card:first-child {\n          border-top-right-radius: 0;\n          border-bottom-right-radius: 0; }\n          .card-group > .card:first-child .card-img-top,\n          .card-group > .card:first-child .card-header {\n            border-top-right-radius: 0; }\n          .card-group > .card:first-child .card-img-bottom,\n          .card-group > .card:first-child .card-footer {\n            border-bottom-right-radius: 0; }\n        .card-group > .card:last-child {\n          border-top-left-radius: 0;\n          border-bottom-left-radius: 0; }\n          .card-group > .card:last-child .card-img-top,\n          .card-group > .card:last-child .card-header {\n            border-top-left-radius: 0; }\n          .card-group > .card:last-child .card-img-bottom,\n          .card-group > .card:last-child .card-footer {\n            border-bottom-left-radius: 0; }\n        .card-group > .card:only-child {\n          border-radius: 0.25rem; }\n          .card-group > .card:only-child .card-img-top,\n          .card-group > .card:only-child .card-header {\n            border-top-left-radius: 0.25rem;\n            border-top-right-radius: 0.25rem; }\n          .card-group > .card:only-child .card-img-bottom,\n          .card-group > .card:only-child .card-footer {\n            border-bottom-right-radius: 0.25rem;\n            border-bottom-left-radius: 0.25rem; }\n        .card-group > .card:not(:first-child):not(:last-child):not(:only-child) {\n          border-radius: 0; }\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-top,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-header,\n          .card-group > .card:not(:first-child):not(:last-child):not(:only-child) .card-footer {\n            border-radius: 0; } }\n.card-columns .card {\n  margin-bottom: 0.75rem; }\n@media (min-width: 576px) {\n  .card-columns {\n    -webkit-column-count: 3;\n            column-count: 3;\n    -webkit-column-gap: 1.25rem;\n            column-gap: 1.25rem; }\n    .card-columns .card {\n      display: inline-block;\n      width: 100%; } }\n.breadcrumb {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n.breadcrumb-item + .breadcrumb-item::before {\n  display: inline-block;\n  padding-right: 0.5rem;\n  padding-left: 0.5rem;\n  color: #6c757d;\n  content: \"/\"; }\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: underline; }\n.breadcrumb-item + .breadcrumb-item:hover::before {\n  text-decoration: none; }\n.breadcrumb-item.active {\n  color: #6c757d; }\n.pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0;\n  list-style: none;\n  border-radius: 0.25rem; }\n.page-link {\n  position: relative;\n  display: block;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.25;\n  color: #007bff;\n  background-color: #fff;\n  border: 1px solid #dee2e6; }\n.page-link:hover {\n    color: #0056b3;\n    text-decoration: none;\n    background-color: #e9ecef;\n    border-color: #dee2e6; }\n.page-link:focus {\n    z-index: 2;\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);\n            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25); }\n.page-link:not(:disabled):not(.disabled) {\n    cursor: pointer; }\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem; }\n.page-item:last-child .page-link {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n.page-item.active .page-link {\n  z-index: 1;\n  color: #fff;\n  background-color: #007bff;\n  border-color: #007bff; }\n.page-item.disabled .page-link {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: auto;\n  background-color: #fff;\n  border-color: #dee2e6; }\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.5; }\n.pagination-lg .page-item:first-child .page-link {\n  border-top-left-radius: 0.3rem;\n  border-bottom-left-radius: 0.3rem; }\n.pagination-lg .page-item:last-child .page-link {\n  border-top-right-radius: 0.3rem;\n  border-bottom-right-radius: 0.3rem; }\n.pagination-sm .page-link {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  line-height: 1.5; }\n.pagination-sm .page-item:first-child .page-link {\n  border-top-left-radius: 0.2rem;\n  border-bottom-left-radius: 0.2rem; }\n.pagination-sm .page-item:last-child .page-link {\n  border-top-right-radius: 0.2rem;\n  border-bottom-right-radius: 0.2rem; }\n.badge {\n  display: inline-block;\n  padding: 0.25em 0.4em;\n  font-size: 75%;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem; }\n.badge:empty {\n    display: none; }\n.btn .badge {\n  position: relative;\n  top: -1px; }\n.badge-pill {\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem; }\n.badge-primary {\n  color: #fff;\n  background-color: #007bff; }\n.badge-primary[href]:hover, .badge-primary[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #0062cc; }\n.badge-secondary {\n  color: #fff;\n  background-color: #6c757d; }\n.badge-secondary[href]:hover, .badge-secondary[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #545b62; }\n.badge-success {\n  color: #fff;\n  background-color: #28a745; }\n.badge-success[href]:hover, .badge-success[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1e7e34; }\n.badge-info {\n  color: #fff;\n  background-color: #17a2b8; }\n.badge-info[href]:hover, .badge-info[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #117a8b; }\n.badge-warning {\n  color: #212529;\n  background-color: #ffc107; }\n.badge-warning[href]:hover, .badge-warning[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #d39e00; }\n.badge-danger {\n  color: #fff;\n  background-color: #dc3545; }\n.badge-danger[href]:hover, .badge-danger[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #bd2130; }\n.badge-light {\n  color: #212529;\n  background-color: #f8f9fa; }\n.badge-light[href]:hover, .badge-light[href]:focus {\n    color: #212529;\n    text-decoration: none;\n    background-color: #dae0e5; }\n.badge-dark {\n  color: #fff;\n  background-color: #343a40; }\n.badge-dark[href]:hover, .badge-dark[href]:focus {\n    color: #fff;\n    text-decoration: none;\n    background-color: #1d2124; }\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #e9ecef;\n  border-radius: 0.3rem; }\n@media (min-width: 576px) {\n    .jumbotron {\n      padding: 4rem 2rem; } }\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0; }\n.alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem; }\n.alert-heading {\n  color: inherit; }\n.alert-link {\n  font-weight: 700; }\n.alert-dismissible {\n  padding-right: 4rem; }\n.alert-dismissible .close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 0.75rem 1.25rem;\n    color: inherit; }\n.alert-primary {\n  color: #004085;\n  background-color: #cce5ff;\n  border-color: #b8daff; }\n.alert-primary hr {\n    border-top-color: #9fcdff; }\n.alert-primary .alert-link {\n    color: #002752; }\n.alert-secondary {\n  color: #383d41;\n  background-color: #e2e3e5;\n  border-color: #d6d8db; }\n.alert-secondary hr {\n    border-top-color: #c8cbcf; }\n.alert-secondary .alert-link {\n    color: #202326; }\n.alert-success {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb; }\n.alert-success hr {\n    border-top-color: #b1dfbb; }\n.alert-success .alert-link {\n    color: #0b2e13; }\n.alert-info {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb; }\n.alert-info hr {\n    border-top-color: #abdde5; }\n.alert-info .alert-link {\n    color: #062c33; }\n.alert-warning {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba; }\n.alert-warning hr {\n    border-top-color: #ffe8a1; }\n.alert-warning .alert-link {\n    color: #533f03; }\n.alert-danger {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb; }\n.alert-danger hr {\n    border-top-color: #f1b0b7; }\n.alert-danger .alert-link {\n    color: #491217; }\n.alert-light {\n  color: #818182;\n  background-color: #fefefe;\n  border-color: #fdfdfe; }\n.alert-light hr {\n    border-top-color: #ececf6; }\n.alert-light .alert-link {\n    color: #686868; }\n.alert-dark {\n  color: #1b1e21;\n  background-color: #d6d8d9;\n  border-color: #c6c8ca; }\n.alert-dark hr {\n    border-top-color: #b9bbbe; }\n.alert-dark .alert-link {\n    color: #040505; }\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0; }\n  to {\n    background-position: 0 0; } }\n.progress {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  font-size: 0.75rem;\n  background-color: #e9ecef;\n  border-radius: 0.25rem; }\n.progress-bar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #fff;\n  text-align: center;\n  background-color: #007bff;\n  -webkit-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n.progress-bar-striped {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem; }\n.progress-bar-animated {\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\n          animation: progress-bar-stripes 1s linear infinite; }\n.media {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n.media-body {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n.list-group {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding-left: 0;\n  margin-bottom: 0; }\n.list-group-item-action {\n  width: 100%;\n  color: #495057;\n  text-align: inherit; }\n.list-group-item-action:hover, .list-group-item-action:focus {\n    color: #495057;\n    text-decoration: none;\n    background-color: #f8f9fa; }\n.list-group-item-action:active {\n    color: #212529;\n    background-color: #e9ecef; }\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n.list-group-item:first-child {\n    border-top-left-radius: 0.25rem;\n    border-top-right-radius: 0.25rem; }\n.list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem; }\n.list-group-item:hover, .list-group-item:focus {\n    z-index: 1;\n    text-decoration: none; }\n.list-group-item.disabled, .list-group-item:disabled {\n    color: #6c757d;\n    background-color: #fff; }\n.list-group-item.active {\n    z-index: 2;\n    color: #fff;\n    background-color: #007bff;\n    border-color: #007bff; }\n.list-group-flush .list-group-item {\n  border-right: 0;\n  border-left: 0;\n  border-radius: 0; }\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0; }\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0; }\n.list-group-item-primary {\n  color: #004085;\n  background-color: #b8daff; }\n.list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {\n    color: #004085;\n    background-color: #9fcdff; }\n.list-group-item-primary.list-group-item-action.active {\n    color: #fff;\n    background-color: #004085;\n    border-color: #004085; }\n.list-group-item-secondary {\n  color: #383d41;\n  background-color: #d6d8db; }\n.list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {\n    color: #383d41;\n    background-color: #c8cbcf; }\n.list-group-item-secondary.list-group-item-action.active {\n    color: #fff;\n    background-color: #383d41;\n    border-color: #383d41; }\n.list-group-item-success {\n  color: #155724;\n  background-color: #c3e6cb; }\n.list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {\n    color: #155724;\n    background-color: #b1dfbb; }\n.list-group-item-success.list-group-item-action.active {\n    color: #fff;\n    background-color: #155724;\n    border-color: #155724; }\n.list-group-item-info {\n  color: #0c5460;\n  background-color: #bee5eb; }\n.list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {\n    color: #0c5460;\n    background-color: #abdde5; }\n.list-group-item-info.list-group-item-action.active {\n    color: #fff;\n    background-color: #0c5460;\n    border-color: #0c5460; }\n.list-group-item-warning {\n  color: #856404;\n  background-color: #ffeeba; }\n.list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {\n    color: #856404;\n    background-color: #ffe8a1; }\n.list-group-item-warning.list-group-item-action.active {\n    color: #fff;\n    background-color: #856404;\n    border-color: #856404; }\n.list-group-item-danger {\n  color: #721c24;\n  background-color: #f5c6cb; }\n.list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {\n    color: #721c24;\n    background-color: #f1b0b7; }\n.list-group-item-danger.list-group-item-action.active {\n    color: #fff;\n    background-color: #721c24;\n    border-color: #721c24; }\n.list-group-item-light {\n  color: #818182;\n  background-color: #fdfdfe; }\n.list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {\n    color: #818182;\n    background-color: #ececf6; }\n.list-group-item-light.list-group-item-action.active {\n    color: #fff;\n    background-color: #818182;\n    border-color: #818182; }\n.list-group-item-dark {\n  color: #1b1e21;\n  background-color: #c6c8ca; }\n.list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {\n    color: #1b1e21;\n    background-color: #b9bbbe; }\n.list-group-item-dark.list-group-item-action.active {\n    color: #fff;\n    background-color: #1b1e21;\n    border-color: #1b1e21; }\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .5; }\n.close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    opacity: .75; }\n.close:not(:disabled):not(.disabled) {\n    cursor: pointer; }\nbutton.close {\n  padding: 0;\n  background-color: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n.modal-open {\n  overflow: hidden; }\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0; }\n.modal-open .modal {\n    overflow-x: hidden;\n    overflow-y: auto; }\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 0.5rem;\n  pointer-events: none; }\n.modal.fade .modal-dialog {\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    transition: -webkit-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out;\n    transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;\n    -webkit-transform: translate(0, -25%);\n            transform: translate(0, -25%); }\n.modal.show .modal-dialog {\n    -webkit-transform: translate(0, 0);\n            transform: translate(0, 0); }\n.modal-dialog-centered {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: calc(100% - (0.5rem * 2)); }\n.modal-content {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  pointer-events: auto;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0; }\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n.modal-backdrop.fade {\n    opacity: 0; }\n.modal-backdrop.show {\n    opacity: 0.5; }\n.modal-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1rem;\n  border-bottom: 1px solid #e9ecef;\n  border-top-left-radius: 0.3rem;\n  border-top-right-radius: 0.3rem; }\n.modal-header .close {\n    padding: 1rem;\n    margin: -1rem -1rem -1rem auto; }\n.modal-title {\n  margin-bottom: 0;\n  line-height: 1.5; }\n.modal-body {\n  position: relative;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  padding: 1rem; }\n.modal-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  padding: 1rem;\n  border-top: 1px solid #e9ecef; }\n.modal-footer > :not(:first-child) {\n    margin-left: .25rem; }\n.modal-footer > :not(:last-child) {\n    margin-right: .25rem; }\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n@media (min-width: 576px) {\n  .modal-dialog {\n    max-width: 500px;\n    margin: 1.75rem auto; }\n  .modal-dialog-centered {\n    min-height: calc(100% - (1.75rem * 2)); }\n  .modal-sm {\n    max-width: 300px; } }\n@media (min-width: 992px) {\n  .modal-lg {\n    max-width: 800px; } }\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  opacity: 0; }\n.tooltip.show {\n    opacity: 0.9; }\n.tooltip .arrow {\n    position: absolute;\n    display: block;\n    width: 0.8rem;\n    height: 0.4rem; }\n.tooltip .arrow::before {\n      position: absolute;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n.bs-tooltip-top, .bs-tooltip-auto[x-placement^=\"top\"] {\n  padding: 0.4rem 0; }\n.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^=\"top\"] .arrow {\n    bottom: 0; }\n.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^=\"top\"] .arrow::before {\n      top: 0;\n      border-width: 0.4rem 0.4rem 0;\n      border-top-color: #000; }\n.bs-tooltip-right, .bs-tooltip-auto[x-placement^=\"right\"] {\n  padding: 0 0.4rem; }\n.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^=\"right\"] .arrow {\n    left: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^=\"right\"] .arrow::before {\n      right: 0;\n      border-width: 0.4rem 0.4rem 0.4rem 0;\n      border-right-color: #000; }\n.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^=\"bottom\"] {\n  padding: 0.4rem 0; }\n.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow {\n    top: 0; }\n.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^=\"bottom\"] .arrow::before {\n      bottom: 0;\n      border-width: 0 0.4rem 0.4rem;\n      border-bottom-color: #000; }\n.bs-tooltip-left, .bs-tooltip-auto[x-placement^=\"left\"] {\n  padding: 0 0.4rem; }\n.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^=\"left\"] .arrow {\n    right: 0;\n    width: 0.4rem;\n    height: 0.8rem; }\n.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^=\"left\"] .arrow::before {\n      left: 0;\n      border-width: 0.4rem 0 0.4rem 0.4rem;\n      border-left-color: #000; }\n.tooltip-inner {\n  max-width: 200px;\n  padding: 0.25rem 0.5rem;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: block;\n  max-width: 276px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  white-space: normal;\n  line-break: auto;\n  font-size: 0.875rem;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem; }\n.popover .arrow {\n    position: absolute;\n    display: block;\n    width: 1rem;\n    height: 0.5rem;\n    margin: 0 0.3rem; }\n.popover .arrow::before, .popover .arrow::after {\n      position: absolute;\n      display: block;\n      content: \"\";\n      border-color: transparent;\n      border-style: solid; }\n.bs-popover-top, .bs-popover-auto[x-placement^=\"top\"] {\n  margin-bottom: 0.5rem; }\n.bs-popover-top .arrow, .bs-popover-auto[x-placement^=\"top\"] .arrow {\n    bottom: calc((0.5rem + 1px) * -1); }\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before,\n  .bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    border-width: 0.5rem 0.5rem 0; }\n.bs-popover-top .arrow::before, .bs-popover-auto[x-placement^=\"top\"] .arrow::before {\n    bottom: 0;\n    border-top-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-top .arrow::after, .bs-popover-auto[x-placement^=\"top\"] .arrow::after {\n    bottom: 1px;\n    border-top-color: #fff; }\n.bs-popover-right, .bs-popover-auto[x-placement^=\"right\"] {\n  margin-left: 0.5rem; }\n.bs-popover-right .arrow, .bs-popover-auto[x-placement^=\"right\"] .arrow {\n    left: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before,\n  .bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    border-width: 0.5rem 0.5rem 0.5rem 0; }\n.bs-popover-right .arrow::before, .bs-popover-auto[x-placement^=\"right\"] .arrow::before {\n    left: 0;\n    border-right-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-right .arrow::after, .bs-popover-auto[x-placement^=\"right\"] .arrow::after {\n    left: 1px;\n    border-right-color: #fff; }\n.bs-popover-bottom, .bs-popover-auto[x-placement^=\"bottom\"] {\n  margin-top: 0.5rem; }\n.bs-popover-bottom .arrow, .bs-popover-auto[x-placement^=\"bottom\"] .arrow {\n    top: calc((0.5rem + 1px) * -1); }\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before,\n  .bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    border-width: 0 0.5rem 0.5rem 0.5rem; }\n.bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::before {\n    top: 0;\n    border-bottom-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^=\"bottom\"] .arrow::after {\n    top: 1px;\n    border-bottom-color: #fff; }\n.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^=\"bottom\"] .popover-header::before {\n    position: absolute;\n    top: 0;\n    left: 50%;\n    display: block;\n    width: 1rem;\n    margin-left: -0.5rem;\n    content: \"\";\n    border-bottom: 1px solid #f7f7f7; }\n.bs-popover-left, .bs-popover-auto[x-placement^=\"left\"] {\n  margin-right: 0.5rem; }\n.bs-popover-left .arrow, .bs-popover-auto[x-placement^=\"left\"] .arrow {\n    right: calc((0.5rem + 1px) * -1);\n    width: 0.5rem;\n    height: 1rem;\n    margin: 0.3rem 0; }\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before,\n  .bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    border-width: 0.5rem 0 0.5rem 0.5rem; }\n.bs-popover-left .arrow::before, .bs-popover-auto[x-placement^=\"left\"] .arrow::before {\n    right: 0;\n    border-left-color: rgba(0, 0, 0, 0.25); }\n.bs-popover-left .arrow::after, .bs-popover-auto[x-placement^=\"left\"] .arrow::after {\n    right: 1px;\n    border-left-color: #fff; }\n.popover-header {\n  padding: 0.5rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  color: inherit;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-top-left-radius: calc(0.3rem - 1px);\n  border-top-right-radius: calc(0.3rem - 1px); }\n.popover-header:empty {\n    display: none; }\n.popover-body {\n  padding: 0.5rem 0.75rem;\n  color: #212529; }\n.carousel {\n  position: relative; }\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden; }\n.carousel-item {\n  position: relative;\n  display: none;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  -webkit-transition: -webkit-transform 0.6s ease;\n  transition: -webkit-transform 0.6s ease;\n  transition: transform 0.6s ease;\n  transition: transform 0.6s ease, -webkit-transform 0.6s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n.carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev {\n  display: block; }\n.carousel-item-next,\n.carousel-item-prev {\n  position: absolute;\n  top: 0; }\n.carousel-item-next.carousel-item-left,\n.carousel-item-prev.carousel-item-right {\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-next.carousel-item-left,\n    .carousel-item-prev.carousel-item-right {\n      -webkit-transform: translate3d(0, 0, 0);\n              transform: translate3d(0, 0, 0); } }\n.carousel-item-next,\n.active.carousel-item-right {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-next,\n    .active.carousel-item-right {\n      -webkit-transform: translate3d(100%, 0, 0);\n              transform: translate3d(100%, 0, 0); } }\n.carousel-item-prev,\n.active.carousel-item-left {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) {\n    .carousel-item-prev,\n    .active.carousel-item-left {\n      -webkit-transform: translate3d(-100%, 0, 0);\n              transform: translate3d(-100%, 0, 0); } }\n.carousel-control-prev,\n.carousel-control-next {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 15%;\n  color: #fff;\n  text-align: center;\n  opacity: 0.5; }\n.carousel-control-prev:hover, .carousel-control-prev:focus,\n  .carousel-control-next:hover,\n  .carousel-control-next:focus {\n    color: #fff;\n    text-decoration: none;\n    outline: 0;\n    opacity: .9; }\n.carousel-control-prev {\n  left: 0; }\n.carousel-control-next {\n  right: 0; }\n.carousel-control-prev-icon,\n.carousel-control-next-icon {\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  background: transparent no-repeat center center;\n  background-size: 100% 100%; }\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\"); }\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\"); }\n.carousel-indicators {\n  position: absolute;\n  right: 0;\n  bottom: 10px;\n  left: 0;\n  z-index: 15;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding-left: 0;\n  margin-right: 15%;\n  margin-left: 15%;\n  list-style: none; }\n.carousel-indicators li {\n    position: relative;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    width: 30px;\n    height: 3px;\n    margin-right: 3px;\n    margin-left: 3px;\n    text-indent: -999px;\n    background-color: rgba(255, 255, 255, 0.5); }\n.carousel-indicators li::before {\n      position: absolute;\n      top: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n.carousel-indicators li::after {\n      position: absolute;\n      bottom: -10px;\n      left: 0;\n      display: inline-block;\n      width: 100%;\n      height: 10px;\n      content: \"\"; }\n.carousel-indicators .active {\n    background-color: #fff; }\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center; }\n.align-baseline {\n  vertical-align: baseline !important; }\n.align-top {\n  vertical-align: top !important; }\n.align-middle {\n  vertical-align: middle !important; }\n.align-bottom {\n  vertical-align: bottom !important; }\n.align-text-bottom {\n  vertical-align: text-bottom !important; }\n.align-text-top {\n  vertical-align: text-top !important; }\n.bg-primary {\n  background-color: #007bff !important; }\na.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus {\n  background-color: #0062cc !important; }\n.bg-secondary {\n  background-color: #6c757d !important; }\na.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus {\n  background-color: #545b62 !important; }\n.bg-success {\n  background-color: #28a745 !important; }\na.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus {\n  background-color: #1e7e34 !important; }\n.bg-info {\n  background-color: #17a2b8 !important; }\na.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus {\n  background-color: #117a8b !important; }\n.bg-warning {\n  background-color: #ffc107 !important; }\na.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus {\n  background-color: #d39e00 !important; }\n.bg-danger {\n  background-color: #dc3545 !important; }\na.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus {\n  background-color: #bd2130 !important; }\n.bg-light {\n  background-color: #f8f9fa !important; }\na.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus {\n  background-color: #dae0e5 !important; }\n.bg-dark {\n  background-color: #343a40 !important; }\na.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus {\n  background-color: #1d2124 !important; }\n.bg-white {\n  background-color: #fff !important; }\n.bg-transparent {\n  background-color: transparent !important; }\n.border {\n  border: 1px solid #dee2e6 !important; }\n.border-top {\n  border-top: 1px solid #dee2e6 !important; }\n.border-right {\n  border-right: 1px solid #dee2e6 !important; }\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important; }\n.border-left {\n  border-left: 1px solid #dee2e6 !important; }\n.border-0 {\n  border: 0 !important; }\n.border-top-0 {\n  border-top: 0 !important; }\n.border-right-0 {\n  border-right: 0 !important; }\n.border-bottom-0 {\n  border-bottom: 0 !important; }\n.border-left-0 {\n  border-left: 0 !important; }\n.border-primary {\n  border-color: #007bff !important; }\n.border-secondary {\n  border-color: #6c757d !important; }\n.border-success {\n  border-color: #28a745 !important; }\n.border-info {\n  border-color: #17a2b8 !important; }\n.border-warning {\n  border-color: #ffc107 !important; }\n.border-danger {\n  border-color: #dc3545 !important; }\n.border-light {\n  border-color: #f8f9fa !important; }\n.border-dark {\n  border-color: #343a40 !important; }\n.border-white {\n  border-color: #fff !important; }\n.rounded {\n  border-radius: 0.25rem !important; }\n.rounded-top {\n  border-top-left-radius: 0.25rem !important;\n  border-top-right-radius: 0.25rem !important; }\n.rounded-right {\n  border-top-right-radius: 0.25rem !important;\n  border-bottom-right-radius: 0.25rem !important; }\n.rounded-bottom {\n  border-bottom-right-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n.rounded-left {\n  border-top-left-radius: 0.25rem !important;\n  border-bottom-left-radius: 0.25rem !important; }\n.rounded-circle {\n  border-radius: 50% !important; }\n.rounded-0 {\n  border-radius: 0 !important; }\n.clearfix::after {\n  display: block;\n  clear: both;\n  content: \"\"; }\n.d-none {\n  display: none !important; }\n.d-inline {\n  display: inline !important; }\n.d-inline-block {\n  display: inline-block !important; }\n.d-block {\n  display: block !important; }\n.d-table {\n  display: table !important; }\n.d-table-row {\n  display: table-row !important; }\n.d-table-cell {\n  display: table-cell !important; }\n.d-flex {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important; }\n.d-inline-flex {\n  display: -webkit-inline-box !important;\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important; }\n@media (min-width: 576px) {\n  .d-sm-none {\n    display: none !important; }\n  .d-sm-inline {\n    display: inline !important; }\n  .d-sm-inline-block {\n    display: inline-block !important; }\n  .d-sm-block {\n    display: block !important; }\n  .d-sm-table {\n    display: table !important; }\n  .d-sm-table-row {\n    display: table-row !important; }\n  .d-sm-table-cell {\n    display: table-cell !important; }\n  .d-sm-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-sm-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 768px) {\n  .d-md-none {\n    display: none !important; }\n  .d-md-inline {\n    display: inline !important; }\n  .d-md-inline-block {\n    display: inline-block !important; }\n  .d-md-block {\n    display: block !important; }\n  .d-md-table {\n    display: table !important; }\n  .d-md-table-row {\n    display: table-row !important; }\n  .d-md-table-cell {\n    display: table-cell !important; }\n  .d-md-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-md-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 992px) {\n  .d-lg-none {\n    display: none !important; }\n  .d-lg-inline {\n    display: inline !important; }\n  .d-lg-inline-block {\n    display: inline-block !important; }\n  .d-lg-block {\n    display: block !important; }\n  .d-lg-table {\n    display: table !important; }\n  .d-lg-table-row {\n    display: table-row !important; }\n  .d-lg-table-cell {\n    display: table-cell !important; }\n  .d-lg-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-lg-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media (min-width: 1200px) {\n  .d-xl-none {\n    display: none !important; }\n  .d-xl-inline {\n    display: inline !important; }\n  .d-xl-inline-block {\n    display: inline-block !important; }\n  .d-xl-block {\n    display: block !important; }\n  .d-xl-table {\n    display: table !important; }\n  .d-xl-table-row {\n    display: table-row !important; }\n  .d-xl-table-cell {\n    display: table-cell !important; }\n  .d-xl-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-xl-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n@media print {\n  .d-print-none {\n    display: none !important; }\n  .d-print-inline {\n    display: inline !important; }\n  .d-print-inline-block {\n    display: inline-block !important; }\n  .d-print-block {\n    display: block !important; }\n  .d-print-table {\n    display: table !important; }\n  .d-print-table-row {\n    display: table-row !important; }\n  .d-print-table-cell {\n    display: table-cell !important; }\n  .d-print-flex {\n    display: -webkit-box !important;\n    display: -ms-flexbox !important;\n    display: flex !important; }\n  .d-print-inline-flex {\n    display: -webkit-inline-box !important;\n    display: -ms-inline-flexbox !important;\n    display: inline-flex !important; } }\n.embed-responsive {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden; }\n.embed-responsive::before {\n    display: block;\n    content: \"\"; }\n.embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border: 0; }\n.embed-responsive-21by9::before {\n  padding-top: 42.85714286%; }\n.embed-responsive-16by9::before {\n  padding-top: 56.25%; }\n.embed-responsive-4by3::before {\n  padding-top: 75%; }\n.embed-responsive-1by1::before {\n  padding-top: 100%; }\n.flex-row {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important; }\n.flex-column {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important; }\n.flex-row-reverse {\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: row-reverse !important;\n          flex-direction: row-reverse !important; }\n.flex-column-reverse {\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: reverse !important;\n      -ms-flex-direction: column-reverse !important;\n          flex-direction: column-reverse !important; }\n.flex-wrap {\n  -ms-flex-wrap: wrap !important;\n      flex-wrap: wrap !important; }\n.flex-nowrap {\n  -ms-flex-wrap: nowrap !important;\n      flex-wrap: nowrap !important; }\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse !important;\n      flex-wrap: wrap-reverse !important; }\n.justify-content-start {\n  -webkit-box-pack: start !important;\n      -ms-flex-pack: start !important;\n          justify-content: flex-start !important; }\n.justify-content-end {\n  -webkit-box-pack: end !important;\n      -ms-flex-pack: end !important;\n          justify-content: flex-end !important; }\n.justify-content-center {\n  -webkit-box-pack: center !important;\n      -ms-flex-pack: center !important;\n          justify-content: center !important; }\n.justify-content-between {\n  -webkit-box-pack: justify !important;\n      -ms-flex-pack: justify !important;\n          justify-content: space-between !important; }\n.justify-content-around {\n  -ms-flex-pack: distribute !important;\n      justify-content: space-around !important; }\n.align-items-start {\n  -webkit-box-align: start !important;\n      -ms-flex-align: start !important;\n          align-items: flex-start !important; }\n.align-items-end {\n  -webkit-box-align: end !important;\n      -ms-flex-align: end !important;\n          align-items: flex-end !important; }\n.align-items-center {\n  -webkit-box-align: center !important;\n      -ms-flex-align: center !important;\n          align-items: center !important; }\n.align-items-baseline {\n  -webkit-box-align: baseline !important;\n      -ms-flex-align: baseline !important;\n          align-items: baseline !important; }\n.align-items-stretch {\n  -webkit-box-align: stretch !important;\n      -ms-flex-align: stretch !important;\n          align-items: stretch !important; }\n.align-content-start {\n  -ms-flex-line-pack: start !important;\n      align-content: flex-start !important; }\n.align-content-end {\n  -ms-flex-line-pack: end !important;\n      align-content: flex-end !important; }\n.align-content-center {\n  -ms-flex-line-pack: center !important;\n      align-content: center !important; }\n.align-content-between {\n  -ms-flex-line-pack: justify !important;\n      align-content: space-between !important; }\n.align-content-around {\n  -ms-flex-line-pack: distribute !important;\n      align-content: space-around !important; }\n.align-content-stretch {\n  -ms-flex-line-pack: stretch !important;\n      align-content: stretch !important; }\n.align-self-auto {\n  -ms-flex-item-align: auto !important;\n      -ms-grid-row-align: auto !important;\n      align-self: auto !important; }\n.align-self-start {\n  -ms-flex-item-align: start !important;\n      align-self: flex-start !important; }\n.align-self-end {\n  -ms-flex-item-align: end !important;\n      align-self: flex-end !important; }\n.align-self-center {\n  -ms-flex-item-align: center !important;\n      -ms-grid-row-align: center !important;\n      align-self: center !important; }\n.align-self-baseline {\n  -ms-flex-item-align: baseline !important;\n      align-self: baseline !important; }\n.align-self-stretch {\n  -ms-flex-item-align: stretch !important;\n      -ms-grid-row-align: stretch !important;\n      align-self: stretch !important; }\n@media (min-width: 576px) {\n  .flex-sm-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-sm-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-sm-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-sm-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-sm-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-sm-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-sm-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-sm-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-sm-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-sm-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-sm-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-sm-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-sm-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-sm-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-sm-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-sm-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-sm-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-sm-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-sm-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-sm-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-sm-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-sm-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-sm-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-sm-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-sm-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-sm-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-sm-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-sm-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-sm-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 768px) {\n  .flex-md-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-md-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-md-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-md-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-md-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-md-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-md-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-md-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-md-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-md-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-md-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-md-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-md-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-md-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-md-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-md-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-md-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-md-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-md-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-md-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-md-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-md-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-md-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-md-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-md-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-md-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-md-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-md-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-md-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 992px) {\n  .flex-lg-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-lg-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-lg-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-lg-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-lg-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-lg-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-lg-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-lg-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-lg-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-lg-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-lg-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-lg-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-lg-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-lg-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-lg-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-lg-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-lg-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-lg-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-lg-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-lg-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-lg-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-lg-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-lg-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-lg-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-lg-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-lg-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-lg-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-lg-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-lg-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n@media (min-width: 1200px) {\n  .flex-xl-row {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: row !important;\n            flex-direction: row !important; }\n  .flex-xl-column {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: normal !important;\n        -ms-flex-direction: column !important;\n            flex-direction: column !important; }\n  .flex-xl-row-reverse {\n    -webkit-box-orient: horizontal !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: row-reverse !important;\n            flex-direction: row-reverse !important; }\n  .flex-xl-column-reverse {\n    -webkit-box-orient: vertical !important;\n    -webkit-box-direction: reverse !important;\n        -ms-flex-direction: column-reverse !important;\n            flex-direction: column-reverse !important; }\n  .flex-xl-wrap {\n    -ms-flex-wrap: wrap !important;\n        flex-wrap: wrap !important; }\n  .flex-xl-nowrap {\n    -ms-flex-wrap: nowrap !important;\n        flex-wrap: nowrap !important; }\n  .flex-xl-wrap-reverse {\n    -ms-flex-wrap: wrap-reverse !important;\n        flex-wrap: wrap-reverse !important; }\n  .justify-content-xl-start {\n    -webkit-box-pack: start !important;\n        -ms-flex-pack: start !important;\n            justify-content: flex-start !important; }\n  .justify-content-xl-end {\n    -webkit-box-pack: end !important;\n        -ms-flex-pack: end !important;\n            justify-content: flex-end !important; }\n  .justify-content-xl-center {\n    -webkit-box-pack: center !important;\n        -ms-flex-pack: center !important;\n            justify-content: center !important; }\n  .justify-content-xl-between {\n    -webkit-box-pack: justify !important;\n        -ms-flex-pack: justify !important;\n            justify-content: space-between !important; }\n  .justify-content-xl-around {\n    -ms-flex-pack: distribute !important;\n        justify-content: space-around !important; }\n  .align-items-xl-start {\n    -webkit-box-align: start !important;\n        -ms-flex-align: start !important;\n            align-items: flex-start !important; }\n  .align-items-xl-end {\n    -webkit-box-align: end !important;\n        -ms-flex-align: end !important;\n            align-items: flex-end !important; }\n  .align-items-xl-center {\n    -webkit-box-align: center !important;\n        -ms-flex-align: center !important;\n            align-items: center !important; }\n  .align-items-xl-baseline {\n    -webkit-box-align: baseline !important;\n        -ms-flex-align: baseline !important;\n            align-items: baseline !important; }\n  .align-items-xl-stretch {\n    -webkit-box-align: stretch !important;\n        -ms-flex-align: stretch !important;\n            align-items: stretch !important; }\n  .align-content-xl-start {\n    -ms-flex-line-pack: start !important;\n        align-content: flex-start !important; }\n  .align-content-xl-end {\n    -ms-flex-line-pack: end !important;\n        align-content: flex-end !important; }\n  .align-content-xl-center {\n    -ms-flex-line-pack: center !important;\n        align-content: center !important; }\n  .align-content-xl-between {\n    -ms-flex-line-pack: justify !important;\n        align-content: space-between !important; }\n  .align-content-xl-around {\n    -ms-flex-line-pack: distribute !important;\n        align-content: space-around !important; }\n  .align-content-xl-stretch {\n    -ms-flex-line-pack: stretch !important;\n        align-content: stretch !important; }\n  .align-self-xl-auto {\n    -ms-flex-item-align: auto !important;\n        -ms-grid-row-align: auto !important;\n        align-self: auto !important; }\n  .align-self-xl-start {\n    -ms-flex-item-align: start !important;\n        align-self: flex-start !important; }\n  .align-self-xl-end {\n    -ms-flex-item-align: end !important;\n        align-self: flex-end !important; }\n  .align-self-xl-center {\n    -ms-flex-item-align: center !important;\n        -ms-grid-row-align: center !important;\n        align-self: center !important; }\n  .align-self-xl-baseline {\n    -ms-flex-item-align: baseline !important;\n        align-self: baseline !important; }\n  .align-self-xl-stretch {\n    -ms-flex-item-align: stretch !important;\n        -ms-grid-row-align: stretch !important;\n        align-self: stretch !important; } }\n.float-left {\n  float: left !important; }\n.float-right {\n  float: right !important; }\n.float-none {\n  float: none !important; }\n@media (min-width: 576px) {\n  .float-sm-left {\n    float: left !important; }\n  .float-sm-right {\n    float: right !important; }\n  .float-sm-none {\n    float: none !important; } }\n@media (min-width: 768px) {\n  .float-md-left {\n    float: left !important; }\n  .float-md-right {\n    float: right !important; }\n  .float-md-none {\n    float: none !important; } }\n@media (min-width: 992px) {\n  .float-lg-left {\n    float: left !important; }\n  .float-lg-right {\n    float: right !important; }\n  .float-lg-none {\n    float: none !important; } }\n@media (min-width: 1200px) {\n  .float-xl-left {\n    float: left !important; }\n  .float-xl-right {\n    float: right !important; }\n  .float-xl-none {\n    float: none !important; } }\n.position-static {\n  position: static !important; }\n.position-relative {\n  position: relative !important; }\n.position-absolute {\n  position: absolute !important; }\n.position-fixed {\n  position: fixed !important; }\n.position-sticky {\n  position: -webkit-sticky !important;\n  position: sticky !important; }\n.fixed-top {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n.fixed-bottom {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1030; }\n@supports ((position: -webkit-sticky) or (position: sticky)) {\n  .sticky-top {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 1020; } }\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  -webkit-clip-path: inset(50%);\n          clip-path: inset(50%);\n  border: 0; }\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n  -webkit-clip-path: none;\n          clip-path: none; }\n.w-25 {\n  width: 25% !important; }\n.w-50 {\n  width: 50% !important; }\n.w-75 {\n  width: 75% !important; }\n.w-100 {\n  width: 100% !important; }\n.h-25 {\n  height: 25% !important; }\n.h-50 {\n  height: 50% !important; }\n.h-75 {\n  height: 75% !important; }\n.h-100 {\n  height: 100% !important; }\n.mw-100 {\n  max-width: 100% !important; }\n.mh-100 {\n  max-height: 100% !important; }\n.m-0 {\n  margin: 0 !important; }\n.mt-0,\n.my-0 {\n  margin-top: 0 !important; }\n.mr-0,\n.mx-0 {\n  margin-right: 0 !important; }\n.mb-0,\n.my-0 {\n  margin-bottom: 0 !important; }\n.ml-0,\n.mx-0 {\n  margin-left: 0 !important; }\n.m-1 {\n  margin: 0.25rem !important; }\n.mt-1,\n.my-1 {\n  margin-top: 0.25rem !important; }\n.mr-1,\n.mx-1 {\n  margin-right: 0.25rem !important; }\n.mb-1,\n.my-1 {\n  margin-bottom: 0.25rem !important; }\n.ml-1,\n.mx-1 {\n  margin-left: 0.25rem !important; }\n.m-2 {\n  margin: 0.5rem !important; }\n.mt-2,\n.my-2 {\n  margin-top: 0.5rem !important; }\n.mr-2,\n.mx-2 {\n  margin-right: 0.5rem !important; }\n.mb-2,\n.my-2 {\n  margin-bottom: 0.5rem !important; }\n.ml-2,\n.mx-2 {\n  margin-left: 0.5rem !important; }\n.m-3 {\n  margin: 1rem !important; }\n.mt-3,\n.my-3 {\n  margin-top: 1rem !important; }\n.mr-3,\n.mx-3 {\n  margin-right: 1rem !important; }\n.mb-3,\n.my-3 {\n  margin-bottom: 1rem !important; }\n.ml-3,\n.mx-3 {\n  margin-left: 1rem !important; }\n.m-4 {\n  margin: 1.5rem !important; }\n.mt-4,\n.my-4 {\n  margin-top: 1.5rem !important; }\n.mr-4,\n.mx-4 {\n  margin-right: 1.5rem !important; }\n.mb-4,\n.my-4 {\n  margin-bottom: 1.5rem !important; }\n.ml-4,\n.mx-4 {\n  margin-left: 1.5rem !important; }\n.m-5 {\n  margin: 3rem !important; }\n.mt-5,\n.my-5 {\n  margin-top: 3rem !important; }\n.mr-5,\n.mx-5 {\n  margin-right: 3rem !important; }\n.mb-5,\n.my-5 {\n  margin-bottom: 3rem !important; }\n.ml-5,\n.mx-5 {\n  margin-left: 3rem !important; }\n.p-0 {\n  padding: 0 !important; }\n.pt-0,\n.py-0 {\n  padding-top: 0 !important; }\n.pr-0,\n.px-0 {\n  padding-right: 0 !important; }\n.pb-0,\n.py-0 {\n  padding-bottom: 0 !important; }\n.pl-0,\n.px-0 {\n  padding-left: 0 !important; }\n.p-1 {\n  padding: 0.25rem !important; }\n.pt-1,\n.py-1 {\n  padding-top: 0.25rem !important; }\n.pr-1,\n.px-1 {\n  padding-right: 0.25rem !important; }\n.pb-1,\n.py-1 {\n  padding-bottom: 0.25rem !important; }\n.pl-1,\n.px-1 {\n  padding-left: 0.25rem !important; }\n.p-2 {\n  padding: 0.5rem !important; }\n.pt-2,\n.py-2 {\n  padding-top: 0.5rem !important; }\n.pr-2,\n.px-2 {\n  padding-right: 0.5rem !important; }\n.pb-2,\n.py-2 {\n  padding-bottom: 0.5rem !important; }\n.pl-2,\n.px-2 {\n  padding-left: 0.5rem !important; }\n.p-3 {\n  padding: 1rem !important; }\n.pt-3,\n.py-3 {\n  padding-top: 1rem !important; }\n.pr-3,\n.px-3 {\n  padding-right: 1rem !important; }\n.pb-3,\n.py-3 {\n  padding-bottom: 1rem !important; }\n.pl-3,\n.px-3 {\n  padding-left: 1rem !important; }\n.p-4 {\n  padding: 1.5rem !important; }\n.pt-4,\n.py-4 {\n  padding-top: 1.5rem !important; }\n.pr-4,\n.px-4 {\n  padding-right: 1.5rem !important; }\n.pb-4,\n.py-4 {\n  padding-bottom: 1.5rem !important; }\n.pl-4,\n.px-4 {\n  padding-left: 1.5rem !important; }\n.p-5 {\n  padding: 3rem !important; }\n.pt-5,\n.py-5 {\n  padding-top: 3rem !important; }\n.pr-5,\n.px-5 {\n  padding-right: 3rem !important; }\n.pb-5,\n.py-5 {\n  padding-bottom: 3rem !important; }\n.pl-5,\n.px-5 {\n  padding-left: 3rem !important; }\n.m-auto {\n  margin: auto !important; }\n.mt-auto,\n.my-auto {\n  margin-top: auto !important; }\n.mr-auto,\n.mx-auto {\n  margin-right: auto !important; }\n.mb-auto,\n.my-auto {\n  margin-bottom: auto !important; }\n.ml-auto,\n.mx-auto {\n  margin-left: auto !important; }\n@media (min-width: 576px) {\n  .m-sm-0 {\n    margin: 0 !important; }\n  .mt-sm-0,\n  .my-sm-0 {\n    margin-top: 0 !important; }\n  .mr-sm-0,\n  .mx-sm-0 {\n    margin-right: 0 !important; }\n  .mb-sm-0,\n  .my-sm-0 {\n    margin-bottom: 0 !important; }\n  .ml-sm-0,\n  .mx-sm-0 {\n    margin-left: 0 !important; }\n  .m-sm-1 {\n    margin: 0.25rem !important; }\n  .mt-sm-1,\n  .my-sm-1 {\n    margin-top: 0.25rem !important; }\n  .mr-sm-1,\n  .mx-sm-1 {\n    margin-right: 0.25rem !important; }\n  .mb-sm-1,\n  .my-sm-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-sm-1,\n  .mx-sm-1 {\n    margin-left: 0.25rem !important; }\n  .m-sm-2 {\n    margin: 0.5rem !important; }\n  .mt-sm-2,\n  .my-sm-2 {\n    margin-top: 0.5rem !important; }\n  .mr-sm-2,\n  .mx-sm-2 {\n    margin-right: 0.5rem !important; }\n  .mb-sm-2,\n  .my-sm-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-sm-2,\n  .mx-sm-2 {\n    margin-left: 0.5rem !important; }\n  .m-sm-3 {\n    margin: 1rem !important; }\n  .mt-sm-3,\n  .my-sm-3 {\n    margin-top: 1rem !important; }\n  .mr-sm-3,\n  .mx-sm-3 {\n    margin-right: 1rem !important; }\n  .mb-sm-3,\n  .my-sm-3 {\n    margin-bottom: 1rem !important; }\n  .ml-sm-3,\n  .mx-sm-3 {\n    margin-left: 1rem !important; }\n  .m-sm-4 {\n    margin: 1.5rem !important; }\n  .mt-sm-4,\n  .my-sm-4 {\n    margin-top: 1.5rem !important; }\n  .mr-sm-4,\n  .mx-sm-4 {\n    margin-right: 1.5rem !important; }\n  .mb-sm-4,\n  .my-sm-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-sm-4,\n  .mx-sm-4 {\n    margin-left: 1.5rem !important; }\n  .m-sm-5 {\n    margin: 3rem !important; }\n  .mt-sm-5,\n  .my-sm-5 {\n    margin-top: 3rem !important; }\n  .mr-sm-5,\n  .mx-sm-5 {\n    margin-right: 3rem !important; }\n  .mb-sm-5,\n  .my-sm-5 {\n    margin-bottom: 3rem !important; }\n  .ml-sm-5,\n  .mx-sm-5 {\n    margin-left: 3rem !important; }\n  .p-sm-0 {\n    padding: 0 !important; }\n  .pt-sm-0,\n  .py-sm-0 {\n    padding-top: 0 !important; }\n  .pr-sm-0,\n  .px-sm-0 {\n    padding-right: 0 !important; }\n  .pb-sm-0,\n  .py-sm-0 {\n    padding-bottom: 0 !important; }\n  .pl-sm-0,\n  .px-sm-0 {\n    padding-left: 0 !important; }\n  .p-sm-1 {\n    padding: 0.25rem !important; }\n  .pt-sm-1,\n  .py-sm-1 {\n    padding-top: 0.25rem !important; }\n  .pr-sm-1,\n  .px-sm-1 {\n    padding-right: 0.25rem !important; }\n  .pb-sm-1,\n  .py-sm-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-sm-1,\n  .px-sm-1 {\n    padding-left: 0.25rem !important; }\n  .p-sm-2 {\n    padding: 0.5rem !important; }\n  .pt-sm-2,\n  .py-sm-2 {\n    padding-top: 0.5rem !important; }\n  .pr-sm-2,\n  .px-sm-2 {\n    padding-right: 0.5rem !important; }\n  .pb-sm-2,\n  .py-sm-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-sm-2,\n  .px-sm-2 {\n    padding-left: 0.5rem !important; }\n  .p-sm-3 {\n    padding: 1rem !important; }\n  .pt-sm-3,\n  .py-sm-3 {\n    padding-top: 1rem !important; }\n  .pr-sm-3,\n  .px-sm-3 {\n    padding-right: 1rem !important; }\n  .pb-sm-3,\n  .py-sm-3 {\n    padding-bottom: 1rem !important; }\n  .pl-sm-3,\n  .px-sm-3 {\n    padding-left: 1rem !important; }\n  .p-sm-4 {\n    padding: 1.5rem !important; }\n  .pt-sm-4,\n  .py-sm-4 {\n    padding-top: 1.5rem !important; }\n  .pr-sm-4,\n  .px-sm-4 {\n    padding-right: 1.5rem !important; }\n  .pb-sm-4,\n  .py-sm-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-sm-4,\n  .px-sm-4 {\n    padding-left: 1.5rem !important; }\n  .p-sm-5 {\n    padding: 3rem !important; }\n  .pt-sm-5,\n  .py-sm-5 {\n    padding-top: 3rem !important; }\n  .pr-sm-5,\n  .px-sm-5 {\n    padding-right: 3rem !important; }\n  .pb-sm-5,\n  .py-sm-5 {\n    padding-bottom: 3rem !important; }\n  .pl-sm-5,\n  .px-sm-5 {\n    padding-left: 3rem !important; }\n  .m-sm-auto {\n    margin: auto !important; }\n  .mt-sm-auto,\n  .my-sm-auto {\n    margin-top: auto !important; }\n  .mr-sm-auto,\n  .mx-sm-auto {\n    margin-right: auto !important; }\n  .mb-sm-auto,\n  .my-sm-auto {\n    margin-bottom: auto !important; }\n  .ml-sm-auto,\n  .mx-sm-auto {\n    margin-left: auto !important; } }\n@media (min-width: 768px) {\n  .m-md-0 {\n    margin: 0 !important; }\n  .mt-md-0,\n  .my-md-0 {\n    margin-top: 0 !important; }\n  .mr-md-0,\n  .mx-md-0 {\n    margin-right: 0 !important; }\n  .mb-md-0,\n  .my-md-0 {\n    margin-bottom: 0 !important; }\n  .ml-md-0,\n  .mx-md-0 {\n    margin-left: 0 !important; }\n  .m-md-1 {\n    margin: 0.25rem !important; }\n  .mt-md-1,\n  .my-md-1 {\n    margin-top: 0.25rem !important; }\n  .mr-md-1,\n  .mx-md-1 {\n    margin-right: 0.25rem !important; }\n  .mb-md-1,\n  .my-md-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-md-1,\n  .mx-md-1 {\n    margin-left: 0.25rem !important; }\n  .m-md-2 {\n    margin: 0.5rem !important; }\n  .mt-md-2,\n  .my-md-2 {\n    margin-top: 0.5rem !important; }\n  .mr-md-2,\n  .mx-md-2 {\n    margin-right: 0.5rem !important; }\n  .mb-md-2,\n  .my-md-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-md-2,\n  .mx-md-2 {\n    margin-left: 0.5rem !important; }\n  .m-md-3 {\n    margin: 1rem !important; }\n  .mt-md-3,\n  .my-md-3 {\n    margin-top: 1rem !important; }\n  .mr-md-3,\n  .mx-md-3 {\n    margin-right: 1rem !important; }\n  .mb-md-3,\n  .my-md-3 {\n    margin-bottom: 1rem !important; }\n  .ml-md-3,\n  .mx-md-3 {\n    margin-left: 1rem !important; }\n  .m-md-4 {\n    margin: 1.5rem !important; }\n  .mt-md-4,\n  .my-md-4 {\n    margin-top: 1.5rem !important; }\n  .mr-md-4,\n  .mx-md-4 {\n    margin-right: 1.5rem !important; }\n  .mb-md-4,\n  .my-md-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-md-4,\n  .mx-md-4 {\n    margin-left: 1.5rem !important; }\n  .m-md-5 {\n    margin: 3rem !important; }\n  .mt-md-5,\n  .my-md-5 {\n    margin-top: 3rem !important; }\n  .mr-md-5,\n  .mx-md-5 {\n    margin-right: 3rem !important; }\n  .mb-md-5,\n  .my-md-5 {\n    margin-bottom: 3rem !important; }\n  .ml-md-5,\n  .mx-md-5 {\n    margin-left: 3rem !important; }\n  .p-md-0 {\n    padding: 0 !important; }\n  .pt-md-0,\n  .py-md-0 {\n    padding-top: 0 !important; }\n  .pr-md-0,\n  .px-md-0 {\n    padding-right: 0 !important; }\n  .pb-md-0,\n  .py-md-0 {\n    padding-bottom: 0 !important; }\n  .pl-md-0,\n  .px-md-0 {\n    padding-left: 0 !important; }\n  .p-md-1 {\n    padding: 0.25rem !important; }\n  .pt-md-1,\n  .py-md-1 {\n    padding-top: 0.25rem !important; }\n  .pr-md-1,\n  .px-md-1 {\n    padding-right: 0.25rem !important; }\n  .pb-md-1,\n  .py-md-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-md-1,\n  .px-md-1 {\n    padding-left: 0.25rem !important; }\n  .p-md-2 {\n    padding: 0.5rem !important; }\n  .pt-md-2,\n  .py-md-2 {\n    padding-top: 0.5rem !important; }\n  .pr-md-2,\n  .px-md-2 {\n    padding-right: 0.5rem !important; }\n  .pb-md-2,\n  .py-md-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-md-2,\n  .px-md-2 {\n    padding-left: 0.5rem !important; }\n  .p-md-3 {\n    padding: 1rem !important; }\n  .pt-md-3,\n  .py-md-3 {\n    padding-top: 1rem !important; }\n  .pr-md-3,\n  .px-md-3 {\n    padding-right: 1rem !important; }\n  .pb-md-3,\n  .py-md-3 {\n    padding-bottom: 1rem !important; }\n  .pl-md-3,\n  .px-md-3 {\n    padding-left: 1rem !important; }\n  .p-md-4 {\n    padding: 1.5rem !important; }\n  .pt-md-4,\n  .py-md-4 {\n    padding-top: 1.5rem !important; }\n  .pr-md-4,\n  .px-md-4 {\n    padding-right: 1.5rem !important; }\n  .pb-md-4,\n  .py-md-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-md-4,\n  .px-md-4 {\n    padding-left: 1.5rem !important; }\n  .p-md-5 {\n    padding: 3rem !important; }\n  .pt-md-5,\n  .py-md-5 {\n    padding-top: 3rem !important; }\n  .pr-md-5,\n  .px-md-5 {\n    padding-right: 3rem !important; }\n  .pb-md-5,\n  .py-md-5 {\n    padding-bottom: 3rem !important; }\n  .pl-md-5,\n  .px-md-5 {\n    padding-left: 3rem !important; }\n  .m-md-auto {\n    margin: auto !important; }\n  .mt-md-auto,\n  .my-md-auto {\n    margin-top: auto !important; }\n  .mr-md-auto,\n  .mx-md-auto {\n    margin-right: auto !important; }\n  .mb-md-auto,\n  .my-md-auto {\n    margin-bottom: auto !important; }\n  .ml-md-auto,\n  .mx-md-auto {\n    margin-left: auto !important; } }\n@media (min-width: 992px) {\n  .m-lg-0 {\n    margin: 0 !important; }\n  .mt-lg-0,\n  .my-lg-0 {\n    margin-top: 0 !important; }\n  .mr-lg-0,\n  .mx-lg-0 {\n    margin-right: 0 !important; }\n  .mb-lg-0,\n  .my-lg-0 {\n    margin-bottom: 0 !important; }\n  .ml-lg-0,\n  .mx-lg-0 {\n    margin-left: 0 !important; }\n  .m-lg-1 {\n    margin: 0.25rem !important; }\n  .mt-lg-1,\n  .my-lg-1 {\n    margin-top: 0.25rem !important; }\n  .mr-lg-1,\n  .mx-lg-1 {\n    margin-right: 0.25rem !important; }\n  .mb-lg-1,\n  .my-lg-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-lg-1,\n  .mx-lg-1 {\n    margin-left: 0.25rem !important; }\n  .m-lg-2 {\n    margin: 0.5rem !important; }\n  .mt-lg-2,\n  .my-lg-2 {\n    margin-top: 0.5rem !important; }\n  .mr-lg-2,\n  .mx-lg-2 {\n    margin-right: 0.5rem !important; }\n  .mb-lg-2,\n  .my-lg-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-lg-2,\n  .mx-lg-2 {\n    margin-left: 0.5rem !important; }\n  .m-lg-3 {\n    margin: 1rem !important; }\n  .mt-lg-3,\n  .my-lg-3 {\n    margin-top: 1rem !important; }\n  .mr-lg-3,\n  .mx-lg-3 {\n    margin-right: 1rem !important; }\n  .mb-lg-3,\n  .my-lg-3 {\n    margin-bottom: 1rem !important; }\n  .ml-lg-3,\n  .mx-lg-3 {\n    margin-left: 1rem !important; }\n  .m-lg-4 {\n    margin: 1.5rem !important; }\n  .mt-lg-4,\n  .my-lg-4 {\n    margin-top: 1.5rem !important; }\n  .mr-lg-4,\n  .mx-lg-4 {\n    margin-right: 1.5rem !important; }\n  .mb-lg-4,\n  .my-lg-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-lg-4,\n  .mx-lg-4 {\n    margin-left: 1.5rem !important; }\n  .m-lg-5 {\n    margin: 3rem !important; }\n  .mt-lg-5,\n  .my-lg-5 {\n    margin-top: 3rem !important; }\n  .mr-lg-5,\n  .mx-lg-5 {\n    margin-right: 3rem !important; }\n  .mb-lg-5,\n  .my-lg-5 {\n    margin-bottom: 3rem !important; }\n  .ml-lg-5,\n  .mx-lg-5 {\n    margin-left: 3rem !important; }\n  .p-lg-0 {\n    padding: 0 !important; }\n  .pt-lg-0,\n  .py-lg-0 {\n    padding-top: 0 !important; }\n  .pr-lg-0,\n  .px-lg-0 {\n    padding-right: 0 !important; }\n  .pb-lg-0,\n  .py-lg-0 {\n    padding-bottom: 0 !important; }\n  .pl-lg-0,\n  .px-lg-0 {\n    padding-left: 0 !important; }\n  .p-lg-1 {\n    padding: 0.25rem !important; }\n  .pt-lg-1,\n  .py-lg-1 {\n    padding-top: 0.25rem !important; }\n  .pr-lg-1,\n  .px-lg-1 {\n    padding-right: 0.25rem !important; }\n  .pb-lg-1,\n  .py-lg-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-lg-1,\n  .px-lg-1 {\n    padding-left: 0.25rem !important; }\n  .p-lg-2 {\n    padding: 0.5rem !important; }\n  .pt-lg-2,\n  .py-lg-2 {\n    padding-top: 0.5rem !important; }\n  .pr-lg-2,\n  .px-lg-2 {\n    padding-right: 0.5rem !important; }\n  .pb-lg-2,\n  .py-lg-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-lg-2,\n  .px-lg-2 {\n    padding-left: 0.5rem !important; }\n  .p-lg-3 {\n    padding: 1rem !important; }\n  .pt-lg-3,\n  .py-lg-3 {\n    padding-top: 1rem !important; }\n  .pr-lg-3,\n  .px-lg-3 {\n    padding-right: 1rem !important; }\n  .pb-lg-3,\n  .py-lg-3 {\n    padding-bottom: 1rem !important; }\n  .pl-lg-3,\n  .px-lg-3 {\n    padding-left: 1rem !important; }\n  .p-lg-4 {\n    padding: 1.5rem !important; }\n  .pt-lg-4,\n  .py-lg-4 {\n    padding-top: 1.5rem !important; }\n  .pr-lg-4,\n  .px-lg-4 {\n    padding-right: 1.5rem !important; }\n  .pb-lg-4,\n  .py-lg-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-lg-4,\n  .px-lg-4 {\n    padding-left: 1.5rem !important; }\n  .p-lg-5 {\n    padding: 3rem !important; }\n  .pt-lg-5,\n  .py-lg-5 {\n    padding-top: 3rem !important; }\n  .pr-lg-5,\n  .px-lg-5 {\n    padding-right: 3rem !important; }\n  .pb-lg-5,\n  .py-lg-5 {\n    padding-bottom: 3rem !important; }\n  .pl-lg-5,\n  .px-lg-5 {\n    padding-left: 3rem !important; }\n  .m-lg-auto {\n    margin: auto !important; }\n  .mt-lg-auto,\n  .my-lg-auto {\n    margin-top: auto !important; }\n  .mr-lg-auto,\n  .mx-lg-auto {\n    margin-right: auto !important; }\n  .mb-lg-auto,\n  .my-lg-auto {\n    margin-bottom: auto !important; }\n  .ml-lg-auto,\n  .mx-lg-auto {\n    margin-left: auto !important; } }\n@media (min-width: 1200px) {\n  .m-xl-0 {\n    margin: 0 !important; }\n  .mt-xl-0,\n  .my-xl-0 {\n    margin-top: 0 !important; }\n  .mr-xl-0,\n  .mx-xl-0 {\n    margin-right: 0 !important; }\n  .mb-xl-0,\n  .my-xl-0 {\n    margin-bottom: 0 !important; }\n  .ml-xl-0,\n  .mx-xl-0 {\n    margin-left: 0 !important; }\n  .m-xl-1 {\n    margin: 0.25rem !important; }\n  .mt-xl-1,\n  .my-xl-1 {\n    margin-top: 0.25rem !important; }\n  .mr-xl-1,\n  .mx-xl-1 {\n    margin-right: 0.25rem !important; }\n  .mb-xl-1,\n  .my-xl-1 {\n    margin-bottom: 0.25rem !important; }\n  .ml-xl-1,\n  .mx-xl-1 {\n    margin-left: 0.25rem !important; }\n  .m-xl-2 {\n    margin: 0.5rem !important; }\n  .mt-xl-2,\n  .my-xl-2 {\n    margin-top: 0.5rem !important; }\n  .mr-xl-2,\n  .mx-xl-2 {\n    margin-right: 0.5rem !important; }\n  .mb-xl-2,\n  .my-xl-2 {\n    margin-bottom: 0.5rem !important; }\n  .ml-xl-2,\n  .mx-xl-2 {\n    margin-left: 0.5rem !important; }\n  .m-xl-3 {\n    margin: 1rem !important; }\n  .mt-xl-3,\n  .my-xl-3 {\n    margin-top: 1rem !important; }\n  .mr-xl-3,\n  .mx-xl-3 {\n    margin-right: 1rem !important; }\n  .mb-xl-3,\n  .my-xl-3 {\n    margin-bottom: 1rem !important; }\n  .ml-xl-3,\n  .mx-xl-3 {\n    margin-left: 1rem !important; }\n  .m-xl-4 {\n    margin: 1.5rem !important; }\n  .mt-xl-4,\n  .my-xl-4 {\n    margin-top: 1.5rem !important; }\n  .mr-xl-4,\n  .mx-xl-4 {\n    margin-right: 1.5rem !important; }\n  .mb-xl-4,\n  .my-xl-4 {\n    margin-bottom: 1.5rem !important; }\n  .ml-xl-4,\n  .mx-xl-4 {\n    margin-left: 1.5rem !important; }\n  .m-xl-5 {\n    margin: 3rem !important; }\n  .mt-xl-5,\n  .my-xl-5 {\n    margin-top: 3rem !important; }\n  .mr-xl-5,\n  .mx-xl-5 {\n    margin-right: 3rem !important; }\n  .mb-xl-5,\n  .my-xl-5 {\n    margin-bottom: 3rem !important; }\n  .ml-xl-5,\n  .mx-xl-5 {\n    margin-left: 3rem !important; }\n  .p-xl-0 {\n    padding: 0 !important; }\n  .pt-xl-0,\n  .py-xl-0 {\n    padding-top: 0 !important; }\n  .pr-xl-0,\n  .px-xl-0 {\n    padding-right: 0 !important; }\n  .pb-xl-0,\n  .py-xl-0 {\n    padding-bottom: 0 !important; }\n  .pl-xl-0,\n  .px-xl-0 {\n    padding-left: 0 !important; }\n  .p-xl-1 {\n    padding: 0.25rem !important; }\n  .pt-xl-1,\n  .py-xl-1 {\n    padding-top: 0.25rem !important; }\n  .pr-xl-1,\n  .px-xl-1 {\n    padding-right: 0.25rem !important; }\n  .pb-xl-1,\n  .py-xl-1 {\n    padding-bottom: 0.25rem !important; }\n  .pl-xl-1,\n  .px-xl-1 {\n    padding-left: 0.25rem !important; }\n  .p-xl-2 {\n    padding: 0.5rem !important; }\n  .pt-xl-2,\n  .py-xl-2 {\n    padding-top: 0.5rem !important; }\n  .pr-xl-2,\n  .px-xl-2 {\n    padding-right: 0.5rem !important; }\n  .pb-xl-2,\n  .py-xl-2 {\n    padding-bottom: 0.5rem !important; }\n  .pl-xl-2,\n  .px-xl-2 {\n    padding-left: 0.5rem !important; }\n  .p-xl-3 {\n    padding: 1rem !important; }\n  .pt-xl-3,\n  .py-xl-3 {\n    padding-top: 1rem !important; }\n  .pr-xl-3,\n  .px-xl-3 {\n    padding-right: 1rem !important; }\n  .pb-xl-3,\n  .py-xl-3 {\n    padding-bottom: 1rem !important; }\n  .pl-xl-3,\n  .px-xl-3 {\n    padding-left: 1rem !important; }\n  .p-xl-4 {\n    padding: 1.5rem !important; }\n  .pt-xl-4,\n  .py-xl-4 {\n    padding-top: 1.5rem !important; }\n  .pr-xl-4,\n  .px-xl-4 {\n    padding-right: 1.5rem !important; }\n  .pb-xl-4,\n  .py-xl-4 {\n    padding-bottom: 1.5rem !important; }\n  .pl-xl-4,\n  .px-xl-4 {\n    padding-left: 1.5rem !important; }\n  .p-xl-5 {\n    padding: 3rem !important; }\n  .pt-xl-5,\n  .py-xl-5 {\n    padding-top: 3rem !important; }\n  .pr-xl-5,\n  .px-xl-5 {\n    padding-right: 3rem !important; }\n  .pb-xl-5,\n  .py-xl-5 {\n    padding-bottom: 3rem !important; }\n  .pl-xl-5,\n  .px-xl-5 {\n    padding-left: 3rem !important; }\n  .m-xl-auto {\n    margin: auto !important; }\n  .mt-xl-auto,\n  .my-xl-auto {\n    margin-top: auto !important; }\n  .mr-xl-auto,\n  .mx-xl-auto {\n    margin-right: auto !important; }\n  .mb-xl-auto,\n  .my-xl-auto {\n    margin-bottom: auto !important; }\n  .ml-xl-auto,\n  .mx-xl-auto {\n    margin-left: auto !important; } }\n.text-justify {\n  text-align: justify !important; }\n.text-nowrap {\n  white-space: nowrap !important; }\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n.text-left {\n  text-align: left !important; }\n.text-right {\n  text-align: right !important; }\n.text-center {\n  text-align: center !important; }\n@media (min-width: 576px) {\n  .text-sm-left {\n    text-align: left !important; }\n  .text-sm-right {\n    text-align: right !important; }\n  .text-sm-center {\n    text-align: center !important; } }\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important; }\n  .text-md-right {\n    text-align: right !important; }\n  .text-md-center {\n    text-align: center !important; } }\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important; }\n  .text-lg-right {\n    text-align: right !important; }\n  .text-lg-center {\n    text-align: center !important; } }\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important; }\n  .text-xl-right {\n    text-align: right !important; }\n  .text-xl-center {\n    text-align: center !important; } }\n.text-lowercase {\n  text-transform: lowercase !important; }\n.text-uppercase {\n  text-transform: uppercase !important; }\n.text-capitalize {\n  text-transform: capitalize !important; }\n.font-weight-light {\n  font-weight: 300 !important; }\n.font-weight-normal {\n  font-weight: 400 !important; }\n.font-weight-bold {\n  font-weight: 700 !important; }\n.font-italic {\n  font-style: italic !important; }\n.text-white {\n  color: #fff !important; }\n.text-primary {\n  color: #007bff !important; }\na.text-primary:hover, a.text-primary:focus {\n  color: #0062cc !important; }\n.text-secondary {\n  color: #6c757d !important; }\na.text-secondary:hover, a.text-secondary:focus {\n  color: #545b62 !important; }\n.text-success {\n  color: #28a745 !important; }\na.text-success:hover, a.text-success:focus {\n  color: #1e7e34 !important; }\n.text-info {\n  color: #17a2b8 !important; }\na.text-info:hover, a.text-info:focus {\n  color: #117a8b !important; }\n.text-warning {\n  color: #ffc107 !important; }\na.text-warning:hover, a.text-warning:focus {\n  color: #d39e00 !important; }\n.text-danger {\n  color: #dc3545 !important; }\na.text-danger:hover, a.text-danger:focus {\n  color: #bd2130 !important; }\n.text-light {\n  color: #f8f9fa !important; }\na.text-light:hover, a.text-light:focus {\n  color: #dae0e5 !important; }\n.text-dark {\n  color: #343a40 !important; }\na.text-dark:hover, a.text-dark:focus {\n  color: #1d2124 !important; }\n.text-muted {\n  color: #6c757d !important; }\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n.visible {\n  visibility: visible !important; }\n.invisible {\n  visibility: hidden !important; }\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; }\n  a:not(.btn) {\n    text-decoration: underline; }\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\"; }\n  pre {\n    white-space: pre-wrap !important; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  @page {\n    size: a3; }\n  body {\n    min-width: 992px !important; }\n  .container {\n    min-width: 992px !important; }\n  .navbar {\n    display: none; }\n  .badge {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n.card {\n  border-radius: 10px; }\n.jumbotron {\n  background-color: #fff;\n  border-radius: 5px 5px 0px 0px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 200px;\n  background-position: center; }\n.jumbotron h2 {\n    color: white;\n    font-weight: 900;\n    text-shadow: 2px 2px 10px #000; }\n.card-text {\n  white-space: pre-line; }\n.card-downloads {\n  margin-top: 20px; }\n.links {\n  margin-top: 20px; }\n"

/***/ }),

/***/ "./src/app/assets/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(route, contentService) {
        var _this = this;
        this.route = route;
        this.contentService = contentService;
        this.sub = this.route.params.subscribe(function (params) {
            _this.name = params['id'];
            _this.item = _this.contentService.getAssetByName(_this.name);
        });
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("./src/app/assets/details/details.component.html"),
            styles: [__webpack_require__("./src/app/assets/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"work-in-progress\">\r\n\r\n\r\n  <p>We invite you to explore JobTech and give us your valuable feedback. <a\r\n    href=\"mailto:jobtechdev@arbetsformedlingen.se\">Email us</a></p>\r\n</div>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row our-vision\">\r\n    <div class=\"col-md-6 image-cell\">\r\n      <img src=\"assets/images/vision-startpage.jpg\" alt=\"Vision\" class=\"img-fluid\">\r\n    </div>\r\n    <div class=\"col-md-6 pr-0\">\r\n      <h2 class=\"section-header\">Our vision</h2>\r\n      <p>\r\n        <b>It´s quite simple.</b>\r\n      </p>\r\n      <p> a person goes to a job they dislike or have no job to go to at all, is a loss. Not only for the\r\n        individual,\r\n        but also for the employer who has the potential to grow if they find the right person. This Sweden can not\r\n        afford.&nbsp;</p>\r\n      <p>We believe in using technology to let people connect in new ways. It will help people find their dream job and\r\n        it will\r\n        make employers find top candidates easier. By this our collective talents are better used and Sweden becomes a\r\n        better\r\n        place to live.</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"row principles\">\r\n    <div class=\"col-md-6\">\r\n      <h2 class=\"section-header\">Guiding principles</h2>\r\n      <p>No matter what we do, these principles will guide us:</p>\r\n      <p>\r\n      <li>\r\n        <b>Collaborate</b>\r\n        <br/>Work with others, they know&nbsp;something you do not know.\r\n      </li>\r\n      <li>\r\n        <b>Diversity by design</b>\r\n        <br/>Everyone is unique; one-size solution does not fit all.&nbsp;\r\n      </li>\r\n      <li>\r\n        <b>Keep it simple</b>\r\n        <br/>If people understand, they can contribute!\r\n      </li>\r\n      </p>\r\n    </div>\r\n    <div class=\"col-md-6 image-cell\">\r\n      <img src=\"assets/images/compass-startpage.jpg\" alt=\"Vision\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@font-face {\n  font-style: normal;\n  font-weight: 300;\n  font-family: 'Open Sans', sans-serif; }\n.jumbotron {\n  margin-top: -85px;\n  margin-bottom: 0px;\n  height: 200px;\n  border-radius: 0;\n  background-image: url('startpage-header-bg.56d948168361242bfc46.jpg'); }\n.work-in-progress {\n  background-color: #0967b2;\n  text-align: center;\n  padding: 15px 20px;\n  border-radius: 0px; }\n.work-in-progress p {\n    font-size: 18px;\n    color: #FFF;\n    margin: 0; }\n@media screen and (max-width: 992px) {\n      .work-in-progress p {\n        font-size: 14px; } }\n.work-in-progress p a {\n      color: #FFF !important;\n      font-weight: bold; }\n.container-fluid {\n  max-width: 1200px; }\n.our-vision {\n  background-color: #e8e1e6; }\n.principles {\n  background-color: #DCE6E0; }\n.section-header {\n  color: #323232;\n  padding-top: 30px; }\n.subtitle {\n  font-size: larger; }\n.image-cell {\n  margin: 0px;\n  padding: 0px; }\n.img-fluid {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/imgmodal/imgmodal.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Jobtech Forum</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <img src=\"assets/images/pdf-inbjudan.jpg\" width=\"100%\">\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n   <p> Intresset för Jobtech Forum är stort! Vi måste tyvärr stänga anmälan i förtid eftersom antalet platser nu är fyllda.\r\n\r\n\r\n  </div>\r\n</ng-template>\r\n\r\n<img src=\"assets/images/pdf-inbjudan.jpg\" width=\"100%\" (click)=\"open(content)\">\r\n\r\n<hr>\r\n\r\n<pre>{{closeResult}}</pre>\r\n"

/***/ }),

/***/ "./src/app/imgmodal/imgmodal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgmodalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImgmodalComponent = /** @class */ (function () {
    function ImgmodalComponent(modalService) {
        this.modalService = modalService;
    }
    ImgmodalComponent.prototype.open = function (content) {
        this.modalService.open(content, { size: 'lg' });
    };
    ImgmodalComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ImgmodalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-imgmodal',
            template: __webpack_require__("./src/app/imgmodal/imgmodal.component.html"),
            styles: ["\n    .dark-modal .modal-content {\n      width:200px;\n      background-color: #292b2c;\n      color: white;\n    }\n    .dark-modal .close {\n      color: white;\n    }\n    .light-blue-backdrop {\n      background-color: #5cb3fd;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]])
    ], ImgmodalComponent);
    return ImgmodalComponent;
}());



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"p-3 bg-dark text-light\">\r\n    <span class=\"mr-2\">Follow us:</span>\r\n    <a href=\"https://twitter.com/jobtechdev\" target=\"_blank\">\r\n      <img src=\"assets/images/social/Twitter_White.png\" alt=\"Twitter\" class=\"social-media\" />\r\n    </a>\r\n    <a href=\"https://github.com/jobtechdev\" target=\"_blank\">\r\n      <img src=\"assets/images/social/GitHub_White.png\" alt=\"Github\" class=\"social-media\" />\r\n    </a>\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@font-face {\n  font-style: normal;\n  font-weight: 300;\n  font-family: 'Open Sans', sans-serif; }\nimg.social-media {\n  max-height: 30px;\n  max-width: 30px;\n  margin-right: 10px; }\nfooter {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/layouts/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/layouts/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"container-fluid\" [ngClass]=\"currentRoute\">\r\n\r\n  <nav class=\"navbar navbar-dark bg-dark navbar-default navbar-expand-md\">\r\n    <a class=\"navbar-brand\" [routerLink]=\"['/']\">\r\n      <img src=\"assets/images/jobtechlogo.png\">\r\n    </a>\r\n\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarMenu\" aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\"\r\n            (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarMenu\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarMenu\" [ngbCollapse]=\"isCollapsed\">\r\n\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/assets']\">ASSETS</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/platform']\">PLATFORM</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/showcase']\">SHOWCASE</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/news']\">NEWS</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <div *ngIf=\"useKeycloak && keycloakService.authenticated() == false\">\r\n\r\n        <ul class=\"navbar-nav navbar-right\">\r\n\r\n          <li class=\"nav-item\">\r\n            <div class=\"nav-link nowrap\">\r\n              <a (click)=\"doLogin()\">Login</a>\r\n              <span>or</span>\r\n              <a (click)=\"doRegister()\">Register</a>\r\n            </div>\r\n\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <div *ngIf=\"useKeycloak && keycloakService.authenticated()\">\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <li class=\"nav-item\">\r\n            <div ngbDropdown class=\"\" placement=\"bottom-right\">\r\n              <a class=\"nav-link\" id=\"dropdownAccount\" ngbDropdownToggle>{{ keycloakService.client().tokenParsed['name']}}</a>\r\n              <div class=\"bg-dark\" ngbDropdownMenu aria-labelledby=\"dropdownAccount\">\r\n                <a class=\"dropdown-item nav-link\" [routerLink]=\"['/profile']\">My profile</a>\r\n                <a class=\"dropdown-item nav-link\" [routerLink]=\"['/organisation']\">Organisation</a>\r\n                <a class=\"dropdown-item nav-link\" [routerLink]=\"['/service']\">Services</a>\r\n                <a class=\"dropdown-item nav-link\" (click)=\"doLogout()\">Sign out</a>\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <h1 class=\"navbar-dark page-title\">{{ title }}</h1>\r\n  <div *ngIf=\"this.currentRoute == 'home'\">\r\n    <h1 class=\"navbar-dark page-title\" style=\"text-align: center;\"> JobTechdev</h1>\r\n    <h4 class=\"navbar-dark page-text\" style=\"text-align: center;\"> Powerful APIs, widgets and datasets for you to develop the missing app</h4>\r\n  </div>\r\n\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@font-face {\n  font-style: normal;\n  font-weight: 300;\n  font-family: 'Open Sans', sans-serif; }\n@font-face {\n  font-style: normal;\n  font-weight: 300;\n  font-family: 'Open Sans', sans-serif; }\nbody {\n  font-family: 'Open Sans', sans-serif;\n  background-color: #F2F4F5; }\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\nh1, .h1 {\n  font-size: 2.5rem; }\nh2, .h2 {\n  font-size: 2rem; }\nh3, .h3 {\n  font-size: 1.75rem; }\nh4, .h4 {\n  font-size: 1.5rem; }\nh5, .h5 {\n  font-size: 1.25rem; }\nh6, .h6 {\n  font-size: 1rem; }\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n.list-inline-item {\n  display: inline-block; }\n.list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n.blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\nhtml, body {\n  height: 100%;\n  margin: 0; }\nheader {\n  background-image: url(\"https://jobtechdev.github.io/jobtech-dev/assets/images/startpage-header-bg.jpg\");\n  background-position: 0% 30%;\n  background-repeat: no-repeat;\n  background-size: cover; }\n.container-fluid {\n  padding: 0 0 0 0; }\n@media (min-width: 576px) {\n    .container-fluid {\n      padding: 0 0 0.5rem 1.5rem; } }\n@media (min-width: 992px) {\n    .container-fluid {\n      padding: 0 2rem 1rem 5rem; } }\n.navbar-default {\n  background-color: transparent !important;\n  border-color: transparent !important; }\n.navbar-toggler {\n  border: none !important; }\n.navbar-toggler:hover {\n    background-color: transparent !important; }\n.navbar-toggler .icon-bar {\n    background-color: #FFF !important; }\n.navbar-nav {\n  margin-top: 15px;\n  margin-left: 50px;\n  line-height: 60px; }\n.navbar-nav li {\n    margin-right: 15px; }\n.navbar-nav li a {\n      background-color: transparent !important;\n      text-transform: uppercase;\n      color: #b1b3b4;\n      font-weight: bold;\n      -webkit-transition: all 0.2s;\n      transition: all 0.2s; }\n.navbar-nav li a:hover {\n        background-color: transparent;\n        color: #FFF; }\n.navbar-nav li:last-child {\n    margin-right: 0; }\n.navbar-brand {\n  font-size: 1rem; }\n.navbar-brand img {\n    margin: auto;\n    height: 1.5rem; }\n@media (min-width: 768px) {\n    .navbar-brand {\n      display: block;\n      font-size: 1.25rem; }\n      .navbar-brand img {\n        height: 3rem; } }\n.navbar-collapse {\n  border: none !important; }\n.navbar-collapse.in .navbar-nav {\n    margin-left: 0; }\n.navbar-collapse.collapsing {\n    -webkit-transition: none;\n    transition: none; }\n.home {\n  background-image: url(\"https://jobtechdev.github.io/jobtech-dev/assets/images/startpage-header-bg.jpg\"); }\n.assets {\n  background-image: url(\"https://jobtechdev.github.io/jobtech-dev/assets/images/product-header.jpg\"); }\n.platform {\n  background-image: url(\"https://jobtechdev.github.io/jobtech-dev/assets/images/vision-header.jpg\"); }\n.showcase {\n  background-image: url(\"https://jobtechdev.github.io/jobtech-dev/assets/images/insights-header.jpg\"); }\n.news {\n  background-image: url(\"https://jobtechdev.github.io/jobtech-dev/assets/images/news-header.jpg\"); }\n.nowrap {\n  white-space: nowrap; }\n.auth-links a:hover {\n  text-decoration: none; }\n.nav-page-title {\n  display: inline-block; }\n.page-title {\n  color: #fff;\n  font-size: 3rem;\n  font-weight: 300;\n  display: none; }\n.page-text {\n  color: #fff;\n  font-size: 1rem;\n  font-weight: normal; }\n@media (min-width: 768px) {\n  .nav-page-title {\n    display: none; }\n  .page-title {\n    display: block; } }\n"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_keycloak_keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, keycloakService, location) {
        this.router = router;
        this.keycloakService = keycloakService;
        this.location = location;
        this.noTitleRoutes = ['Home'];
        this.isCollapsed = true;
    }
    NavbarComponent_1 = NavbarComponent;
    NavbarComponent.getHostUrl = function () {
        return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.useKeycloak = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].useKeycloak;
        this.router.events.subscribe(function (event) {
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            var newRoute;
            if (_this.location.path() !== '') {
                newRoute = _this.location.path();
            }
            else {
                newRoute = '/home';
            }
            _this.onRouteChange(newRoute);
        }, function (error) { return (console.error('Failed to load router events: ', error)); });
    };
    NavbarComponent.prototype.doLogout = function () {
        console.log('doLogout');
        this.keycloakService.client().logout({ redirectUri: NavbarComponent_1.getHostUrl() });
    };
    NavbarComponent.prototype.doLogin = function () {
        console.log('doLogin');
        this.keycloakService.client().login();
    };
    NavbarComponent.prototype.doRegister = function () {
        console.log('doRegister');
        this.keycloakService.client().register();
    };
    NavbarComponent.prototype.onRouteChange = function (newRoute) {
        newRoute = newRoute.replace(/^\/+/g, ''); // remove leading slashes
        // console.log('newRoute: ', newRoute);
        if (this.currentRoute !== newRoute) {
            this.currentRoute = newRoute;
            // console.log('currentRoute: ', this.currentRoute);
            this.processTitle();
        }
    };
    NavbarComponent.prototype.processTitle = function () {
        var route = this.currentRoute;
        var toIndex = route.indexOf('/') !== -1 ? route.indexOf('/') : route.length;
        this.title = route.charAt(0).toUpperCase() + route.slice(1, toIndex);
        if (this.noTitleRoutes.indexOf(this.title) !== -1) {
            this.title = '';
        }
        // console.log('title: ', this.title);
    };
    NavbarComponent = NavbarComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/layouts/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_keycloak_keycloak_service__["a" /* KeycloakService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]])
    ], NavbarComponent);
    return NavbarComponent;
    var NavbarComponent_1;
}());



/***/ }),

/***/ "./src/app/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"news-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-7\">\r\n        <div class=\"news-feed\">\r\n          <h2>Jobtech Forum</h2>\r\n        <app-imgmodal></app-imgmodal>\r\n\r\n\r\n          <h2>Hack for Swedens</h2>\r\n\r\n          <h4> The Hack summary: </h4>\r\n\r\n          <p>Hack for Sweden kicked off at a racing speed with API, AI and QnA sessions. Then the hackers started coding!\r\n            For us at Arbetsförmedlingen, the best part was seeing that our datasets were among the top 3 most popular APIs in use! Seven different teams used our APIs to build smart solutions for the good of the Swedish labor market.\r\n            We are happy to present the seven solutions, and here they are!</p>\r\n          <h4> The breakfast club</h4>\r\n\r\n          <p>It's a service that suggests meetups based on the type of job the user is searching for, thus giving jobseekers the possibility to expand their professional network and increase the chance to find their dream job. This is done by combining Arbetsförmedlingen APIs (ontology and Job Forecast) and an open source API from Meetup.com\r\n            Datasets: Ontology API (Arbetsförmedlingen) + Job Forecast (Arbetsförmedlingen).\r\n            <br>\r\n            <a href= \"https://devpost.com/software/the-breakfast-club\"> Breakfast Club </a>\r\n\r\n          <h4>Hack From Sweden</h4>\r\n          <p>A developed “Smart Cash Index” (SCI) for plotting housing cost against remote jobs. The SCI will also show quality of life in proximity to parks, hospitals, schools etc. This is done to inform users of good places to live in while working remotely in Sweden.\r\n\r\n            Datasets: Platsbanken API (Arbetsförmedlingen) + Living costs (SCB)\r\n            <a href= \"https://devpost.com/software/hackfromsweden\">Hack from Sweden</a>\r\n          </p>\r\n\r\n          <h4>Ready Work</h4>\r\n\r\n          <p> The tool provides a ranking of geographical areas where the user's unique skill-set is most needed. The algorithm takes into account the number of ads in each location and compares it with the population size in the same location.According to the 'Ready Work' team their ranking algorithm can be further developed to include the user's own preferences as a filtering method.\r\n            The application also provides the user with relevant information on the region as well as a list of jobs matching their personal set of skills.\r\n            The Ready Work team used Microsoft Azure’s translation API to ensure that skills are matched correctly regardless of the users language. By providing a translation service for the job application process itself, Ready Work can help connect the user with employers on a more even playing field.\r\n            Datasets: Platsbanken API (Arbetsförmedlingen) + Translator API (Microsoft)\r\n            <a href= \"https://devpost.com/software/ready-work\"> Ready work</a>\r\n          </p>\r\n\r\n          <h4> Map Your Career</h4>\r\n          <p>Map you career facilitates the discussion on career options providing dynamic content in an easy-to-understand way.\r\n            This is a tool that can be used both during on-person visits to the employment office or remotely. The newcomers can enter their skills to retrieve a list of relevant professions  displayed in a bubble chart.\r\n            Most relevant jobs are shown in the center while others are displayed around it. Hovering over a profession displays the job description and it's trend. Using this tool, employment officer can gather some basic background information and add their personal comments. At the end of the process a summary report is provided in a printer-friendly format.\r\n            Map your career facilitates the discussion on career options providing dynamic content in an easy to understand way.p Datasets: Historical job postings, professions, Ontology and Forecasts (Arbetsförmedlingen)\r\n            <br>\r\n            <a href=\"https://devpost.com/software/map-your-career\">Map you career</a>\r\n\r\n          <h4> Match me if you can</h4>\r\n          <p> When selecting the topics of interest this software initiates a lookup in the graph database (Neo4J) that was initially fed with all information about the available APIs. The lookup results in a list of APIs that are related to each other and that contains data about the chosen topics. These APIs can simply be combined for building the software of your dreams.\r\n            Datasets: All datasets available\r\n            <br>\r\n            <a href=\"https://devpost.com/software/minima-perfect-hash-indexing\">Match me if you can</a>\r\n\r\n          <h4>Match Yourself </h4>\r\n          <p>The service matches personality with jobs. It walks you through 20 questions of a proven scientific method for understanding the jobseekers personality traits and combine the results with Arbetsförmedlingen APIs (both ontology and real-time job).\r\n            The result is a matching score that suggests the most suitable jobs currently available\r\n            Datasets: Ontology API + Platsbanken API (Arbetsförmedlingen)\r\n            <br>\r\n            <a href=\"https://devpost.com/software/match-yourself\">Match yourself</a>\r\n\r\n\r\n          <h4>LocationRank</h4>\r\n          <p> This app produces a comparison of two geographical areas based on certain competencies helping both employers and employees to find the best geographical area for their business.\r\n            Datasets: Ontology API (Arbetsförmedlingen)\r\n            <br>\r\n            <a href=\"https://devpost.com/software/locateme-dj81wu\">LocationRank</a>\r\n\r\n\r\n\r\n          <h2>Widget challenge</h2>\r\n          <p>The wait is finally over!</p>\r\n          <p>At the last Jobtech Forum we announced a widget competition for you.\r\n           Erik Sandström challenged you to beat his own widget.</p>\r\n          <p>For example we don't want people jumping from one job searching site to another, we want them to find\r\n            jobs.</p>\r\n          <p> Can you make the jobs find the people without having them looking?</p>\r\n          <p> The goal is to make a widget that in some way helps the labour market or a jobseeker, by using any open\r\n            data.</p>\r\n          <p>You can find some data (Platsbanken: Jobpostings, Job forecasts and the Ontology) at <a\r\n            href=\"http://wwwJobtechdev.se\" target=\"_blank\">Jobtechdev.se</a>\r\n\r\n          <p>Contribute to the challenge and send your widget to <a href=\"mailto:jobtechdev@arbetsformedlingen.se\">jobtechdev@arbetsformedlingen.se</a></p>\r\n          <br>\r\n          <p> Are you still up for the challenge to make Sweden a little bit better?\r\n\r\n          <h2>Jobtech in media - News Øresund.</h2>\r\n\r\n          <p>Read the interview with our community manager Max Danielsson, about the jobtech platform. Published in News\r\n            Øresund. This article is in swedish.</p>\r\n          <a href=\"http://www.newsoresund.se/arbetsformedlingen-satsar-pa-digital-plattform/\"> To the article</a>\r\n          <h2>Widget challenge!</h2>\r\n          <p>At Jobtech forum, the 13th of October, we announced a widget challenge!</p>\r\n          <p>Create a widget, useful to the labor market.</p>\r\n          <p>We are working on our widget right now, are you working on yours?</p>\r\n          <p>Keep an eye at Jobtechdev.se, more information to come.</p>\r\n          <p>Join us and contribute!</p>\r\n          <h2>Jobtech Forum</h2>\r\n          <p>\r\n          <b> Välkommen till ett nytt Jobtech Forum den 13 oktober 2017!</b>\r\n          </p>\r\n          <p>Arbetsförmedlingens avdelning Digitala tjänster är glada att få bjuda in dig till höstens Jobtech\r\n            Forum!</p>\r\n          <p>I våras genomförde vi ett välbesökt första Jobtech Forum. Nu vill vi fortsätta dialogen om hur vi gemensamt\r\n            kan\r\n            skapa förutsättningar för digitala samarbeten inom området jobbmatchning. Vår vision är ett ekosystem där\r\n            olika\r\n            aktörer delar en gemensam infrastruktur som gör det enklare för den som söker arbete eller vill rekrytera.\r\n            Genom\r\n            att samarbeta kan vi ta tillvara innovationskraften och bidra till en effektivare matchning på\r\n            arbetsmarknaden!</p>\r\n          <p>Under dagen kommer vi att presentera flera nyheter bland annat en första version av Job store, Jobskills\r\n            (kartläggning\r\n            av kompetenser för målgruppen nyanlända) samt öppen ontologi (realtidsuppdaterat värdeföråd av kompetenser).\r\n            Kan man räkna fram vilket företag som kommer att rekrytera? I samarbete mer RISE har vi tagit fram en första\r\n            version av tjänsten som kombinerar historiska platsannonser med ekonomisk data.</p>\r\n          <p>Detta och mycket annat vill vi diskutera mer dig!</p>\r\n          <br>\r\n          <p>Lokal: Epicenter, Mäster Samuelsgatan 36 i Stockholm</p>\r\n          <p>\r\n            <b>Preliminärt program:</b>\r\n          </p>\r\n          <p>08.30 Registrering och kaffe</p>\r\n          <p>09.00 -11.00 Presentation av vision, vad som hänt sen sist och hur vi går vidare. Erik Sandström, chef för\r\n            Matcha\r\n            direkt, Arbetsförmedlingen</p>\r\n          <p>11.00-1200 Keynote speaker, Pôle Emploi, den franska statliga arbetsförmedlingen berättar om Emploi Store\r\n            och deras\r\n            samarbete med privata aktörer för att effektivisera matchningen på arbetsmarknaden.</p>\r\n          <p>12.00- 14.00 Lunch, samtidigt kan du ta del av utställningar om pågående utvecklingsinitiativ och delta i\r\n            open\r\n            space-diskussioner\r\n          </p>\r\n          <p>Arbetsförmedlingen visar nya och kommande tjänster. Här kan du också diskutera affärsmodeller och\r\n            samarbeten i\r\n            mindre grupp. I år har vi har flera av våra skarpa utvecklare på plats för att diskutera API:er, öppna data\r\n            och\r\n            gemensam utveckling baserat på öppen källkod.</p>\r\n          <p></p>\r\n          <p>Dagen vänder sig till personer i ledande befattningar inom företaget och personer som arbetar med\r\n            teknikutveckling.\r\n            Antalet platser är begränsat.</p>\r\n          <p>Anmälan:</p>\r\n          <p>Anmälan görs senast den 29 september via denna länk:</p>\r\n          <a href=\"http://www.delegia.com/app/netattm/attendee/page/64118\" target=\"_blank\">Anmälan Jobtech forum </a>\r\n          <p>Välkommen!</p>\r\n          <h2>Innovationsvecka</h2>\r\n          <p>\r\n            <b>Innovationsvecka Göteborg/Halmstad 5-9 Oktober</b>\r\n          </p>\r\n          <p>Arbetsgivare behöver arbetskraft och arbetssökande behöver jobb – ändå hittar de inte alltid varandra.\r\n            Innovationsveckan\r\n            2017 arrangeras av Arbetsförmedlingens Digitala Innovationscenter, Ingenjörer utan gränser, Business Region\r\n            Göteborg,\r\n            Kinnarps Workspace Solutions och Högskolan i Halmstad.</p>\r\n          <a href=\"http://www.jobbhackathon.se/innovationsvecka-i-goteborghalmstad\" target=\"_blank\">Mer information och\r\n            anmälan </a>\r\n          <h2>Labour market competition</h2>\r\n          <p>(Competition completed)</p>\r\n          <p>\r\n            <b>Be part of developing a labour market for all and have a chance to win 2 million SEK</b>\r\n          </p>\r\n          <p>Submit a digital solution that makes it easier to employ or to find a job that matches people´s different\r\n            capacity\r\n            for work. Or develop an innovative idea or solution that will make workplaces more accessible to everyone,\r\n            or\r\n            will help employers to see competence and opportunities instead of barriers.</p>\r\n          <p>Every winner in the innovation competition will receive expert support and financing up to a total of SEK 2\r\n            million.\r\n            The competition is a collaboration between PTS and Arbetsförmedlingen.</p>\r\n          <p>Find out more\r\n            <a href=\"http://www.pts.se/innovation14en\" target=\"_blank\">http://www.pts.se/innovation14en</a> or\r\n            <a href=\"http://www.pts.se/innovation14\" target=\"_blank\">http://www.pts.se/innovation14</a>\r\n          </p>\r\n          <br>\r\n          <img class=\"img-responsive\" src=\"assets/images/bild_eng_221x221.png\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <div class=\"twitter-feed\">\r\n          <a class=\"twitter-timeline\" href=\"https://twitter.com/jobtechdev\">Tweets by @jobtechdev</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/news/news.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@font-face {\n  font-style: normal;\n  font-weight: 300;\n  font-family: 'Open Sans', sans-serif; }\nbody {\n  font-family: 'Open Sans', sans-serif;\n  background-color: #F2F4F5; }\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\nh1, .h1 {\n  font-size: 2.5rem; }\nh2, .h2 {\n  font-size: 2rem; }\nh3, .h3 {\n  font-size: 1.75rem; }\nh4, .h4 {\n  font-size: 1.5rem; }\nh5, .h5 {\n  font-size: 1.25rem; }\nh6, .h6 {\n  font-size: 1rem; }\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n.list-inline-item {\n  display: inline-block; }\n.list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n.blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\nhtml, body {\n  height: 100%;\n  margin: 0; }\n@media (min-width: 576px) {\n  .news-content {\n    padding: 20px 40px; } }\n.news-content {\n  width: 100%;\n  background-color: #fff;\n  padding: 0 1em; }\nh2 {\n  border-bottom: 1px solid rgba(15, 70, 100, 0.12);\n  margin-top: 1em; }\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n"

/***/ }),

/***/ "./src/app/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent(_router) {
        this._router = _router;
        this.initTwitterWidget();
    }
    NewsComponent.prototype.ngOnDestroy = function () {
        this.twitter.unsubscribe();
    };
    NewsComponent.prototype.initTwitterWidget = function () {
        this.twitter = this._router.events.subscribe(function (val) {
            if (val instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                window.twttr = (function (d, s, id) {
                    var js;
                    var fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
                    if (d.getElementById(id)) {
                        return t;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.src = 'https://platform.twitter.com/widgets.js';
                    fjs.parentNode.insertBefore(js, fjs);
                    t._e = [];
                    t.ready = function (f) {
                        t._e.push(f);
                    };
                    return t;
                }(document, 'script', 'twitter-wjs'));
                if (window.twttr.ready()) {
                    window.twttr.widgets.load();
                }
            }
        });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/news/news.component.html"),
            styles: [__webpack_require__("./src/app/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/platform/platform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <h4 class=\"card-title\">Ecosystem is the future</h4>\r\n      <p class=\"card-text\">Rather than today separate systems for job matching, we strive for a digital ecosystem where\r\n        services from different\r\n        vendors can flourish together making superior opportunities for jobseekers and employers. In the heart of the\r\n        ecosystem there are a number of core components which is described below. We are convinced that competition\r\n        leads to better customer services. By providing these ecosystem core components we hope today competition\r\n        continues,\r\n        but at a higher level and faster pace.\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Jobstore</h5>\r\n      <p class=\"card-text\">In order to make it easier for employers and jobseekers we will provide an online catalog\r\n        for the digital services.\r\n        We call it Jobstore.</p>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <img class=\"card-img-left pull-left mr-2\" src=\"assets/images/skills.png\">\r\n      <h5 class=\"card-title\">Skills taxonomy</h5>\r\n      <p class=\"card-text\">When matching employers demand with jobseekers profile, it is crucial to use a common\r\n        description of skills.\r\n        Therefore a skills taxonomy is one of the core components.</p>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <img class=\"card-img-left pull-left mr-2\" src=\"assets/images/cv.png\">\r\n      <h5 class=\"card-title\">CV handler</h5>\r\n      <p class=\"card-text\">\r\n        We believe people want to own their personal data; no matter what digital service they use. And we are quite\r\n        sure that soon people will claim rights to easily move their data between digital services. We aim to develop\r\n        a CV handler with a “edit once –update everywhere” concept. A concept that allows your CV data to be\r\n        accessible\r\n        from every digital service in the ecosystem, but only by the one person holding the key - namely you.</p>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <img class=\"card-img-left pull-left mr-2\" src=\"assets/images/job_hub.png\">\r\n      <h5 class=\"card-title\">Vacancy hub</h5>\r\n      <p class=\"card-text\">When it comes to vacancies, we think it would be great if digital service providers could\r\n        offer employers with\r\n        the opportunity to easily reach the whole labor market. This we will make possible with a vacancy hub.</p>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <img class=\"card-img-left pull-left mr-2\" src=\"assets/images/engine.png\">\r\n      <h5 class=\"card-title\">Matching engine</h5>\r\n      <p class=\"card-text\">The most sophisticated core component is the matching engine. Unlike a search engine, it\r\n        handles both the request\r\n        and the offer. The underlying data comes from the CV handler, the Vacancy hub, and the Skills taxonomy.</p>\r\n    </div>\r\n\r\n    <div class=\"card-body\">\r\n      <h5 class=\"card-title\">Jobtech Developer</h5>\r\n      <p class=\"card-text\">The Jobtech Developer website is a toolbox that will contain access and support for the\r\n        ecosystem core components.\r\n        But already you will find several open assets and other developer resources on the website.</p>\r\n\r\n      <div class=\"card-body\">\r\n        <p>Happy coding!</p>\r\n        <p>The Jobtech Developer team</p>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/platform/platform.component.scss":
/***/ (function(module, exports) {

module.exports = "h5 {\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/platform/platform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlatformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlatformComponent = /** @class */ (function () {
    function PlatformComponent() {
    }
    PlatformComponent.prototype.ngOnInit = function () {
    };
    PlatformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-platform',
            template: __webpack_require__("./src/app/platform/platform.component.html"),
            styles: [__webpack_require__("./src/app/platform/platform.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlatformComponent);
    return PlatformComponent;
}());



/***/ }),

/***/ "./src/app/rxjs-extensions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_fromPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_concatMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");









// import 'rxjs/add/operator/takeWhile';
// import 'rxjs/add/operator/timeInterval';




/***/ }),

/***/ "./src/app/shared/model/organisation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Organisation; });
var Organisation = /** @class */ (function () {
    function Organisation() {
    }
    return Organisation;
}());



/***/ }),

/***/ "./src/app/shared/model/registration.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registration; });
var Registration = /** @class */ (function () {
    function Registration() {
    }
    return Registration;
}());



/***/ }),

/***/ "./src/app/shared/services/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
/* unused harmony export SHOWCASES */
/* unused harmony export ASSETS */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentService = /** @class */ (function () {
    function ContentService() {
    }
    ContentService.prototype.getAssetByName = function (name) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(ASSETS.find(function (current) { return current.name === name; }));
        // for (var i = 0; i < ASSETS.length; i++) {
        //   if (ASSETS[i][name] === value) {
        //     return ASSETS[i];
        //   }
        // }
        // return null;
    };
    ContentService.prototype.getShowcases = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(SHOWCASES);
    };
    ContentService.prototype.getAssets = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(ASSETS);
    };
    ContentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ContentService);
    return ContentService;
}());

var SHOWCASES = [
    {
        'title': 'Data Universe',
        'details': 'Data Universe makes your data accessible and understandable by enabling dynamic exploration and visualization in a Virtual Reality space.',
        'link': 'https://data-universe.github.io/',
        'image': 'assets/images/data-universe-puff.png',
        'type': 'DATA-UNIVERSE'
    },
    {
        'title': 'Historical Data Analysis',
        'details': 'Make smarter decisions with past data on job trends in various industry sectors',
        'link': 'http://historik.azurewebsites.net',
        'image': 'assets/images/history-analysis-puff.jpg',
        'type': 'APPLICATION'
    },
    {
        'title': 'Job Postings',
        'details': 'Add Job postings list to your site in minutes. \n \nFor example get all job postings in a municipaliti.',
        'link': 'https://github.com/jobtechdev/vacancieswidget',
        'image': 'assets/images/widget.png',
        'type': 'VACANCIES WIDGET'
    },
    {
        'title': 'Post job ads',
        'details': 'A SDK written in Ruby to validate and send job ads, developed by justarrived.se',
        'link': 'https://github.com/buren/arbetsformedlingen',
        'image': 'assets/images/justarrived.png',
        'type': 'POST JOB ADS'
    },
    {
        'title': 'Kompetensutforskaren',
        'details': 'An example of how to use our Ontology API ',
        'link': 'http://pilot.arbetsformedlingen.se/kompetensutforskaren/#!/',
        'image': 'assets/images/ontologi.png',
        'type': 'KOMPETENSUTFORSKAREN'
    },
];
var ASSETS = [
    {
        'name': 'job-market-ontology',
        'title': 'Job Market Ontology',
        'shortDescription': 'Ontology created from job postings.(This is a prototype service, with full functionality)',
        'texts': [
            {
                'header': 'Description',
                'description': 'The job market is dynamical. It is an ongoing demand on new jobs and new competences.\nFor effective matching between employers and jobseekers a common language that the machines support is needed. \n\nJob market ontology is a project which uses modern technology to describe the job market for making more effective matching and better user experiences.\n\nThe ontology is created by automatically analysing 6.3 millions ads and extracting mentioned competencese. With intelligent algorithms the ontology knows how the competences is related to each other.',
            },
            {
                'header': 'What does your competences relates to?',
                'description': 'The first version of the Job market ontology consists of a limited set of competences. Here you can explore them and see how they relates to each other. \n\nThe state of the ontology is beta and it is changing to continuously get improved everyday.'
            }
        ],
        'image': 'assets/images/jobb-rymden_x238.png',
        'headimage': 'assets/images/asset-header-ontologi.png',
        'externallinks': [
            {
                'name': 'Go to API',
                'link': 'http://ontologi.arbetsformedlingen.se/ontology/v1/?url=swagger.json',
            },
            {
                'name': 'Read more',
                'link': 'http://ontologi.arbetsformedlingen.se/ontologi/#!/',
            }
        ],
        'files': []
    },
    {
        'name': 'occupation-forecasts',
        'title': 'Occupation Forecasts',
        'shortDescription': 'Short and long-term forecasts of labour demand for different occupations',
        'texts': [
            {
                'header': 'Description',
                'description': 'API Occupation Forecasts (API Vägledning) contains 1 and 5 years forecasts for different occupations. The Forecasts are made and published in February 2018 \n\nThe forecasts are based on the standard SSYK (Swedish standard occupation classification)\n\n Readmore about <a href="http://www.scb.se/dokumentation/klassifikationer-och-standarder/standard-for-svensk-yrkesklassificering-ssyk/" target="_blank">SSYK</a> \n\nWith API Occupation Forecasts (API Vägledning) it is possible to integrate Arbetsförmedlingen (the Employment Agency) forecasts into in custom built applications. \n \nThe API is an open interface without contract or registration requirements.\n\n',
            },
            {
                'header': '',
                'description': ''
            }
        ],
        'image': 'assets/images/dev-services-puff.jpg',
        'headimage': 'assets/images/services-head.jpg',
        'externallinks': [
            {
                'name': 'Go to API',
                'link': 'http://api.arbetsformedlingen.se/af/v2/forecasts/api/#!/forecasts/'
            }
        ],
        'files': [
            {
                'name': '',
                'url': ''
            },
            {
                'name': '',
                'url': ''
            }
        ]
    },
    {
        'name': 'platsbanken',
        'title': 'Platsbanken',
        'shortDescription': 'All the current job postings available on Platsbanken',
        'texts': [
            {
                'header': 'Description',
                'description': 'API Platsbanken contains all current job ads. About 3000 new ads are submitted daily by employers, \n5 million accesses to the job posting database daily. \n \nWith the API it is possible to interact with Arbetsförmedlingens job ad database with in custom built applications. \n\nThe API is an open interface without contract or registration requirements. Some of the data returned from the service is of the type of fuzzy matching. \nThis means that the results from a list search results in hits closely related keywords. Soft matching takes place in the professions and municipalities.\n \nExample of fuzzy matching: \nIf you are looking for a "bagare" (baker), you also get hits for "Konditor" (confectioner) because these two occupations are closely related.\n \nSee the technical description for more methods and requests.\n\n\nLearn more about the Platsbanken API or start use the APi right away',
            }
        ],
        'image': 'assets/images/api-puff_x239.jpg',
        'externallinks': [
            {
                'name': 'Go to API',
                'link': './swagger/index.html',
            },
        ],
        'files': [
            {
                'name': 'Technical description (Swe)',
                'url': 'https://www.arbetsformedlingen.se/download/18.40fa4e7b159ff029331706ca/1486976282357/teknisk-beskrivning-lediga-jobb.pdf'
            },
            {
                'name': 'License (Swe)',
                'url': 'https://www.arbetsformedlingen.se/download/18.362b127c14924e08e871375/1415263305183/villkor_ledigajobb.pdf'
            }
        ]
    },
    {
        'name': 'occupation',
        'title': 'Occupation',
        'shortDescription': 'Occupational description of 450 different occupations, with forecasts',
        'texts': [
            {
                'header': 'Description',
                'description': 'Occupation is a webservice, it contains descriptions of nearly 450 different occupations.\n\nThe webservice is supposed to be used by anyone who wants to download texts and descriptions of one or more professions from the Profession A-Ö application.\n\nSee the technical description for more information.',
            },
            {
                'header': '',
                'description': ''
            }
        ],
        'image': 'assets/images/occupation-puff.jpg',
        'headimage': 'assets/images/occupation-head.jpg',
        'externallinks': [
            {
                'name': 'Go to Webservice',
                'link': 'http://api.arbetsformedlingen.se/af/v0/Occupation/wsoccupation.asmx',
            },
        ],
        'files': [
            {
                'name': 'Technical description',
                'url': 'http://jobtechdev.se/resource/occupation/teknisk.pdf',
            },
            {
                'name': 'License (sv)',
                'url': 'https://www.arbetsformedlingen.se/download/18.1974235114fa922d37751b2/1441803774120/Licens+f%C3%B6r+anv%C3%A4ndning+av+Arbetsf%C3%B6rmedlingens+%C3%B6ppna+data.pdf',
            },
        ]
    },
    {
        'name': 'historical-job-postings',
        'title': 'Historical Job Postings',
        'shortDescription': 'All job postings from Platsbanken 2006-2016',
        'texts': [
            {
                'header': 'Description',
                'description': 'This dataset consists of 4.2M job postings (7.7M job positions) published on Platsbanken from the year 2006 up to and including 2017. Texts have been anonymized with sentences including names, telephone numbers and email addresses removed.\nEach listing contains metadata on location, dates, employer name, job type and any additional job details.\nFor a visual overview of this dataset, please see the <a href="http://historik.azurewebsites.net/" target="_blank">dashboard example</a>. ',
            },
            {
                'header': 'API with basic statistics',
                'description': 'We provide a microservice for basic statistics and queries on the dataset.\n\nExamples\nA notebook with examples can be found <a href="https://github.com/simonbe/afhistorik/blob/master/notebooks/API_description.ipynb" target="_blank">here</a>\n\nData format \nEach line in a file contains a job listing in a JSON format '
            }
        ],
        'image': 'assets/images/data-analysis-puff_x239.jpg',
        'externallinks': [
            {
                'name': 'Go to API',
                'link': 'https://github.com/simonbe/afhistorik',
            },
        ],
        'files': [
            {
                'name': '2006-2017',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/pb2006_2017.zip',
            },
            {
                'name': '2006',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2006.zip'
            },
            {
                'name': '2007',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2007.zip'
            },
            {
                'name': '2008',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2008.zip'
            },
            {
                'name': '2009',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2009.zip'
            },
            {
                'name': '2010',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2010.zip'
            },
            {
                'name': '2011',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2011.zip'
            },
            {
                'name': '2012',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2012.zip'
            },
            {
                'name': '2013',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2013.zip'
            },
            {
                'name': '2014',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2014.zip'
            },
            {
                'name': '2015',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2015.zip'
            },
            {
                'name': '2016',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2016.zip'
            },
            {
                'name': '2017',
                'url': 'https://simonbe.blob.core.windows.net/afhistorik/2017.zip'
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/shared/services/job-service-registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobServiceRegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__keycloak_keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var JobServiceRegistrationService = /** @class */ (function () {
    function JobServiceRegistrationService(idp, http) {
        this.idp = idp;
        this.http = http;
    }
    JobServiceRegistrationService.prototype.list = function () {
        if (!this.idp.authenticated()) {
            throw new Error('Not authenticated yet');
        }
        var userId = this.idp.client().tokenParsed.sub;
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl + "/service/provider/v1/" + userId + "/services";
        return this.http.get(url, this.createHeader());
    };
    JobServiceRegistrationService.prototype.get = function (registrationId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl + "/service/v1/" + registrationId;
        return this.http.get(url, this.createHeader());
    };
    JobServiceRegistrationService.prototype.add = function (registration) {
        if (registration.id != null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw('The registration is already saved ' + registration.id);
        }
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl + "/service/v1/create";
        return this.http.post(url, registration, this.createHeader());
    };
    JobServiceRegistrationService.prototype.update = function (registration) {
        if (registration.id == null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw('The registration is not saved ' + registration.id);
        }
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl + "/service/v1/update";
        return this.http.put(url, registration, this.createHeader());
    };
    JobServiceRegistrationService.prototype.remove = function (registrationId) {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl + "/service/v1/" + registrationId;
        return this.http.delete(url, this.createHeader());
    };
    JobServiceRegistrationService.prototype.publish = function (registration) {
        registration.published = true;
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl + "/service/v1/publish/" + registration.id;
        return this.http.put(url, registration, this.createHeader());
    };
    JobServiceRegistrationService.prototype.unpublish = function (registration) {
        registration.published = false;
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl + "/service/v1/unpublish/" + registration.id;
        return this.http.put(url, registration, this.createHeader());
    };
    JobServiceRegistrationService.prototype.getCategories = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl + "/service/category/v1/names";
        return this.http.get(url, this.createHeader());
    };
    JobServiceRegistrationService.prototype.createHeader = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.idp.client().token
            })
        };
    };
    JobServiceRegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__keycloak_keycloak_service__["a" /* KeycloakService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], JobServiceRegistrationService);
    return JobServiceRegistrationService;
}());



/***/ }),

/***/ "./src/app/shared/services/keycloak/keycloak.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeycloakGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Generated by https://github.com/ssilvert/keycloak-schematic/wiki/Getting-Started
var KeycloakGuard = /** @class */ (function () {
    function KeycloakGuard(keycloakService) {
        this.keycloakService = keycloakService;
    }
    KeycloakGuard.prototype.canActivate = function (route, state) {
        if (this.keycloakService.authenticated()) {
            return true;
        }
        this.keycloakService.login({ redirectUri: this.getOrigin() + state.url });
        return false;
    };
    KeycloakGuard.prototype.getOrigin = function () {
        if (!window.location.origin) {
            return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
        }
        else {
            return window.location.origin;
        }
    };
    KeycloakGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__keycloak_service__["a" /* KeycloakService */]])
    ], KeycloakGuard);
    return KeycloakGuard;
}());



/***/ }),

/***/ "./src/app/shared/services/keycloak/keycloak.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 * Copyright 2016 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function( window, undefined ) {

    var Keycloak = function (config) {
        if (!(this instanceof Keycloak)) {
            return new Keycloak(config);
        }

        var kc = this;
        var adapter;
        var refreshQueue = [];
        var callbackStorage;

        var loginIframe = {
            enable: true,
            callbackList: [],
            interval: 5
        };

        var scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            if ((scripts[i].src.indexOf('keycloak.js') !== -1 || scripts[i].src.indexOf('keycloak.min.js') !== -1) && scripts[i].src.indexOf('version=') !== -1) {
                kc.iframeVersion = scripts[i].src.substring(scripts[i].src.indexOf('version=') + 8).split('&')[0];
            }
        }

        kc.init = function (initOptions) {
            kc.authenticated = false;

            callbackStorage = createCallbackStorage();

            if (initOptions && initOptions.adapter === 'cordova') {
                adapter = loadAdapter('cordova');
            } else if (initOptions && initOptions.adapter === 'default') {
                adapter = loadAdapter();
            } else {
                if (window.Cordova || window.cordova) {
                    adapter = loadAdapter('cordova');
                } else {
                    adapter = loadAdapter();
                }
            }

            if (initOptions) {
                if (typeof initOptions.checkLoginIframe !== 'undefined') {
                    loginIframe.enable = initOptions.checkLoginIframe;
                }

                if (initOptions.checkLoginIframeInterval) {
                    loginIframe.interval = initOptions.checkLoginIframeInterval;
                }

                if (initOptions.onLoad === 'login-required') {
                    kc.loginRequired = true;
                }

                if (initOptions.responseMode) {
                    if (initOptions.responseMode === 'query' || initOptions.responseMode === 'fragment') {
                        kc.responseMode = initOptions.responseMode;
                    } else {
                        throw 'Invalid value for responseMode';
                    }
                }

                if (initOptions.flow) {
                    switch (initOptions.flow) {
                        case 'standard':
                            kc.responseType = 'code';
                            break;
                        case 'implicit':
                            kc.responseType = 'id_token token';
                            break;
                        case 'hybrid':
                            kc.responseType = 'code id_token token';
                            break;
                        default:
                            throw 'Invalid value for flow';
                    }
                    kc.flow = initOptions.flow;
                }

                if (initOptions.timeSkew != null) {
                    kc.timeSkew = initOptions.timeSkew;
                }
            }

            if (!kc.responseMode) {
                kc.responseMode = 'fragment';
            }
            if (!kc.responseType) {
                kc.responseType = 'code';
                kc.flow = 'standard';
            }

            var promise = createPromise();

            var initPromise = createPromise();
            initPromise.promise.success(function() {
                kc.onReady && kc.onReady(kc.authenticated);
                promise.setSuccess(kc.authenticated);
            }).error(function(errorData) {
                promise.setError(errorData);
            });

            var configPromise = loadConfig(config);

            function onLoad() {
                var doLogin = function(prompt) {
                    if (!prompt) {
                        options.prompt = 'none';
                    }
                    kc.login(options).success(function () {
                        initPromise.setSuccess();
                    }).error(function () {
                        initPromise.setError();
                    });
                }

                var options = {};
                switch (initOptions.onLoad) {
                    case 'check-sso':
                        if (loginIframe.enable) {
                            setupCheckLoginIframe().success(function() {
                                checkLoginIframe().success(function () {
                                    doLogin(false);
                                }).error(function () {
                                    initPromise.setSuccess();
                                });
                            });
                        } else {
                            doLogin(false);
                        }
                        break;
                    case 'login-required':
                        doLogin(true);
                        break;
                    default:
                        throw 'Invalid value for onLoad';
                }
            }

            function processInit() {
                var callback = parseCallback(window.location.href);

                if (callback) {
                    return setupCheckLoginIframe().success(function() {
                        window.history.replaceState({}, null, callback.newUrl);
                        processCallback(callback, initPromise);
                    }).error(function (e) {
                        initPromise.setError();
                    });
                } else if (initOptions) {
                    if (initOptions.token && initOptions.refreshToken) {
                        setToken(initOptions.token, initOptions.refreshToken, initOptions.idToken);

                        if (loginIframe.enable) {
                            setupCheckLoginIframe().success(function() {
                                checkLoginIframe().success(function () {
                                    kc.onAuthSuccess && kc.onAuthSuccess();
                                    initPromise.setSuccess();
                                }).error(function () {
                                    setToken(null, null, null);
                                    initPromise.setSuccess();
                                });
                            });
                        } else {
                            kc.updateToken(-1).success(function() {
                                kc.onAuthSuccess && kc.onAuthSuccess();
                                initPromise.setSuccess();
                            }).error(function() {
                                kc.onAuthError && kc.onAuthError();
                                if (initOptions.onLoad) {
                                    onLoad();
                                } else {
                                    initPromise.setError();
                                }
                            });
                        }
                    } else if (initOptions.onLoad) {
                        onLoad();
                    } else {
                        initPromise.setSuccess();
                    }
                } else {
                    initPromise.setSuccess();
                }
            }

            configPromise.success(processInit);
            configPromise.error(function() {
                promise.setError();
            });

            return promise.promise;
        }

        kc.login = function (options) {
            return adapter.login(options);
        }

        kc.createLoginUrl = function(options) {
            var state = createUUID();
            var nonce = createUUID();

            var redirectUri = adapter.redirectUri(options);

            var callbackState = {
                state: state,
                nonce: nonce,
                redirectUri: encodeURIComponent(redirectUri)
            }

            if (options && options.prompt) {
                callbackState.prompt = options.prompt;
            }

            callbackStorage.add(callbackState);

            var action = 'auth';
            if (options && options.action == 'register') {
                action = 'registrations';
            }

            var scope = (options && options.scope) ? "openid " + options.scope : "openid";

            var url = getRealmUrl()
                + '/protocol/openid-connect/' + action
                + '?client_id=' + encodeURIComponent(kc.clientId)
                + '&redirect_uri=' + encodeURIComponent(redirectUri)
                + '&state=' + encodeURIComponent(state)
                + '&nonce=' + encodeURIComponent(nonce)
                + '&response_mode=' + encodeURIComponent(kc.responseMode)
                + '&response_type=' + encodeURIComponent(kc.responseType)
                + '&scope=' + encodeURIComponent(scope);

            if (options && options.prompt) {
                url += '&prompt=' + encodeURIComponent(options.prompt);
            }

            if (options && options.maxAge) {
                url += '&max_age=' + encodeURIComponent(options.maxAge);
            }

            if (options && options.loginHint) {
                url += '&login_hint=' + encodeURIComponent(options.loginHint);
            }

            if (options && options.idpHint) {
                url += '&kc_idp_hint=' + encodeURIComponent(options.idpHint);
            }

            if (options && options.locale) {
                url += '&ui_locales=' + encodeURIComponent(options.locale);
            }

            return url;
        }

        kc.logout = function(options) {
            return adapter.logout(options);
        }

        kc.createLogoutUrl = function(options) {
            var url = getRealmUrl()
                + '/protocol/openid-connect/logout'
                + '?redirect_uri=' + encodeURIComponent(adapter.redirectUri(options, false));

            return url;
        }

        kc.register = function (options) {
            return adapter.register(options);
        }

        kc.createRegisterUrl = function(options) {
            if (!options) {
                options = {};
            }
            options.action = 'register';
            return kc.createLoginUrl(options);
        }

        kc.createAccountUrl = function(options) {
            var url = getRealmUrl()
                + '/account'
                + '?referrer=' + encodeURIComponent(kc.clientId)
                + '&referrer_uri=' + encodeURIComponent(adapter.redirectUri(options));

            return url;
        }

        kc.accountManagement = function() {
            return adapter.accountManagement();
        }

        kc.hasRealmRole = function (role) {
            var access = kc.realmAccess;
            return !!access && access.roles.indexOf(role) >= 0;
        }

        kc.hasResourceRole = function(role, resource) {
            if (!kc.resourceAccess) {
                return false;
            }

            var access = kc.resourceAccess[resource || kc.clientId];
            return !!access && access.roles.indexOf(role) >= 0;
        }

        kc.loadUserProfile = function() {
            var url = getRealmUrl() + '/account';
            var req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.setRequestHeader('Accept', 'application/json');
            req.setRequestHeader('Authorization', 'bearer ' + kc.token);

            var promise = createPromise();

            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        kc.profile = JSON.parse(req.responseText);
                        promise.setSuccess(kc.profile);
                    } else {
                        promise.setError();
                    }
                }
            }

            req.send();

            return promise.promise;
        }

        kc.loadUserInfo = function() {
            var url = getRealmUrl() + '/protocol/openid-connect/userinfo';
            var req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.setRequestHeader('Accept', 'application/json');
            req.setRequestHeader('Authorization', 'bearer ' + kc.token);

            var promise = createPromise();

            req.onreadystatechange = function () {
                if (req.readyState == 4) {
                    if (req.status == 200) {
                        kc.userInfo = JSON.parse(req.responseText);
                        promise.setSuccess(kc.userInfo);
                    } else {
                        promise.setError();
                    }
                }
            }

            req.send();

            return promise.promise;
        }

        kc.isTokenExpired = function(minValidity) {
            if (!kc.tokenParsed || (!kc.refreshToken && kc.flow != 'implicit' )) {
                throw 'Not authenticated';
            }

            if (kc.timeSkew == null) {
                console.info('[KEYCLOAK] Unable to determine if token is expired as timeskew is not set');
                return true;
            }

            var expiresIn = kc.tokenParsed['exp'] - Math.ceil(new Date().getTime() / 1000) + kc.timeSkew;
            if (minValidity) {
                expiresIn -= minValidity;
            }
            return expiresIn < 0;
        }

        kc.updateToken = function(minValidity) {
            var promise = createPromise();

            if (!kc.refreshToken) {
                promise.setError();
                return promise.promise;
            }

            minValidity = minValidity || 5;

            var exec = function() {
                var refreshToken = false;
                if (minValidity == -1) {
                    refreshToken = true;
                    console.info('[KEYCLOAK] Refreshing token: forced refresh');
                } else if (!kc.tokenParsed || kc.isTokenExpired(minValidity)) {
                    refreshToken = true;
                    console.info('[KEYCLOAK] Refreshing token: token expired');
                }

                if (!refreshToken) {
                    promise.setSuccess(false);
                } else {
                    var params = 'grant_type=refresh_token&' + 'refresh_token=' + kc.refreshToken;
                    var url = getRealmUrl() + '/protocol/openid-connect/token';

                    refreshQueue.push(promise);

                    if (refreshQueue.length == 1) {
                        var req = new XMLHttpRequest();
                        req.open('POST', url, true);
                        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                        req.withCredentials = true;

                        if (kc.clientId && kc.clientSecret) {
                            req.setRequestHeader('Authorization', 'Basic ' + btoa(kc.clientId + ':' + kc.clientSecret));
                        } else {
                            params += '&client_id=' + encodeURIComponent(kc.clientId);
                        }

                        var timeLocal = new Date().getTime();

                        req.onreadystatechange = function () {
                            if (req.readyState == 4) {
                                if (req.status == 200) {
                                    console.info('[KEYCLOAK] Token refreshed');

                                    timeLocal = (timeLocal + new Date().getTime()) / 2;

                                    var tokenResponse = JSON.parse(req.responseText);

                                    setToken(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], timeLocal);

                                    kc.onAuthRefreshSuccess && kc.onAuthRefreshSuccess();
                                    for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                                        p.setSuccess(true);
                                    }
                                } else {
                                    console.warn('[KEYCLOAK] Failed to refresh token');

                                    kc.onAuthRefreshError && kc.onAuthRefreshError();
                                    for (var p = refreshQueue.pop(); p != null; p = refreshQueue.pop()) {
                                        p.setError(true);
                                    }
                                }
                            }
                        };

                        req.send(params);
                    }
                }
            }

            if (loginIframe.enable) {
                var iframePromise = checkLoginIframe();
                iframePromise.success(function() {
                    exec();
                }).error(function() {
                    promise.setError();
                });
            } else {
                exec();
            }

            return promise.promise;
        }

        kc.clearToken = function() {
            if (kc.token) {
                setToken(null, null, null);
                kc.onAuthLogout && kc.onAuthLogout();
                if (kc.loginRequired) {
                    kc.login();
                }
            }
        }

        function getRealmUrl() {
            if (kc.authServerUrl.charAt(kc.authServerUrl.length - 1) == '/') {
                return kc.authServerUrl + 'realms/' + encodeURIComponent(kc.realm);
            } else {
                return kc.authServerUrl + '/realms/' + encodeURIComponent(kc.realm);
            }
        }

        function getOrigin() {
            if (!window.location.origin) {
                return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
            } else {
                return window.location.origin;
            }
        }

        function processCallback(oauth, promise) {
            var code = oauth.code;
            var error = oauth.error;
            var prompt = oauth.prompt;

            var timeLocal = new Date().getTime();

            if (error) {
                if (prompt != 'none') {
                    var errorData = { error: error, error_description: oauth.error_description };
                    kc.onAuthError && kc.onAuthError(errorData);
                    promise && promise.setError(errorData);
                } else {
                    promise && promise.setSuccess();
                }
                return;
            } else if ((kc.flow != 'standard') && (oauth.access_token || oauth.id_token)) {
                authSuccess(oauth.access_token, null, oauth.id_token, true);
            }

            if ((kc.flow != 'implicit') && code) {
                var params = 'code=' + code + '&grant_type=authorization_code';
                var url = getRealmUrl() + '/protocol/openid-connect/token';

                var req = new XMLHttpRequest();
                req.open('POST', url, true);
                req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                if (kc.clientId && kc.clientSecret) {
                    req.setRequestHeader('Authorization', 'Basic ' + btoa(kc.clientId + ':' + kc.clientSecret));
                } else {
                    params += '&client_id=' + encodeURIComponent(kc.clientId);
                }

                params += '&redirect_uri=' + oauth.redirectUri;

                req.withCredentials = true;

                req.onreadystatechange = function() {
                    if (req.readyState == 4) {
                        if (req.status == 200) {

                            var tokenResponse = JSON.parse(req.responseText);
                            authSuccess(tokenResponse['access_token'], tokenResponse['refresh_token'], tokenResponse['id_token'], kc.flow === 'standard');
                        } else {
                            kc.onAuthError && kc.onAuthError();
                            promise && promise.setError();
                        }
                    }
                };

                req.send(params);
            }

            function authSuccess(accessToken, refreshToken, idToken, fulfillPromise) {
                timeLocal = (timeLocal + new Date().getTime()) / 2;

                setToken(accessToken, refreshToken, idToken, timeLocal);

                if ((kc.tokenParsed && kc.tokenParsed.nonce != oauth.storedNonce) ||
                    (kc.refreshTokenParsed && kc.refreshTokenParsed.nonce != oauth.storedNonce) ||
                    (kc.idTokenParsed && kc.idTokenParsed.nonce != oauth.storedNonce)) {

                    console.info('[KEYCLOAK] Invalid nonce, clearing token');
                    kc.clearToken();
                    promise && promise.setError();
                } else {
                    if (fulfillPromise) {
                        kc.onAuthSuccess && kc.onAuthSuccess();
                        promise && promise.setSuccess();
                    }
                }
            }

        }

        function loadConfig(url) {
            var promise = createPromise();
            var configUrl;

            if (!config) {
                configUrl = 'keycloak.json';
            } else if (typeof config === 'string') {
                configUrl = config;
            }

            if (configUrl) {
                var req = new XMLHttpRequest();
                req.open('GET', configUrl, true);
                req.setRequestHeader('Accept', 'application/json');

                req.onreadystatechange = function () {
                    if (req.readyState == 4) {
                        if (req.status == 200 || fileLoaded(req)) {
                            var config = JSON.parse(req.responseText);

                            kc.authServerUrl = config['auth-server-url'];
                            kc.realm = config['realm'];
                            kc.clientId = config['resource'];
                            kc.clientSecret = (config['credentials'] || {})['secret'];

                            promise.setSuccess();
                        } else {
                            promise.setError();
                        }
                    }
                };

                req.send();
            } else {
                if (!config['url']) {
                    var scripts = document.getElementsByTagName('script');
                    for (var i = 0; i < scripts.length; i++) {
                        if (scripts[i].src.match(/.*keycloak\.js/)) {
                            config.url = scripts[i].src.substr(0, scripts[i].src.indexOf('/js/keycloak.js'));
                            break;
                        }
                    }
                }

                if (!config.realm) {
                    throw 'realm missing';
                }

                if (!config.clientId) {
                    throw 'clientId missing';
                }

                kc.authServerUrl = config.url;
                kc.realm = config.realm;
                kc.clientId = config.clientId;
                kc.clientSecret = (config.credentials || {}).secret;

                promise.setSuccess();
            }

            return promise.promise;
        }

        function fileLoaded(xhr) {
            return xhr.status == 0 && xhr.responseText && xhr.responseURL.startsWith('file:');
        }

        function setToken(token, refreshToken, idToken, timeLocal) {
            if (kc.tokenTimeoutHandle) {
                clearTimeout(kc.tokenTimeoutHandle);
                kc.tokenTimeoutHandle = null;
            }

            if (refreshToken) {
                kc.refreshToken = refreshToken;
                kc.refreshTokenParsed = decodeToken(refreshToken);
            } else {
                delete kc.refreshToken;
                delete kc.refreshTokenParsed;
            }

            if (idToken) {
                kc.idToken = idToken;
                kc.idTokenParsed = decodeToken(idToken);
            } else {
                delete kc.idToken;
                delete kc.idTokenParsed;
            }

            if (token) {
                kc.token = token;
                kc.tokenParsed = decodeToken(token);
                kc.sessionId = kc.tokenParsed.session_state;
                kc.authenticated = true;
                kc.subject = kc.tokenParsed.sub;
                kc.realmAccess = kc.tokenParsed.realm_access;
                kc.resourceAccess = kc.tokenParsed.resource_access;

                if (timeLocal) {
                    kc.timeSkew = Math.floor(timeLocal / 1000) - kc.tokenParsed.iat;
                }

                if (kc.timeSkew != null) {
                    console.info('[KEYCLOAK] Estimated time difference between browser and server is ' + kc.timeSkew + ' seconds');

                    if (kc.onTokenExpired) {
                        var expiresIn = (kc.tokenParsed['exp'] - (new Date().getTime() / 1000) + kc.timeSkew) * 1000;
                        console.info('[KEYCLOAK] Token expires in ' + Math.round(expiresIn / 1000) + ' s');
                        if (expiresIn <= 0) {
                            kc.onTokenExpired();
                        } else {
                            kc.tokenTimeoutHandle = setTimeout(kc.onTokenExpired, expiresIn);
                        }
                    }
                }
            } else {
                delete kc.token;
                delete kc.tokenParsed;
                delete kc.subject;
                delete kc.realmAccess;
                delete kc.resourceAccess;

                kc.authenticated = false;
            }
        }

        function decodeToken(str) {
            str = str.split('.')[1];

            str = str.replace('/-/g', '+');
            str = str.replace('/_/g', '/');
            switch (str.length % 4)
            {
                case 0:
                    break;
                case 2:
                    str += '==';
                    break;
                case 3:
                    str += '=';
                    break;
                default:
                    throw 'Invalid token';
            }

            str = (str + '===').slice(0, str.length + (str.length % 4));
            str = str.replace(/-/g, '+').replace(/_/g, '/');

            str = decodeURIComponent(escape(atob(str)));

            str = JSON.parse(str);
            return str;
        }

        function createUUID() {
            var s = [];
            var hexDigits = '0123456789abcdef';
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = '4';
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
            s[8] = s[13] = s[18] = s[23] = '-';
            var uuid = s.join('');
            return uuid;
        }

        kc.callback_id = 0;

        function createCallbackId() {
            var id = '<id: ' + (kc.callback_id++) + (Math.random()) + '>';
            return id;

        }

        function parseCallback(url) {
            var oauth = new CallbackParser(url, kc.responseMode).parseUri();
            var oauthState = callbackStorage.get(oauth.state);

            if (oauthState && (oauth.code || oauth.error || oauth.access_token || oauth.id_token)) {
                oauth.redirectUri = oauthState.redirectUri;
                oauth.storedNonce = oauthState.nonce;
                oauth.prompt = oauthState.prompt;

                if (oauth.fragment) {
                    oauth.newUrl += '#' + oauth.fragment;
                }

                return oauth;
            }
        }

        function createPromise() {
            var p = {
                setSuccess: function(result) {
                    p.success = true;
                    p.result = result;
                    if (p.successCallback) {
                        p.successCallback(result);
                    }
                },

                setError: function(result) {
                    p.error = true;
                    p.result = result;
                    if (p.errorCallback) {
                        p.errorCallback(result);
                    }
                },

                promise: {
                    success: function(callback) {
                        if (p.success) {
                            callback(p.result);
                        } else if (!p.error) {
                            p.successCallback = callback;
                        }
                        return p.promise;
                    },
                    error: function(callback) {
                        if (p.error) {
                            callback(p.result);
                        } else if (!p.success) {
                            p.errorCallback = callback;
                        }
                        return p.promise;
                    }
                }
            }
            return p;
        }

        function setupCheckLoginIframe() {
            var promise = createPromise();

            if (!loginIframe.enable) {
                promise.setSuccess();
                return promise.promise;
            }

            if (loginIframe.iframe) {
                promise.setSuccess();
                return promise.promise;
            }

            var iframe = document.createElement('iframe');
            loginIframe.iframe = iframe;

            iframe.onload = function() {
                var realmUrl = getRealmUrl();
                if (realmUrl.charAt(0) === '/') {
                    loginIframe.iframeOrigin = getOrigin();
                } else {
                    loginIframe.iframeOrigin = realmUrl.substring(0, realmUrl.indexOf('/', 8));
                }
                promise.setSuccess();

                setTimeout(check, loginIframe.interval * 1000);
            }

            var src = getRealmUrl() + '/protocol/openid-connect/login-status-iframe.html';
            if (kc.iframeVersion) {
                src = src + '?version=' + kc.iframeVersion;
            }

            iframe.setAttribute('src', src );
            iframe.setAttribute('title', 'keycloak-session-iframe' );
            iframe.style.display = 'none';
            document.body.appendChild(iframe);

            var messageCallback = function(event) {
                if ((event.origin !== loginIframe.iframeOrigin) || (loginIframe.iframe.contentWindow !== event.source)) {
                    return;
                }

                if (!(event.data == 'unchanged' || event.data == 'changed' || event.data == 'error')) {
                    return;
                }


                if (event.data != 'unchanged') {
                    kc.clearToken();
                }

                var callbacks = loginIframe.callbackList.splice(0, loginIframe.callbackList.length);

                for (var i = callbacks.length - 1; i >= 0; --i) {
                    var promise = callbacks[i];
                    if (event.data == 'unchanged') {
                        promise.setSuccess();
                    } else {
                        promise.setError();
                    }
                }
            };

            window.addEventListener('message', messageCallback, false);

            var check = function() {
                checkLoginIframe();
                if (kc.token) {
                    setTimeout(check, loginIframe.interval * 1000);
                }
            };

            return promise.promise;
        }

        function checkLoginIframe() {
            var promise = createPromise();

            if (loginIframe.iframe && loginIframe.iframeOrigin ) {
                var msg = kc.clientId + ' ' + kc.sessionId;
                loginIframe.callbackList.push(promise);
                var origin = loginIframe.iframeOrigin;
                if (loginIframe.callbackList.length == 1) {
                    loginIframe.iframe.contentWindow.postMessage(msg, origin);
                }
            } else {
                promise.setSuccess();
            }

            return promise.promise;
        }

        function loadAdapter(type) {
            if (!type || type == 'default') {
                return {
                    login: function(options) {
                        window.location.href = kc.createLoginUrl(options);
                        return createPromise().promise;
                    },

                    logout: function(options) {
                        window.location.href = kc.createLogoutUrl(options);
                        return createPromise().promise;
                    },

                    register: function(options) {
                        window.location.href = kc.createRegisterUrl(options);
                        return createPromise().promise;
                    },

                    accountManagement : function() {
                        window.location.href = kc.createAccountUrl();
                        return createPromise().promise;
                    },

                    redirectUri: function(options, encodeHash) {
                        if (arguments.length == 1) {
                            encodeHash = true;
                        }

                        if (options && options.redirectUri) {
                            return options.redirectUri;
                        } else if (kc.redirectUri) {
                            return kc.redirectUri;
                        } else {
                            var redirectUri = location.href;
                            if (location.hash && encodeHash) {
                                redirectUri = redirectUri.substring(0, location.href.indexOf('#'));
                                redirectUri += (redirectUri.indexOf('?') == -1 ? '?' : '&') + 'redirect_fragment=' + encodeURIComponent(location.hash.substring(1));
                            }
                            return redirectUri;
                        }
                    }
                };
            }

            if (type == 'cordova') {
                loginIframe.enable = false;
                var cordovaOpenWindowWrapper = function(loginUrl, target, options) {
                    if (window.cordova && window.cordova.InAppBrowser) {
                        // Use inappbrowser for IOS and Android if available
                        return window.cordova.InAppBrowser.open(loginUrl, target, options);
                    } else {
                        return window.open(loginUrl, target, options);
                    }
                };
                return {
                    login: function(options) {
                        var promise = createPromise();

                        var o = 'location=no';
                        if (options && options.prompt == 'none') {
                            o += ',hidden=yes';
                        }

                        var loginUrl = kc.createLoginUrl(options);
                        var ref = cordovaOpenWindowWrapper(loginUrl, '_blank', o);
                        var completed = false;

                        ref.addEventListener('loadstart', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                var callback = parseCallback(event.url);
                                processCallback(callback, promise);
                                ref.close();
                                completed = true;
                            }
                        });

                        ref.addEventListener('loaderror', function(event) {
                            if (!completed) {
                                if (event.url.indexOf('http://localhost') == 0) {
                                    var callback = parseCallback(event.url);
                                    processCallback(callback, promise);
                                    ref.close();
                                    completed = true;
                                } else {
                                    promise.setError();
                                    ref.close();
                                }
                            }
                        });

                        return promise.promise;
                    },

                    logout: function(options) {
                        var promise = createPromise();

                        var logoutUrl = kc.createLogoutUrl(options);
                        var ref = cordovaOpenWindowWrapper(logoutUrl, '_blank', 'location=no,hidden=yes');

                        var error;

                        ref.addEventListener('loadstart', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                ref.close();
                            }
                        });

                        ref.addEventListener('loaderror', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                ref.close();
                            } else {
                                error = true;
                                ref.close();
                            }
                        });

                        ref.addEventListener('exit', function(event) {
                            if (error) {
                                promise.setError();
                            } else {
                                kc.clearToken();
                                promise.setSuccess();
                            }
                        });

                        return promise.promise;
                    },

                    register : function() {
                        var registerUrl = kc.createRegisterUrl();
                        var ref = cordovaOpenWindowWrapper(registerUrl, '_blank', 'location=no');
                        ref.addEventListener('loadstart', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                ref.close();
                            }
                        });
                    },

                    accountManagement : function() {
                        var accountUrl = kc.createAccountUrl();
                        var ref = cordovaOpenWindowWrapper(accountUrl, '_blank', 'location=no');
                        ref.addEventListener('loadstart', function(event) {
                            if (event.url.indexOf('http://localhost') == 0) {
                                ref.close();
                            }
                        });
                    },

                    redirectUri: function(options) {
                        return 'http://localhost';
                    }
                }
            }

            throw 'invalid adapter type: ' + type;
        }

        var LocalStorage = function() {
            if (!(this instanceof LocalStorage)) {
                return new LocalStorage();
            }

            localStorage.setItem('kc-test', 'test');
            localStorage.removeItem('kc-test');

            var cs = this;

            function clearExpired() {
                var time = new Date().getTime();
                for (var i = 0; i < localStorage.length; i++)  {
                    var key = localStorage.key(i);
                    if (key && key.indexOf('kc-callback-') == 0) {
                        var value = localStorage.getItem(key);
                        if (value) {
                            try {
                                var expires = JSON.parse(value).expires;
                                if (!expires || expires < time) {
                                    localStorage.removeItem(key);
                                }
                            } catch (err) {
                                localStorage.removeItem(key);
                            }
                        }
                    }
                }
            }

            cs.get = function(state) {
                if (!state) {
                    return;
                }

                var key = 'kc-callback-' + state;
                var value = localStorage.getItem(key);
                if (value) {
                    localStorage.removeItem(key);
                    value = JSON.parse(value);
                }

                clearExpired();
                return value;
            };

            cs.add = function(state) {
                clearExpired();

                var key = 'kc-callback-' + state.state;
                state.expires = new Date().getTime() + (60 * 60 * 1000);
                localStorage.setItem(key, JSON.stringify(state));
            };
        };

        var CookieStorage = function() {
            if (!(this instanceof CookieStorage)) {
                return new CookieStorage();
            }

            var cs = this;

            cs.get = function(state) {
                if (!state) {
                    return;
                }

                var value = getCookie('kc-callback-' + state);
                setCookie('kc-callback-' + state, '', cookieExpiration(-100));
                if (value) {
                    return JSON.parse(value);
                }
            };

            cs.add = function(state) {
                setCookie('kc-callback-' + state.state, JSON.stringify(state), cookieExpiration(60));
            };

            cs.removeItem = function(key) {
                setCookie(key, '', cookieExpiration(-100));
            };

            var cookieExpiration = function (minutes) {
                var exp = new Date();
                exp.setTime(exp.getTime() + (minutes*60*1000));
                return exp;
            };

            var getCookie = function (key) {
                var name = key + '=';
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return '';
            };

            var setCookie = function (key, value, expirationDate) {
                var cookie = key + '=' + value + '; '
                    + 'expires=' + expirationDate.toUTCString() + '; ';
                document.cookie = cookie;
            }
        };

        function createCallbackStorage() {
            try {
                return new LocalStorage();
            } catch (err) {
            }

            return new CookieStorage();
        }

        var CallbackParser = function(uriToParse, responseMode) {
            if (!(this instanceof CallbackParser)) {
                return new CallbackParser(uriToParse, responseMode);
            }
            var parser = this;

            var initialParse = function() {
                var baseUri = null;
                var queryString = null;
                var fragmentString = null;

                var questionMarkIndex = uriToParse.indexOf("?");
                var fragmentIndex = uriToParse.indexOf("#", questionMarkIndex + 1);
                if (questionMarkIndex == -1 && fragmentIndex == -1) {
                    baseUri = uriToParse;
                } else if (questionMarkIndex != -1) {
                    baseUri = uriToParse.substring(0, questionMarkIndex);
                    queryString = uriToParse.substring(questionMarkIndex + 1);
                    if (fragmentIndex != -1) {
                        fragmentIndex = queryString.indexOf("#");
                        fragmentString = queryString.substring(fragmentIndex + 1);
                        queryString = queryString.substring(0, fragmentIndex);
                    }
                } else {
                    baseUri = uriToParse.substring(0, fragmentIndex);
                    fragmentString = uriToParse.substring(fragmentIndex + 1);
                }

                return { baseUri: baseUri, queryString: queryString, fragmentString: fragmentString };
            }

            var parseParams = function(paramString) {
                var result = {};
                var params = paramString.split('&');
                for (var i = 0; i < params.length; i++) {
                    var p = params[i].split('=');
                    var paramName = decodeURIComponent(p[0]);
                    var paramValue = decodeURIComponent(p[1]);
                    result[paramName] = paramValue;
                }
                return result;
            }

            var handleQueryParam = function(paramName, paramValue, oauth) {
                var supportedOAuthParams = [ 'code', 'state', 'error', 'error_description' ];

                for (var i = 0 ; i< supportedOAuthParams.length ; i++) {
                    if (paramName === supportedOAuthParams[i]) {
                        oauth[paramName] = paramValue;
                        return true;
                    }
                }
                return false;
            }


            parser.parseUri = function() {
                var parsedUri = initialParse();

                var queryParams = {};
                if (parsedUri.queryString) {
                    queryParams = parseParams(parsedUri.queryString);
                }

                var oauth = { newUrl: parsedUri.baseUri };
                for (var param in queryParams) {
                    switch (param) {
                        case 'redirect_fragment':
                            oauth.fragment = queryParams[param];
                            break;
                        default:
                            if (responseMode != 'query' || !handleQueryParam(param, queryParams[param], oauth)) {
                                oauth.newUrl += (oauth.newUrl.indexOf('?') == -1 ? '?' : '&') + param + '=' + encodeURIComponent(queryParams[param]);
                            }
                            break;
                    }
                }

                if (responseMode === 'fragment') {
                    var fragmentParams = {};
                    if (parsedUri.fragmentString) {
                        fragmentParams = parseParams(parsedUri.fragmentString);
                    }
                    for (var param in fragmentParams) {
                        oauth[param] = fragmentParams[param];
                    }
                }

                return oauth;
            }
        }

    }

    if ( typeof module === "object" && module && typeof module.exports === "object" ) {
        module.exports = Keycloak;
    } else {
        window.Keycloak = Keycloak;

        if ( true ) {
            !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () { return Keycloak; }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        }
    }
})( window );

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/app/shared/services/keycloak/keycloak.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeycloakService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keycloak__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keycloak___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__keycloak__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
 * Copyright 2017 Red Hat, Inc. and/or its affiliates
 * and other contributors as indicated by the @author tags.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If using a local keycloak.js, uncomment this import.  With keycloak.js fetched
// from the server, you get a compile-time warning on use of the Keycloak()
// method below.  I'm not sure how to fix this, but it's certainly cleaner
// to get keycloak.js from the server.
//

var KeycloakService = /** @class */ (function () {
    function KeycloakService() {
    }
    KeycloakService_1 = KeycloakService;
    /**
     * Configure and initialize the Keycloak adapter.
     *
     * @param configOptions Optionally, a path to keycloak.json, or an object containing
     *                      url, realm, and clientId.
     * @param adapterOptions Optional initiaization options.  See javascript adapter docs
     *                       for details.
     * @returns {Promise<T>}
     */
    KeycloakService.init = function (configOptions, initOptions) {
        KeycloakService_1.keycloakAuth = __WEBPACK_IMPORTED_MODULE_1__keycloak__(configOptions);
        return new Promise(function (resolve, reject) {
            KeycloakService_1.keycloakAuth.init(initOptions)
                .success(function () {
                resolve();
            })
                .error(function (errorData) {
                reject(errorData);
            });
        });
    };
    /**
     * Expose the underlying Keycloak javascript adapter.
     */
    KeycloakService.prototype.client = function () {
        return KeycloakService_1.keycloakAuth;
    };
    KeycloakService.prototype.authenticated = function () {
        return KeycloakService_1.keycloakAuth.authenticated;
    };
    KeycloakService.prototype.login = function (options) {
        KeycloakService_1.keycloakAuth.login(options);
    };
    KeycloakService.prototype.logout = function (redirectUri) {
        KeycloakService_1.keycloakAuth.logout({ redirectUri: redirectUri });
    };
    KeycloakService.prototype.account = function () {
        KeycloakService_1.keycloakAuth.accountManagement();
    };
    KeycloakService.prototype.authServerUrl = function () {
        return KeycloakService_1.keycloakAuth.authServerUrl;
    };
    KeycloakService.prototype.realm = function () {
        return KeycloakService_1.keycloakAuth.realm;
    };
    KeycloakService.prototype.getToken = function () {
        return new Promise(function (resolve, reject) {
            if (KeycloakService_1.keycloakAuth.token) {
                KeycloakService_1.keycloakAuth
                    .updateToken(5)
                    .success(function () {
                    resolve(KeycloakService_1.keycloakAuth.token);
                })
                    .error(function () {
                    reject('Failed to refresh token');
                });
            }
            else {
                reject('Not loggen in');
            }
        });
    };
    KeycloakService = KeycloakService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], KeycloakService);
    return KeycloakService;
    var KeycloakService_1;
}());



/***/ }),

/***/ "./src/app/shared/services/ontology.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OntologyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OntologyService = /** @class */ (function () {
    function OntologyService(http) {
        this.http = http;
    }
    OntologyService.prototype.professions = function (text) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of([
            'Administration, ekonomi, juridik',
            'Bygg och anläggning',
            'Chefer och verksamhetsledare',
            'Data/IT',
            'Försäljning, inköp, marknadsföring',
            'Hantverksyrken',
            'Hotell, restaurang, storhushåll',
            'Hälso- och sjukvård',
            'Industriell tillverkning',
            'Installation, drift, underhåll',
            'Kropps- och skönhetsvård',
            'Kultur, media, design',
            'Militärt arbete',
            'Naturbruk',
            'Naturvetenskapligt arbete',
            'Pedagogiskt arbete',
            'Sanering och renhållning',
            'Socialt arbete',
            'Säkerhetsarbete',
            'Tekniskt arbete',
            'Transport'
        ]);
    };
    OntologyService.prototype.competences = function (text) {
        var url = "http://ontologi.arbetsformedlingen.se/ontology/v1/concept?limit=10&filter=" + text;
        return this.http
            .get(url)
            .map(function (data) { return data.map(function (row) { return row.name; }); });
    };
    OntologyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], OntologyService);
    return OntologyService;
}());



/***/ }),

/***/ "./src/app/shared/services/organisation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrganisationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__keycloak_keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrganisationService = /** @class */ (function () {
    function OrganisationService(idp, http) {
        this.idp = idp;
        this.http = http;
        this.ws = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].serviceProviderUrl;
    }
    OrganisationService.prototype.getMyOrganisation = function () {
        var userId = this.idp.client().tokenParsed.sub;
        var url = this.ws + "/organisation/v1/member/" + userId;
        return this.http.get(url, this.createHeader());
    };
    OrganisationService.prototype.checkIfOrganisationNameIsAvailable = function (name) {
        return true;
    };
    OrganisationService.prototype.create = function (organisation) {
        var url = this.ws + "/organisation/v1";
        return this.http.post(url, organisation, this.createHeader());
    };
    OrganisationService.prototype.update = function (organisation) {
        var url = this.ws + "/organisation/v1";
        return this.http.put(url, organisation, this.createHeader());
    };
    OrganisationService.prototype.delete = function (organisation) {
        var url = this.ws + "/organisation/v1/" + organisation.identifier;
        return this.http.delete(url, this.createHeader());
    };
    OrganisationService.prototype.requestMembership = function (organisation) {
        var url = this.ws + "/organisation/v1/" + organisation.identifier + "/join-request";
        var userRequest = {
            name: this.idp.client().tokenParsed['name'],
            keycloakId: this.idp.client().tokenParsed.sub
        };
        console.log('requestMembership: ', organisation, userRequest);
        return this.http.post(url, userRequest, this.createHeader());
    };
    OrganisationService.prototype.findNameOrganisations = function (name) {
        var url = this.ws + "/organisation/v1/find?name=" + name;
        return this.http.get(url, this.createHeader());
    };
    OrganisationService.prototype.findOrganisationMembers = function (organisation, accepted) {
        var url = this.ws + "/organisation/v1/" + organisation.identifier + "/members?accepted=" + accepted;
        return this.http.get(url, this.createHeader());
    };
    OrganisationService.prototype.acceptOrRejectOrganisationMember = function (organisation, member, accepted) {
        var url = this.ws + "/organisation/v1/" + organisation.identifier + "/member-accept/" + member.keycloakId + "?accepted=" + accepted;
        return this.http.put(url, '', this.createHeader());
    };
    OrganisationService.prototype.removeOrganisationMember = function (organisation, member) {
        var url = this.ws + "/organisation/v1/" + organisation.identifier + "/member/" + member.keycloakId;
        return this.http.delete(url, this.createHeader());
    };
    OrganisationService.prototype.createHeader = function () {
        return {
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + this.idp.client().token
            })
        };
    };
    OrganisationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__keycloak_keycloak_service__["a" /* KeycloakService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], OrganisationService);
    return OrganisationService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__keycloak_keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(idp) {
        var _this = this;
        this.idp = idp;
        if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].useKeycloak) {
            __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].interval(30000)
                .subscribe(function (i) {
                if (_this.idp.authenticated()) {
                    _this.idp.client().updateToken(30)
                        .error(function () { return console.log('Failed to refresh the token, or the session has expired'); });
                }
            });
            this.idp.client().onAuthSuccess = function () {
                console.log('onAuthSuccess');
            };
            this.idp.client().onAuthRefreshSuccess = function () {
                console.log('onAuthRefreshSuccess');
            };
            this.idp.client().onAuthRefreshError = function () {
                console.log('onAuthRefreshError');
            };
            this.idp.client().onReady = function (authenticated) {
                console.log('onReady ', authenticated);
            };
            this.idp.client().onTokenExpired = function () {
                console.log('onTokenExpired');
            };
        }
    }
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__keycloak_keycloak_service__["a" /* KeycloakService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/showcase/showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div>\r\n    <p class=\"showcase-description text-center\">Latest applications that have been built with our APIs, SDKs, and other developer tools.</p>\r\n    <p class=\"showcase-description text-center\">Built an application using our assets?\r\n      <a href=\"mailto:jobtechdev@arbetsformedlingen.se\">Email us</a> and tell us about it!</p>\r\n  </div>\r\n\r\n  <div class=\"card-group\" *ngIf=\"items | async; let items; else loading\">\r\n\r\n    <div *ngFor=\"let item of items\" class=\"card mb-4\" (click)=\"goToUrl(item.link)\">\r\n      <img class=\"card-img-top\" [src]=\"item.image\" [alt]=\"item.title\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{ item.title }}</h5>\r\n        <p class=\"card-text\">{{ item.details }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #loading>Laddar ...</ng-template>\r\n"

/***/ }),

/***/ "./src/app/showcase/showcase.component.scss":
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n@font-face {\n  font-style: normal;\n  font-weight: 300;\n  font-family: 'Open Sans', sans-serif; }\nbody {\n  font-family: 'Open Sans', sans-serif;\n  background-color: #F2F4F5; }\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.2;\n  color: inherit; }\nh1, .h1 {\n  font-size: 2.5rem; }\nh2, .h2 {\n  font-size: 2rem; }\nh3, .h3 {\n  font-size: 1.75rem; }\nh4, .h4 {\n  font-size: 1.5rem; }\nh5, .h5 {\n  font-size: 1.25rem; }\nh6, .h6 {\n  font-size: 1rem; }\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300; }\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n  line-height: 1.2; }\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1); }\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: 400; }\nmark,\n.mark {\n  padding: 0.2em;\n  background-color: #fcf8e3; }\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n.list-inline {\n  padding-left: 0;\n  list-style: none; }\n.list-inline-item {\n  display: inline-block; }\n.list-inline-item:not(:last-child) {\n    margin-right: 0.5rem; }\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase; }\n.blockquote {\n  margin-bottom: 1rem;\n  font-size: 1.25rem; }\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  color: #6c757d; }\n.blockquote-footer::before {\n    content: \"\\2014 \\00A0\"; }\nhtml, body {\n  height: 100%;\n  margin: 0; }\n.card-group .card {\n  margin-right: 1.2em;\n  cursor: pointer;\n  min-width: 15rem; }\n@media (min-width: 576px) {\n  .card-group .card {\n    max-width: 15rem; } }\n.card-img-top {\n  max-width: 15rem; }\n.card-group .card {\n  -webkit-transition: all 200ms ease-in;\n  -webkit-transform: scale(1);\n  -ms-transition: all 200ms ease-in;\n  -ms-transform: scale(1);\n  -moz-transition: all 200ms ease-in;\n  -moz-transform: scale(1);\n  transition: all 200ms ease-in;\n  transform: scale(1); }\n.card-group .card:hover {\n  -webkit-box-shadow: 0px 0px 2em #000000;\n          box-shadow: 0px 0px 2em #000000;\n  z-index: 2;\n  -webkit-transition: all 200ms ease-in;\n  -webkit-transform: scale(1.05);\n  -ms-transition: all 200ms ease-in;\n  -ms-transform: scale(1.05);\n  -moz-transition: all 200ms ease-in;\n  -moz-transform: scale(1.05);\n  transition: all 200ms ease-in;\n  transform: scale(1.05); }\n"

/***/ }),

/***/ "./src/app/showcase/showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__ = __webpack_require__("./src/app/shared/services/content.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseComponent = /** @class */ (function () {
    function ShowcaseComponent(contentService) {
        this.contentService = contentService;
        this.items = this.contentService.getShowcases();
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
    };
    ShowcaseComponent.prototype.goToUrl = function (url) {
        // window.location.href=url;
        window.open(url, '_blank');
    };
    ShowcaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-showcase',
            template: __webpack_require__("./src/app/showcase/showcase.component.html"),
            styles: [__webpack_require__("./src/app/showcase/showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_content_service__["a" /* ContentService */]])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    keycloak: {
        url: 'http://localhost:8080/auth',
        realm: 'jobtechdev',
        clientId: 'job-tech-dev'
    },
    serviceProviderUrl: 'http://localhost:8082',
    useKeycloak: false,
    googleAnalytics: 'UA-114390036-2'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_services_keycloak_keycloak_service__ = __webpack_require__("./src/app/shared/services/keycloak/keycloak.service.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* enableProdMode */])();
}
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].useKeycloak) {
    __WEBPACK_IMPORTED_MODULE_4__app_shared_services_keycloak_keycloak_service__["a" /* KeycloakService */].init(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].keycloak, { onLoad: 'check-sso' })
        .then(function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
            .catch(function (err) { return console.error('Failed to start application, ', err); });
    })
        .catch(function (e) {
        console.error('Error in bootstrap: ' + JSON.stringify(e));
        throw e;
    });
}
else {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map