import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
    private apiUrlUser = 'http://18.189.223.53:3005/api/user';
    private apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
    
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient) {
    }

    getAllCategory() {
        return this.http.get<any>(`${this.apiUrlUser}/categoryList`, this.httpOptions);
    }

    addCategory(data: any) {
        return this.http.post<any>(`${this.apiUrlUser}/createCategory`, data, this.httpOptions);
    }

    editCategory(data){
        return this.http.post<any>(`${this.apiUrlUser}/editCategory`, data, this.httpOptions);
    }
    deleteCategory(id){
        return this.http.delete<any>(`${this.apiUrlUser}/deleteCategory/`+id, this.httpOptions);
    }

    addSubCategory(data: any) {
        return this.http.post<any>(`${this.apiUrlUser}/createSubcategory`, data, this.httpOptions);
    }

    getSubCategory (data: any) {
        return this.http.post<any>(`${this.apiUrlUser}/subcategoryList`, data, this.httpOptions)
    }

    getDetailsSubategory (data: any) {
        return this.http.post<any>(`${this.apiUrlUser}/getDetailsSubcategory`, data, this.httpOptions)
    }

    editSubcategory(data: any) {
        return this.http.post<any>(`${this.apiUrlUser}/editSubcategory`, data, this.httpOptions)
    }

    getById(id: number) {
        return this.http.get<any>(`${this.apiUrlUser}/` + id, this.httpOptions);
    }

    deleteSubcategory(subcategoryId: string) {
        return this.http.delete<any>(`${this.apiUrlUser}/deleteSubcategory/` + subcategoryId, this.httpOptions);
    }

    addMarketing(data: any, fileToUpload: File) {
        let headers = new HttpHeaders();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        let params = new HttpParams();
        const formData: FormData = new FormData();
        formData.append('screenName', data.screenName);
        formData.append('title', data.title);
        formData.append('marketingImage', fileToUpload, fileToUpload.name); 
        return this.http.post<any>(`${this.apiUrlAdmin}/addMarketingPopup`, formData, { params, headers })
    }

    getMarketingPopup() {
        return this.http.get<any>(`${this.apiUrlAdmin}/getMarketingPopup`, this.httpOptions);
    }

    getPopupDetails(id) {
        return this.http.get<any>(`${this.apiUrlAdmin}/getPopupDetails/`+id, this.httpOptions);
    }

    editMarketingPopup(data: any, fileToUpload: File) {
        let headers = new HttpHeaders();
        headers.set('Content-Type', null);
        headers.set('Accept', "multipart/form-data");
        let params = new HttpParams();
        const formData: FormData = new FormData();
        if(fileToUpload){
            formData.append('marketingImage', fileToUpload, fileToUpload.name);
        } 
        formData.append('id', data.id);
        formData.append('screenName', data.screenName);
        formData.append('title', data.title);
        // formData.append('marketingImage', fileToUpload, fileToUpload.name);
        return this.http.post<any>(`${this.apiUrlAdmin}/editMarketingPopup/`, formData, { params, headers });
    }

    deletePopup(id){
        return this.http.delete<any>(`${this.apiUrlAdmin}/deletePopup/`+id, this.httpOptions);
    }

    contentList() {
        return this.http.get<any>(`${this.apiUrlUser}/getStaticContent`, this.httpOptions)
    }

    addContent(data) {
        return this.http.post<any>(`${this.apiUrlAdmin}/addContent`, data, this.httpOptions)
    }

    getContentDetails(id){
        return this.http.get<any>(`${this.apiUrlAdmin}/getContentDetails/`+id, this.httpOptions)
    }

    editContent(data){
        return this.http.post<any>(`${this.apiUrlAdmin}/editContent`, data, this.httpOptions); 
    }

    deleteContent(id){
        return this.http.delete<any>(`${this.apiUrlAdmin}/deleteContent/`+id, this.httpOptions);
    }

    getAllLanguage() {
        return this.http.post<any>(`${this.apiUrlAdmin}/getAllLanguage`, this.httpOptions);
    }

    addLanguage(data: any) {
        return this.http.post<any>(`${this.apiUrlAdmin}/addLanguage`, data, this.httpOptions);
    }

    getLanguage(id){
        return this.http.get<any>(`${this.apiUrlAdmin}/getLanguage/`+id, this.httpOptions)
    }

    editLanguage(data){
        return this.http.post<any>(`${this.apiUrlAdmin}/updateLanguage`, data, this.httpOptions);
    }

    deleteLangauge(data){
        return this.http.post<any>(`${this.apiUrlAdmin}/deleteLangauge`, data, this.httpOptions);
    }


}
