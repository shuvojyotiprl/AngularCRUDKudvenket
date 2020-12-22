import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Employee } from '../Models/Employee';
import { EmployeeServiceService } from '../myservice/employee-service.service';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  private _id: number;
  employee: Employee;
  private searchTerm : string;
  constructor(private _activatedRoute: ActivatedRoute,
    private _cmpService: EmployeeServiceService,
    private _router: Router) { }

  ngOnInit() {

     this.searchTerm = this._activatedRoute.snapshot.queryParamMap.get('searchTerm');
     console.log('search term '+this.searchTerm);
    //this._id = +this._activatedRoute.snapshot.params['id'];
    //this.employee = this._cmpService.getEmployee(this._id);

    /*this._router.events.subscribe(params => {
      this._id = +params['id'];
      this.employee = this._cmpService.getEmployee(this._id);

    });*/

    this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this._id = +params.get('id');
      this.employee = this._cmpService.getEmployee(this._id);
    }
    );

  }

  nextEmp() {
    //this._id = this._id + 1;
    const empCnt : number = this._cmpService.getEmployeeCount();
    console.log("Number of emp "+empCnt);
    if (this._id < empCnt) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }
    this._router.navigate(['/employeedetail', this._id]);
  }

  goBack(){
    console.log('go back  '+this.searchTerm);
    this._router.navigate(['/list'],{
      queryParams : {
        searchTerm : this.searchTerm,
        id : this._id
      }
    });
  }

}
