// visita.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visita } from './visita.model';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http: HttpClient) { }

  getVisitas(): Observable<Visita[]> {
    return this.http.get<Visita[]>('caminho-para-api/visitas');
  }
}
