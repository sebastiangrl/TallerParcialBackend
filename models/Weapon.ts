import { crud } from "../interfaces/crud";
import Accessory from "./Accessory";

export default class Weapon implements crud{

    id: number | null = null;
    name: string;
    model: string;
    accessory: Array<Accessory>;
    damage: number;

    constructor(name: string, model: string, accessory: Array<Accessory>, damage: number){
        this.name = name;
        this.model = model;
        this.accessory = accessory;
        this.damage = damage;
    }

    getId(){
        return this.id;
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

    setName( name: string ){
        this.name = name;
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