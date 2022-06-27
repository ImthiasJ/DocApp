import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DocApp';
  loginUser:string ="";
  userdetails=[{'name':'admin','username':'admin','password':'123'}];
  appDetails=[{'username':'admin','doctorname':'admin','time':"15:01"}];
  constructor(private router:Router)
  {
 this.router.navigate(['/home']);
  }
  goHome()
  {this.router.navigate(['/home']);
  }
}
