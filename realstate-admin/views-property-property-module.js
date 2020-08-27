(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-property-property-module"],{

/***/ "./src/app/views/property/property-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/property/property-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PropertyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyRoutingModule", function() { return PropertyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./property.component */ "./src/app/views/property/property.component.ts");




var routes = [
    {
        path: '',
        component: _property_component__WEBPACK_IMPORTED_MODULE_3__["PropertyComponent"]
    }
];
var PropertyRoutingModule = /** @class */ (function () {
    function PropertyRoutingModule() {
    }
    PropertyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PropertyRoutingModule);
    return PropertyRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/property/property.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/property/property.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Properties List\n        </div>\n        <div class=\"card-body\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link active\" id=\"normal-tab\" data-toggle=\"tab\" href=\"#user\" role=\"tab\" aria-controls=\"user\" aria-selected=\"true\">Property</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" id=\"professional-tab\" data-toggle=\"tab\" href=\"#professional\" role=\"tab\" aria-controls=\"professional\" aria-selected=\"false\">Professional Property</a>\n              </li>\n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n                <div class=\"tab-pane fade show active\" id=\"user\" role=\"tabpanel\" aria-labelledby=\"normal-tab\">\n                    <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n                      <thead>\n                        <tr>\n                          <th>S.No.</th>\n                          <th>User</th>\n                          <th>Email</th>\n                          <th>Title</th>\n                          <th>Created On</th>\n                          <th>Action</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor = \"let property of normalProperties; let i = index;\">\n                          <td>{{i+1}}</td>\n                          <td>{{property?.userId?.fullName}}</td>\n                          <td>{{property?.userId?.email}}</td>\n                          <td>\n                            <span *ngIf=\"property.title.length>30\">\n                              {{property?.title.substring(0, 30)+'.....'}}\n                            </span>\n                            <span *ngIf=\"property.title.length<30\">\n                              {{property?.title}}\n                            </span>\n                          </td>\n                          <td>{{property?.created | date: 'dd/MM/yyyy'}}</td>\n                          <td>\n                            <a class=\"btn btn-primary\" [routerLink]= \"['/viewproperty', property._id]\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View</a>\n                            <a class=\"btn btn-primary\" [routerLink]= \"['/editproperty', property._id]\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</a>\n                            <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteProperty(property._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                </div>\n                <div class=\"tab-pane fade\" id=\"professional\" role=\"tabpanel\" aria-labelledby=\"professional-tab\">\n                    <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\" >\n                        <thead>\n                            <tr>\n                              <th>S.No.</th>\n                              <th>User</th>\n                              <th>Email</th>\n                              <th>Title</th>\n                              <th>Created On</th>\n                              <th>Action</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor = \"let property of profProperties; let i = index;\">\n                              <td>{{i+1}}</td>\n                              <td>{{property?.professionalUserId?.fullName}}</td>\n                              <td>{{property?.professionalUserId?.email}}</td>\n                              <td>\n                                <span *ngIf=\"property.title.length>30\">\n                                  {{property?.title.substring(0, 30)+'.....'}}\n                                </span>\n                                <span *ngIf=\"property.title.length<30\">\n                                  {{property?.title}}\n                                </span>\n                              </td>\n                              <td>{{property?.created | date: 'dd/MM/yyyy'}}</td>\n                              <td>\n                                <a class=\"btn btn-primary\" [routerLink]= \"['/editproperty', property._id]\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</a>\n                                <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteProperty(property._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button>\n                              </td>\n                            </tr>\n                          </tbody>\n                      </table>\n                </div>\n              </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\n"

/***/ }),

/***/ "./src/app/views/property/property.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/property/property.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb3BlcnR5L3Byb3BlcnR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/property/property.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/property/property.component.ts ***!
  \******************************************************/
/*! exports provided: PropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyComponent", function() { return PropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _property_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./property.service */ "./src/app/views/property/property.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PropertyComponent = /** @class */ (function () {
    function PropertyComponent(propertyService) {
        this.propertyService = propertyService;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.successmsg = "";
        this.errormsg = "";
        this.normalProperties = [];
        this.profProperties = [];
        this.loading = false;
    }
    PropertyComponent.prototype.ngOnInit = function () {
        this.normalPropertyList();
        this.profPropertyList();
    };
    PropertyComponent.prototype.normalPropertyList = function () {
        var _this = this;
        this.loading = true;
        this.propertyService.getNormalProperty().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.normalProperties = res.Data;
                // this.dtTrigger.next();
            }
            else {
                _this.errormsg = res.message;
            }
        });
    };
    PropertyComponent.prototype.profPropertyList = function () {
        var _this = this;
        this.loading = true;
        this.propertyService.getProfessionalProperty().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.profProperties = res.Data;
                _this.dtTrigger.next();
            }
            else {
                _this.errormsg = res.message;
            }
        });
    };
    PropertyComponent.prototype.deleteProperty = function (id) {
        var _this = this;
        if (id && id != null) {
            this.loading = true;
            var confirmStatus = confirm("Do you really want to delete this category?");
            if (confirmStatus) {
                this.loading = true;
                var data = {
                    propertyId: id
                };
                this.propertyService.deleteProperty(data).subscribe(function (res) {
                    if (res.response_code == 200) {
                        _this.loading = false;
                        // this.propertyList();
                    }
                });
            }
        }
    };
    PropertyComponent.prototype.ngOnDestroy = function () {
        this.dtTrigger.unsubscribe();
    };
    PropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-property',
            template: __webpack_require__(/*! ./property.component.html */ "./src/app/views/property/property.component.html"),
            styles: [__webpack_require__(/*! ./property.component.scss */ "./src/app/views/property/property.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_property_service__WEBPACK_IMPORTED_MODULE_2__["PropertyService"]])
    ], PropertyComponent);
    return PropertyComponent;
}());



/***/ }),

/***/ "./src/app/views/property/property.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/property/property.module.ts ***!
  \***************************************************/
/*! exports provided: PropertyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyModule", function() { return PropertyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _property_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./property-routing.module */ "./src/app/views/property/property-routing.module.ts");
/* harmony import */ var _property_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./property.component */ "./src/app/views/property/property.component.ts");
/* harmony import */ var _property_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property.service */ "./src/app/views/property/property.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");










var PropertyModule = /** @class */ (function () {
    function PropertyModule() {
    }
    PropertyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_property_component__WEBPACK_IMPORTED_MODULE_5__["PropertyComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _property_routing_module__WEBPACK_IMPORTED_MODULE_4__["PropertyRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"].forRoot({})
            ],
            providers: [_property_service__WEBPACK_IMPORTED_MODULE_6__["PropertyService"]]
        })
    ], PropertyModule);
    return PropertyModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-property-property-module.js.map