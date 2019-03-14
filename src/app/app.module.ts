import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';;

import { AppComponent } from './app.component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { AddStudentDetailsComponent } from './add-student-details/add-student-details.component';
import { EditStudentDetailsComponent } from './edit-student-details/edit-student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentPortalComponent,
    AddStudentDetailsComponent,
    EditStudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: StudentPortalComponent
      },
      {
      path : "addStudentDetails",
      component: AddStudentDetailsComponent
    },
    {
      path: "editStudentDetails",
      component: EditStudentDetailsComponent
    }
  ])
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }