import { ModelI } from "../interfaces/ModelI";
import Model from "../libs/Model";

export default class Armor extends Model implements ModelI{
    
    id: number | null = null;
    name: string;
    price: number;
    weight: number;
    mobility: number;
    protection: number;
    type: string;

    constructor( name: string, price: number, weight: number, mobility: number, protection: number, type: string ){
        super();
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.mobility = mobility;
        this.protection = protection;
        this.type = type;
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

    getWeight(){
        return this.weight;
    }

    getMobility(){
        return this.mobility;
    }

    getProtection(){
        return this.protection;
    }

    getType(){
        return this.type;
    }

    setId( id: number ){
        return this.id;
    }

    setName( name: string ){
        this.name = name;
    }

    setPrice( price: number ){
        this.price = price;
    }

    setWeight( weight: number ){
        this.weight = weight;
    }

    setMobility( mobility: number ){
        this.mobility = mobility;
    }

    setProtection( protection: number ){
        this.protection = protection;
    }

    setType( type: string ){
        this.type = type;
    }
    
    static findAll() {
        const query = 'SELECT * from rest.god';
        const result = Model.execQuery(query);
        return result;
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