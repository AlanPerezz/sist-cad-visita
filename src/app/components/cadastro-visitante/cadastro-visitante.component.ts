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
      this.id = Number(this.activatedRoute.snapshot.queryParamMap.get('id')) ?? 0;
      this.initializeForm();
      
      if(this.id !== 0){
        this.getVisitas()
        this.editandoVisitante()
      }
    }

  initializeForm(): void {
    this.visitanteForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/^\d{11}$/)]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(11), Validators.pattern(/^\d{11}$/)]],
    })
  }

  cadastrarVisitante(): void {
    if (this.visitanteForm.valid) {
      const visitante: Visitante = this.visitanteForm.value;
      this.visitanteService.cadastrarVisitante(visitante).subscribe(
        (response: any) => {
          console.log('cadastrou');
          const visitanteId = response.id
          this.router.navigate(['/listagem']);
        },
        (error) => {
          console.error('Erro ao cadastrar visitante:', error);
        }
      );
    }
  }

  getVisitas(): void {
    this.visitanteService.getVisitantenteById(this.id)
      .subscribe((visitas: Visitante) => {
        console.log(visitas)
        this.visitanteForm.patchValue(visitas);
      });
  }

  editarVisitante(): void {
    if (this.visitanteForm.valid) {
      const visitante: Visitante = this.visitanteForm.value;
      this.visitanteService.editarVisitante(visitante).subscribe(
        (response: any) => {
          console.log('editou');
          const visitaId = response.id
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
    
    if(this.id !== 0){
      console.log('CHAMOU O EDITAR')
      this.editarVisitante();
    }else{
      console.log('CHAMOU O CADASTRAR')
      this.cadastrarVisitante();
    }
  }
}

