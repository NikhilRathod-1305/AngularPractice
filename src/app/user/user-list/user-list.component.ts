import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service'; // Import your service
import { UserInterface } from './../../user-interface';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;
  showOptions = false;

  edit() {
    // Handle edit functionality here
    console.log('Edit clicked');
  }

  delete() {
    // Handle delete functionality here
    console.log('Delete clicked');
  }
  // users: UserInterface[] = []; // Replace with your user model

  // selectedUser: UserInterface | null = null; // Initialize with null

  constructor(
    private router: Router, 
    private service: CommonService) {}

  // ngOnInit() {
  //   // Retrieve user data from the UserService
  //   this.users = this.userService.getUsers();
  // }

  // showUserDetails(user: UserInterface) {
  //   console.log(user.id);
  //   this.router.navigate(['/user',user.id]);
  // }
  ngOnInit() {
    this.GetAllUsers();
    }

    GetAllUsers(){
      this.service.GetAllUsers().subscribe(data=>{
        console.log('users',data);
        this.users = data;
    })
    }
  
    DeleteUserByID(ID:any){
      this.service.DeleteUserbyID(ID).subscribe(data=>{
        alert("User Deleted");
        setTimeout(() => {
          // Reload the page
          window.location.reload();
        }, 100);
      })
    }

  goBack() {
    // Navigate back to the previous screen (history)
    this.router.navigate(['user/user-add']); // Replace with your actual route
    // window.history.back();
  }

  editUser(id: number) {
    // Navigate to the user-edit page with the user's ID as a parameter
    this.router.navigate(['/user/user-edit/',id]);
  }
   
}
