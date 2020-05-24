
export default class Armor {

    private name: string;
    private price: number;
    private weight: number;
    private mobility: number;
    private protection: number;
    private type: string;

    constructor(name: string, price: number, weight: number, mobility: number, protection: number, type: string) {
        //super();
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.mobility = mobility;
        this.protection = protection;
        this.type = type;
    }


    getName() {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value: number) {
        this.price = value;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(value: number) {
        this.weight = value;
    }

    getMobility() {
        return this.mobility;
    }

    setMobility(value: number) {
        this.mobility = value;
    }

    getProtection() {
        return this.protection;
    }

    setProtection(value: number) {
        this.protection = value;
    }

    getType() {
        return this.type;
    }

    setType(value: string) {
        this.type = value;
    }

}