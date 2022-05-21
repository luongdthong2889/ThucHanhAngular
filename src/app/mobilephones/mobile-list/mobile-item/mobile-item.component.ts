import { MobilePhoneService } from './../../mobile.service';
import { MobilePhone } from './../../mobile.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-item',
  templateUrl: './mobile-item.component.html',
  styleUrls: ['./mobile-item.component.css']
})
export class MobileItemComponent implements OnInit {
  @Input()
  mobilePhone!: MobilePhone;
  @Input()
  index!: number;
  constructor(private mobilePhoneService:MobilePhoneService) { }

  ngOnInit(): void {
  }

}
