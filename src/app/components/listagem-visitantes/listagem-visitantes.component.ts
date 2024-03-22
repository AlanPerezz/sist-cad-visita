import { Component, Input, OnInit } from '@angular/core';
import { Visitante } from './visitante.model';
import { Router } from '@angular/router';
import { VisitanteService } from '@app/services/visitante-service.service';


@Component({
  selector: 'app-listagem-visitantes',
  templateUrl: './listagem-visitante.component.html',
  styleUrls: ['./listagem-visitante.component.scss']
})
export class ListagemVisitantesComponent implements OnInit {
  visitantes: Visitante[] = [];
  @Input() visitanteid = 0;

  constructor(
    private visitanteService: VisitanteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getVisitantes();
  }

  getVisitantes(): void {
    this.visitanteService.
    getAllVisitantesByVisitaID(this.visitanteid)
      .subscribe((visitantes: Visitante[]) => {
        console.log(visitantes)
        this.visitantes = visitantes;
      });
  }

  excluirVisitante(visitanteId: number): void {
    if (confirm('Tem certeza que deseja EXCLUIR este visitante?')) {
      this.visitanteService.excluirVisitante(visitanteId).subscribe(
        () => {
          console.log('Visitante excluida com sucesso');
          this.getVisitantes();
        },
        (error) => {
          console.error('erro ao deletar a visitante', error);
        }
      );
    }
  }

  editarVisitante(visitanteId: number): void {
    this.router.navigateByUrl(`/cadastroVisitante?id=${visitanteId}`);
  }

}
