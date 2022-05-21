import { MobilePhoneService } from './../mobile.service';
import { MobilePhone } from './../mobile.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})
export class MobileListComponent implements OnInit {

  mobilePhones:MobilePhone[];
  
  constructor(private mobilePhoneService:MobilePhoneService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.mobilePhones=this.mobilePhoneService.getMobilePhones();
  }
  onNewMobilePhone() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
