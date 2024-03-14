import { Component, Inject, forwardRef, OnInit } from '@angular/core';
import { VisitaService } from './visita.service'; // Verifique o caminho correto
import { Visita } from './visita.model'; // Verifique o caminho correto

@Component({
  selector: 'app-listagem-visitas',
  templateUrl: './listagem-visitas.component.html',
  styleUrls: ['./listagem-visitas.component.scss']
})
export class ListagemVisitasComponent implements OnInit {
  visitas: Visita[] = [];
  visitasConcluidas: Visita[] = [];
  visitasPendentes: Visita[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getVisitas();
  }

  getVisitas(): void {
    // this.visitaService.getVisitas()
    //   .subscribe((visitas: Visita[]) => {
    //     this.visitas = visitas;
    //     this.visitasConcluidas = this.visitas.filter(visita => visita.status === 'Concluída');
    //     this.visitasPendentes = this.visitas.filter(visita => visita.status === 'Pendente');
    //   });
  }
}
