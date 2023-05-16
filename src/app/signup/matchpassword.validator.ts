import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const matchpassword: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  let password = control.get('password');
  let password_confirm = control.get('password_confirm');

  if (
    password &&
    password_confirm &&
    password?.value != password_confirm?.value
  ) {
    return {
      passwordmatcherror: true,
    };
  }

  return null;
};
