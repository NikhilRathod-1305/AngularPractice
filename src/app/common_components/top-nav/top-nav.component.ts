import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit{
  @Input() title: string;
  
  constructor(private router: Router) { }
  navigateToUserAdd() {
    this.router.navigate(['users/add']);
  }
  
  navigateToUserList() {
    this.router.navigate(['users']);
  }
  @Output() newItemEvent = new EventEmitter<string>();
  addNewItem() {
    this.newItemEvent.emit("USER FORMS");
  }
  ngOnInit( ){
    this.addNewItem();  
    
  }
  
}
