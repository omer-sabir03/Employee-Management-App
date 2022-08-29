import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EmpmanagementComponent } from './components/empmanagement/empmanagement.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path:"about" , component:AboutComponent
  },
  {
    path:"" , component:EmpmanagementComponent
  },
  {path:"update/:id" , component:UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
