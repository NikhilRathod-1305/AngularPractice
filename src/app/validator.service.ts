import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  static nameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null;
      }

      const trimmedValue = control.value.trim();

      if (!trimmedValue) {
        return { invalidName: true };
      }

      const regex = /^[a-zA-Z ]+$/;
      if (!regex.test(trimmedValue)) {
        return { invalidName: true };
      }

      control.setValue(trimmedValue);

      return null;
    };
  }

  static emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null;
      }

      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!regex.test(control.value)) {
        return { invalidEmail: true };
      }

      return null;
    };
  }

  static phoneValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null;
      }

      const regex = /^[0-9]{10}$/;
      if (!regex.test(control.value)) {
        return { invalidPhone: true };
      }

      return null;
    };
  }
}