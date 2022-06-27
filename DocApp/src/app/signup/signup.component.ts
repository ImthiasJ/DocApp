import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

username : string="";
password : string="";
name: string="";
  constructor(private appC:AppComponent) { }

  ngOnInit(): void {
  }//  userdetails=[{'name':'admin','username':'admin','password':'123'}]
  adduser()
  {
   for(let c in this.appC.userdetails)
    {
     if(this.username==this.appC.userdetails[c].username)
     {
     alert("User Name already exist, try different username/return to login");
     break;
     }
     else
     {
     this.appC.userdetails.push({'name':this.name,'username':this.username,'password':this.password});
     alert("User Added Successfully, return to login page");
     }
    }
  }

}
