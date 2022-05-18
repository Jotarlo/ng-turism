import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from '../config/general-data';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  url = GeneralData.url_security;
  constructor(private http: HttpClient) {}

  ResetPassword(username: string, email: string): Observable<object> {
    let url_reset = `${this.url}reset-password`;
    return this.http.post(url_reset, {
      username: username,
      email: email,
    });
  }
}
