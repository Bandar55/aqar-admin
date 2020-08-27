(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-user-user-module"],{

/***/ "./src/app/views/user/user-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/user/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/views/user/user.component.ts");




var routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/user/user.component.html":
/*!************************************************!*\
  !*** ./src/app/views/user/user.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addUser\" style=\"margin-bottom: 10px;\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Add User</button> -->\n\n<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Users List\n        </div>\n        <div class=\"card-body\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" id=\"normal-tab\" data-toggle=\"tab\" href=\"#user\" role=\"tab\" aria-controls=\"user\" aria-selected=\"true\">Normal User</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" id=\"professional-tab\" data-toggle=\"tab\" href=\"#professional\" role=\"tab\" aria-controls=\"professional\" aria-selected=\"false\">Professional User</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" id=\"business-tab\" data-toggle=\"tab\" href=\"#business\" role=\"tab\" aria-controls=\"business\" aria-selected=\"false\">Business User</a>\n                </li>\n              </ul>\n              <div class=\"tab-content\" id=\"myTabContent\">\n                <div class=\"tab-pane fade show active\" id=\"user\" role=\"tabpanel\" aria-labelledby=\"normal-tab\">\n                  <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger1\" >\n                    <thead>\n                      <tr>\n                        <th>S.No.</th>\n                        <th>Full Name</th>\n                        <th>Email</th>\n                        <th>Created On</th>\n                        <th>Action</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor = \"let user of users; let i = index;\">\n                        <td>{{i+1}}</td>\n                        <td>{{user?.fullName}}</td>\n                        <td>{{user?.email}}</td>\n                        <td>{{user?.created | date: 'dd/MM/yyyy'}}</td>\n                        <td>\n                          <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#viewUser\" (click)=\"getUserDetails(user._id)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View</button>\n                          <!-- <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editUser\" (click)=\"getUserDetails(user._id)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button> -->\n                          <button class=\"btn btn-success\" *ngIf=\"user.status != 'active'\" (click)=\"blockVerifyUser(user._id, 'active', 'normal')\"><i class=\"fa fa-check\" aria-hidden=\"true\" ></i>Verify</button>\n                          <button class=\"btn btn-success\" *ngIf=\"user.status == 'active'\" ><i class=\"fa fa-check\" aria-hidden=\"true\" ></i>Verified</button>\n                          <button class=\"btn btn-danger\" *ngIf=\"user.status == 'active'\" (click)=\"blockVerifyUser(user._id, 'inactive', 'normal')\"><i class=\"fa fa-ban\" aria-hidden=\"true\" ></i>Block</button>\n                          <button class=\"btn btn-danger\"  *ngIf=\"user.status != 'active'\"><i class=\"fa fa-ban\" aria-hidden=\"true\" ></i>Blocked</button>\n                          <!-- <button class=\"btn btn-primary\" data-toggle=\"modal\" (click)=\"report(user._id)\" data-target=\"#reportUser\"><i class=\"fa fa-ban\" ></i>Report</button> -->\n                          <!-- <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteUser(user._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button> -->\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"tab-pane fade\" id=\"professional\" role=\"tabpanel\" aria-labelledby=\"professional-tab\">\n                    <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger2\" >\n                        <thead>\n                          <tr>\n                            <th>S.No.</th>\n                            <th>Full Name</th>\n                            <th>Email</th>\n                            <th>Created On</th>\n                            <th>Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor = \"let user of professionalUsers; let i = index;\">\n                            <td>{{i+1}}</td>\n                            <td>{{user?.fullName}}</td>\n                            <td>{{user?.email}}</td>\n                            <td>{{user?.created | date: 'dd/MM/yyyy'}}</td>\n                            <td>\n                              <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#viewUser\" (click)=\"getUserDetails(user._id)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View</button>\n                              <!-- <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editUser\" (click)=\"getUserDetails(user._id)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button> -->\n                              <button class=\"btn btn-success\" *ngIf=\"user.status != 'active'\" (click)=\"blockVerifyUser(user._id, 'active', 'professional')\"><i class=\"fa fa-check\" aria-hidden=\"true\" ></i>Verify</button>\n                              <button class=\"btn btn-success\" *ngIf=\"user.status == 'active'\" ><i class=\"fa fa-check\" aria-hidden=\"true\" ></i>Verified</button>\n                              <button class=\"btn btn-danger\" *ngIf=\"user.status == 'active'\" (click)=\"blockVerifyUser(user._id, 'inactive', 'professional')\"><i class=\"fa fa-ban\" aria-hidden=\"true\" ></i>Block</button>\n                              <button class=\"btn btn-danger\"  *ngIf=\"user.status != 'active'\"><i class=\"fa fa-ban\" aria-hidden=\"true\" ></i>Blocked</button>\n                              <!-- <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteUser(user._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button> -->\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                </div>\n                <div class=\"tab-pane fade\" id=\"business\" role=\"tabpanel\" aria-labelledby=\"business-tab\">\n                    <table class=\"table table-striped\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger3\" >\n                        <thead>\n                          <tr>\n                            <th>S.No.</th>\n                            <th>Full Name</th>\n                            <th>Email</th>\n                            <th>Created On</th>\n                            <th>Action</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor = \"let user of businessUsers; let i = index;\">\n                            <td>{{i+1}}</td>\n                            <td>{{user?.fullName}}</td>\n                            <td>{{user?.email}}</td>\n                            <td>{{user?.created | date: 'dd/MM/yyyy'}}</td>\n                            <td>\n                              <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#viewUser\" (click)=\"getUserDetails(user._id)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i>View</button>\n                              <!-- <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#editUser\" (click)=\"getUserDetails(user._id)\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>Edit</button> -->\n                              <button class=\"btn btn-success\" *ngIf=\"user.status != 'active'\" (click)=\"blockVerifyUser(user._id, 'active', 'business')\"><i class=\"fa fa-check\" aria-hidden=\"true\" ></i>Verify</button>\n                              <button class=\"btn btn-success\" *ngIf=\"user.status == 'active'\" ><i class=\"fa fa-check\" aria-hidden=\"true\" ></i>Verified</button>\n                              <button class=\"btn btn-danger\" *ngIf=\"user.status == 'active'\" (click)=\"blockVerifyUser(user._id, 'inactive', 'business')\"><i class=\"fa fa-ban\" aria-hidden=\"true\" ></i>Block</button>\n                              <button class=\"btn btn-danger\"  *ngIf=\"user.status != 'active'\"><i class=\"fa fa-ban\" aria-hidden=\"true\" ></i>Blocked</button>\n                              <!-- <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteUser(user._id)\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i>Delete</button> -->\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                </div>\n              </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal\" id=\"reportUser\">\n  <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Report</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <div class=\"modal-body\">\n            <p *ngFor=\"let data of chatDetails\">{{data.reply}}</p>\n            <form [formGroup]=\"reportUserForm\"  novalidate>\n                <div class=\"row\">\n                  <div class=\"col-md-12 form-group\">\n                    <label>Reply</label>\n                    <textarea formControlName =\"reply\" type=\"text\" class=\"form-control\" ></textarea>\n                  </div>\n                </div>\n            </form>\n        </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-success\" (click)=\"onReport()\" >Submit</button>\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n          </div>\n      </div>\n  </div>\n</div>\n\n<!-- <div class=\"modal\" id=\"addUser\" >\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Add User</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body\">\n                <form name=\"addUserForm\" #addUserForm=\"ngForm\" (ngSubmit)=\"onAddUserSubmit()\" novalidate>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"form-group\">\n                                <label for=\"userType\">User Type</label>\n                                <select name=\"userType\" class=\"form-control\" [(ngModel)]=\"userType\" #name=\"ngModel\" required>\n                                  <option value=\"\">Please select</option>\n                                  <option value=\"normal\">Normal</option>\n                                  <option value=\"business\">Business</option>\n                                  <option value=\"professional\">Professional</option>\n                                </select>                           \n                              </div>\n                            <div class=\"form-group\">\n                                <label for=\"full_name\">Full Name</label>\n                                <input type=\"text\" name=\"full_name\" class=\"form-control\" [(ngModel)]=\"full_name\" #name=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"category\">Category</label>\n                              <select name=\"category\" class=\"form-control\" [(ngModel)]=\"category\" #name=\"ngModel\" (change)=\"selectSubcategry($event)\" required>\n                                <option value=\"\">Please select</option>\n                                <option *ngFor=\"let category of categories\" [value]=\"category._id\">{{category.name}}</option>\n                              </select>           \n                            </div>\n                          <div class=\"form-group\">\n                            <label for=\"subcategory\">Sub-Category</label>\n                            <select name=\"subcategory\" class=\"form-control\" [(ngModel)]=\"subcategory\" #name=\"ngModel\" required>\n                              <option value=\"\">Please select</option>\n                              <option *ngFor=\"let subcategory of subcategories\" value=\"{{subcategory.name}}\">{{subcategory.name}}</option>       \n                            </select>                                 \n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"gender\">Gender</label>\n                            <select name=\"gender\" class=\"form-control\" [(ngModel)]=\"gender\" #name=\"ngModel\" required>\n                              <option value=\"\">Please select</option>\n                              <option value=\"male\">Male</option>\n                              <option value=\"female\">Female</option>\n                            </select>                           \n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"birth_year\">Birth Year</label>\n                            <input type=\"text\" name=\"birth_year\" class=\"form-control\" [(ngModel)]=\"birth_year\" #name=\"ngModel\" required>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"email\">Email</label>\n                            <input type=\"text\" name=\"email\" class=\"form-control\" [(ngModel)]=\"email\" #name=\"ngModel\" required>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"country\">Country</label>\n                            <input type=\"text\" name=\"country\" class=\"form-control\" [(ngModel)]=\"country\" #name=\"ngModel\" required>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"country_code\">Country code</label>\n                            <input type=\"text\" name=\"country_code\" class=\"form-control\" [(ngModel)]=\"country_code\" #name=\"ngModel\" required>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"phone\">Mobile Number</label>\n                            <input type=\"text\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"phone\" #name=\"ngModel\" required>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"currency\">Currency</label>\n                            <input type=\"text\" name=\"currency\" class=\"form-control\" [(ngModel)]=\"currency\" #name=\"ngModel\" required>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"measurement\">Measurement</label>\n                            <input type=\"text\" name=\"measurement\" class=\"form-control\" [(ngModel)]=\"measurement\" #name=\"ngModel\" required>\n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"subcategory\">App Language</label>\n                            <select name=\"app_lang\" class=\"form-control\" [(ngModel)]=\"app_lang\" #name=\"ngModel\" required>\n                              <option value=\"\">Please select</option>\n                              <option value=\"english\">English</option>\n                              <option value=\"arabic\">Arabic</option>\n                            </select>                           \n                          </div>\n                          <div class=\"form-group\">\n                            <label for=\"subcategory\">Speak Language</label>\n                            <select name=\"speak_lang\" class=\"form-control\" [(ngModel)]=\"speak_lang\" #name=\"ngModel\" required>\n                              <option value=\"\">Please select</option>\n                              <option value=\"english\">English</option>\n                              <option value=\"arabic\">Arabic</option>\n                            </select>                           \n                          </div>\n                          <div class=\"form-group\">\n                              <label for=\"currency\">Profile pic</label>\n                              <input type=\"file\" class=\"form-control\" (change)=\"handleFileInput($event.target.files)\" required>\n                            </div>\n                          <div class=\"form-group\">\n                              <button class=\"btn btn-success\">Submit</button>\n                          </div> \n                        </div>\n                    </div>\n                </form>\n            </div>\n    \n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        </div>\n    \n        </div>\n    </div>\n  </div> -->\n\n\n  <!-- <div class=\"modal\" id=\"editUser\" >\n      <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">Edit User</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              </div>\n              <div class=\"modal-body\">\n                  <form name=\"addUserForm\" #addUserForm=\"ngForm\" (ngSubmit)=\"onEditUserSubmit()\" novalidate>\n                      <div class=\"row\">\n                          <div class=\"col-md-12\">\n                              <div class=\"form-group\">\n                                  <label for=\"full_name\">Full Name</label>\n                                  <input type=\"hidden\" name=\"user_id\" class=\"form-control\" [(ngModel)]=\"user._id\" #name=\"ngModel\" required>\n                                  <input type=\"text\" name=\"full_name\" class=\"form-control\" [(ngModel)]=\"user.fullName\" #name=\"ngModel\" required>\n                              </div>\n                              <div class=\"form-group\">\n                                <label for=\"category\">Category</label>\n                                <select name=\"category\" class=\"form-control\" [(ngModel)]=\"user.category\" #name=\"ngModel\" (change)=\"selectSubcategry($event)\" required>\n                                  <option value=\"\">Please select</option>\n                                  <option *ngFor=\"let category of categories\" [value]=\"category.name\">{{category.name}}</option>\n                                </select>           \n                              </div>\n                            <div class=\"form-group\">\n                              <label for=\"subcategory\">Sub-Category</label>\n                              <select name=\"subcategory\" class=\"form-control\" [(ngModel)]=\"user.subcategory\" #name=\"ngModel\" required>\n                                <option value=\"\">Please select</option>\n                                <option *ngFor=\"let subcategory of subcategories\" [value]=\"subcategory.name\" >{{subcategory.name}}</option>       \n                              </select>                                 \n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"gender\">Gender</label>\n                              <select name=\"gender\" class=\"form-control\" [(ngModel)]=\"user.gender\" #name=\"ngModel\" required>\n                                <option value=\"\">Please select</option>\n                                <option value=\"male\">Male</option>\n                                <option value=\"female\">Female</option>\n                              </select>                           \n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"birth_year\">Birth Year</label>\n                              <input type=\"text\" name=\"birth_year\" class=\"form-control\" [(ngModel)]=\"user.birthYear\" #name=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"email\">Email</label>\n                              <input type=\"text\" name=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" #name=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"country\">Country</label>\n                              <input type=\"text\" name=\"country\" class=\"form-control\" [(ngModel)]=\"user.country\" #name=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"country_code\">Country code</label>\n                              <input type=\"text\" name=\"country_code\" class=\"form-control\" [(ngModel)]=\"user.countryCode\" #name=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"phone\">Mobile Number</label>\n                              <input type=\"text\" name=\"phone\" class=\"form-control\" [(ngModel)]=\"user.mobileNumber\" #name=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"currency\">Currency</label>\n                              <input type=\"text\" name=\"currency\" class=\"form-control\" [(ngModel)]=\"user.currency\" #name=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"measurement\">Measurement</label>\n                              <input type=\"text\" name=\"measurement\" class=\"form-control\" [(ngModel)]=\"user.measurement\" #name=\"ngModel\" required>\n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"subcategory\">App Language</label>\n                              <select name=\"app_lang\" class=\"form-control\" [(ngModel)]=\"user.appLanguage\" #name=\"ngModel\" required>\n                                <option value=\"\">Please select</option>\n                                <option value=\"english\">English</option>\n                                <option value=\"arabic\">Arabic</option>\n                              </select>                           \n                            </div>\n                            <div class=\"form-group\">\n                              <label for=\"subcategory\">Speak Language</label>\n                              <select name=\"speak_lang\" class=\"form-control\" [(ngModel)]=\"user.speakLanguage\" #name=\"ngModel\" required>\n                                <option value=\"\">Please select</option>\n                                <option value=\"english\">English</option>\n                                <option value=\"arabic\">Arabic</option>\n                              </select>                           \n                            </div>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-success\">Submit</button>\n                            </div> \n                          </div>\n                      </div>\n                  </form>\n              </div>\n      \n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n          </div>\n      \n          </div>\n      </div>\n  </div> -->\n\n <div class=\"modal\" id=\"viewUser\">\n      <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">User Details</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">User Type</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.Type}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Full Name</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.fullName}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Category</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.category}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Sub-category</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.subCategory}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Gender</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.gender}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Birth Date</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.birthDate}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Email</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.email}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Country</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.country}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Country Code</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.countryCode}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Mobile Number</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.mobileNumber}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Currency</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.currency}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Measurement</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.measurement}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">App Language</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.appLanguage}}</span>\n                  </div>\n                </div>\n                <div class=\"form-group row\">\n                  <label class=\"col-md-3\">Speak Language</label>\n                  <div class=\"col-md-9\">\n                    <span class=\"help-block\">{{user.speakLanguage}}</span>\n                  </div>\n                </div>\n                  <!-- <div class=\"form-group row\">\n                      <label *ngIf =userData.profilePic class=\"col-md-3\">Profile Pic</label>\n                      <div class=\"col-md-9\">\n                        <img src= {{userData?.profilePic}} style=\"width: 40px;\">\n                      </div>\n                    </div> -->\n                 \n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Cancel</button>\n              </div>\n          </div>\n      </div>\n  </div>\n\n\n   \n\n\n"

/***/ }),

/***/ "./src/app/views/user/user.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/user/user.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _category_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category/category.service */ "./src/app/views/category/category.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







var UserComponent = /** @class */ (function () {
    function UserComponent(fb, userService, categoryService, toastr) {
        this.fb = fb;
        this.userService = userService;
        this.categoryService = categoryService;
        this.toastr = toastr;
        this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.dtTrigger3 = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.users = [];
        this.businessUsers = [];
        this.professionalUsers = [];
        this.categories = [];
        this.subcategories = [];
        this.user = {};
        this.message = "";
        this.fileToUpload = null;
        this.chatDetails = [];
        this.reportUserForm = this.fb.group({
            reply: [''],
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.block = false;
        this.normalUserList();
        this.professionalUserList();
        this.businessUserList();
        this.categoryService.getAllCategory().subscribe(function (res) {
            if (res.status == 'success') {
                _this.categories = res.data;
            }
            else {
                _this.message = res.message;
            }
        });
    };
    UserComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    UserComponent.prototype.normalUserList = function () {
        var _this = this;
        this.userService.normalUser().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.users = res.Data;
                _this.dtTrigger1.next();
            }
            else {
                _this.message = res.message;
            }
        });
    };
    UserComponent.prototype.professionalUserList = function () {
        var _this = this;
        this.userService.professionalUser().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.professionalUsers = res.Data;
                _this.dtTrigger2.next();
            }
            else {
                _this.message = res.message;
            }
        });
    };
    UserComponent.prototype.businessUserList = function () {
        var _this = this;
        this.userService.businessUser().subscribe(function (res) {
            if (res.response_code == 200) {
                _this.businessUsers = res.Data;
                _this.dtTrigger3.next();
            }
            else {
                _this.message = res.message;
            }
        });
    };
    UserComponent.prototype.selectSubcategry = function (event) {
        var _this = this;
        var data = {
            categoryId: event.target.value
        };
        this.categoryService.getSubCategory(data).subscribe(function (res) {
            if (res.status == 'success') {
                _this.subcategories = res.data;
            }
            else {
                _this.message = res.message;
            }
        });
    };
    // verifyUser(userId){
    //   console.log('verify', userId)
    //   if(userId != null && userId != ''){
    //     this.userService.verify(userId).subscribe(res => {
    //       console.log(res)
    //       if(res.response_code == 200) {
    //         this.block = true;
    //         this.successmsg = res.response_message;
    //       } else {
    //         this.errormsg = res.response_message;
    //       }
    //     })
    //   }
    // }
    UserComponent.prototype.blockVerifyUser = function (userId, status, type) {
        var _this = this;
        var data = {
            userId: userId,
            status: status
        };
        if (userId != null && userId != '') {
            this.userService.blockAndVerifyUser(data).subscribe(function (res) {
                if (res.response_code == 200) {
                    _this.toastr.success(res.response_message);
                }
                else if (res.response_code == 501) {
                    _this.toastr.error(res.response_message);
                }
                else {
                    _this.toastr.error('Something went wrong!');
                }
                if (type == 'normal') {
                    _this.normalUserList();
                }
                else if (type == 'professional') {
                    _this.professionalUserList();
                }
                else if (type == 'business') {
                    _this.businessUserList();
                }
            });
        }
    };
    UserComponent.prototype.deleteUser = function (userId) {
        if (userId != null && userId != '') {
            var data = {
                userId: userId
            };
            this.userService.delete(data).subscribe(function (res) {
                // if(res.response_code == 200) {
                //   this.successmsg = res.response_message;
                // } else {
                //   this.errormsg = res.response_message;
                // }
            });
        }
    };
    UserComponent.prototype.report = function (id) {
        var _this = this;
        this.userId = id;
        var data = {
            userId: this.userId,
        };
        this.userService.reportDet(data).subscribe(function (res) {
            _this.chatDetails = res.Data;
        });
    };
    UserComponent.prototype.onReport = function () {
        var data = {
            userId: this.userId,
            reply: this.reportUserForm.value.reply
        };
        this.userService.report(data).subscribe(function (res) {
            // if(res.status == 'success') {
            //   this.categories = res.data;
            // } else {
            //   this.message = res.message;
            // }
        });
    };
    UserComponent.prototype.onAddUserSubmit = function () {
        var userJson = {
            fullName: this.full_name,
            categoryId: this.category,
            subCategory: this.subcategory,
            gender: this.gender,
            birthYear: this.birth_year,
            email: this.email,
            country: this.country,
            countryCode: this.country_code,
            mobileNumber: this.phone,
            currency: this.currency,
            measurement: this.measurement,
            appLanguage: this.app_lang,
            speakLanguage: this.speak_lang,
        };
        $('#addUser').modal('hide');
        this.userService.create(userJson, this.fileToUpload).subscribe(function (res) {
            // if(res.status == 'success') {
            //   this.successmsg = res.response_message;
            // } else {
            //   this.errormsg = res.response_message;
            // }
        });
    };
    UserComponent.prototype.getUserDetails = function (id) {
        var _this = this;
        if (id && id != null) {
            this.userService.getUserById(id).subscribe(function (res) {
                if (res.response_code == 200) {
                    _this.user = res.Data;
                }
                else {
                    _this.message = res.message;
                }
            });
        }
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/views/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/views/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _category_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/views/user/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/user/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/views/user/user-routing.module.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.component */ "./src/app/views/user/user.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/views/user/user.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_8__["DataTablesModule"],
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-user-user-module.js.map