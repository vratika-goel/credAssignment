import { CredServicesService } from './../cred-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.css']
})
export class AddStudentDetailsComponent implements OnInit {
  studentDetailsData : any[] = [];
  constructor(private myService : CredServicesService, private router: Router) { }

  ngOnInit() {
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
 });

 addStudentDetails() {
   console.log(this.form);
   this.studentDetailsData = this.form.value;
   console.log(this.studentDetailsData);
  this.myService.postStudentData(this.studentDetailsData);
  this.router.navigate(["/"]);
 }

}
