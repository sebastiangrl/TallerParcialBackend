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
<<<<<<< HEAD
    type: string;

    constructor( name: string, price: number, weight: number, mobility: number, protection: number, type: string ){
=======
    type: number;

    constructor( name: string, price: number, weight: number, mobility: number, protection: number, type: number ){
>>>>>>> Sebas
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

<<<<<<< HEAD
    setType( type: string ){
=======
    setType( type: number ){
>>>>>>> Sebas
        this.type = type;
    }

    read(id :number): Promise<any> {
        const query = `SELECT * from ${bd}.armor WHERE id = ${id}`;
        const result = Model.execQuery(query);
        return result;
    }
<<<<<<< HEAD
    create(): Promise<any> {
        const query = `INSERT INTO ${bd}.armor (name, price, weight, mobility, protection, type) VALUES ('${this.name}', ${this.price}, ${this.weight}, ${this.mobility}, ${this.protection}, '${this.type}')`;
        const result = Model.execQuery(query);
        return result;
    }
    update(): Promise<any> {
        const query = `UPDATE ${bd}.armor SET (name = '${this.name}', price = ${this.price}, weight = ${this.weight}, mobility = ${this.mobility}, protection = ${this.protection}, type = '${this.type}') WHERE ${bd}.armor.id = ${this.id}`;
        const result = Model.execQuery(query);
        return result;
    }
    delete(): Promise<any> {
        const query = `DELETE FROM ${bd}.armor WHERE ${bd}.armor.id = ${this.id}`;
        const result = Model.execQuery(query);
        return result;
=======

    create(): Promise<any> {
        const query = `INSERT INTO ${bd}.armor (name, price, weight, mobility, protection, type_id) VALUES ('${this.name}', ${this.price}, ${this.weight}, ${this.mobility}, ${this.protection}, ${this.type})`;
        const result = Model.execQuery(query);
        return result;
    }

    update(): Promise<any> {
        const query = `UPDATE ${bd}.armor SET (name = '${this.name}', price = ${this.price}, weight = ${this.weight}, mobility = ${this.mobility}, protection = ${this.protection}, type_id = '${this.type}') WHERE ${bd}.armor.id = ${this.id}`;
        const result = Model.execQuery(query);
        return result;
    }

    delete(): Promise<any> {
        //(table: string, attr: string, values: string)
        const query = Model.delete("armor","id",`${this.id}`);
        //const query = `DELETE FROM ${bd}.armor WHERE ${bd}.armor.id = ${this.id}`;
        //const result = Model.execQuery(query);
        return query;
>>>>>>> Sebas
    }


}