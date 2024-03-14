import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-visitas',
  templateUrl: './cadastro-visitas.component.html',
  styleUrls: ['./cadastro-visitas.component.scss']
})
export class CadastroVisitasComponent implements OnInit {
  visitaForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.visitaForm = this.fb.group({
      nomeEmpresa: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      dataVisita: ['', [Validators.required, this.anoNaoPodeTerMaisDeQuatroDigitos]],
      dataLimiteCadastro: ['', Validators.required],
      quantidadePessoas: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
  }

  anoNaoPodeTerMaisDeQuatroDigitos(control: { value: string }): { [key: string]: boolean } | null {
    const regex = /^\d{1,4}$/;
    const valor = control.value;
    if (!regex.test(valor)) {
      return { anoInvalido: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.visitaForm.valid) {
      console.log('Formulário válido. Submetido com sucesso.');
    } else {
      console.log('Formulário inválido. Verifique os campos.');
    }
  }
}
