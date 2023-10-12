import { Component, OnInit } from '@angular/core';
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
          window.location.reload();
        }, 100);
      })
    }

  goBack() {
    this.router.navigate(['user/user-add']);
  }

  editUser(id: number) {
    this.router.navigate(['/user/user-edit/',id]);
  }
   
}
