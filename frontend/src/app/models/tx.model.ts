export class TX {
    public to_address: string;
    public amount: number;

    constructor(address: string, amount: number) {
        this.to_address = address;
        this.amount = amount;
    }
}