import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredServicesService {
  studentsData: any[] = [];
  detailsToEdit: any[] = [];
  constructor(  ) {
  this.studentsData = [{
    "id" : 0,
		"name": "John",
		"age": "20",
		"gender": "male",
		"address": "123, abc Road, Pune"
	},
	{
    "id" : 1,
		"name": "Kenny",
		"age": "21",
		"gender": "male",
		"address": "3, abc Road, Pune"
	},
	{
    "id" : 2,
		"name": "Ria",
		"age": "24",
		"gender": "female",
		"address": "123, pqr Road, Pune"
	}
] }

getStudentData() {
  return this.studentsData;
}

postStudentData(student) {
  console.log("Data in Service", student);
  student['id'] = this.studentsData[this.studentsData.length - 1].id + 1;
  this.studentsData.push(student);
    console.log("Original data", this.studentsData);
}

setEditData(rowToEdit) {
  this.detailsToEdit = rowToEdit; 
}

getEditData() {
  return this.detailsToEdit;
}

editMainData(editedStudent, id) {
  this.studentsData[id] = editedStudent;
}

}
