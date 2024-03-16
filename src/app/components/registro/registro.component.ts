import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { passwordMatchVa1idator } from '@app/shared/password-match.directive';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
  },
  {
    validators: passwordMatchVa1idator
  })

  constructor(private fb: FormBuilder){}

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
}
