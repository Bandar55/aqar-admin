import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SubadminService {
    private apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
    
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient) {
    }

    createSubadmin(data) {
        return this.http.post<any>(`${this.apiUrlAdmin}/createSubadmin`, data, this.httpOptions);
    }
    subAdminList() {
        return this.http.get<any>(`${this.apiUrlAdmin}/subAdminList`, this.httpOptions);
    }
    getDetails(id) {
        return this.http.get<any>(`${this.apiUrlAdmin}/getSubadminDetails/`+id, this.httpOptions);
    }
    editSubadmin(data){
        return this.http.post<any>(`${this.apiUrlAdmin}/editSubadmin`, data, this.httpOptions);
    }
    deleteSubadmin(id) {
        return this.http.delete<any>(`${this.apiUrlAdmin}/deleteSubadmin/`+id, this.httpOptions);
    }
}
