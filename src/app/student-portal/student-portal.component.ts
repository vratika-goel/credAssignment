import { CredServicesService } from './../cred-services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'student-portal',
  templateUrl: './student-portal.component.html',
  styleUrls: ['./student-portal.component.css']
})
export class StudentPortalComponent implements OnInit {
  studentDetails: any[] = [];
  addStudentFlag : boolean = true;
  constructor(private myService : CredServicesService, private router: Router) { }

  ngOnInit() {
    this.studentDetails = this.myService.getStudentData();
  }

  _add() {
    this.router.navigate(['\addStudentDetails']);
    this.addStudentFlag = false;
  }

  _delete(id) {
    var deleteRow = confirm("Do you want to delete the entry?");
    if(deleteRow == true) {
      this.studentDetails.splice(id, 1);
    }

  }

  _edit(details) {
    this.addStudentFlag = false;
    this.myService.setEditData(details);
    this.router.navigate(["/editStudentDetails"]);
  }

}
