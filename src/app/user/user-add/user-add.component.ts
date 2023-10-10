import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { ValidationService } from './../../validator.service';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  userAdd: FormGroup;
  userId: number = 0; // Change variable name to userId
  maxDate: Date;

  constructor(
    private fb: FormBuilder,
    private userService: UserService, // Correct service name to userService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userAdd = this.fb.group({
      userName: ['', [Validators.required, ValidationService.invalidName]],
      email: ['', [Validators.required, ValidationService.invalidEmail]],
      gender: ['male'],
      phoneNumber: ['', [Validators.required, ValidationService.invalidPhone]],
      dateOfBirth: ['', [Validators.required, ValidationService.invalidDateOfBirth]],
    });
  }

  onSubmit() {
   if (this.userAdd.valid) {
      const formData = this.userAdd.value;
      // Add the user using the UserService
      this.userService.addUser(formData);
      console.log(formData);
      // After successful submission, navigate to the user list
      this.router.navigate(['user/user-list']);
    } else {
      // Handle form validation errors
    }
}
}
