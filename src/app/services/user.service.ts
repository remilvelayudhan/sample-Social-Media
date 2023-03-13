import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user =JSON.stringify(localStorage.getItem('user')) as unknown as IUser;

  constructor(private http: HttpClient) { }

  public createUser(userData:IUser): Observable<IUser> {
    return this.http.post<IUser>('http://localhost:3000/user', { email:userData.email,userName:userData.userName,password:userData.password }).pipe(catchError(this.handleError));
  }


  public handleError(error: HttpErrorResponse){
    return  throwError (error.message);
  }


  public getUser(email:string): Observable<IUser[]> {
    let body = new HttpParams({fromObject:{email:email}});
    return this.http.get<IUser[]>('http://localhost:3000/user',{params:body}).pipe(catchError(this.handleError));
  }
}
