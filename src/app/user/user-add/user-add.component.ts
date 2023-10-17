import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '@src/app/shared_services/validator.service';
import { CommonService } from '@src/app/shared_services/common.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss'],
})
export class UserAddComponent implements OnInit {
  userAdd: FormGroup;
  userId: number = 0;
  maxDate: Date;

  constructor(
    private fb: FormBuilder,
    private service: CommonService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userAdd = this.fb.group({
      userName: ['', [Validators.required, ValidationService.invalidName]],
      email: ['', [Validators.required, ValidationService.invalidEmail]],
      gender: [''],
      phoneNumber: ['', [Validators.required, ValidationService.invalidPhone]],
      dateOfBirth: ['', Validators.required],
      // skillLevel: [''],
      // hobbies: this.fb.array([]), // Add this for hobbies
    });
  }

  onSubmit() {
  console.log(this.userAdd.value);
  if(this.userAdd.valid){
  this.service.AddUpdateUser(this.userAdd.value).subscribe(data=>{
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: 'User Added',
      showConfirmButton: false,
      timer: 1600
    });
        this.userAdd.reset();
    this.router.navigate(['user']);
    console.log(data);
    })
  }}
}
