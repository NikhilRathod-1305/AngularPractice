import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { ValidationService } from 'src/app/validator.service';



@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit{
  userAdd: FormGroup;
  userId: number = 0;
  maxDate: Date;

  constructor(private fb: FormBuilder, private UserService: UserService ,private router: Router) {}

  ngOnInit(): void {
    this.userAdd = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('^[0-9]*$')], // Phone number field
      dateOfBirth: ['',Validators.required], // Date of birth field
      gender: ['',Validators.required],
      subscription: [false],
      option:['option1']
    });
    this.maxDate = new Date();  
  }

  onSubmit() {
    if (this.userAdd.valid) {
      const userData = this.userAdd.value;
      this.userId++;
      this.userAdd.get('id').setValue(this.userId);
      console.log(this.userAdd.value);
      this.userService.addUser(userData);
      this.userAdd.reset();
      this.router.navigate(['/user']);
    }
  }

  usernameValidator(control) {
    const isValid = this.validatorService.isUserNameValid(control.value);
    return isValid ? null : { invalidUsername: true };
  }

  emailValidator(control) {
    const isValid = this.validationService.isEmailValid(control.value);
    return isValid ? null : { invalidEmail: true };
  }
  phoneNumberValidator(control) {
    const isValid = this.validationService.isEmailValid(control.value);
    return isValid ? null : { invalidEmail: true };
  }
  
}
