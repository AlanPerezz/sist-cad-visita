import { Component, OnInit } from '@angular/core';
import { VisitanteService } from '@app/services/visitante-service.service';

@Component({
  selector: 'app-listagem-visitantes',
  templateUrl: './listagem-visitantes.component.html',
  styleUrls: ['./listagem-visitantes.component.scss']
})
export class ListagemVisitantesComponent implements OnInit {
  visitantes: any[] = [];

  constructor(private visitanteService: VisitanteService) {}

  ngOnInit(): void {
    this.visitantes = this.visitanteService.obterVisitantes();
  }
}
