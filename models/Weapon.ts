import { ModelI } from "../interfaces/ModelI";
import Accessory from "./Accessory";

export default class Weapon implements ModelI{

    id: number | null = null;
    name: string;
    price: number;
    model: string;
    accessory: Array<Accessory>;
    damage: number;
    kills: number;

    constructor(name: string, price: number, model: string, accessory: Array<Accessory>, damage: number, kills: number){
        this.name = name;
        this.price = price;
        this.model = model;
        this.accessory = accessory;
        this.damage = damage;
        this.kills = kills;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
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

    getKills(){
        return this.kills;
    }

    setId( id: number ){
        this.id = id;
    }

    setName( name: string ){
        this.name = name;
    }

    setPrice( price: number ){
        this.price = price;
    }

    setModel( model: string ){
        this.model = model;
    }

    setAccessory( accessory: Accessory ){
        this.accessory.push(accessory);
    }

    setDamage(damage: number){
        this.damage = damage;
    }

    setKills(kills: number){
        this.kills = kills;
    }
    
    findOne(): Promise<any> {
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