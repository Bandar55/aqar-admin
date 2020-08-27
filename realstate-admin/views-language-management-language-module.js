(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-language-management-language-module"],{

/***/ "./src/app/views/language-management/language-management.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/views/language-management/language-management.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addLanguage\" style=\"margin-bottom: 10px;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Language</button>\n\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Languages List\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n            <thead>\n              <tr>\n                <th>S.No.</th>\n                <th>Language</th>\n                <th>Created On</th>\n                <th>Updated On</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor = \"let x of languageData; let i = index;\">\n                <td>{{i+1}}</td>\n                <td>{{x?.language}}</td>\n                <td>{{x.createdAt | date: 'dd/MM/yyyy'}}</td>\n                <td>{{x.updatedAt | date: 'dd/MM/yyyy'}}</td>\n                <td>\n                  <button class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"getLanguage(x._id)\" data-target=\"#editLanguage\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button>\n                  <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteLangauge(x._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"addLanguage\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Add Language</h4>\n              <button type=\"button\" class=\"close\" (click)=\"addLanguageForm.reset()\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n             <form [formGroup]=\"addLanguageForm\" (ngSubmit)=\"addLanguage()\">\n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                          <label>Language</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"language\"> \n                      </div>\n                      <p style=\"color: #FF0000\" *ngIf=\"addLanguageForm.controls['language'].invalid && (formSubmited || addLanguageForm.controls['language'].dirty)\">Please enter language</p>\n                      <div class=\"form-group\">\n                          <button class=\"btn btn-success\">Submit<img class=\"spinner_img\" src=\"assets/img/avatars/spinner.gif\"></button>\n                      </div> \n                  </div>\n              </div>\n              </form>\n          </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"addLanguageForm.reset()\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n      </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"editLanguage\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit Language</h4>\n              <button type=\"button\" class=\"close\" (click)=\"editLanguageForm.reset()\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n             <form [formGroup]=\"editLanguageForm\" (ngSubmit)=\"editLanguage()\">\n              <div class=\"row\">\n                  <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                          <label>Language</label>\n                          <input type=\"text\" class=\"form-control\" formControlName=\"language\"> \n                      </div>\n                      <p style=\"color: #FF0000\" *ngIf=\"editLanguageForm.controls['language'].invalid && (formSubmited || editLanguageForm.controls['language'].dirty)\">Please enter language</p>\n                      <div class=\"form-group\">\n                          <button class=\"btn btn-success\">Submit<img class=\"spinner_img\" src=\"assets/img/avatars/spinner.gif\"></button>\n                      </div> \n                  </div>\n              </div>\n              </form>\n          </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"editLanguageForm.reset()\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n      </div>\n  </div>\n</div>\n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\n\n"

/***/ }),

/***/ "./src/app/views/language-management/language-management.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/language-management/language-management.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2xhbmd1YWdlLW1hbmFnZW1lbnQvbGFuZ3VhZ2UtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/language-management/language-management.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/language-management/language-management.component.ts ***!
  \****************************************************************************/
/*! exports provided: LanguageManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageManagementComponent", function() { return LanguageManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category/category.service */ "./src/app/views/category/category.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var LanguageManagementComponent = /** @class */ (function () {
    function LanguageManagementComponent(fb, categoryService, toastr) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.loading = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.formSubmited = false;
        this.addLanguageForm = this.fb.group({
            language: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.editLanguageForm = this.fb.group({
            language: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    LanguageManagementComponent.prototype.ngOnInit = function () {
        this.languageList();
    };
    LanguageManagementComponent.prototype.languageList = function () {
        var _this = this;
        this.loading = true;
        this.categoryService.getAllLanguage().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.languageData = res.Data;
                _this.dtTrigger.next();
            }
        });
    };
    LanguageManagementComponent.prototype.deleteLangauge = function (id) {
        var _this = this;
        if (id && id != null) {
            var confirmStatus = confirm("Do you really want to delete this language?");
            if (confirmStatus) {
                this.id = id;
                var data = {
                    languageId: this.id
                };
                this.categoryService.deleteLangauge(data).subscribe(function (res) {
                    if (res.response_code == 200) {
                        _this.languageList();
                    }
                });
            }
        }
    };
    LanguageManagementComponent.prototype.addLanguage = function () {
        var _this = this;
        // this.loading = true;
        this.formSubmited = true;
        if (this.addLanguageForm.invalid) {
            return;
        }
        var data = {
            language: this.addLanguageForm.value.language,
        };
        $('#addLanguage').modal('hide');
        this.categoryService.addLanguage(data).subscribe(function (res) {
            if (res.response_code == 200) {
                // this.loading = false;
                _this.addLanguageForm.reset();
                _this.formSubmited = false;
                _this.toastr.success(res.response_message);
                _this.languageList();
            }
            else if (res.response_code == 501) {
                _this.toastr.error(res.response_message);
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    LanguageManagementComponent.prototype.getLanguage = function (id) {
        var _this = this;
        this.langId = id;
        this.categoryService.getLanguage(id).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.langData = res.Data;
                _this.editLanguageForm.patchValue({
                    language: _this.langData.language
                });
            }
        });
    };
    LanguageManagementComponent.prototype.editLanguage = function () {
        var _this = this;
        // this.loading = true;
        this.formSubmited = true;
        if (this.editLanguageForm.invalid) {
            return;
        }
        var data = {
            language: this.editLanguageForm.value.language,
            languageId: this.langId
        };
        $('#editLanguage').modal('hide');
        this.categoryService.editLanguage(data).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.languageList();
            }
        });
    };
    LanguageManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-language-management',
            template: __webpack_require__(/*! ./language-management.component.html */ "./src/app/views/language-management/language-management.component.html"),
            styles: [__webpack_require__(/*! ./language-management.component.scss */ "./src/app/views/language-management/language-management.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], LanguageManagementComponent);
    return LanguageManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/language-management/language.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/language-management/language.module.ts ***!
  \**************************************************************/
/*! exports provided: LanguageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageModule", function() { return LanguageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _language_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./language-management.component */ "./src/app/views/language-management/language-management.component.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");








var routes = [
    {
        path: '',
        component: _language_management_component__WEBPACK_IMPORTED_MODULE_5__["LanguageManagementComponent"]
    }
];
var LanguageModule = /** @class */ (function () {
    function LanguageModule() {
    }
    LanguageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_language_management_component__WEBPACK_IMPORTED_MODULE_5__["LanguageManagementComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_6__["DataTablesModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_7__["NgxLoadingModule"].forRoot({})
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        })
    ], LanguageModule);
    return LanguageModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-language-management-language-module.js.map