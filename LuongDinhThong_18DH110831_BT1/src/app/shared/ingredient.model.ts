export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
    // Cách 2: dạng short cut
    // constructor(public name: string, public amount: number) {
    // }
}