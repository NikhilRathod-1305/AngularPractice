import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from './../../user.service';
import { ValidatorsService } from './../../validator.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  [x: string]: any;
  userAdd: FormGroup;
  id: number = 0;
  maxDate: Date;

  constructor(
    private fb: FormBuilder,
    private UserService: UserService,
    private router: Router
  ) {}

    ngOnInit(): void {
    this.userAdd = this.fb.group({
      userName: ['', [Validators.required, ValidatorsService.nameValidator()]],
     
      email: ['', [Validators.required,  ValidatorsService.emailValidator()]],
      phoneNumber: ['', [Validators.required,  ValidatorsService.phoneValidator()]], // Phone number field
      id: ['', [Validators.required, ValidatorsService.idValidator]],
      dateOfBirth: ['', [Validators.required, ValidatorsService.dateOfBirthValidator]],
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
}
