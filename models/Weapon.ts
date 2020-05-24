import Model from '../libs/Model';
import { ModelI } from '../interfaces/ModelI';

export default class Weapon extends Model implements ModelI{

    private name: string;
    private price: number;
    private model: string;
    private accessory: string;
    private damage: number;

    constructor(name: string, price: number, model: string, accessory: string, damage: number) {
        super();
        this.name = name;
        this.price = price;
        this.model = model;
        this.accessory = accessory;
        this.damage = damage;
    }

    static findAll() {
        const query = 'SELECT * from rest.god';
        const result = Model.execQuery(query);
        return result;
    }

    create() {
        const query = `INSERT INTO rest.god (name, origin) VALUES ('${this.name}','${this.origin}')`;
        const result = Model.execQuery(query);
        return result;
    }

    update(): Promise<any> {
        return new Promise(()=>{});
    }

    delete(): Promise<any> {
        return new Promise(()=>{});
    }


    //Getts nd Setts
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

    getModel() {
        return this.model;
    }

    setModel(value: string) {
        this.model = value;
    }

    getAccessory() {
        return this.accessory;
    }

    setAccessory(value: string) {
        this.accessory = value;
    }

    getDamage() {
        return this.damage;
    }

    setDamage(value: number) {
        this.damage = value;
    }

}