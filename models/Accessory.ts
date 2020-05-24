
export default class Accessory {

    private name: string;
    private price: number;
    private damage: number;
    private precision: number;
    private cadence: number;
    private mobility: number;
    private control: number;
    private level: number;

    constructor(name: string, price: number, damage: number, precision: number, cadence: number, mobility: number, control: number, level: number) {
        //super();
        this.name = name;
        this.price = price;
        this.damage = damage;
        this.precision = precision;
        this.cadence = cadence;
        this.mobility = mobility;
        this.control = control;
        this.level = level;
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

    getDamage() {
        return this.damage;
    }

    setDamage(value: number) {
        this.damage = value;
    }

    getCadence() {
        return this.cadence;
    }

    setCadence(value: number) {
        this.cadence = value;
    }

    getPrecision() {
        return this.precision;
    }

    setPrecision(value: number) {
        this.precision = value;
    }

    getMobility() {
        return this.mobility;
    }

    setMobility(value: number) {
        this.mobility = value;
    }

    getControl() {
        return this.control;
    }

    setControl(value: number) {
        this.control = value;
    }

    getLevel() {
        return this.level;
    }

    setLevel(value: number) {
        this.level = value;
    }

}