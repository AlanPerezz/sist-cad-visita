import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { VisitanteService } from '@app/services/visitante-service.service';
import { Visitante } from '../listagem-visitantes/visitante.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro-visitante',
  templateUrl: './cadastro-visitante.component.html',
  styleUrls: ['./cadastro-visitante.component.scss']
})
export class CadastroVisitanteComponent implements OnInit {
  visitanteForm!: FormGroup;
  id = 0;
  editando: boolean = false;
  visitanteId: number | undefined;
  visitaId: number = 0;

  constructor(
    private visitanteService: VisitanteService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {}
    
    get nome() {
      return this.visitanteForm.controls['nome'];
    }
    
    get cpf() {
      return this.visitanteForm.controls['cpf'];
    }
    
    get email() {
      return this.visitanteForm.controls['email'];
    }
    
    get celular() {
      return this.visitanteForm.controls['celular'];
    }
    
    ngOnInit(): void {
      this.visitaId = Number(this.activatedRoute.snapshot.queryParamMap.get('id')) ?? 0;
      this.initializeForm();
      this.editandoVisitante();

      if(this.visitaId !== 0){
        this.getVisitante();
      }

    }

  initializeForm(): void {
    this.visitanteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/^\d{11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/^\d{11}$/)]],
      visitanteId: [0],
      visitaId: [0],
    })
  }

  cadastrarVisitante(): void {
    if (this.visitanteForm.valid) {
      const visitante = this.visitanteForm.value;
      visitante.visitaId = this.visitaId;
      this.visitanteService.cadastrarVisitante(visitante).subscribe(
        () => {
          console.log('cadastrou');
          this.router.navigate(['/listagem']);
        },
        (error) => {
          console.error('Erro ao cadastrar visitante:', error);
        }
      );
    }
  }

  getVisitante(): void {
    this.visitanteService.getVisitanteById(this.visitaId)
      .subscribe((visitantes: Visitante) => {
        console.log(visitantes)
        this.visitanteForm.patchValue(visitantes);
      });
  }

  editarVisitante(): void {
    console.log("sdjiasjaiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    if (this.visitanteForm.valid) {
      const visitante: Visitante = this.visitanteForm.value;
      console.log(visitante);
      this.visitanteService.editarVisitante(visitante).subscribe(
        () => {
          console.log('editou');
          this.router.navigate(['/listagem']);
        },
        (error) => {
          console.error('Erro ao editar visitante:', error);
        }
      );
    }
  }

  editandoVisitante(): void{
    this.editando = true;
  }

  onSubmit(): void {
    console.log('CHAMOU O CADASTRAR');
    this.cadastrarVisitante();
  }
}

