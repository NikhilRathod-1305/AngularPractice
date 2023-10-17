import { Component, OnInit } from '@angular/core';
import { UserInterface } from '@src/app/user-interface';
import { Router } from '@angular/router';
import { CommonService } from '@src/app/shared_services/common.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any;
  selectedUser: any;
  noUsersPresent: boolean = false;
  showOptions = false;

  edit() {
    console.log('Edit clicked');
  }

  delete() {
    console.log('Delete clicked');
  }

  constructor(
    private router: Router, 
    private service: CommonService) {}

  ngOnInit() {
    this.GetAllUsers();
    }

    showUserDetails(id: number) {
      this.router.navigate(['user/',id ]);
    }    

    GetAllUsers(){
      this.service.GetAllUsers().subscribe(data=>{
        console.log('users',data);
        this.users = data;
        this.noUsersPresent = this.users.length === 0;
    })
    }

    navigateToAddUser(){
      this.router.navigate(['user/user-add'])
    }
  

    Popup(ID:any){
      Swal.fire({
        title: 'Are you sure?',
        text: "You want to delete the user with ID:"+ ID,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.DeleteUserByID(ID)
        }
      })
    }

    DeleteUserByID(ID:any){
      this.service.DeleteUserbyID(ID).subscribe(data=>{
        Swal.fire(
          'Deleted!',
          'User with ID:'+ID+' is deleted',
          'success'
        ).then(() => { setTimeout(() => {
          window.location.reload();
        }, 100);
      });
    });
  }
    
  editUser(id: number) {
    this.router.navigate(['/user/user-edit/',id]);
  }
   
}
