import { Component } from '@angular/core';
import { VisitaService } from './services/visita-service.service';
import { Visita } from './components/listagem-visitas/visita.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sist-cad-visita';
  visitas : Visita[] = [];

  constructor (private visitaService: VisitaService) {}

  ngOnInit() : void{
    this.visitaService
    .getVisitas()
    .subscribe((result: Visita[]) => (this.visitas = result));
  }
}
