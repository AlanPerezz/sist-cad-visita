import { Component, OnInit } from '@angular/core';
import { VisitanteService } from '@app/services/visitante-service.service';


@Component({
  selector: 'app-listagem-visitantes',
  templateUrl: './listagem-visitantes.component.html',
  styleUrls: ['./listagem-visitantes.component.css']
})
export class ListagemVisiatantesComponent implements OnInit {
  visitante : any[] = [];

  constructor(private visitanteService: VisitanteService) {}

  ngOnInit(): void {
    this.visitante = this.visitanteService.obterVisitantes();
  }
}
