(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-content-content-module"],{

/***/ "./src/app/views/content/content-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/content/content-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRoutingModule", function() { return ContentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content.component */ "./src/app/views/content/content.component.ts");




var routes = [
    {
        path: '',
        component: _content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]
    }
];
var ContentRoutingModule = /** @class */ (function () {
    function ContentRoutingModule() {
    }
    ContentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ContentRoutingModule);
    return ContentRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/content/content.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/content/content.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addContent\" style=\"margin-bottom: 10px;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Static Content</button>\n\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Static Content List\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n            <thead>\n              <tr>\n                <th>S.No.</th>\n                <th>Screen Name</th>\n                <th>Title</th>\n                <th>Description</th>\n                <th>Created On</th>\n                <th>Actions</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let content of contents; let i = index;\">\n                <td>{{i+1}}</td>\n                <td>{{content.contentType}}</td>\n                <td>\n                  <span *ngIf=\"content.title.length>30\">\n                    {{content.title.substring(0, 30)+'.....'}}\n                  </span>\n                  <span *ngIf=\"content.title.length<30\">\n                    {{content.title}}\n                  </span>\n                </td>\n                <td>\n                  <span *ngIf=\"content.description.length>30\">\n                    {{content.description.substring(0, 30)+'.....'}}\n                  </span>\n                  <span *ngIf=\"content.description.length<30\">\n                    {{content.description}}\n                  </span>\n                </td>\n                <td>{{content.created | date: 'dd/MM/yyyy'}}</td>\n                <td>\n                  <button class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"getContent(content._id)\" data-target=\"#editContent\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button>\n                  <button class=\"btn btn-danger\" (click)=\"deleteContent(content._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal\" id=\"addContent\" >\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Static Content</h4>\n              <button type=\"button\" class=\"close\" (click)=\"addContentForm.reset()\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <form [formGroup]=\"addContentForm\" (ngSubmit)=\"onContentSubmit()\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                              <label>Screen Name</label>\n                              <input type=\"text\" class=\"form-control\" formControlName=\"type\">\n                              <p style=\"color: #FF0000\" *ngIf=\"addContentForm.controls['type'].invalid && (formSubmited || addContentForm.controls['type'].dirty)\">Please enter screen name</p>\n                            </div>\n                          <div class=\"form-group\">\n                              <label>Title</label>\n                              <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n                              <p style=\"color: #FF0000\" *ngIf=\"addContentForm.controls['title'].invalid && (formSubmited || addContentForm.controls['title'].dirty)\">Please enter title</p>\n                          </div>\n                          <div class=\"form-group\">\n                            <label>Description</label>\n                            <textarea type=\"text\" class=\"form-control\" formControlName=\"description\"></textarea>\n                            <p style=\"color: #FF0000\" *ngIf=\"addContentForm.controls['description'].invalid && (formSubmited || addContentForm.controls['description'].dirty)\">Please enter description</p>\n                          </div>\n                          <div class=\"form-group\">\n                              <button class=\"btn btn-success\" type=\"submit\">Submit</button>\n                          </div> \n                      </div>\n                  </div>\n              </form>\n          </div>\n  \n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"addContentForm.reset()\" data-dismiss=\"modal\">Cancel</button>\n      </div>\n  \n      </div>\n  </div>\n</div>\n\n\n<div class=\"modal\" id=\"editContent\" > \n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit Static Content</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <form [formGroup]=\"editContentForm\" (ngSubmit)=\"onEditContentSubmit()\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                              <label>Screen Name</label>\n                              <input type=\"text\" class=\"form-control\" formControlName=\"type\">\n                              <p style=\"color: #FF0000\" *ngIf=\"editContentForm.controls['type'].invalid && (formSubmited || editContentForm.controls['type'].dirty)\">Please enter screen name</p>\n                            </div>\n                          <div class=\"form-group\">\n                              <label>Title</label>\n                              <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n                              <p style=\"color: #FF0000\" *ngIf=\"editContentForm.controls['title'].invalid && (formSubmited || editContentForm.controls['title'].dirty)\">Please enter title</p>\n                          </div>\n                          <div class=\"form-group\">\n                            <label>Description</label>\n                            <textarea type=\"text\" class=\"form-control\" formControlName=\"description\"></textarea>\n                            <p style=\"color: #FF0000\" *ngIf=\"editContentForm.controls['description'].invalid && (formSubmited || editContentForm.controls['description'].dirty)\">Please enter description</p>\n                          </div>\n                          <div class=\"form-group\">\n                              <button class=\"btn btn-success\" type=\"submit\">Submit</button>\n                          </div> \n                      </div>\n                  </div>\n              </form>\n          </div>\n  \n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n      </div>\n  </div>\n</div>\n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>"

/***/ }),

/***/ "./src/app/views/content/content.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/content/content.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/content/content.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/content/content.component.ts ***!
  \****************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category/category.service */ "./src/app/views/category/category.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var ContentComponent = /** @class */ (function () {
    function ContentComponent(fb, categoryService, toastr) {
        this.fb = fb;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.contents = [];
        this.loading = false;
        this.formSubmited = false;
        this.addContentForm = this.fb.group({
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.editContentForm = this.fb.group({
            type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.getDataFromServer();
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this.loading = true;
        this.categoryService.contentList().subscribe(function (res) {
            if (res.status == 'success') {
                _this.loading = false;
                _this.contents = res.data;
                _this.dtTrigger.next();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    ContentComponent.prototype.onContentSubmit = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.addContentForm.invalid) {
            return;
        }
        var data = {
            contentType: this.addContentForm.value.type,
            title: this.addContentForm.value.title,
            description: this.addContentForm.value.description
        };
        this.categoryService.addContent(data).subscribe(function (res) {
            $('#addContent').modal('hide');
            if (res.response_code == 200) {
                _this.addContentForm.reset();
                _this.formSubmited = false;
                _this.toastr.success(res.response_message);
                _this.getDataFromServer();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    ContentComponent.prototype.getContent = function (id) {
        var _this = this;
        this.contentId = id;
        this.categoryService.getContentDetails(id).subscribe(function (res) {
            if (res.response_code == 200) {
                var content = res.Data;
                _this.editContentForm.patchValue({
                    type: content.contentType,
                    title: content.title,
                    description: content.description,
                });
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    ContentComponent.prototype.onEditContentSubmit = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.editContentForm.invalid) {
            return;
        }
        var data = {
            _id: this.contentId,
            contentType: this.editContentForm.value.type,
            title: this.editContentForm.value.title,
            description: this.editContentForm.value.description
        };
        this.categoryService.editContent(data).subscribe(function (res) {
            $('#editContent').modal('hide');
            if (res.response_code == 200) {
                _this.toastr.success(res.response_message);
                _this.getDataFromServer();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    ContentComponent.prototype.deleteContent = function (id) {
        var _this = this;
        if (id && id != null) {
            var confirmStatus = confirm("Do you really want to delete this static content?");
            if (confirmStatus) {
                this.categoryService.deleteContent(id).subscribe(function (res) {
                    if (res.response_code == 200) {
                        _this.toastr.success(res.response_message);
                        _this.getDataFromServer();
                    }
                    else {
                        _this.toastr.error('Something went wrong!');
                    }
                });
            }
        }
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/views/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/views/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _category_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/views/content/content.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/content/content.module.ts ***!
  \*************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-routing.module */ "./src/app/views/content/content-routing.module.ts");
/* harmony import */ var _content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content.component */ "./src/app/views/content/content.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");









var ContentModule = /** @class */ (function () {
    function ContentModule() {
    }
    ContentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _content_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContentRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTablesModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_8__["NgxLoadingModule"].forRoot({})
            ],
            providers: []
        })
    ], ContentModule);
    return ContentModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-content-content-module.js.map