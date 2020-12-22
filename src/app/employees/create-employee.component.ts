import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../Models/Department';
import { Employee } from '../Models/Employee';
import { EmployeeServiceService } from '../myservice/employee-service.service';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //isActive = true;
  @ViewChild('employeeForm',{static: false}) public employeeForm : NgForm;
  previewPhoto = false;


  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: null,
    isActive: true,
    photoPath: null,
    password : null,
    confirmPassword : null

  };


  departments : Department[] = [
    {id : 1 , name : 'IT-Analyst'},
    {id : 2 , name : 'Help Desk'},
    {id : 3 , name : 'HR'},
    {id : 4 , name : 'Sr Developer'},
    {id : 5 , name : 'Business Analyst'}
  ];
  constructor(private _empService: EmployeeServiceService, private _router : Router) { }

  ngOnInit() {
  }

  

  saveEmployee() : void{
    //console.log(employee);
    const newEmployee: Employee = Object.assign({}, this.employee);
    const empId : number = this._empService.getEmployeeCount();

    newEmployee.id = empId+1;

    this._empService.saveEmployee(newEmployee);
    this.employeeForm.reset();
    this._router.navigate(['list']);
  }

  togglePhotoPreview() : void {
    console.log('preview    hhh   ');
    this.previewPhoto = !this.previewPhoto;
  }
}
