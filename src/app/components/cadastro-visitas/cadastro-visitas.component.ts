import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Visita } from '../listagem-visitas/visita.model';
import { VisitaService } from '@app/services/visita-service.service';


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
  editando: boolean = false;
  visitaId: number | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private visitaService: VisitaService,
    private activatedRoute: ActivatedRoute
  ) { }

  get nomeEmpresa() {
    return this.visitaForm.controls['nomeEmpresa'];
  }
  
  get estado() {
    return this.visitaForm.controls['estado'];
  }
  
  get cidade() {
    return this.visitaForm.controls['cidade'];
  }
  
  get dataVisita() {
    return this.visitaForm.controls['dataVisita'];
  }
  
  get dataLimiteCadastro() {
    return this.visitaForm.controls['dataLimiteCadastro'];
  }
  
  get quantidadePessoas() {
    return this.visitaForm.controls['quantidadePessoas'];
  }
  
  ngOnInit(): void {

    this.id = Number(this.activatedRoute.snapshot.queryParamMap.get('id')) ?? 0;
    this.initializeForm();
    this.loadEstados();
    
    if(this.id !== 0){
      this.getVisitas()
      this.editandoVisita()
      this.activatedRoute.params.subscribe(params => {
        this.visitaId = params['id'];
      });
    }

  }
  
  initializeForm(): void {
    this.visitaForm = this.formBuilder.group({
      nomeEmpresa: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      dataVisita: ['', Validators.required],
      dataLimiteCadastro: ['', Validators.required],
      quantidadePessoas: ['', Validators.required],
      status: ['P'],
      visitaId: [0]
    });
  }

  minDate(): string {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  }
  
  checkDateValidity(controlName: string): void {
    const control = this.visitaForm.get(controlName);
    if (control && control.value) {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      if (selectedDate < currentDate) {
        control.setErrors({ dataPassada: true });
      } else {
        control.setErrors(null);
      }
    }
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
      this.visitaService.cadastrarVisita(visita).subscribe(
        (response: any) => {
          console.log(response.visitaId)
          const visitaId = response.visitaId
          const link = `https://localhost:7078/api/visita/${visitaId}`;
          visita.link = link;
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

  editarVisita(): void {
    if (this.visitaForm.valid) {
      const visita: Visita = this.visitaForm.value;
      console.log(visita);
      this.visitaService.editarVisita(visita).subscribe(
        (response: any) => {
          console.log('editou');
          const visitaId = response.visitaId
          this.router.navigate(['/listagem']);
        },
        (error) => {
          console.error('Erro ao editar visita:', error);
        }
      );
    }
  }

  editandoVisita(): void{
    this.editando = true;
  }
  
  onSubmit(): void {
    
    if(this.id !== 0){
      console.log('CHAMOU O EDITAR')
      this.editarVisita();
    }else{
      console.log('CHAMOU O CADASTRAR')
      this.cadastrarVisita();
    }
  }
}

