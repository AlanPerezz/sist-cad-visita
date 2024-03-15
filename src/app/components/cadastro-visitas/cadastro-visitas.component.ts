import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-visitas',
  templateUrl: './cadastro-visitas.component.html',
  styleUrls: ['./cadastro-visitas.component.scss']
})
export class CadastroVisitasComponent implements OnInit {
  visitaForm!: FormGroup; // Adiciona '!' para indicar que será inicializado no ngOnInit
  estados: string[] = []; // Array para armazenar os estados
  cidades: string[] = []; // Array para armazenar as cidades

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadEstados(); // Método para carregar os estados
  }

  initializeForm(): void {
    this.visitaForm = this.formBuilder.group({
      nomeEmpresa: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      dataVisita: ['', Validators.required],
      dataLimiteCadastro: ['', Validators.required],
      quantidadePessoas: ['', Validators.required]
    });
  }

  loadEstados(): void {
    // Simulação de carga dos estados (substitua com sua lógica real)
    this.estados = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Bahia'];
  }

  loadCidadesPorEstado(estadoSelecionado: string): void {
    // Simulação de carga das cidades com base no estado selecionado (substitua com sua lógica real)
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

  onSubmit(): void {
    // Implemente o código para salvar a visita
  }
}
