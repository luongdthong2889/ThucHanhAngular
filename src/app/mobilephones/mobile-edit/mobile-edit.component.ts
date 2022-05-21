import { MobilePhoneService } from './../mobile.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-edit',
  templateUrl: './mobile-edit.component.html',
  styleUrls: ['./mobile-edit.component.css']
})
export class MobileEditComponent implements OnInit {

  id: number;
  editMode=false;
  mobilePhoneForm: FormGroup;
  constructor(private route:ActivatedRoute,private mobilePhoneService:MobilePhoneService,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id = +params['id'];
      this.editMode = params['id']!=null;
      this.initForm();
    })
  }
  private initForm(){
    let mpName = '';
    let mpID = '';
    let mpPrice = 0;
    let mpDescription='';

    if(this.editMode){
      const mobilePhone = this.mobilePhoneService.getMobilePhone(this.id);
      mpName=mobilePhone.name;
      mpID=mobilePhone.ID;
      mpPrice=mobilePhone.price;
      mpDescription=mobilePhone.description;
    }
    this.mobilePhoneForm = new FormGroup({
      'name': new FormControl(mpName, Validators.required),
      'ID': new FormControl(mpID,Validators.required),
      'price': new FormControl(mpPrice,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'description': new FormControl(mpDescription,Validators.required)
    });
  }
  onSubmit(){
    if(this.editMode){
      this.mobilePhoneService.updateMobilePhone(this.id,this.mobilePhoneForm.value);
      this.router.navigate(['/mobilephones/'+this.id]);
    }
    else
    {
      this.mobilePhoneService.addMobilePhone(this.mobilePhoneForm.value);
      this.router.navigate(['/mobilephones']);
    }
  }
  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
