import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visita } from '@app/components/listagem-visitas/visita.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http: HttpClient) { }

  cadastrarVisita(visita: Visita): Observable<any> {
    return this.http.post<any>('', visita);
  }
}
