import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TX } from '../models/tx.model';
import { Observable } from 'rxjs';
import { goapi, mitoapi } from './api';

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, PUT, OPTIONS',
    'Access-Control-Allow-Headers':
      'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TxService {

  constructor(private http: HttpClient) { }

  broadcastTx(tx: TX): Observable<any>
  {
    return this.http.post<any>(`${goapi}mitocell`, tx);
  }

  getBalance(address: string): Observable<any>
  {
    return this.http.get<any>(`${mitoapi}${address}/by_denom?denom=mitocell`);
  }
}
