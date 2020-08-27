(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-subadmin-subadmin-module"],{

/***/ "./src/app/views/subadmin/subadmin-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/subadmin/subadmin-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: subAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subAdminRoutingModule", function() { return subAdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _subadmin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subadmin.component */ "./src/app/views/subadmin/subadmin.component.ts");




var routes = [
    {
        path: '',
        component: _subadmin_component__WEBPACK_IMPORTED_MODULE_3__["SubadminComponent"]
    }
];
var subAdminRoutingModule = /** @class */ (function () {
    function subAdminRoutingModule() {
    }
    subAdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], subAdminRoutingModule);
    return subAdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/subadmin/subadmin.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/subadmin/subadmin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addSubadmin\" style=\"margin-bottom: 10px;\"><i\n    class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Sub Admin</button>\n\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Subadmins List\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n            <thead>\n              <tr>\n                <th>S.No.</th>\n                <th>User</th>\n                <th>Email</th>\n                <th>Created On</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngIf=\"subadmins.length == 0\">\n                <td align=\"center\" colspan=\"5\">No data found</td>\n              </tr>\n              <tr *ngFor=\"let subadmin of subadmins; let i = index;\">\n                <td>{{i+1}}</td>\n                <td>{{subadmin?.name}}</td>\n                <td>{{subadmin?.email}}</td>\n                <td>{{subadmin.created | date: 'dd/MM/yyyy'}}</td>\n                <td>\n                  <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editSubadmin\"\n                    (click)=\"getDetails(subadmin._id)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button>\n                  <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteSubadmin(subadmin._id)\"><i\n                      class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"addSubadmin\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Add Sub Admin</h4>\n        <button type=\"button\" class=\"close\" (click)=\"addsubadminForm.reset()\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"addsubadminForm\" (ngSubmit)=\"addSubadmin()\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"subadminname\">\n                <p style=\"color: #FF0000\" *ngIf=\"addsubadminForm.controls['subadminname'].invalid && (formSubmited || addsubadminForm.controls['subadminname'].dirty)\">Please enter name</p>\n              </div>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n                <p style=\"color: #FF0000\" *ngIf=\"addsubadminForm.controls['email'].invalid && \n                    (formSubmited || addsubadminForm.controls['email'].dirty)\">\n                    Please enter email</p>\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\">\n                <p style=\"color: #FF0000\" *ngIf=\"addsubadminForm.controls['password'].invalid && \n                (formSubmited || addsubadminForm.controls['password'].dirty)\">\n                Please enter password</p>\n              </div>\n              <div class=\"form-group\">\n                <label>Confirm Password</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"cnfpassword\">\n                <p style=\"color: #FF0000\" *ngIf=\"addsubadminForm.controls['cnfpassword'].invalid && \n                (formSubmited || addsubadminForm.controls['cnfpassword'].dirty)\">\n                Please enter confirm password</p>\n                <p style=\"color: #FF0000\" *ngIf=\"msg\">{{msg}}</p>\n              </div>\n              <label>Role</label>\n              <div class=\"checkbox\">\n                <div *ngFor=\"let nav of navItems\">\n                  <label>\n                    <input type=\"checkbox\" class=\"checkbox\" [attr.data-name]=\"nav.name\" [attr.data-url]=\"nav.url\" [attr.data-icon]=\"nav.icon\" >{{nav.name}}\n                  </label>\n                  <br>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <!-- <button class=\"btn btn-success\" [disabled]=\"!addCategoryForm.controls.valid\" style=\"display:flex;\">Submit<img class=\"spinner_img\" src=\"assets/img/avatars/spinner.gif\"></button> -->\n                <button class=\"btn btn-success\">Submit<img class=\"spinner_img\"\n                    src=\"assets/img/avatars/spinner.gif\"></button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"addsubadminForm.reset()\"\n          data-dismiss=\"modal\">Cancel</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"editSubadmin\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Sub Admin</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <form [formGroup]=\"editSubadminForm\" (ngSubmit)=\"editSubadmin()\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"form-group\">\n                <label>Name</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"subadminname\">\n                <p style=\"color: #FF0000\" *ngIf=\"addsubadminForm.controls['subadminname'].invalid && (formSubmited || addsubadminForm.controls['subadminname'].dirty)\">Please enter name</p>\n              </div>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n                <p style=\"color: #FF0000\" *ngIf=\"addsubadminForm.controls['email'].invalid && \n                    (formSubmited || addsubadminForm.controls['email'].dirty)\">\n                    Please enter email</p>\n              </div>\n              <div class=\"checkbox\">\n                <div *ngFor=\"let nav of navItems\">\n                  <label>\n                    <input type=\"checkbox\" class=\"checkbox\" [attr.data-name]=\"nav.name\" [attr.data-url]=\"nav.url\" [attr.data-icon]=\"nav.icon\" >{{nav.name}}\n                  </label>\n                  <br>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <button class=\"btn btn-success\">Submit<img class=\"spinner_img\"\n                    src=\"assets/img/avatars/spinner.gif\"></button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"addsubadminForm.reset()\"\n          data-dismiss=\"modal\">Cancel</button>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<!-- <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\">\n</ngx-loading> -->\n"

/***/ }),

/***/ "./src/app/views/subadmin/subadmin.component.scss":
/*!********************************************************!*\
  !*** ./src/app/views/subadmin/subadmin.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N1YmFkbWluL3N1YmFkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/subadmin/subadmin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/subadmin/subadmin.component.ts ***!
  \******************************************************/
/*! exports provided: SubadminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubadminComponent", function() { return SubadminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _subadmin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subadmin.service */ "./src/app/views/subadmin/subadmin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_nav */ "./src/app/_nav.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var SubadminComponent = /** @class */ (function () {
    function SubadminComponent(fb, subadminService, toastr) {
        this.fb = fb;
        this.subadminService = subadminService;
        this.toastr = toastr;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_5__["navItems"];
        this.subadmins = [];
        this.subAdminData = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.formSubmited = false;
        this.addsubadminForm = this.fb.group({
            subadminname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cnfpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.editSubadminForm = this.fb.group({
            subadminname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
        });
    }
    SubadminComponent.prototype.ngOnInit = function () {
        this.subAdminList();
    };
    SubadminComponent.prototype.subAdminList = function () {
        var _this = this;
        this.subadminService.subAdminList().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.subadmins = res.Data;
                _this.dtTrigger.next();
            }
        });
    };
    SubadminComponent.prototype.getDetails = function (id) {
        var _this = this;
        this.subadminId = id;
        this.subadminService.getDetails(id).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.subAdminData = res.Data;
                console.log(_this.subAdminData);
                _this.editSubadminForm.patchValue({
                    subadminname: _this.subAdminData.name,
                    email: _this.subAdminData.email,
                    UserPermission: _this.subAdminData.permission[0],
                    propertyPermission: _this.subAdminData.permission[1],
                    categoryPermission: _this.subAdminData.permission[2],
                    marketPermission: _this.subAdminData.permission[3],
                    contentPermission: _this.subAdminData.permission[4],
                });
            }
        });
    };
    SubadminComponent.prototype.deleteSubadmin = function (id) {
        var _this = this;
        this.subadminService.deleteSubadmin(id).subscribe(function (res) {
            console.log(res);
            if (res.response_code == 200) {
                _this.toastr.success(res.response_message);
                // this.subAdminList()
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    SubadminComponent.prototype.addSubadmin = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.addsubadminForm.invalid) {
            return;
        }
        if (this.addsubadminForm.value.password != this.addsubadminForm.value.cnfpassword) {
            this.msg = 'New password and confirm password should match';
            return;
        }
        var permission = [];
        $(".checkbox:checked").each(function () {
            permission.push({
                name: $(this).data('name'),
                url: $(this).data('url'),
                icon: $(this).data('icon')
            });
        });
        var data = {
            name: this.addsubadminForm.value.subadminname,
            email: this.addsubadminForm.value.email,
            password: this.addsubadminForm.value.password,
            permission: permission,
            Type: 'Subadmin'
        };
        $('#addSubadmin').modal('hide');
        this.subadminService.createSubadmin(data).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.toastr.success(res.response_message);
                _this.subAdminList();
            }
            else if (res.response_code == 501) {
                _this.toastr.error(res.response_message);
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    SubadminComponent.prototype.editSubadmin = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.addsubadminForm.invalid) {
            return;
        }
        var permission = [];
        // permission.push(
        //   this.editSubadminForm.value.UserPermission,
        //   this.editSubadminForm.value.propertyPermission,
        //   this.editSubadminForm.value.categoryPermission,
        //   this.editSubadminForm.value.marketPermission,
        //   this.editSubadminForm.value.contentPermission,
        // )
        $(".checkbox:checked").each(function () {
            permission.push({
                name: $(this).data('name'),
                url: $(this).data('url'),
                icon: $(this).data('icon')
            });
        });
        var data = {
            name: this.editSubadminForm.value.subadminname,
            email: this.editSubadminForm.value.email,
            id: this.subadminId,
            permission: permission
        };
        $('#editSubadmin').hide();
        this.subadminService.editSubadmin(data).subscribe(function (res) {
            console.log(res);
            if (res.response_code == 200) {
                _this.toastr.success(res.response_message);
                _this.subAdminList();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    SubadminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subadmin',
            template: __webpack_require__(/*! ./subadmin.component.html */ "./src/app/views/subadmin/subadmin.component.html"),
            styles: [__webpack_require__(/*! ./subadmin.component.scss */ "./src/app/views/subadmin/subadmin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _subadmin_service__WEBPACK_IMPORTED_MODULE_3__["SubadminService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], SubadminComponent);
    return SubadminComponent;
}());



/***/ }),

/***/ "./src/app/views/subadmin/subadmin.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/subadmin/subadmin.module.ts ***!
  \***************************************************/
/*! exports provided: SubAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAdminModule", function() { return SubAdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _subadmin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subadmin-routing.module */ "./src/app/views/subadmin/subadmin-routing.module.ts");
/* harmony import */ var _subadmin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subadmin.component */ "./src/app/views/subadmin/subadmin.component.ts");
/* harmony import */ var _subadmin_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subadmin.service */ "./src/app/views/subadmin/subadmin.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");










var SubAdminModule = /** @class */ (function () {
    function SubAdminModule() {
    }
    SubAdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_subadmin_component__WEBPACK_IMPORTED_MODULE_5__["SubadminComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _subadmin_routing_module__WEBPACK_IMPORTED_MODULE_4__["subAdminRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"].forRoot({})
            ],
            providers: [_subadmin_service__WEBPACK_IMPORTED_MODULE_6__["SubadminService"]]
        })
    ], SubAdminModule);
    return SubAdminModule;
}());



/***/ }),

/***/ "./src/app/views/subadmin/subadmin.service.ts":
/*!****************************************************!*\
  !*** ./src/app/views/subadmin/subadmin.service.ts ***!
  \****************************************************/
/*! exports provided: SubadminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubadminService", function() { return SubadminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SubadminService = /** @class */ (function () {
    function SubadminService(http) {
        this.http = http;
        this.apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    SubadminService.prototype.createSubadmin = function (data) {
        return this.http.post(this.apiUrlAdmin + "/createSubadmin", data, this.httpOptions);
    };
    SubadminService.prototype.subAdminList = function () {
        return this.http.get(this.apiUrlAdmin + "/subAdminList", this.httpOptions);
    };
    SubadminService.prototype.getDetails = function (id) {
        return this.http.get(this.apiUrlAdmin + "/getSubadminDetails/" + id, this.httpOptions);
    };
    SubadminService.prototype.editSubadmin = function (data) {
        return this.http.post(this.apiUrlAdmin + "/editSubadmin", data, this.httpOptions);
    };
    SubadminService.prototype.deleteSubadmin = function (id) {
        return this.http.delete(this.apiUrlAdmin + "/deleteSubadmin/" + id, this.httpOptions);
    };
    SubadminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubadminService);
    return SubadminService;
}());



/***/ })

}]);
//# sourceMappingURL=views-subadmin-subadmin-module.js.map