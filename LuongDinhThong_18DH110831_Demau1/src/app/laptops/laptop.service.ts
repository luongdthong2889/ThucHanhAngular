import { EventEmitter, Injectable } from "@angular/core";
import { Laptop } from "./laptop-model";

@Injectable({
    providedIn: 'root',
})

export class LaptopService{
    laptopSelected = new EventEmitter<Laptop>();
    private laptops: Laptop[] = [
        new Laptop('LT001', 'Dell 2020', 'Price: 2500','Super strong Dell Laptop'
        ),
        new Laptop('LT002', 'ASUS 2020', 'Price: 2000','Super strong ASUS Laptop'
        ),
        new Laptop('LT003', 'HP 2020', 'Price: 3000','Super strong HP Laptop'
        ),
      ];

      getLaptops(){
          return this.laptops
      }
      getLaptop(index: number){
          return this.laptops[index]
      }
      addLaptop(laptop: Laptop){
          this.laptops.push(laptop);
      }
      updateLaptop(index: number, newLaptop: Laptop){
          this.laptops[index] = newLaptop;
      }
      deleteLaptop(index: number){
          this.laptops.splice(index, 1);
      }
}