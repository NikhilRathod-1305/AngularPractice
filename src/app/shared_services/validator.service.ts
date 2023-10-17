import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidationService {
  validateName: ValidatorFn;
  static invalidName(control: AbstractControl): ValidationErrors | null {
    const regex = /^[a-zA-Z ]+$/; 
    const valid = regex.test(control.value);

    return valid ? null : { invalidName: true };
  }

  static invalidEmail(control: AbstractControl): ValidationErrors | null {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 
    const valid = regex.test(control.value);

    return valid ? null : { invalidEmail: true };
  }

  static invalidPhone(control: AbstractControl): ValidationErrors | null {
    const regex = /^[0-9]{10}$/; 
    const valid = regex.test(control.value);

    return valid ? null : { invalidPhone: true };
  }

  static invalidDateOfBirth(control: AbstractControl): ValidationErrors | null {
    const dateOfBirth = new Date(control.value);
    const currentDate = new Date();
    const minDate = new Date('1900-01-01'); 
    const maxDate = new Date('2030-01-01'); 

    if (isNaN(dateOfBirth.getTime())) {
      // Invalid date
      return { invalidDateOfBirth: true };
    }

    if (dateOfBirth < minDate || dateOfBirth > maxDate) {
      return { invalidDateOfBirth: true };
    }

    return null;
  }
}
