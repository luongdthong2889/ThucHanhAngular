import { StoresComponent } from './stores/stores.component';
import { MobileDetailComponent } from './mobilephones/mobile-detail/mobile-detail.component';
import { MobileEditComponent } from './mobilephones/mobile-edit/mobile-edit.component';
import { MobileStartComponent } from './mobilephones/mobile-start/mobile-start.component';
import { MobilephonesComponent } from './mobilephones/mobilephones.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
const appRoutes:Routes = [
    {path: '', redirectTo: '/mobilephones', pathMatch: 'full'},
    {path: 'mobilephones', component: MobilephonesComponent,children: [
        {path:'',component: MobileStartComponent},
        {path:'new',component:MobileEditComponent},
        {path:':id',component: MobileDetailComponent},
        {path:':id/edit',component:MobileEditComponent}
    ]},
    {path: 'stores', component: StoresComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}