import { Component, OnInit } from '@angular/core';
import { Laptop } from './laptop-model';
import { LaptopService } from './laptop.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private laptopService: LaptopService) { }
  selectedLaptop: Laptop;
  ngOnInit(): void {
    this.laptopService.laptopSelected.subscribe((laptop: Laptop) => {
      this.selectedLaptop = laptop;
    });
  }
}
