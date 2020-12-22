import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from '../employees/create-employee.component';

@Injectable({
  providedIn: 'root'
})
export class RGCreateEmployeeService implements CanDeactivate<CreateEmployeeComponent>{
  canDeactivate(component: CreateEmployeeComponent): boolean {
    if(component.employeeForm.dirty){
      return confirm('Do u want to discard changes ?');
    }

    return true;
  }
  
  constructor() { }
}
