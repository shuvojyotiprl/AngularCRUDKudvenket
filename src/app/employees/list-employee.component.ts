import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmployeeServiceService } from '../myservice/employee-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  //selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees : Employee[];
  private searchTerm : string;
  private empId: number;
  constructor(private _empService : EmployeeServiceService, 
              private _routerService : Router,
              private _activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm');
    this.employees = this._empService.getEmployees();
    this.empId = +this._activatedRoute.snapshot.queryParamMap.get('id');
  }

  onClick(employeeId: number){
      this._routerService.navigate(["/employeedetail",employeeId],{
          queryParams : {'searchTerm':this.searchTerm}
      });
  }

  


}
