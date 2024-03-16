import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const passwordMatchVa1idator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (!password || !confirmPassword) {
    return null;
  }
  return password.value === confirmPassword.value
    ? null
    : {passwordMismatch: true};
};
