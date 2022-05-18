import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LaptopService } from '../../laptop.service';

@Component({
  selector: 'app-laptop-edit',
  templateUrl: './laptop-edit.component.html',
  styleUrls: ['./laptop-edit.component.css']
})
export class LaptopEditComponent implements OnInit {

  id: number;
  editMode: boolean = false;
  laptopForm: FormGroup;
  constructor(private route: ActivatedRoute, private laptopService: LaptopService,private router:Router) { }

  ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
      this.id =+ params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }
  private initForm(): void {
    let laptopId = '';
    let laptopName = '';
    let laptopPrice = '';
    let laptopDescription = '';

    if(this.editMode) {
      const laptop = this.laptopService.getLaptop(this.id);
      laptopId = laptop.id;
      laptopName = laptop.name;
      laptopPrice = laptop.price;
      laptopDescription = laptop.description;
    }
    this.laptopForm = new FormGroup({
      'id': new FormControl(laptopId, Validators.required),
      'name': new FormControl(laptopName, Validators.required),
      'price': new FormControl(laptopPrice, Validators.required),
      'description': new FormControl(laptopDescription, Validators.required),
    });
  }
  onSubmit(){
    if(this.editMode){
      this.laptopService.updateLaptop(this.id, this.laptopForm.value);
    }
    else{
      this.laptopService.addLaptop(this.laptopForm.value);
    }
    this.onCancel();
  }
  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
