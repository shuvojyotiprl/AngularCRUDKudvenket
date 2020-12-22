import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  private listEmployees: Employee[] = [{
    id: 1,
    name: 'Julie',
    gender: 'Female',
    contactPreference: 'Email',
    email: 'Julie@pragimtech.com',
    dateOfBirth: new Date('10/25/1988'),
    department: 'IT',
    isActive: true,
    photoPath: 'assets/images/Emp1.png',
    password: 'xxxx',
    confirmPassword: 'xxxx'
  },
  {
    id: 2,
    name: 'Mary',
    gender: 'Female',
    contactPreference: 'Phone',
    phoneNumber: 2345978640,
    dateOfBirth: new Date('11/20/1979'),
    department: 'HR',
    isActive: true,
    photoPath: 'assets/images/Emp2.png',
    password: 'xxxx',
    confirmPassword: 'xxxx'
  },
  {
    id: 3,
    name: 'danny',
    gender: 'Female',
    contactPreference: 'Phone',
    phoneNumber: 5432978640,
    dateOfBirth: new Date('3/25/1976'),
    department: 'IT',
    isActive: false,
    photoPath: 'assets/images/Emp3.png',
    password: 'xxxx',
    confirmPassword: 'xxxx'
  },];
  constructor() { }
  getEmployees() : Employee[] {
      return this.listEmployees;
  }
  saveEmployee(emp : Employee){
      this.listEmployees.push(emp);
      this.listEmployees.forEach(object => console.log("id ::  "+object.id+"  name   :: "+object.name));
  }
  getEmployee(id : number) : Employee {
    return this.listEmployees.find(e => e.id === id);
  }
  getEmployeeCount() : number{
    return this.listEmployees.length;
  }
}
