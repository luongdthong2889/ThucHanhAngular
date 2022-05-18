import { Component, Input, OnInit } from '@angular/core';
import { Laptop } from '../../laptop-model';
import { LaptopService } from '../../laptop.service';

@Component({
  selector: 'app-laptop-item',
  templateUrl: './laptop-item.component.html',
  styleUrls: ['./laptop-item.component.css']
})
export class LaptopItemComponent implements OnInit {

  @Input() laptop: Laptop;
  @Input() index: number;

  constructor(private laptopService: LaptopService) {
  }

  ngOnInit(): void {

  }
}
