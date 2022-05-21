import { MobilePhoneService } from './mobilephones/mobile.service';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MobilephonesComponent } from './mobilephones/mobilephones.component';
import { StoresComponent } from './stores/stores.component';
import { MobileListComponent } from './mobilephones/mobile-list/mobile-list.component';
import { MobileDetailComponent } from './mobilephones/mobile-detail/mobile-detail.component';
import { MobileStartComponent } from './mobilephones/mobile-start/mobile-start.component';
import { MobileEditComponent } from './mobilephones/mobile-edit/mobile-edit.component';
import { MobileItemComponent } from './mobilephones/mobile-list/mobile-item/mobile-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MobilephonesComponent,
    StoresComponent,
    MobileListComponent,
    MobileDetailComponent,
    MobileStartComponent,
    MobileEditComponent,
    MobileItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule

  ],
  providers: [MobilePhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
