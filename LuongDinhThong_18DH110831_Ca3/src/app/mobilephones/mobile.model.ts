export class MobilePhone{
    ID:string;
    name:string;
    price:number;
    description:string;
    constructor(studentID:string,name:string,price:number,description:string){
        this.name=name;
        this.ID=studentID;
        this.price=price;
        this.description=description;
    }
}