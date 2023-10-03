import { Component } from "@angular/core";

 @Component({
  selector: 'app-practice3',
  templateUrl:'./practice3.component.html',
  styleUrls:['./practice3.component.scss']
})
export class Practice3Component{
  message ="Hello World!!"
  fontColor="blue";
  a=1;
  b=2;
  imageUrl='assets/images/logo.png'
  getName(){
    return this.message;
  }
}