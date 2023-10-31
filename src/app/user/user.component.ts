import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '@src/app/shared_services/common.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../common_components/alert/alert.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  pageTitle: string = "USERS LIST";
  users: any;
  noUsersPresent: boolean = false;
  items=[];

  addItem(newItem:string){
    this.items.push(newItem);
  }

  constructor(
    private router: Router,
    private service: CommonService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.GetAllUsers();
  }

  showUserDetails(id: number) {
    this.router.navigate(['users/', id]);
  }

  GetAllUsers() {
    this.service.GetAllUsers().subscribe(data => {
      console.log('users', data);
      this.users = data;
      this.noUsersPresent = this.users.length === 0;
    })
  }

  navigateToAddUser() {
    this.router.navigate(['users/add'])
  }

  openDeleteConfirmationDialog(ID: any) {
    const dialogRef = this.dialog.open(AlertComponent, {
      data: {
        title: 'Delete Confirmation',
        message: `Are you sure you want to delete the user with ID: ${ID}?`,
        isDelete: true, // Pass the isDelete property
      },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.DeleteUserByID(ID);
      }
    });
  }
  

  DeleteUserByID(ID:any){
    this.service.DeleteUserbyID(ID).subscribe(data=>{
      const dialogRef = this.dialog.open(AlertComponent, {
        data: {
          title: 'Deletion Successful',
          message: `User with ID: ${ID} have been deleted`,
        },
      });
      dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
          window.location.reload();
        }, 100);
  });
 
})
  }


// .then(() => { setTimeout(() => {
//   window.location.reload();
// }, 100);


  editUser(id: number) {
    this.router.navigate(['users/edit/', id]);
  }
}
