import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {
    private apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
    private apiUrlUser = 'http://18.189.223.53:3005/api/user';

    
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient) {
    }
    getAllUser() {
      return this.http.get<any>(`${this.apiUrlAdmin}/getAllUser`, this.httpOptions);
    }
    totalRegisterUser() {
      return this.http.get<any>(`${this.apiUrlAdmin}/totalRegisterUser`, this.httpOptions);
    }

    create(data: any, fileToUpload: File) {
      console.log(data, fileToUpload)
      let headers = new HttpHeaders();
      headers.set('Content-Type', null);
      headers.set('Accept', "multipart/form-data");
      let params = new HttpParams();
      const formData: FormData = new FormData();
      formData.append('prdfile', fileToUpload, fileToUpload.name);
      formData.append('user_id', data.user_id);
      return this.http.post<any>(`${this.apiUrlAdmin}/createUser`, data, this.httpOptions);
  }

  getUserById(userId: string) {
    return this.http.get<any>(`${this.apiUrlAdmin}/getUserDetails/` + userId, this.httpOptions)
  }

  deleteUser(userId: string) {
    return this.http.delete<any>(`${this.apiUrlAdmin}/deleteUser/` + userId, this.httpOptions);
  }

  normalUser(){
      return this.http.get<any>(`${this.apiUrlAdmin}/totalRegisterUser`, this.httpOptions);
  }

  professionalUser() {
      return this.http.get<any>(`${this.apiUrlAdmin}/totalRegisterProfessional`, this.httpOptions);
  }

  businessUser() {
      return this.http.get<any>(`${this.apiUrlAdmin}/totalRegisterBusiness`, this.httpOptions);
  }

  postedTotalProperty() {
      return this.http.get<any>(`${this.apiUrlAdmin}/postedTotalProperty`, this.httpOptions);
  }

  // verify(id){
  //   return this.http.get<any>(`${this.apiUrlAdmin}blockAndVerifyUser/`+id, this.httpOptions);
  // }

  blockAndVerifyUser(data){
    return this.http.post<any>(`${this.apiUrlAdmin}/blockAndVerifyUser`, data, this.httpOptions);
  }

  delete(data){
    return this.http.post<any>(`${this.apiUrlUser}/deleteBusinessProfessionalProfile`, data, this.httpOptions);
  }

  report(data){
    return this.http.post<any>(`${this.apiUrlUser}/replyAdmin`, data, this.httpOptions);
  }

  reportDet(data){
    return this.http.post<any>(`${this.apiUrlUser}/getAdminContactDetails`, data, this.httpOptions);
  }


    
}
