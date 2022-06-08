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

  LoginUser(email: string, password: string) {
    let url_request = `${this.url}user-authentication`;
    return this.http.post(url_request, {
      username: email,
      password: password,
    });
  }

  /**
   * Verify code and userId
   * @param code code to verify with 2FA
   * @param userId userId of user that want to enter
   */
  ValidateCode(code: string, userId: string): Observable<any> {
    let url_request = `${this.url}two-factor-authentication`;
    return this.http.post<any>(url_request, {
      userId: userId,
      code: code,
    });
  }
}
