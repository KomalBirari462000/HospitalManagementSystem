import { Component } from '@angular/core';
import { AddDoctorService } from '../add-doctor.service';

@Component({
  selector: 'app-patient-list-dash',
  templateUrl: './patient-list-dash.component.html',
  styleUrls: ['./patient-list-dash.component.css']
})
export class PatientListDashComponent {

  patientList:any;

  constructor(private patientService:AddDoctorService){

  }
 
  ngOnInit(): void {
    this.patientService.getAllPatients().subscribe(
      (Response) => {
        this.patientList=Response;
      }
     )
 
  }
}
