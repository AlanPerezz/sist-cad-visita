import { Component, Inject, forwardRef, OnInit, importProvidersFrom } from '@angular/core';

import { Visita } from './visita.model'; 

import { Router } from '@angular/router';
import { VisitaService } from '@app/services/visita-service.service';

@Component({
  selector: 'app-listagem-visitas',
  templateUrl: './listagem-visitas.component.html',
  styleUrls: ['./listagem-visitas.component.scss']
})
export class ListagemVisitasComponent implements OnInit {
  visitas: Visita[] = [];
  visitasConcluidas: Visita[] = [];
  visitasPendentes: Visita[] = [];

  constructor(
    private visitaService: VisitaService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getVisitas();
  }

  getVisitas(visitaId:number = 0): void {
    this.visitaService.getVisitas()
      .subscribe((visitas: Visita[]) => {
        console.log(visitas)
        this.visitas = visitas;
        this.visitasConcluidas = this.visitas.filter(visita => visita.status === 'C');
        this.visitasPendentes = this.visitas.filter(visita => visita.status === 'P');
      });
  }

  excluirVisita(visitaId:number): void {
    this.visitaService.excluirVisita(visitaId).subscribe(
      () => {
        console.log('Visita excluida com sucesso');
        this.getVisitas(visitaId);
      },
      (error) => {
        console.error('erro ao deletar a visita', error);
      }
    );
  }
  
  editarVisita(visitaId: number): void {
    this.router.navigateByUrl(`/cadastro?id=${visitaId}`);
  }
  
}
