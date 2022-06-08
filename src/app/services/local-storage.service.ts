import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  SaveUser(userData: UserModel): boolean {
    let user = localStorage.getItem('user-info');
    if (user) {
      return false;
    } else {
      let userToSave = JSON.stringify(userData);
      localStorage.setItem('user-info', userToSave);
      return true;
    }
  }

  /**
   *
   * @param userData
   * @returns
   */
  SaveToken(token: string): boolean {
    let tk = localStorage.getItem('token-info');
    if (tk) {
      return false;
    } else {
      localStorage.setItem('token-info', token);
      return true;
    }
  }

  GetUserId(): string {
    let user = localStorage.getItem('user-info');
    if (user) {
      let userObject = JSON.parse(user);
      return userObject._id;
    } else {
      return '';
    }
  }

  GetToken(): string {
    let tk = localStorage.getItem('token-info');
    if (tk) {
      return tk;
    } else {
      return '';
    }
  }

  RemoveLocalStorageInfo() {
    localStorage.removeItem('token-info');
    localStorage.removeItem('user-info');
  }
}
