(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-editproperty-editproperty-module"],{

/***/ "./src/app/views/editproperty/editproperty-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/editproperty/editproperty-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditpropertyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpropertyRoutingModule", function() { return EditpropertyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editproperty_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editproperty.component */ "./src/app/views/editproperty/editproperty.component.ts");




var routes = [
    {
        path: '',
        component: _editproperty_component__WEBPACK_IMPORTED_MODULE_3__["EditpropertyComponent"]
    }
];
var EditpropertyRoutingModule = /** @class */ (function () {
    function EditpropertyRoutingModule() {
    }
    EditpropertyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EditpropertyRoutingModule);
    return EditpropertyRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/editproperty/editproperty.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/editproperty/editproperty.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n     <div class=\"col-lg-12\">\n        <div class=\"card\">\n           <div class=\"card-header\">\n              <i class=\"fa fa-align-justify\"></i>Edit Property\n           </div>\n           <div class=\"card-body\">\n              <form [formGroup]=\"propertyForm\" (ngSubmit)=\"onPropertySubmit()\">\n              <div class=\"\">\n                 <div class=\"col-sm-12\">\n                    <div class=\"cards\">\n                       <div class=\"card-body\">\n                          <div class=\"\">\n                             <div class=\"form-group col-sm-6\">\n                                <label>Property title</label>\n                                <input formControlName =\"title\" type=\"text\" class=\"form-control\" id=\"property\"\n                                   [class.is-invalid]=\"propertyForm.get('title').invalid &&propertyForm.get('title').touched\" \n                                   required>\n                                <small [class.d-none]=\"propertyForm.get('title').valid || propertyForm.get('title').untouched\" class=\"text-danger\">Property title is required</small>\n                             </div>\n                          </div>\n                          <div class=\"\">\n                             <div class=\"form-group col-md-12\"><label>Purpose</label></div>\n                             <div class=\" row form-group col-md-6\">\n                                <div class=\"form-group col-md-4\">\n                                   <label class=\"radio-inline\"  >\n                                   <input type=\"radio\" formControlName=\"purpose\" value=\"commercial\">Commercial\n                                   </label>\n                                </div>\n                                <div class=\"form-group col-md-4\">\n                                   <label class=\"radio-inline\">\n                                   <input type=\"radio\" formControlName=\"purpose\" value=\"residential\">Residential\n                                   </label>\n                                </div>\n                                <div class=\"form-group col-md-4\">\n                                   <label class=\"radio-inline\"  >\n                                   <input type=\"radio\" formControlName=\"purpose\" value=\"both\">Both\n                                   </label>\n                                </div>\n                             </div>\n                          </div>\n                          <div class=\" row form-group col-md-12\">\n                             <div class=\"col-md-12\"><label>Extras</label></div>\n                             <div class=\"col-md-4\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\"  formControlName=\"garden\">Garden\n                                </label>\n                             </div>\n                             <div class=\"col-md-4\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"balcony\">Balcony\n                                </label>\n                             </div>\n                             <div class=\"col-md-4\">\n                                <label class=\"radio-inline\">\n                                <input type=\"checkbox\" formControlName=\"lift\">Lift\n                                </label>\n                             </div>\n                             <div class=\"col-md-4\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"duplex\">Duplex\n                                </label>\n                             </div>\n                             <div class=\"col-md-4\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"aircondition\">Aircondition\n                                </label>\n                             </div>\n                             <div class=\"col-md-4\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"furnished\">Furnished\n                                </label>\n                             </div>\n                             <div class=\"col-md-4\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"modularKitchen\">ModularKitchen\n                                </label>\n                             </div>\n                             <div class=\"col-md-4\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"store\">Store\n                                </label>\n                             </div>\n                          </div>\n                          <div class=\"row form-group col-md-12\">\n                             <div class=\"col-md-12\"><label>Specification</label></div>\n                             <div class=\"col-md-12\"><label>Indoor</label></div>\n                             <div class=\"col-md-3\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"indoor1\" >Option1\n                                </label>\n                             </div>\n                             <div class=\"col-md-3\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"indoor2\">Option2\n                                </label>\n                             </div>\n                             <div class=\"col-md-3\">\n                                <label class=\"radio-inline\">\n                                <input type=\"checkbox\" formControlName=\"indoor3\">Option3\n                                </label>\n                             </div>\n                             <div class=\"col-md-3\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"indoor4\">Option4\n                                </label>\n                             </div>\n                             <div class=\"col-md-12\"><label>Outdoor</label></div>\n                             <div class=\"col-md-3\">\n                                <label class=\"radio-inline\" >\n                                <input type=\"checkbox\" formControlName=\"outdoor1\">Option1\n                                </label>\n                             </div>\n                             <div class=\"col-md-3\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"outdoor2\">Option2\n                                </label>\n                             </div>\n                             <div class=\"col-md-3\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"outdoor3\">Option3\n                                </label>\n                             </div>\n                             <div class=\"col-md-3\">\n                                <label class=\"radio-inline\"  >\n                                <input type=\"checkbox\" formControlName=\"outdoor4\">Option4\n                                </label>\n                             </div>\n                          </div>\n                          <button type=\"submit\" class=\"btn btn-primary fuse-ripple-ready\" >Submit</button>           \n                       </div>\n                       <!--/.col-->\n                    </div>\n                    <!--/.row-->\n                 </div>\n              </div>\n              </form>\n           </div>\n        </div>\n     </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/editproperty/editproperty.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/editproperty/editproperty.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2VkaXRwcm9wZXJ0eS9lZGl0cHJvcGVydHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/editproperty/editproperty.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/editproperty/editproperty.component.ts ***!
  \**************************************************************/
/*! exports provided: EditpropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpropertyComponent", function() { return EditpropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _property_property_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../property/property.service */ "./src/app/views/property/property.service.ts");





var EditpropertyComponent = /** @class */ (function () {
    function EditpropertyComponent(fb, activatedRoute, propertyService, router) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.propertyService = propertyService;
        this.router = router;
        this.propData = {};
        this.propertyForm = this.fb.group({
            title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            purpose: [''],
            garden: [''],
            balcony: [''],
            lift: [''],
            duplex: [''],
            aircondition: [''],
            furnished: [''],
            store: [''],
            modularKitchen: [''],
            indoor1: [''],
            indoor2: [''],
            indoor3: [''],
            indoor4: [''],
            outdoor1: [''],
            outdoor2: [''],
            outdoor3: [''],
            outdoor4: [''],
        });
    }
    EditpropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.propertyId = params['id'];
            if (_this.propertyId) {
                _this.getPropertyDetails(_this.propertyId);
            }
        });
    };
    EditpropertyComponent.prototype.getPropertyDetails = function (id) {
        var _this = this;
        this.propertyService.getPropertyDetails(id).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.propData = res.Data;
                _this.indoorData = res.Data.indoor.split(',');
                _this.outdoorData = res.Data.outdoor.split(',');
                _this.propertyForm.patchValue({
                    title: _this.propData.title,
                    purpose: _this.propData.purpose,
                    garden: _this.propData.garden,
                    balcony: _this.propData.balcony,
                    lift: _this.propData.lift,
                    duplex: _this.propData.duplex,
                    aircondition: _this.propData.aircondition,
                    furnished: _this.propData.furnished,
                    modularKitchen: _this.propData.modularKitchen,
                    store: _this.propData.store,
                    indoor1: _this.indoorData[0],
                    indoor2: _this.indoorData[1],
                    indoor3: _this.indoorData[2],
                    indoor4: _this.indoorData[3],
                    outdoor1: _this.outdoorData[0],
                    outdoor2: _this.outdoorData[1],
                    outdoor3: _this.outdoorData[2],
                    outdoor4: _this.outdoorData[3]
                });
            }
        });
    };
    EditpropertyComponent.prototype.onPropertySubmit = function () {
        var _this = this;
        var arrayIndoor = [
            {
                indoor: this.propertyForm.value.indoor1 ? "OPTION1" : '',
            },
            {
                indoor: this.propertyForm.value.indoor2 ? "OPTION2" : '',
            },
            {
                indoor: this.propertyForm.value.indoor3 ? "OPTION3" : '',
            },
            {
                indoor: this.propertyForm.value.indoor4 ? "OPTION4" : '',
            }
        ];
        var arrayOutdoor = [
            {
                outdoor: this.propertyForm.value.outdoor1 ? "OPTION1" : '',
            },
            {
                outdoor: this.propertyForm.value.outdoor2 ? "OPTION2" : '',
            },
            {
                outdoor: this.propertyForm.value.outdoor3 ? "OPTION3" : '',
            },
            {
                outdoor: this.propertyForm.value.outdoor4 ? "OPTION4" : '',
            }
        ];
        var indoor = arrayIndoor.map(function (item) {
            return item.indoor;
        }).join(",");
        var outdoor = arrayOutdoor.map(function (item) {
            return item.outdoor;
        }).join(",");
        var data = {
            title: this.propertyForm.value.title,
            purpose: this.propertyForm.value.purpose,
            garden: this.propertyForm.value.garden,
            balcony: this.propertyForm.value.balcony,
            lift: this.propertyForm.value.lift,
            duplex: this.propertyForm.value.duplex,
            aircondition: this.propertyForm.value.aircondition,
            furnished: this.propertyForm.value.furnished,
            modularKitchen: this.propertyForm.value.modularKitchen,
            store: this.propertyForm.value.store,
            indoor: indoor,
            outdoor: outdoor,
            propertyId: this.propertyId
        };
        this.propertyService.editProperty(data).subscribe(function (res) {
            console.log(res);
            if (res.response_code == 200) {
                _this.router.navigate['property'];
            }
        });
    };
    EditpropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editproperty',
            template: __webpack_require__(/*! ./editproperty.component.html */ "./src/app/views/editproperty/editproperty.component.html"),
            styles: [__webpack_require__(/*! ./editproperty.component.scss */ "./src/app/views/editproperty/editproperty.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _property_property_service__WEBPACK_IMPORTED_MODULE_4__["PropertyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditpropertyComponent);
    return EditpropertyComponent;
}());



/***/ }),

/***/ "./src/app/views/editproperty/editproperty.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/editproperty/editproperty.module.ts ***!
  \***********************************************************/
/*! exports provided: EditpropertyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpropertyModule", function() { return EditpropertyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _editproperty_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editproperty-routing.module */ "./src/app/views/editproperty/editproperty-routing.module.ts");
/* harmony import */ var _editproperty_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editproperty.component */ "./src/app/views/editproperty/editproperty.component.ts");
/* harmony import */ var _property_property_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../property/property.service */ "./src/app/views/property/property.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var EditpropertyModule = /** @class */ (function () {
    function EditpropertyModule() {
    }
    EditpropertyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_editproperty_component__WEBPACK_IMPORTED_MODULE_5__["EditpropertyComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _editproperty_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditpropertyRoutingModule"],
            ],
            providers: [_property_property_service__WEBPACK_IMPORTED_MODULE_6__["PropertyService"]]
        })
    ], EditpropertyModule);
    return EditpropertyModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-editproperty-editproperty-module.js.map