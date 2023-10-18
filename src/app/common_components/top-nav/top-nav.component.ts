import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
  constructor(private router: Router) { }
  navigateToUserAdd() {
    this.router.navigate(['user/add']);
  }
  
  navigateToUserList() {
    this.router.navigate(['user']);
  }
}
