import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppointmentListDashComponent } from './appointment-list-dash/appointment-list-dash.component';
import { DoctorAppointmentListComponent } from './doctor-appointment-list/doctor-appointment-list.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { DoctorListDashComponent } from './doctor-list-dash/doctor-list-dash.component';
import { DoctorListHomeComponent } from './doctor-list-home/doctor-list-home.component';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { PatientListDashComponent } from './patient-list-dash/patient-list-dash.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { PatientDoctorListComponent } from './patient-doctor-list/patient-doctor-list.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { UpdatePatientListComponent } from './update-patient-list/update-patient-list.component';
import { UpdateAppointmentListComponent } from './update-appointment-list/update-appointment-list.component';
import { UpdateDoctorListComponent } from './update-doctor-list/update-doctor-list.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddDoctorComponent,
    AppointmentComponent,
    AboutUsComponent,
    HomeComponent,
    AdminDashboardComponent,
    AppointmentListDashComponent,
    DoctorAppointmentListComponent,
    DoctorDashboardComponent,
    DoctorListDashComponent,
    DoctorListHomeComponent,
    PatientDashboardComponent,
    PatientListDashComponent,
    AdminProfileComponent,
    PatientDoctorListComponent,
    PatientProfileComponent,
    UpdatePatientListComponent,
    UpdateAppointmentListComponent,
    UpdateDoctorListComponent,
    DoctorProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule ,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
