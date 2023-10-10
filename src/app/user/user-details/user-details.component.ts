import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../user.service'; // Import your user service
import { UserInterface } from './../../user-interface'; // Import your user model if available
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: UserInterface | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    // Get the user ID from the route parameters
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    // Use the UserService to fetch the user details by ID
    this.user = this.userService.getUserById(userId);
  }
  goBack() {
    // Navigate back to the previous screen (history)
    this.router.navigate(['user/user-list']); // Replace with your actual route
    // window.history.back();

  }
}
