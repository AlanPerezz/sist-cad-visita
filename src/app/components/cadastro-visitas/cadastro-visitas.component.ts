import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { VisitaService } from '@app/services/visita-service.service';

@Component({
  selector: 'app-cadastro-visitas',
  templateUrl: './cadastro-visitas.component.html',
  styleUrls: ['./cadastro-visitas.component.scss'],
})
export class CadastroVisitasComponent implements OnInit {
  visitaForm!: FormGroup; // Adiciona '!' para indicar que será inicializado no ngOnInit
  estados: string[] = []; // Array para armazenar os estados
  cidades: string[] = []; // Array para armazenar as cidades

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private visitaService: VisitaService
  ) {}

  redirectToCadastroVisitantes(visitaId: number): void {
    this.router.navigateByUrl(`/cadastro-visitantes?visitaId=${visitaId}`);
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loadEstados(); // Método para carregar os estados
    this.route.queryParams.subscribe((params) => {
      const visitaId = params['visitaId'];
    });
  }

  initializeForm(): void {
    this.visitaForm = this.formBuilder.group({
      nomeEmpresa: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      dataVisita: ['', Validators.required],
      dataLimiteCadastro: ['', Validators.required],
      quantidadePessoas: ['', Validators.required],
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
    this.visitaService.cadastrarVisita(this.visitaForm.value).subscribe(
      (response: any) => {
        const visitaId = response.id;
        this.redirectToCadastroVisitantes(visitaId);
      },
      (error: any) => {
        console.error('Erro ao cadastrar visita', error);
      }
    );
  }

  onSubmit(): void {
    if (this.visitaForm.valid) {
      const visita = this.visitaForm.value;
      this.visitaService.cadastrarVisita(visita).subscribe(
        (response) => {
          const link = response.link;
          this.router.navigate(['/sucesso'], { state: { link } });
        },
        (error) => {
          console.error('Erro ao cadastrar visita:', error);
        }
      );
    }
  }
}
