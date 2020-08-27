import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
    private apiUrlAdmin = 'http://18.189.223.53:3005/api/admin';
    
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

    constructor(private http: HttpClient) {
    }

    addCurrency(data) {
        return this.http.post<any>(`${this.apiUrlAdmin}/addCurrency`, data, this.httpOptions);
    }
    currencyList() {
        return this.http.get<any>(`${this.apiUrlAdmin}/currencyList`, this.httpOptions);
    }
    getCurrencyDetails(id) {
        return this.http.get<any>(`${this.apiUrlAdmin}/getCurrencyDetails/`+id, this.httpOptions);
    }
    editCurrency(data){
        return this.http.post<any>(`${this.apiUrlAdmin}/editCurrency`, data, this.httpOptions);
    }
    deleteCurrency(id) {
        return this.http.delete<any>(`${this.apiUrlAdmin}/deleteCurrency/`+id, this.httpOptions);
    }
}
