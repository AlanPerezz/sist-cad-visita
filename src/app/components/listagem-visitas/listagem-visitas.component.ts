import { Component, Inject, forwardRef, OnInit } from '@angular/core';

import { Visita } from './visita.model'; // Verifique o caminho correto
import { VisitaService } from './visita.service';

@Component({
  selector: 'app-listagem-visitas',
  templateUrl: './listagem-visitas.component.html',
  styleUrls: ['./listagem-visitas.component.scss']
})
export class ListagemVisitasComponent implements OnInit {
  visitas: Visita[] = [];
  visitasConcluidas: Visita[] = [];
  visitasPendentes: Visita[] = [];

  constructor(private visitaService: VisitaService) {}

  ngOnInit(): void {
    this.getVisitas();
  }

  getVisitas(): void {
    this.visitaService.getVisitas()
      .subscribe((visitas: Visita[]) => {
        console.log(visitas)
        this.visitas = visitas;
        this.visitasConcluidas = this.visitas.filter(visita => visita.status === 'C');
        this.visitasPendentes = this.visitas.filter(visita => visita.status === 'P');
      });
  }
}
