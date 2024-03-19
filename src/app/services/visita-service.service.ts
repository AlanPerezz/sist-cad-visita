import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visita } from '@app/components/listagem-visitas/visita.model';



@Injectable({
  providedIn: 'root'
})
export class VisitaService {

  constructor(private http: HttpClient) { }

  getVisitas(): Observable<Visita[]> {
      return this.http.get<Visita[]>(`https://localhost:7078/api/visita`);
  }

  getVisitasById(visitaId: number){
    return this.http.get<Visita>(`https://localhost:7078/api/visita/${visitaId}`);
  }
  cadastrarVisita(visita: Visita): Observable<any> {
    return this.http.post('https://localhost:7078/api/visita', visita);
  }

  excluirVisita(visitaId: number): Observable<any>{
    return this.http.delete(`https://localhost:7078/api/visita/${visitaId}`);
  }

  editarVisita(visita: Visita): Observable<any> {
    return this.http.put('https://localhost:7078/api/visita', visita);
  }
  
}
