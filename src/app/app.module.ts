import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employees/list-employee.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { SelectRequiredValidatorDirective } from './sharedCustomValidator/select-required-validator.directive';
import { FileExtensionValidatorDirective } from './sharedCustomValidator/file-extension-validator.directive';
import { CrossFieldValidaotrDirective } from './sharedCustomValidator/cross-field-validaotr.directive';
import { EmployeeServiceService } from './myservice/employee-service.service';
import { RGCreateEmployeeService } from './routeGuardService/rg-create-employee.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeFilterPipe } from 'src/CustomPipes/employee-filter.pipe';


const appRoutes : Routes= [
  {path : 'list', component : ListEmployeeComponent},
  {path : 'create', component : CreateEmployeeComponent, canDeactivate:[RGCreateEmployeeService]},
  {path : '', redirectTo : '/list', pathMatch : 'full'},
  {path : 'employeedetail/:id', component : EmployeeDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreateEmployeeComponent,
    SelectRequiredValidatorDirective,
    FileExtensionValidatorDirective,
    CrossFieldValidaotrDirective,
    EmployeeDetailsComponent,
    EmployeeFilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    RouterModule.forRoot(appRoutes,{enableTracing : true}),
    FormsModule
  ],
  providers: [EmployeeServiceService,
    RGCreateEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
