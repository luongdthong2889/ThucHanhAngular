import { MobilePhone } from './mobile.model';
import { MobilePhoneService } from './mobile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobilephones',
  templateUrl: './mobilephones.component.html',
  styleUrls: ['./mobilephones.component.css']
})
export class MobilephonesComponent implements OnInit {

  constructor(private mobilePhoneService:MobilePhoneService) { }
  selectedMobilePhone:MobilePhone;
  ngOnInit(): void {
    this.mobilePhoneService.mobilePhoneSelected.subscribe((mobilePhone:MobilePhone)=>{
      this.selectedMobilePhone=mobilePhone;
    });
  }

}
