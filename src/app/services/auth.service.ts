import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('url_do_seu_backend/login', { email, password });
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>('url_do_seu_backend/register', { email, password });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }
}
