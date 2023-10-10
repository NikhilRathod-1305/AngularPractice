import { Component, OnInit } from '@angular/core';
import { UserService } from './../../user.service'; // Import your service
import { UserInterface } from './../../user-interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: UserInterface[] = []; // Replace with your user model

  selectedUser: UserInterface | null = null; // Initialize with null

  constructor(
    private router: Router, 
    private userService: UserService) {}

  ngOnInit() {
    // Retrieve user data from the UserService
    this.users = this.userService.getUsers();
  }

  showUserDetails(user: UserInterface) {
    console.log(user.id);
    this.router.navigate(['/user',user.id]);
  }
  
  goBack() {
    // Navigate back to the previous screen (history)
    this.router.navigate(['user/user-add']); // Replace with your actual route
    // window.history.back();
  }
   
}
