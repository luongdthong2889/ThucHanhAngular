import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from '../laptop-model';
import { LaptopService } from '../laptop.service';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: Laptop[];
  constructor(private laptopService: LaptopService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.laptops = this.laptopService.getLaptops();
  }
  onNewLaptop() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
