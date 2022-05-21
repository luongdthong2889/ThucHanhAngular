import { MobilePhone } from './../mobile.model';
import { MobilePhoneService } from './../mobile.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-detail',
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit {

  constructor(private mobilePhoneService: MobilePhoneService,private route:ActivatedRoute, private router:Router) { }
  @Input()
  mobilePhone!: MobilePhone;
  id!: number;
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
  
      this.id = +params['id'];
      this.mobilePhone = this.mobilePhoneService.getMobilePhone(this.id);
      }
    );
  }
  onEditMobilePhone() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
  onDeleteMobilePhone(){
    this.mobilePhoneService.deleteMobilePhone(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
