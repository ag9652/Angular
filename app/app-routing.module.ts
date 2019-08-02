import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UPdateEmpComponent } from './update-emp/update-emp.component';


const routes: Routes = [
  {
    path:'AddEmp',
    component:UPdateEmpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
