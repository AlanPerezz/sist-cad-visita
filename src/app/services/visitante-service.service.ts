import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitante } from '@app/components/listagem-visitantes/visitante.model';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http: HttpClient) { }

  getVisitante(): Observable<Visitante[]> {
      return this.http.get<Visitante[]>(`https://localhost:7078/api/visitante`);
  }

  getVisitantenteById(visitanteId: number){
    return this.http.get<Visitante>(`https://localhost:7078/api/visitante/${visitanteId}`);
  }

  cadastrarVisitante(visitante: Visitante): Observable<any> {
    return this.http.post('https://localhost:7078/api/visitante', visitante);
  }

  excluirVisitante(visitanteId: number): Observable<any>{
    return this.http.delete(`https://localhost:7078/api/visitante/${visitanteId}`);
  }

  editarVisitante(visitante: Visitante): Observable<any> {
    return this.http.put('https://localhost:7078/api/visitante', visitante);
  }
  
}