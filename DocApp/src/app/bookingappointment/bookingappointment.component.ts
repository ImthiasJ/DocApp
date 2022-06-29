import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookingappointment',
  templateUrl: './bookingappointment.component.html',
  styleUrls: ['./bookingappointment.component.css']
})
export class BookingappointmentComponent implements OnInit {
DoctorName : string="";
appTime : string="";
busy : boolean=false;
showmybooking:boolean=false;
headers=["doctorname","time"];
myBooking: any[] = [];

  constructor(private appC:AppComponent,private router:Router) { }
//appDetails=[{'username':'admin','doctorname':'admin','time':"15:01"}];
  ngOnInit(): void {
  this.myBooking=[];
  }
  cnfmappt()
  {
  console.log(this.DoctorName);
  console.log(this.appTime);
  console.log(this.appC.loginUser);
  for(let c in this.appC.appDetails)
  {
    if(this.appC.appDetails[c].doctorname==this.DoctorName)
    {
      if(this.appC.appDetails[c].time==this.appTime)
      {this.busy=true;
        if(this.appC.appDetails[c].username==this.appC.loginUser)
        {
        alert("Hey "+this.appC.loginUser+"you already have an appointment with Doctor "+this.DoctorName+" at this time "+this.appTime)
        }else
        {
        alert("Hey "+this.appC.loginUser+" The Dr. "+this.DoctorName+" has appointment with different patient at this time, please select different slot");
        }
      }
    }
  }
  if(this.busy==false)
  {
  this.appC.appDetails.push({'username':this.appC.loginUser,'doctorname':this.DoctorName,'time':this.appTime})
  alert("Hey "+this.appC.loginUser+" your appointment with Doctor "+this.DoctorName+" has been booked successfully for the time "+this.appTime)
  }

  }
  showbooking()
  {this.myBooking=[];
  for(let c in this.appC.appDetails)
    {
    if(this.appC.appDetails[c].username==this.appC.loginUser)
    this.myBooking.push(this.appC.appDetails[c]);
    }
    if(this.myBooking.length==0)
    {
    alert("There is no booking present in your name for now");
    }
    else
    {
    this.showmybooking=true;
    }
    console.log(this.myBooking);

  }

  showDoctor()
  {
  this.router.navigate(['/showDoc']);
  }

}
