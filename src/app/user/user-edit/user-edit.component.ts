import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { ValidationService } from './../../validator.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent  implements OnInit{
  userId: number = 0;
  maxDate: Date;

  alert:boolean =false; 
  userEdit=new FormGroup({
    userName: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      phoneNumber: new FormControl(''),
      dateOfBirth:new FormControl(''),
  })
  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute, 
    private router1: Router, 
    private service:CommonService
    ) {}
    
  

    ngOnInit(): void {
      this.userEdit = this.fb.group({
        userName: ['', [Validators.required, ValidationService.invalidName]],
        email: ['', [Validators.required, ValidationService.invalidEmail]],
        gender: [''],
        phoneNumber: ['', [Validators.required, ValidationService.invalidPhone]],
        dateOfBirth: ['', [Validators.required, ValidationService.invalidDateOfBirth]],
      });
  
      // Fetch the user data and set it in the form
      this.service.GetCurrentData(this.router.snapshot.params.id).subscribe((result) => {
        this.userEdit.patchValue(result); // Set the user data in the form
      });
    }

  UpdateForm(){
    if(this.userEdit.valid){
    this.service.UpdateForm(this.router.snapshot.params.id,this.userEdit.value).subscribe((result)=>{
      console.log(result,"data updated successfull");
      alert("User Updated ");
      setTimeout(() => {
        // Reload the page
        this.router1.navigate(['user/user-list']);
      }, 100);
    })
  }}
}
