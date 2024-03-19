import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Visita } from '../listagem-visitas/visita.model';
import { Observable } from 'rxjs';
import { VisitaService } from '../listagem-visitas/visita.service';


@Component({
  selector: 'app-cadastro-visitas',
  templateUrl: './cadastro-visitas.component.html',
  styleUrls: ['./cadastro-visitas.component.scss'],
})
export class CadastroVisitasComponent implements OnInit {
  visitaForm!: FormGroup;
  estados: string[] = [];
  cidades: string[] = [];

  id = 0;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private visitaService: VisitaService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.queryParamMap.get('id')) ?? 0;
    this.initializeForm();
    this.loadEstados();
    console.log(this.id)
    if(this.id !== 0){
      this.getVisitas()
    }
  }

  initializeForm(): void {
    this.visitaForm = this.formBuilder.group({
      nomeEmpresa: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      dataVisita: ['', Validators.required],
      dataLimiteCadastro: ['', Validators.required],
      quantidadePessoas: ['', Validators.required],
      status: ['P']
    });
  }

  loadEstados(): void {
    this.estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia'];
  }

  loadCidadesPorEstado(estadoSelecionado: string): void {
    switch (estadoSelecionado) {
      case 'São Paulo':
        this.cidades = ['São Paulo', 'Campinas', 'Santo André'];
        break;
      case 'Rio de Janeiro':
        this.cidades = ['Rio de Janeiro', 'Niterói', 'Petrópolis'];
        break;
      case 'Minas Gerais':
        this.cidades = ['Belo Horizonte', 'Uberlândia', 'Juiz de Fora'];
        break;
      case 'Bahia':
        this.cidades = ['Salvador', 'Feira de Santana', 'Vitória da Conquista'];
        break;
      default:
        this.cidades = [];
        break;
    }
  }

  cadastrarVisita(): void {
    if (this.visitaForm.valid) {
      const visita: Visita = this.visitaForm.value;
      console.log(visita);
      this.visitaService.cadastrarVisita(visita).subscribe(
        (response: any) => {
          console.log('cadastrou');
          const visitaId = response.id
          this.router.navigate(['/listagem']);
        },
        (error) => {
          console.error('Erro ao cadastrar visita:', error);
        }
      );
    }
  }

  getVisitas(): void {
    this.visitaService.getVisitasById(this.id)
      .subscribe((visitas: Visita) => {
        console.log(visitas)
        this.visitaForm.patchValue(visitas);
        this.loadCidadesPorEstado(visitas.estado);
      });
  }
  
  onSubmit(): void {
    this.cadastrarVisita();
  }
}
