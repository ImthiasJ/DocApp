import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BookingappointmentComponent } from './bookingappointment/bookingappointment.component';
import { ValidatebookingComponent } from './validatebooking/validatebooking.component';
const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path: 'home', component:HomeComponent },
  { path: 'booking', component:BookingappointmentComponent },
  { path: 'vbookin', component:ValidatebookingComponent },
  { path: 'signup', component:SignupComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    BookingappointmentComponent,
    ValidatebookingComponent
  ],
  imports: [
    BrowserModule,RouterModule,FormsModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
