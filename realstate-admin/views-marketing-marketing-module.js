(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-marketing-marketing-module"],{

/***/ "./src/app/views/marketing/marketing-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/marketing/marketing-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MarketingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingRoutingModule", function() { return MarketingRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _marketing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marketing.component */ "./src/app/views/marketing/marketing.component.ts");




var routes = [
    {
        path: '',
        component: _marketing_component__WEBPACK_IMPORTED_MODULE_3__["MarketingComponent"]
    }
];
var MarketingRoutingModule = /** @class */ (function () {
    function MarketingRoutingModule() {
    }
    MarketingRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MarketingRoutingModule);
    return MarketingRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/marketing/marketing.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/marketing/marketing.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addMarketing\" style=\"margin-bottom: 10px;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Marketing Popup</button>\n\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Marketing Popup List\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n            <thead>\n              <tr>\n                <th>S.No.</th>\n                <th>Screen Name</th>\n                <th>Title</th>\n                <th>Image</th>\n                <th>Created on</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let popup of marketPopups; let i = index;\">\n                <td>{{i+1}}</td>\n                <td>{{popup.screenName}}</td>\n                <td>{{popup.title}}</td>\n                <td><img src=\"{{popup.bannerImage}}\" style=\"width: 50px;\"> </td>\n                <td>{{popup.created | date: 'dd/MM/yyyy'}}</td>\n                <td>\n                  <button class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"getDetail(popup._id)\" data-target=\"#editMarketing\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button>\n                  <button class=\"btn btn-danger\" (click)=\"deletepopup(popup._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal\" id=\"addMarketing\" >\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Add Marketing Popup</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"addMarketingForm.reset()\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <form [formGroup]=\"addMarketingForm\" (ngSubmit)=\"onMarketingSubmit()\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                              <label>Screen Name</label>\n                              <select class=\"form-control\" formControlName=\"screenName\">\n                                <option value=\"\">Please select</option>\n                                <option value=\"signup\">Signup</option>\n                                <option value=\"signin\">Signin</option>\n                                <option value=\"dashboard\">Dashboard</option>\n                              </select>  \n                              <p style=\"color: #FF0000\" *ngIf=\"addMarketingForm.controls['screenName'].invalid && (formSubmited || addMarketingForm.controls['screenName'].dirty)\">Please enter screen name</p>                         \n                            </div>\n                          <div class=\"form-group\">\n                              <label>Title</label>\n                              <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n                              <p style=\"color: #FF0000\" *ngIf=\"addMarketingForm.controls['title'].invalid && (formSubmited || addMarketingForm.controls['title'].dirty)\">Please enter title</p>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"currency\">Image</label>\n                            <input #myInput type=\"file\" class=\"form-control\" (change)=\"handleFileInput($event.target.files)\">\n                          </div>\n                          <div class=\"form-group\">\n                              <button class=\"btn btn-success\" type=\"submit\">Submit</button>\n                          </div> \n                      </div>\n                  </div>\n              </form>\n          </div>\n  \n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"addMarketingForm.reset()\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n  \n      </div>\n  </div>\n</div>\n\n\n<div class=\"modal\" id=\"editMarketing\" >\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit Marketing Popup</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n                  <form [formGroup]=\"editMarketingForm\" (ngSubmit)=\"onEditMarketingSubmit()\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                              <label>Screen Name</label>\n                              <select class=\"form-control\" formControlName=\"screenName\">\n                                <option value=\"\">Please select</option>\n                                <option value=\"signup\">Signup</option>\n                                <option value=\"signin\">Signin</option>\n                                <option value=\"dashboard\">Dashboard</option>\n                              </select>   \n                              <p style=\"color: #FF0000\" *ngIf=\"editMarketingForm.controls['title'].invalid && (formSubmited || editMarketingForm.controls['title'].dirty)\">Please enter title</p>                        \n                            </div>\n                          <div class=\"form-group\">\n                              <label>Title</label>\n                              <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n                              <p style=\"color: #FF0000\" *ngIf=\"editMarketingForm.controls['title'].invalid && (formSubmited || editMarketingForm.controls['title'].dirty)\">Please enter title</p>\n                          </div>\n                          <div class=\"form-group\">\n                            <label>Change Image</label>\n                            <div>\n                              <img src=\"{{popup.bannerImage}}\" style=\"width: 100px;\"> \n                            </div>\n                            <input type=\"file\" class=\"form-control\" (change)=\"handleFileInput($event.target.files)\">\n                          </div>\n                          <div class=\"form-group\">\n                              <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n                          </div> \n                      </div>\n                  </div>\n              </form>\n          </div>\n  \n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n  \n      </div>\n  </div>\n</div>\n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>"

/***/ }),

/***/ "./src/app/views/marketing/marketing.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/marketing/marketing.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21hcmtldGluZy9tYXJrZXRpbmcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/marketing/marketing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/marketing/marketing.component.ts ***!
  \********************************************************/
/*! exports provided: MarketingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingComponent", function() { return MarketingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category/category.service */ "./src/app/views/category/category.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var MarketingComponent = /** @class */ (function () {
    function MarketingComponent(categoryService, fb, toastr) {
        this.categoryService = categoryService;
        this.fb = fb;
        this.toastr = toastr;
        this.fileToUpload = null;
        this.marketPopups = [];
        this.popup = {};
        this.loading = false;
        this.formSubmited = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.addMarketingForm = this.fb.group({
            screenName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.editMarketingForm = this.fb.group({
            screenName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
        this.getDataFromServer();
    }
    MarketingComponent.prototype.ngOnInit = function () {
    };
    MarketingComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this.loading = true;
        this.categoryService.getMarketingPopup().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.marketPopups = res.Data;
                _this.dtTrigger.next();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    MarketingComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    MarketingComponent.prototype.onMarketingSubmit = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.addMarketingForm.invalid) {
            return;
        }
        var data = {
            screenName: this.addMarketingForm.value.screenName,
            title: this.addMarketingForm.value.title
        };
        $('#addMarketing').modal('hide');
        this.categoryService.addMarketing(data, this.fileToUpload).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.addMarketingForm.reset();
                _this.formSubmited = false;
                _this.myInputVariable.nativeElement.value = "";
                _this.toastr.success(res.response_message);
                _this.getDataFromServer();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    MarketingComponent.prototype.getDetail = function (id) {
        var _this = this;
        this.marketingId = id;
        this.categoryService.getPopupDetails(id).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.popup = res.Data;
                _this.editMarketingForm.patchValue({
                    screenName: _this.popup.screenName,
                    title: _this.popup.title,
                });
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    MarketingComponent.prototype.onEditMarketingSubmit = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.editMarketingForm.invalid) {
            return;
        }
        var jsonData = {
            screenName: this.editMarketingForm.value.screenName,
            title: this.editMarketingForm.value.title,
            id: this.marketingId
        };
        $('#editMarketing').modal('hide');
        this.categoryService.editMarketingPopup(jsonData, this.fileToUpload).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.toastr.success(res.response_message);
                _this.getDataFromServer();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    MarketingComponent.prototype.deletepopup = function (id) {
        var _this = this;
        this.loading = true;
        this.categoryService.deletePopup(id).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.toastr.success(res.response_message);
                _this.getDataFromServer();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MarketingComponent.prototype, "myInputVariable", void 0);
    MarketingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marketing',
            template: __webpack_require__(/*! ./marketing.component.html */ "./src/app/views/marketing/marketing.component.html"),
            styles: [__webpack_require__(/*! ./marketing.component.scss */ "./src/app/views/marketing/marketing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], MarketingComponent);
    return MarketingComponent;
}());



/***/ }),

/***/ "./src/app/views/marketing/marketing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/marketing/marketing.module.ts ***!
  \*****************************************************/
/*! exports provided: MarketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketingModule", function() { return MarketingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _marketing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./marketing-routing.module */ "./src/app/views/marketing/marketing-routing.module.ts");
/* harmony import */ var _marketing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./marketing.component */ "./src/app/views/marketing/marketing.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");









var MarketingModule = /** @class */ (function () {
    function MarketingModule() {
    }
    MarketingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_marketing_component__WEBPACK_IMPORTED_MODULE_5__["MarketingComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _marketing_routing_module__WEBPACK_IMPORTED_MODULE_4__["MarketingRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_8__["NgxLoadingModule"].forRoot({})
            ],
            providers: []
        })
    ], MarketingModule);
    return MarketingModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-marketing-marketing-module.js.map