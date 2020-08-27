(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-currency-currency-module"],{

/***/ "./src/app/views/currency/currency.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/currency/currency.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addCurrency\" style=\"margin-bottom: 10px;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Currency</button>\n\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Currencies List\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n            <thead>\n              <tr>\n                <th>S.No.</th>\n                <th>Country Name</th>\n                <th>Currency Type</th>\n                <th>Currency Rate</th>\n                <th>Created On</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor = \"let currency of currencies; let i = index;\">\n                <td>{{i+1}}</td>\n                <td>{{currency?.countryName}}</td>\n                <td>{{currency?.currencyType}}</td>\n                <td>{{currency?.currencyRate}}</td>\n                <td>{{currency.created | date: 'dd/MM/yyyy'}}</td>\n                <td>\n                  <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editCurrency\" (click)=\"getDetails(currency._id)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button>\n                  <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteCurrency(currency._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"addCurrency\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Add Currency</h4>\n              <button type=\"button\" class=\"close\" (click)=\"addCurrencyForm.reset()\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n             <form [formGroup]=\"addCurrencyForm\" (ngSubmit)=\"addCurrency()\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label>Country Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"countryName\"> \n                        <p style=\"color: #FF0000\" *ngIf=\"addCurrencyForm.controls['countryName'].invalid && (formSubmited || addCurrencyForm.controls['countryName'].dirty)\">Please enter country name</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Currency Type</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"currencyType\"> \n                      <p style=\"color: #FF0000\" *ngIf=\"addCurrencyForm.controls['currencyType'].invalid && (formSubmited || addCurrencyForm.controls['currencyType'].dirty)\">Please enter currency type</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Currency Rate</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"currencyRate\"> \n                      <p style=\"color: #FF0000\" *ngIf=\"addCurrencyForm.controls['currencyRate'].invalid && (formSubmited || addCurrencyForm.controls['currencyRate'].dirty)\">Please enter currency rate</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <button class=\"btn btn-success\" type=\"submit\">Submit</button>\n                    </div> \n                </div>\n              </div>\n              </form>\n          </div>\n  \n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"addCurrencyForm.reset()\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n  \n      </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"editCurrency\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit Currency</h4>\n              <button type=\"button\" class=\"close\" (click)=\"editCurrencyForm.reset()\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n             <form [formGroup]=\"editCurrencyForm\" (ngSubmit)=\"editCurrency()\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label>Country Name</label>\n                        <input type=\"text\" class=\"form-control\" formControlName=\"countryName\"> \n                        <p style=\"color: #FF0000\" *ngIf=\"editCurrencyForm.controls['countryName'].invalid && (formSubmited || editCurrencyForm.controls['countryName'].dirty)\">Please enter country name</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Currency Type</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"currencyType\"> \n                      <p style=\"color: #FF0000\" *ngIf=\"editCurrencyForm.controls['currencyType'].invalid && (formSubmited || editCurrencyForm.controls['currencyType'].dirty)\">Please enter currency type</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <label>Currency Rate</label>\n                      <input type=\"text\" class=\"form-control\" formControlName=\"currencyRate\"> \n                      <p style=\"color: #FF0000\" *ngIf=\"editCurrencyForm.controls['currencyRate'].invalid && (formSubmited || editCurrencyForm.controls['currencyRate'].dirty)\">Please enter currency rate</p>\n                    </div>\n                    <div class=\"form-group\">\n                      <button class=\"btn btn-success\">Submit<img class=\"spinner_img\" src=\"assets/img/avatars/spinner.gif\"></button>\n                    </div> \n                </div>\n              </div>\n              </form>\n          </div>\n  \n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"editCurrencyForm.reset()\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n  \n      </div>\n  </div>\n</div>\n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>"

/***/ }),

/***/ "./src/app/views/currency/currency.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/currency/currency.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2N1cnJlbmN5L2N1cnJlbmN5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/currency/currency.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/currency/currency.component.ts ***!
  \******************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./currency.service */ "./src/app/views/currency/currency.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(fb, currencyService, toastr) {
        this.fb = fb;
        this.currencyService = currencyService;
        this.toastr = toastr;
        this.currencies = [];
        this.currencyData = {};
        this.loading = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formSubmited = false;
        this.addCurrencyForm = this.fb.group({
            countryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currencyType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currencyRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.editCurrencyForm = this.fb.group({
            countryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currencyType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currencyRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        this.currencyList();
    };
    CurrencyComponent.prototype.currencyList = function () {
        var _this = this;
        this.loading = true;
        this.currencyService.currencyList().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.currencies = res.Data;
                _this.dtTrigger.next();
            }
        });
    };
    CurrencyComponent.prototype.addCurrency = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.addCurrencyForm.invalid) {
            return;
        }
        var data = {
            countryName: this.addCurrencyForm.value.countryName,
            currencyType: this.addCurrencyForm.value.currencyType,
            currencyRate: this.addCurrencyForm.value.currencyRate
        };
        $('#addCurrency').modal('hide');
        this.currencyService.addCurrency(data).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.addCurrencyForm.reset();
                _this.formSubmited = false;
                _this.toastr.success(res.response_message);
                _this.currencyList();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    CurrencyComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.currencyId = id;
        this.currencyService.getCurrencyDetails(id).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.currencyData = res.Data;
                _this.editCurrencyForm.patchValue({
                    countryName: _this.currencyData.countryName,
                    currencyType: _this.currencyData.currencyType,
                    currencyRate: _this.currencyData.currencyRate
                });
            }
        });
    };
    CurrencyComponent.prototype.editCurrency = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.editCurrencyForm.invalid) {
            return;
        }
        // this.loading = true;
        var data = {
            countryName: this.editCurrencyForm.value.countryName,
            currencyType: this.editCurrencyForm.value.currencyType,
            currencyRate: this.editCurrencyForm.value.currencyRate,
            currencyId: this.currencyId
        };
        this.currencyService.editCurrency(data).subscribe(function (res) {
            if (res.response_code == 200) {
                // this.loading = false;
                $('#editCurrency').modal('hide');
                _this.toastr.success(res.response_message);
                _this.currencyList();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    CurrencyComponent.prototype.deleteCurrency = function (id) {
        var _this = this;
        if (id && id != null) {
            var confirmStatus = confirm("Do you really want to delete this currency?");
            if (confirmStatus) {
                this.currencyService.deleteCurrency(id).subscribe(function (res) {
                    if (res.response_code == 200) {
                        _this.toastr.success(res.response_message);
                        _this.currencyList();
                    }
                    else {
                        _this.toastr.error('Something went wrong!');
                    }
                });
            }
        }
    };
    CurrencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/views/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.scss */ "./src/app/views/currency/currency.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _currency_service__WEBPACK_IMPORTED_MODULE_3__["CurrencyService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "./src/app/views/currency/currency.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/currency/currency.module.ts ***!
  \***************************************************/
/*! exports provided: CurrencyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyModule", function() { return CurrencyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _currency_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency.component */ "./src/app/views/currency/currency.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");








var routes = [
    {
        path: '',
        component: _currency_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyComponent"]
    }
];
var CurrencyModule = /** @class */ (function () {
    function CurrencyModule() {
    }
    CurrencyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_currency_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_7__["NgxLoadingModule"].forRoot({})
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        })
    ], CurrencyModule);
    return CurrencyModule;
}());



/***/ }),

/***/ "./src/app/views/currency/currency.service.ts":
/*!****************************************************!*\
  !*** ./src/app/views/currency/currency.service.ts ***!
  \****************************************************/
/*! exports provided: CurrencyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyService", function() { return CurrencyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CurrencyService = /** @class */ (function () {
    function CurrencyService(http) {
        this.http = http;
        this.apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    CurrencyService.prototype.addCurrency = function (data) {
        return this.http.post(this.apiUrlAdmin + "/addCurrency", data, this.httpOptions);
    };
    CurrencyService.prototype.currencyList = function () {
        return this.http.get(this.apiUrlAdmin + "/currencyList", this.httpOptions);
    };
    CurrencyService.prototype.getCurrencyDetails = function (id) {
        return this.http.get(this.apiUrlAdmin + "/getCurrencyDetails/" + id, this.httpOptions);
    };
    CurrencyService.prototype.editCurrency = function (data) {
        return this.http.post(this.apiUrlAdmin + "/editCurrency", data, this.httpOptions);
    };
    CurrencyService.prototype.deleteCurrency = function (id) {
        return this.http.delete(this.apiUrlAdmin + "/deleteCurrency/" + id, this.httpOptions);
    };
    CurrencyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CurrencyService);
    return CurrencyService;
}());



/***/ })

}]);
//# sourceMappingURL=views-currency-currency-module.js.map