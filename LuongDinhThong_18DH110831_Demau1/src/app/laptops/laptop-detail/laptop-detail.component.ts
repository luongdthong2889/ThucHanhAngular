import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Laptop } from '../laptop-model';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-detail',
  templateUrl: './laptop-detail.component.html',
  styleUrls: ['./laptop-detail.component.css']
})
export class LaptopDetailComponent implements OnInit {
  laptop: Laptop;
  id: number;
  constructor(private route: ActivatedRoute, private laptopService: LaptopService, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id =+ params['id'];
      this.laptop = this.laptopService.getLaptop(this.id);
    });
  }
  onEditLaptop() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // console.log(this.route);
  }
  onDeleteLaptop(){
    this.laptopService.deleteLaptop(this.id);
    this.router.navigate(['/laptops']);
  }
}

