export default class Address {
    address1: string = "";
    address2: string = "";
    number: number = 0;
    postalCode: string = "";
    state: string = "";
    city: string = "";

    constructor(address: Address){
        this.address1 = address.address1
        this.address2 = address.address2
        this.number = address.number
        this.city = address.city
        this.state = address.state
        this.postalCode = address.postalCode
    }

    public toString(){
        return `${this.address1}, ${this.address2}, ${this.number}, ${this.postalCode}, ${this.state}, ${this.city}`
    }
}