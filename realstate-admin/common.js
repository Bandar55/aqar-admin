(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/views/category/category.service.ts":
/*!****************************************************!*\
  !*** ./src/app/views/category/category.service.ts ***!
  \****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CategoryService = /** @class */ (function () {
    function CategoryService(http) {
        this.http = http;
        this.apiUrlUser = 'http://18.189.223.53:3005/api/user';
        this.apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    CategoryService.prototype.getAllCategory = function () {
        return this.http.get(this.apiUrlUser + "/categoryList", this.httpOptions);
    };
    CategoryService.prototype.addCategory = function (data) {
        return this.http.post(this.apiUrlUser + "/createCategory", data, this.httpOptions);
    };
    CategoryService.prototype.editCategory = function (data) {
        return this.http.post(this.apiUrlUser + "/editCategory", data, this.httpOptions);
    };
    CategoryService.prototype.deleteCategory = function (id) {
        return this.http.delete(this.apiUrlUser + "/deleteCategory/" + id, this.httpOptions);
    };
    CategoryService.prototype.addSubCategory = function (data) {
        return this.http.post(this.apiUrlUser + "/createSubcategory", data, this.httpOptions);
    };
    CategoryService.prototype.getSubCategory = function (data) {
        return this.http.post(this.apiUrlUser + "/subcategoryList", data, this.httpOptions);
    };
    CategoryService.prototype.getDetailsSubategory = function (data) {
        return this.http.post(this.apiUrlUser + "/getDetailsSubcategory", data, this.httpOptions);
    };
    CategoryService.prototype.editSubcategory = function (data) {
        return this.http.post(this.apiUrlUser + "/editSubcategory", data, this.httpOptions);
    };
    CategoryService.prototype.getById = function (id) {
        return this.http.get(this.apiUrlUser + "/" + id, this.httpOptions);
    };
    CategoryService.prototype.deleteSubcategory = function (subcategoryId) {
        return this.http.delete(this.apiUrlUser + "/deleteSubcategory/" + subcategoryId, this.httpOptions);
    };
    CategoryService.prototype.addMarketing = function (data, fileToUpload) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var formData = new FormData();
        formData.append('screenName', data.screenName);
        formData.append('title', data.title);
        formData.append('marketingImage', fileToUpload, fileToUpload.name);
        return this.http.post(this.apiUrlAdmin + "/addMarketingPopup", formData, { params: params, headers: headers });
    };
    CategoryService.prototype.getMarketingPopup = function () {
        return this.http.get(this.apiUrlAdmin + "/getMarketingPopup", this.httpOptions);
    };
    CategoryService.prototype.getPopupDetails = function (id) {
        return this.http.get(this.apiUrlAdmin + "/getPopupDetails/" + id, this.httpOptions);
    };
    CategoryService.prototype.editMarketingPopup = function (data, fileToUpload) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var formData = new FormData();
        if (fileToUpload) {
            formData.append('marketingImage', fileToUpload, fileToUpload.name);
        }
        formData.append('id', data.id);
        formData.append('screenName', data.screenName);
        formData.append('title', data.title);
        // formData.append('marketingImage', fileToUpload, fileToUpload.name);
        return this.http.post(this.apiUrlAdmin + "/editMarketingPopup/", formData, { params: params, headers: headers });
    };
    CategoryService.prototype.deletePopup = function (id) {
        return this.http.delete(this.apiUrlAdmin + "/deletePopup/" + id, this.httpOptions);
    };
    CategoryService.prototype.contentList = function () {
        return this.http.get(this.apiUrlUser + "/getStaticContent", this.httpOptions);
    };
    CategoryService.prototype.addContent = function (data) {
        return this.http.post(this.apiUrlAdmin + "/addContent", data, this.httpOptions);
    };
    CategoryService.prototype.getContentDetails = function (id) {
        return this.http.get(this.apiUrlAdmin + "/getContentDetails/" + id, this.httpOptions);
    };
    CategoryService.prototype.editContent = function (data) {
        return this.http.post(this.apiUrlAdmin + "/editContent", data, this.httpOptions);
    };
    CategoryService.prototype.deleteContent = function (id) {
        return this.http.delete(this.apiUrlAdmin + "/deleteContent/" + id, this.httpOptions);
    };
    CategoryService.prototype.getAllLanguage = function () {
        return this.http.post(this.apiUrlAdmin + "/getAllLanguage", this.httpOptions);
    };
    CategoryService.prototype.addLanguage = function (data) {
        return this.http.post(this.apiUrlAdmin + "/addLanguage", data, this.httpOptions);
    };
    CategoryService.prototype.getLanguage = function (id) {
        return this.http.get(this.apiUrlAdmin + "/getLanguage/" + id, this.httpOptions);
    };
    CategoryService.prototype.editLanguage = function (data) {
        return this.http.post(this.apiUrlAdmin + "/updateLanguage", data, this.httpOptions);
    };
    CategoryService.prototype.deleteLangauge = function (data) {
        return this.http.post(this.apiUrlAdmin + "/deleteLangauge", data, this.httpOptions);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/views/property/property.service.ts":
/*!****************************************************!*\
  !*** ./src/app/views/property/property.service.ts ***!
  \****************************************************/
/*! exports provided: PropertyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyService", function() { return PropertyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PropertyService = /** @class */ (function () {
    function PropertyService(http) {
        this.http = http;
        this.apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
        this.apiUrlUser = 'http://18.189.223.53:3005/api/user';
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    PropertyService.prototype.getAllProperty = function () {
        return this.http.get(this.apiUrlAdmin + "/getAllProperty", this.httpOptions);
    };
    PropertyService.prototype.getNormalProperty = function () {
        return this.http.get(this.apiUrlAdmin + "/getNormalProperty", this.httpOptions);
    };
    PropertyService.prototype.getProfessionalProperty = function () {
        return this.http.get(this.apiUrlAdmin + "/getProfessionalProperty", this.httpOptions);
    };
    PropertyService.prototype.getPropertyDetails = function (id) {
        return this.http.get(this.apiUrlAdmin + "/getPropertyDetails/" + id, this.httpOptions);
    };
    PropertyService.prototype.editProperty = function (data) {
        return this.http.post(this.apiUrlAdmin + "/editProperty", data, this.httpOptions);
    };
    PropertyService.prototype.deleteProperty = function (data) {
        return this.http.post(this.apiUrlUser + "/deleteProperty", data, this.httpOptions);
    };
    PropertyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PropertyService);
    return PropertyService;
}());



/***/ }),

/***/ "./src/app/views/user/user.service.ts":
/*!********************************************!*\
  !*** ./src/app/views/user/user.service.ts ***!
  \********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
        this.apiUrlUser = 'http://18.189.223.53:3005/api/user';
        this.httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    UserService.prototype.getAllUser = function () {
        return this.http.get(this.apiUrlAdmin + "/getAllUser", this.httpOptions);
    };
    UserService.prototype.totalRegisterUser = function () {
        return this.http.get(this.apiUrlAdmin + "/totalRegisterUser", this.httpOptions);
    };
    UserService.prototype.create = function (data, fileToUpload) {
        console.log(data, fileToUpload);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        var formData = new FormData();
        formData.append('prdfile', fileToUpload, fileToUpload.name);
        formData.append('user_id', data.user_id);
        return this.http.post(this.apiUrlAdmin + "/createUser", data, this.httpOptions);
    };
    UserService.prototype.getUserById = function (userId) {
        return this.http.get(this.apiUrlAdmin + "/getUserDetails/" + userId, this.httpOptions);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.apiUrlAdmin + "/deleteUser/" + userId, this.httpOptions);
    };
    UserService.prototype.normalUser = function () {
        return this.http.get(this.apiUrlAdmin + "/totalRegisterUser", this.httpOptions);
    };
    UserService.prototype.professionalUser = function () {
        return this.http.get(this.apiUrlAdmin + "/totalRegisterProfessional", this.httpOptions);
    };
    UserService.prototype.businessUser = function () {
        return this.http.get(this.apiUrlAdmin + "/totalRegisterBusiness", this.httpOptions);
    };
    UserService.prototype.postedTotalProperty = function () {
        return this.http.get(this.apiUrlAdmin + "/postedTotalProperty", this.httpOptions);
    };
    // verify(id){
    //   return this.http.get<any>(`${this.apiUrlAdmin}blockAndVerifyUser/`+id, this.httpOptions);
    // }
    UserService.prototype.blockAndVerifyUser = function (data) {
        return this.http.post(this.apiUrlAdmin + "/blockAndVerifyUser", data, this.httpOptions);
    };
    UserService.prototype.delete = function (data) {
        return this.http.post(this.apiUrlUser + "/deleteBusinessProfessionalProfile", data, this.httpOptions);
    };
    UserService.prototype.report = function (data) {
        return this.http.post(this.apiUrlUser + "/replyAdmin", data, this.httpOptions);
    };
    UserService.prototype.reportDet = function (data) {
        return this.http.post(this.apiUrlUser + "/getAdminContactDetails", data, this.httpOptions);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map