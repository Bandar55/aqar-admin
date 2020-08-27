import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
    private apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';

    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient) {
    }

    adminDetails(id) {
        return this.http.get<any>(`${this.apiUrlAdmin}/adminDetails/`+id, this.httpOptions);
    }
}
