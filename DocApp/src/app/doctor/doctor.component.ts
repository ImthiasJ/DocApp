import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
//userdetails=[{'name':'admin','username':'admin','password':'123'}];
    DocList:any=[{'name':'Abdul','address':'Erode','Spec':'ENT'},
              {'name':'Eliza','address':'Erode','Spec':'Child Specialist'},
            {'name':'Samad','address':'Erode','Spec':'Pediatrics'},
            {'name':'Chandran','address':'Erode','Spec':'Dermatology'}];
headers=["name","address","Spec"];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  goback()
  { this.router.navigate(['/booking']);
  }

}
