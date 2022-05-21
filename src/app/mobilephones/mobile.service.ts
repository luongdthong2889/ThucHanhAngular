import { MobilePhone } from './mobile.model';
import { EventEmitter, Injectable } from '@angular/core';
@Injectable({
    providedIn:'root',
})
export class MobilePhoneService{
    mobilePhoneSelected = new EventEmitter<MobilePhone>();
    mobilePhones:MobilePhone[]=[
        new MobilePhone("MB0001","Iphone 12 Pro Max",1400,"Hiệu năng khủng từ \"quái vật\" A14 Bionic"),
        new MobilePhone("MB0002","Samsung S21",1000,"Hiệu năng khủng từ \"quái vật\" A14 Bionic"),
        new MobilePhone("MB0003","Redmi Note 10S",800,"Hiệu năng khủng từ \"quái vật\" A14 Bionic"),
      ];
    constructor(){}
    getMobilePhones(){
        return this.mobilePhones;
    }
    getMobilePhone(index: number) {
        return this.mobilePhones[index];
    }
    addMobilePhone(mobilePhone:MobilePhone){
        this.mobilePhones.push(mobilePhone);
    }
    updateMobilePhone(index:number,newMobilePhone:MobilePhone){
        this.mobilePhones[index]=newMobilePhone;
    }
    deleteMobilePhone(index:number){
        this.mobilePhones.splice(index,1);
    }
}