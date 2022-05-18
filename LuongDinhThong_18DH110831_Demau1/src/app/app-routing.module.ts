import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { LaptopDetailComponent } from './laptops/laptop-detail/laptop-detail.component';
import { LaptopEditComponent } from './laptops/laptop-list/laptop-edit/laptop-edit.component';
import { LaptopStartComponent } from './laptops/laptop-start/laptop-start.component';
import { LaptopsComponent } from './laptops/laptops.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/laptops', pathMatch: 'full'},
  {path: 'laptops', component: LaptopsComponent, children: [
    {path: '', component: LaptopStartComponent},
    {path: 'new', component: LaptopEditComponent},
    {path: ':id', component: LaptopDetailComponent},
    {path: ':id/edit', component:LaptopEditComponent}
  ]},
  {path: 'customers', component: CustomersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
