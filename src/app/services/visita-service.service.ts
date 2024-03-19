import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visita } from '@app/components/listagem-visitas/visita.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VisitaService {
  url = 'https://localhost:7078/api/visita';

  constructor(private http: HttpClient) { }

  getVisitas(): Observable<Visita[]> {
    return this.http.get<Visita[]>(this.url);
  }

  cadastrarVisita(visita: Visita): Observable<any> {
    return this.http.post(this.url, visita);
  }

  // salvarLink(visitaId: number, link: string): Observable<any> {
  //   const body = {visitaId, link};
  //   return this.http.post(`https://localhost:7078/api/salvarLink`,body);
  // }
}
