import { CredServicesService } from './../cred-services.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'edit-student-details',
  templateUrl: './edit-student-details.component.html',
  styleUrls: ['./edit-student-details.component.css']
})
export class EditStudentDetailsComponent implements OnInit {
  rowToEdit : any;
  originalRowValues : any;
  id : number;

   constructor(private myService : CredServicesService, private router: Router) {
     this.originalRowValues = this.myService.getEditData();
    }



  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
 });
 
  ngOnInit() {
    this.rowToEdit = this.myService.getEditData();
    console.log( this.myService.getEditData());
  }

  editStudentDetails() {
    console.log("Edit Student Details", this.form.value);
    var editedFormValue = this.form.value;
    for(var propName in editedFormValue) {
      if(editedFormValue[propName] == "") {
        delete editedFormValue[propName];
      }
    }

    for(var originalProp in this.originalRowValues) {
      for(var propName in editedFormValue) {
        if(propName == originalProp) {
          this.originalRowValues[originalProp] = editedFormValue[propName];
        }
      }
    }
    console.log("New Row Values", this.originalRowValues);

    this.id = this.originalRowValues.id;
    this.myService.editMainData(this.originalRowValues, this.id);
    this.router.navigate(['/']);
  }
}
