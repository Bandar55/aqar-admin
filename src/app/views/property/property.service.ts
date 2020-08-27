import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PropertyService {
    private apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
    private apiUrlUser = 'http://18.189.223.53:3005/api/user';
    
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient) {
    }
    getAllProperty() {
      return this.http.get<any>(`${this.apiUrlAdmin}/getAllProperty`, this.httpOptions);
    }

    getNormalProperty() {
      return this.http.get<any>(`${this.apiUrlAdmin}/getNormalProperty`, this.httpOptions);
    }

    getProfessionalProperty() {
      return this.http.get<any>(`${this.apiUrlAdmin}/getProfessionalProperty`, this.httpOptions);
    }

    getPropertyDetails(id){
      return this.http.get<any>(`${this.apiUrlAdmin}/getPropertyDetails/`+id, this.httpOptions)
    }

    editProperty(data){
      return this.http.post<any>(`${this.apiUrlAdmin}/editProperty`, data, this.httpOptions)
    }

    deleteProperty(data){
      return this.http.post<any>(`${this.apiUrlUser}/deleteProperty`, data, this.httpOptions);
    }
 
}
