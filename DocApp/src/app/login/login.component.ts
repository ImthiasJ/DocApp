import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username : string="";
password : string="";
hasAccess: boolean=false;
  constructor(private appC:AppComponent,private router:Router) { }
//  userdetails=[{'name':'admin','username':'admin','password':'123'}]

  ngOnInit(): void {
  }
  checkuseraccess()
  {
  for(let c in this.appC.userdetails)
  {
  console.log(this.appC.userdetails[c])
    if(this.username==this.appC.userdetails[c].username)
      if(this.password==this.appC.userdetails[c].password)
       {this.appC.loginUser=this.appC.userdetails[c].name;this.hasAccess=true;
       }

  }
  if(!this.hasAccess)
  alert("UserName doesn't exist/ Incorrect Password")
  else
  this.router.navigate(['/booking']);

  }//function end

}
