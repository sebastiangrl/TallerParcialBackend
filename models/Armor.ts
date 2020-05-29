import { crud } from "../interfaces/crud";
import Model from "../libs/Model";
import { bd } from "../conf"

export default class Armor implements crud{
    
    id: number | null = null;
    name: string;
    price: number;
    weight: number;
    mobility: number;
    protection: number;
    type: string;

    constructor( name: string, price: number, weight: number, mobility: number, protection: number, type: string ){
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

    read(id :number): Promise<any> {
        const query = `SELECT * from ${bd}.armor WHERE id = ${id}`;
        const result = Model.execQuery(query);
        return result;
    }

    create(): Promise<any> {
        const query = Model.create("armor",`(name, price, weight, mobility, protection, type) VALUES ('${this.name}', ${this.price}, ${this.weight}, ${this.mobility}, ${this.protection}, '${this.type}')`);
        return query;
    }

    public update(): Promise<any> {
        const query = Model.update("armor",`SET (name = '${this.name}', price = ${this.price}, weight = ${this.weight}, mobility = ${this.mobility}, protection = ${this.protection}, type = '${this.type}')`, `${this.id}`);
        return query;
    }

    delete(): Promise<any> {
        //(table: string, attr: string, values: string)
        const query = Model.delete("armor","id",`${this.id}`);
        //const query = `DELETE FROM ${bd}.armor WHERE ${bd}.armor.id = ${this.id}`;
        //const result = Model.execQuery(query);
        return query;
    }


}