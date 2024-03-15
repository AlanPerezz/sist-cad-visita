import { Component } from '@angular/core';
import { VisitanteService } from '@app/services/visitante-service.service';


@Component({
  selector: 'app-cadastro-visitante',
  templateUrl: './cadastro-visitante.component.html',
  styleUrls: ['./cadastro-visitante.component.scss']
})
export class CadastroVisitanteComponent {
  constructor(private visitanteService: VisitanteService) {}

  cadastrarVisitante(): void {
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const cpf = (document.getElementById('cpf') as HTMLInputElement).value;

    this.visitanteService.adicionarVisitante({ nome, cpf });
  }
}
