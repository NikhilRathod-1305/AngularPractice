import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidationService {
  static invalidName(control: AbstractControl): ValidationErrors | null {
    let trimmedValue = control.value ? control.value.replace(/[^A-Za-z\s]/g, '') : '';
    
    if (trimmedValue.length > 25) {
      trimmedValue = trimmedValue.substring(0, 25);
      control.setValue(trimmedValue);
    }
  
    const regex = /^[a-zA-Z\s]{1,25}$/; // Allow 1 to 30 letters and spaces
    const valid = regex.test(trimmedValue);
  
    if (valid) {
      const nameArray = trimmedValue.split(' ');
      const capitalizedArray = nameArray.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
      const capitalizedValue = capitalizedArray.join(' ');
  
      if (capitalizedValue !== control.value) {
        control.setValue(capitalizedValue);
      }
  
      return null;
    } else {
      return { invalidName: true };
    }
  }
  static invalidEmail(control: AbstractControl): ValidationErrors | null {
    const trimmedValue = control.value ? control.value.trim() : '';
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const valid = regex.test(trimmedValue);

    return valid ? null : { invalidEmail: true };
  }

  static invalidPhone(control: AbstractControl): ValidationErrors | null {
    let trimmedValue = control.value ? control.value.replace(/\s/g, '') : ''; // Remove spaces
  
    // Trim to 10 digits if it's longer
    if (trimmedValue.length > 10) {
      trimmedValue = trimmedValue.substring(0, 10);
      control.setValue(trimmedValue);
    }
  
    const regex = /^[0-9]{10}$/; // Enforce exactly 10 digits
    const valid = regex.test(trimmedValue);
  
    return valid ? null : { invalidPhone: true };
  }
  
  
}
