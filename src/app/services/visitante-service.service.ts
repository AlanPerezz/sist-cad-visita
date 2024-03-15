import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitanteService {
  private visitantes: any[] = [];

  adicionarVisitante(visitante: any): void {
    this.visitantes.push(visitante);
  }

  obterVisitantes(): any[] {
    return this.visitantes;
  }
}
