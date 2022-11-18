import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TX } from '../models/tx.model';
import { Observable } from 'rxjs';
import { goapi } from './api';

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
    // http:localhost:8080/mitocell
    console.log("post")
    console.log(tx)
    console.log(`${goapi}mitocell`) 
    var output = this.http.post<any>(`${goapi}mitocell`, tx);
    console.log(output);
    return output;
  }
}
