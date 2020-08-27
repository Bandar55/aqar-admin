import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    private apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';

    
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient) {
    }

    login(data) {
        return this.http.post<any>(`${this.apiUrlAdmin}/adminLogin`, data, this.httpOptions);
    }

    changePwd(data) {
        return this.http.post<any>(`${this.apiUrlAdmin}/adminChangePassword`, data, this.httpOptions);
    }
}
