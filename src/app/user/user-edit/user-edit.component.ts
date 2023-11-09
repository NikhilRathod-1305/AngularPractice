import { AfterViewInit, Component, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertComponent } from '@src/app/common_components/alert/alert.component';
import { CommonService } from '@src/app/shared_services/common.service';
import { ValidationService } from '@src/app/shared_services/validator.service';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { TopNavComponent } from '@src/app/common_components/top-nav/top-nav.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent  implements OnInit, AfterViewInit{

  @ViewChild ('title') private PageTitle : TopNavComponent;

  ngAfterViewInit(){
    this.PageTitle.title="EDIT USER"
  }


  // pageTitle:string="EDIT USER";
  userId: number = 0;
  maxDate: Date;
  alertMessage: string;
  alertType: string; // 'success' or 'error'
  showAlert: boolean =false
  
  items=[];

  addItem(newItem:string){
    this.items.push(newItem);
  }

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
    private service:CommonService,
    private dialog: MatDialog
    ) {}
    
  

    ngOnInit(): void {
      this.userEdit = this.fb.group({
        userName: ['', [Validators.required, ValidationService.invalidName]],
        email: ['', [Validators.required, ValidationService.invalidEmail]],
        gender: [''],
        phoneNumber: ['', [Validators.required, ValidationService.invalidPhone]],
        dateOfBirth: ['', [Validators.required]],
      });
      this.maxDate=new Date;
  
      const id = this.router.snapshot.params.id;
    this.service.GetCurrentData(id).subscribe((result) => {
      if (result) {
        this.userEdit.patchValue(result); // Set the user data in the form
      } else {
        this.router1.navigate(['users']); // Redirect to user list if user doesn't exist
      }
    });
  }

  UpdateForm(){
    if(this.userEdit.valid){
    this.service.UpdateForm(this.router.snapshot.params.id,this.userEdit.value).subscribe((result)=>{
      
        const dialogRef = this.dialog.open(AlertComponent, {
          width: '250px',
          data: { title: 'Success', message: 'User Edited' }
        });

        dialogRef.afterClosed().subscribe(() => {
          this.userEdit.reset();
          this.router1.navigate(['users']); // Redirect to the 'users' route
          
        });
      },
      (error) => {
        const dialogRef = this.dialog.open(AlertComponent, {
          width: '250px',
          data: { title: 'Error', message: 'Error editing user' }
        });
      }
    );
    
  }}
}
