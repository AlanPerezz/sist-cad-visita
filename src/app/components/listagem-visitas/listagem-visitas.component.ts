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
    public router: Router
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
    if(confirm('Tem certeza que deseja EXCLUIR esta visita?')){
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
  }

  redirectLink(visitaId: number){
    this.router.navigateByUrl(`/cadastroVisitante?id=${visitaId}`);
  }

  concluirVisita(visita:Visita) : void {
    if(confirm('Tem certeza que deseja CONCLUIR essa visita?')){
      this.visitaService.concluirVisita(visita).subscribe(
        () => {
          console.log('Visita concluída com sucesso');
          this.getVisitas(visita.VisitaId);
        },
        (error) => {
          console.error('erro ao concluir a visita', error);
        }
      );
    }
  }
  
  editarVisita(visitaId: number): void {
    this.router.navigateByUrl(`/cadastro?id=${visitaId}`);
  }

  copiarLink(visita: any): void {
    visita.linkCopiado = true;
    setTimeout(() => visita.linkCopiado = false, 2000);
  }

  verificarDataLimite(visita: any): boolean {
    const dataLimite = new Date(visita.dataLimiteCadastro);
    const hoje = new Date();
    return hoje > dataLimite;
  }
  
}
