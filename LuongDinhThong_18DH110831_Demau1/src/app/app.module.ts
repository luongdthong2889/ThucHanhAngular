import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { CustomersComponent } from './customers/customers.component';
import { HeaderComponent } from './header/header.component';
import { LaptopDetailComponent } from './laptops/laptop-detail/laptop-detail.component';
import { LaptopListComponent } from './laptops/laptop-list/laptop-list.component';
import { LaptopStartComponent } from './laptops/laptop-start/laptop-start.component';
import { LaptopEditComponent } from './laptops/laptop-list/laptop-edit/laptop-edit.component';
import { LaptopItemComponent } from './laptops/laptop-list/laptop-item/laptop-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    LaptopsComponent,
    CustomersComponent,
    HeaderComponent,
    LaptopDetailComponent,
    LaptopListComponent,
    LaptopStartComponent,
    LaptopEditComponent,
    LaptopItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
