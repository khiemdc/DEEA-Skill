import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';
import { UsersComponent } from './users/users.component';
import { ReportingComponent } from './reporting/reporting.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee/employeeList.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'monthly-report', component: MonthlyReportComponent },
  { path: 'yearly-report', component: EmployeeListComponent },
  // { path: 'reporting', component: ReportingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
