import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '@src/app/shared_services/common.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  pageTitle:string = "USER'S INFORMATION";
  id: number = 0;
  user:any;
  userDetails={
    userName:'',
      email:'',
      gender:'',
      phoneNumber:'',
      dateOfBirth:'',
  }
  items=[];

  addItem(newItem:string){
    this.items.push(newItem);
  }
constructor(private route:ActivatedRoute,private service:CommonService,private router: Router){}

ngOnInit() {
  this.userDetails ={
    userName:'',
      email:'',
      gender:'',
      phoneNumber:'',
      dateOfBirth:'',
  };

  this.service.GetCurrentData(this.route.snapshot.params.id).subscribe((result) => {  
    this.user = result;  })
}

  goToUser(){
    this.router.navigate(['users']);
  }
}