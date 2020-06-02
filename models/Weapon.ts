import { crud } from "../interfaces/crud";
import Accessory from "./Accessory";
import { WeaponInterface } from "../interfaces/WeaponsInterface";

export default class Weapon implements crud, WeaponInterface{

    id: number | null = null;
    price: number;
    name: string;
    model: number;
    accessory: Array<Accessory> =  [];
    damage: number;

    constructor(price: number, name: string, model: number, damage: number){
        this.price = price;
        this.name = name;
        this.model = model;
        this.damage = damage;
    }

    getId(){
        return this.id;
    }

    getprice(){
        return this.price;
    }

    getName(){
        return this.name;
    }

    getModel(){
        return this.model;
    }

    getAccessory(){
        return this.accessory;
    }

    getDamage(){
        return this.damage;
    }

    setId( id: number ){
        this.id = id;
    }

    setPrice( price: number ){
        this.price = price;
    }

    setName( name: string ){
        this.name = name;
    }

    setModel( model: number ){
        this.model = model;
    }

    setAccessory( accessory: Accessory ){
        this.accessory.push(accessory);
    }

    setDamage(damage: number){
        this.damage = damage;
    }
    
    read(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    create(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }


}