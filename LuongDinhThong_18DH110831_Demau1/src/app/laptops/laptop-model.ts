
export class Laptop{
    public id: string;
    public name: string;
    public price: string;
    public description: string;
    constructor(id: string, name: string, price: string ,desc: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = desc;
    }
}