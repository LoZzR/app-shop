import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


import { AppConfig } from '../../app.config';
import { User } from './user.model';
import { TokenStorageService } from './token-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
    if(this.tokenStorageService.getToken()){
      this.user.next(this.tokenStorageService.getUser());
    }
  }

  login(credentials): Observable<any> {
    return this.http.post(AppConfig.AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions).pipe(
      catchError(this.handleError),
      tap(resData => {
        console.log(resData);
        this.handleAuthentication(
          resData.username,
          resData.email,
          resData.roles,
          resData.accessToken
        );
      })
    );
  }

  register(user): Observable<any> {
    return this.http.post(AppConfig.AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions).pipe(
      catchError(this.handleError),
      tap(resData => {
        console.log(resData);
        this.handleAuthentication(
          resData.username,
          resData.email,
          resData.roles,
          resData.accessToken
        );
      })
    );
  }

  
  public isAdmin(){
    if (this.user.value) {
      const user = this.user.value;
      return user.roles.includes('ROLE_ADMIN');
    }
    return false;
  }

  private handleAuthentication(
    username: string,
    email: string,
    roles: string[],
    token: string
  ) {
    const user = new User(username, email, roles, token);
    this.user.next(user);
    this.tokenStorageService.saveUser(user);
  }

  signOut() {
    this.user.next(null);
    this.tokenStorageService.signOut();
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}