import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddDoctorService } from '../add-doctor.service';
import { Admin } from '../login/Admin';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{
  
  
  id:any;
  // admin: any;
  adminid: any;
  appointmentid: any;
  admin = new Admin(0,"","");
  countOfAppointment:any;


  constructor(private doctorService:AddDoctorService, 
   private router:Router){
 
  }
 
  ngOnInit(): void {

    this.adminid=localStorage.getItem('currentDoctor');
    //get count of appointments by doctorid
    this.doctorService.getAllAppointments().subscribe(
      (Response:any)=>{
        console.log("inside countOfAppointment");
        console.log(Response);
        this.countOfAppointment=Response;
      }
    );

      console.log("this.ngOnInit");
      this.adminid=localStorage.getItem('currentAdmin');
      this.doctorService.getAdminById(this.adminid).subscribe(
        (Response:any)=>{
          console.log(this.adminid);
          console.log("testing phase");
          this.admin=Response;
        }
      );

  }

}
