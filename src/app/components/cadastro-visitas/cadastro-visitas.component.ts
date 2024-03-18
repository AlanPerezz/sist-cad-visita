import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitaService } from '@app/services/visita-service.service';
import { Visita } from '../listagem-visitas/visita.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro-visitas',
  templateUrl: './cadastro-visitas.component.html',
  styleUrls: ['./cadastro-visitas.component.scss'],
})
export class CadastroVisitasComponent implements OnInit {
  visitaForm!: FormGroup;
  estados: string[] = [];
  cidades: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private visitaService: VisitaService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.loadEstados();
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
      console.log('Dados da visita a serem enviados:', visita);
      this.visitaService.cadastrarVisita(visita).subscribe(
        () => {
          console.log('Visita cadastrada com sucesso!');
          this.router.navigate(['/listagem']);
        },
        (error) => {
          console.error('Erro ao cadastrar visita:', error);
        }
      );
    }
  }  

  onSubmit(): void {
    this.cadastrarVisita();
  }
}
