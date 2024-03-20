import { Component, OnInit } from '@angular/core';
import { Visitante } from './visitante.model';
import { Router } from '@angular/router';
import { VisitanteService } from '@app/services/visitante-service.service';


@Component({
  selector: 'app-listagem-visitantes',
  templateUrl: './listagem-visitantes.component.html',
  styleUrls: ['./listagem-visitantes.component.scss']
})
export class ListagemVisitasComponent implements OnInit {
  visitantes: Visitante[] = [];

  constructor(
    private visitanteService: VisitanteService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.getVisitantes();
  }

  getVisitantes(visitanteId:number = 0): void {
    this.visitanteService.getVisitante()
      .subscribe((visitantes: Visitante[]) => {
        console.log(visitantes)
        this.visitantes = visitantes;
      });
  }

  excluirVisita(visitanteId:number): void {
    this.visitanteService.excluirVisitante(visitanteId).subscribe(
      () => {
        console.log('Visitante excluida com sucesso');
        this.getVisitantes(visitanteId);
      },
      (error) => {
        console.error('erro ao deletar a visitante', error);
      }
    );
  }
  
  editarVisitante(visitanteId: number): void {
    this.router.navigateByUrl(`/cadastro?id=${visitanteId}`);
  }
  
}
