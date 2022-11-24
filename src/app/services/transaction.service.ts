import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transUrl = 'api/transactions';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getTransactions():Observable<any> {
    return this.http.get<any>(this.transUrl);
  }

  getTransaction(id: number):Observable<any> {
    const url = `${this.transUrl}/${id}`;

    return this.http.get<Transaction>(url);
  }

  addTransaction(transaction: Transaction): Observable<any>{
    return this.http.post(this.transUrl, transaction, this.httpOptions);
  }
}
