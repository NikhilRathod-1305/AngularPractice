import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidationService {
  static invalidName(control: AbstractControl): ValidationErrors | null {
    const regex = /^[a-zA-Z0-9_]+$/; // Define your own pattern for a valid username
    const valid = regex.test(control.value);

    return valid ? null : { invalidName: true };
  }

  static invalidEmail(control: AbstractControl): ValidationErrors | null {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Define your own email validation pattern
    const valid = regex.test(control.value);

    return valid ? null : { invalidEmail: true };
  }

  static invalidPhone(control: AbstractControl): ValidationErrors | null {
    const regex = /^[0-9]{10}$/; // Define your own pattern for a valid phone number
    const valid = regex.test(control.value);

    return valid ? null : { invalidPhone: true };
  }

  static invalidDateOfBirth(control: AbstractControl): ValidationErrors | null {
    // Define your own date of birth validation logic here (e.g., age restrictions)
    const dateOfBirth = new Date(control.value);
    const currentDate = new Date();
    const minDate = new Date('1900-01-01'); // Define your minimum date of birth
    const maxDate = new Date('2030-01-01'); // Define your maximum date of birth

    if (isNaN(dateOfBirth.getTime())) {
      // Invalid date
      return { invalidDateOfBirth: true };
    }

    if (dateOfBirth < minDate || dateOfBirth > maxDate) {
      // Date is outside the allowed range
      return { invalidDateOfBirth: true };
    }

    return null;
  }
}
