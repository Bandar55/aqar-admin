(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-viewproperty-viewproperty-module"],{

/***/ "./src/app/views/viewproperty/viewproperty.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/viewproperty/viewproperty.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  viewproperty works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/viewproperty/viewproperty.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/viewproperty/viewproperty.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3ZpZXdwcm9wZXJ0eS92aWV3cHJvcGVydHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/viewproperty/viewproperty.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/viewproperty/viewproperty.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewpropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpropertyComponent", function() { return ViewpropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _property_property_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../property/property.service */ "./src/app/views/property/property.service.ts");




var ViewpropertyComponent = /** @class */ (function () {
    function ViewpropertyComponent(activatedRoute, propertyService) {
        this.activatedRoute = activatedRoute;
        this.propertyService = propertyService;
    }
    ViewpropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.propertyId = params['propertyId'];
            if (_this.propertyId) {
                _this.getPropertyDetails(_this.propertyId);
            }
        });
    };
    ViewpropertyComponent.prototype.getPropertyDetails = function (id) {
    };
    ViewpropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewproperty',
            template: __webpack_require__(/*! ./viewproperty.component.html */ "./src/app/views/viewproperty/viewproperty.component.html"),
            styles: [__webpack_require__(/*! ./viewproperty.component.scss */ "./src/app/views/viewproperty/viewproperty.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _property_property_service__WEBPACK_IMPORTED_MODULE_3__["PropertyService"]])
    ], ViewpropertyComponent);
    return ViewpropertyComponent;
}());



/***/ }),

/***/ "./src/app/views/viewproperty/viewproperty.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/viewproperty/viewproperty.module.ts ***!
  \***********************************************************/
/*! exports provided: viewpropertyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewpropertyModule", function() { return viewpropertyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewproperty_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewproperty.component */ "./src/app/views/viewproperty/viewproperty.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");








var routes = [
    {
        path: '',
        component: _viewproperty_component__WEBPACK_IMPORTED_MODULE_5__["ViewpropertyComponent"]
    }
];
var viewpropertyModule = /** @class */ (function () {
    function viewpropertyModule() {
    }
    viewpropertyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_viewproperty_component__WEBPACK_IMPORTED_MODULE_5__["ViewpropertyComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_7__["NgxLoadingModule"].forRoot({})
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        })
    ], viewpropertyModule);
    return viewpropertyModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-viewproperty-viewproperty-module.js.map