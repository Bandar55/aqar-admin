(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-category-category-module"],{

/***/ "./src/app/views/category/category-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/category/category-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryRoutingModule", function() { return CategoryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category.component */ "./src/app/views/category/category.component.ts");




var routes = [
    {
        path: '',
        component: _category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"]
    }
];
var CategoryRoutingModule = /** @class */ (function () {
    function CategoryRoutingModule() {
    }
    CategoryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoryRoutingModule);
    return CategoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/category/category.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/category/category.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addCategory\" style=\"margin-bottom: 10px;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add Category</button>\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Categories List\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\">\n            <thead>\n              <tr>\n                <th>S.No.</th>\n                <th>Category Name</th>\n                <th>Created On</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor = \"let category of categories; let i = index;\">\n                <td>{{i+1}}</td>\n                <td>{{category.name}}</td>\n                <td>{{category.created | date: 'dd/MM/yyyy'}}</td>\n                <td>\n                    <button class=\"btn btn-primary\" (click)= setsubcategoryId(category._id) data-toggle=\"modal\" data-target=\"#addSubCategory\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Sub-Category</button>\n                    <button class=\"btn btn-primary\" [routerLink]=\"['/categorydetails', category._id]\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View</button> \n                    <button class=\"btn btn-primary\" type=\"button\" (click)=\"editCategory(category._id, category.name)\" data-toggle=\"modal\" data-target=\"#editCategory\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button>\n                    <!-- <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteCategory(category._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button> -->\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal\" id=\"addCategory\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Add Category</h4>\n              <button type=\"button\" class=\"close\" (click)=\"addCategoryForm.reset()\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <form [formGroup]=\"addCategoryForm\" (ngSubmit)=\"onCategorySubmit()\">\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                              <label>Name</label>\n                              <input type=\"text\" class=\"form-control\" formControlName=\"categoryName\">\n                              <p style=\"color: #FF0000\" *ngIf=\"addCategoryForm.controls['categoryName'].invalid && (formSubmited || addCategoryForm.controls['categoryName'].dirty)\">Please enter name</p>\n                          </div>\n                          <div class=\"form-group\">\n                              <button class=\"btn btn-success\" type=\"submit\">Submit</button>\n                          </div> \n                      </div>\n                  </div>\n              </form>\n          </div>\n  \n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"addCategoryForm.reset()\" data-dismiss=\"modal\">cancel</button>\n      </div>\n  \n      </div>\n  </div>\n</div>\n\n        <!-- Add subcategory modal -->\n<div class=\"modal\" id=\"addSubCategory\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add Sub-Category</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"subCategoryForm.reset()\" >&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"subCategoryForm\" (ngSubmit)=\"subCategorySubmit()\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label for=\"subcategory\">Name</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n                                <p style=\"color: #FF0000\" *ngIf=\"subCategoryForm.controls['name'].invalid\n                                 && (formSubmited || subCategoryForm.controls['name'].dirty)\">Please enter name</p>\n                            </div>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-success\">Submit</button>\n                            </div> \n                        </div>\n                    </div>\n                </form>\n            </div>\n    \n        <!-- Modal footer -->\n        <div class=\"modal-footer\">\n            <button type=\"button\" (click)=\"subCategoryForm.reset()\" class=\"btn btn-danger\" data-dismiss=\"modal\">cancel</button>\n        </div>\n    \n        </div>\n    </div>\n</div>\n\n<div class=\"modal\" id=\"editCategory\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Edit Category</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n              <form name=\"editCategoryForm\" #editCategoryForm=\"ngForm\" (ngSubmit)=\"onEditCategorySubmit()\" novalidate>\n                  <div class=\"row\">\n                      <div class=\"col-md-12\">\n                          <div class=\"form-group\">\n                              <label for=\"subcategory\">Name</label>\n                              <input type=\"text\" name=\"categoryName\" class=\"form-control\" [(ngModel)]=\"categoryName\" #name=\"ngModel\" required>\n                              <input type=\"hidden\" name=\"catId\" class=\"form-control\" [(ngModel)]=\"catId\" #name=\"ngModel\" required>\n                            </div>\n                          <div class=\"form-group\">\n                              <button class=\"btn btn-success\">Submit</button>\n                          </div> \n                      </div>\n                  </div>\n              </form>\n          </div>\n  \n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n  \n      </div>\n  </div>\n</div>\n\n<ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '3px' }\" [template]=\"customLoadingTemplate\"></ngx-loading>\n\n"

/***/ }),

/***/ "./src/app/views/category/category.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/category/category.component.ts ***!
  \******************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.service */ "./src/app/views/category/category.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, fb, toastr) {
        this.categoryService = categoryService;
        this.fb = fb;
        this.toastr = toastr;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.categories = [];
        this.categoryid = '';
        this.loading = false;
        this.formSubmited = false;
        this.getDataFromServer();
        this.addCategoryForm = this.fb.group({
            categoryName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        this.subCategoryForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    }
    CategoryComponent.prototype.ngOnInit = function () {
    };
    CategoryComponent.prototype.getDataFromServer = function () {
        var _this = this;
        this.loading = true;
        this.categoryService.getAllCategory().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.categories = res.data;
                _this.dtTrigger.next();
            }
        });
    };
    CategoryComponent.prototype.onCategorySubmit = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.addCategoryForm.invalid) {
            return;
        }
        var data = {
            name: this.addCategoryForm.value.categoryName
        };
        $('#addCategory').modal('hide');
        this.categoryService.addCategory(data).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.toastr.success(res.response_message);
                _this.getDataFromServer();
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    CategoryComponent.prototype.setsubcategoryId = function (categoryid) {
        this.categoryid = categoryid;
    };
    CategoryComponent.prototype.subCategorySubmit = function () {
        var _this = this;
        this.formSubmited = true;
        if (this.subCategoryForm.invalid) {
            return;
        }
        var data = {
            name: this.subCategoryForm.value.name,
            categoryId: this.categoryid
        };
        $("#addSubCategory").modal('hide');
        this.categoryService.addSubCategory(data).subscribe(function (res) {
            if (res.status == 'success') {
                // this.loading = false;
                _this.toastr.success(res.response_message);
            }
            else {
                _this.toastr.error('Something went wrong!');
            }
        });
    };
    CategoryComponent.prototype.editCategory = function (id, catname) {
        this.catId = id;
        this.categoryName = catname;
    };
    CategoryComponent.prototype.onEditCategorySubmit = function () {
        var _this = this;
        this.loading = true;
        var data = {
            name: this.categoryName,
            categoryId: this.catId
        };
        $("#editCategory").modal('hide');
        this.categoryService.editCategory(data).subscribe(function (res) {
            if (res.response_code == 200) {
                _this.loading = false;
                _this.getDataFromServer();
                _this.toastr.success(res.response_message);
            }
            else {
                _this.toastr.success('Something went wrong!');
            }
        });
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/views/category/category.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/views/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _category_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category-routing.module */ "./src/app/views/category/category-routing.module.ts");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category.component */ "./src/app/views/category/category.component.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.service */ "./src/app/views/category/category.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");










var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_category_component__WEBPACK_IMPORTED_MODULE_5__["CategoryComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _category_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoryRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
                ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"].forRoot({})
            ],
            providers: [_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]]
        })
    ], CategoryModule);
    return CategoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-category-category-module.js.map