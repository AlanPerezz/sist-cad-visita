import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro-visitas',
  templateUrl: './cadastro-visitas.component.html',
  styleUrls: ['./cadastro-visitas.component.scss']
})
export class CadastroVisitasComponent implements OnInit {
  constructor(private fb: FormBuilder){}

  ngOnInit(): void {

  }
}
