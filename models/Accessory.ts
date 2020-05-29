import { crud } from "../interfaces/crud";
import Model from "../libs/Model";
import { bd } from "../conf"

export default class Accessory implements crud{

    id: number | null = null;
    name: string;
    price: number;
    damage: number;
    precision: number;
    scope: number;
    cadence: number;
    mobility: number;
    control: number;
    level: number;
    type: number;
    
    constructor(name: string, price: number, damage: number, precision: number, scope: number, cadence: number, mobility: number, control: number, level: number, type: number ){
        this.name = name;
        this.price = price;
        this.damage = damage;
        this.precision = precision;
        this.scope = scope;
        this.cadence = cadence;
        this.mobility = mobility;
        this.control = control;
        this.level = level;
        this.type = type;
    }

    getId(){
        return this.id;
    }

    getName(){
        return this.name;
    }

    getDamage(){
        return this.damage;
    }

    getPrice(){
        return this.price;
    }

    getPrecision(){
        return this.precision;
    }

    getScope(){
        return this.scope;
    }

    getCadence(){
        return this.cadence;
    }

    getMobility(){
        return this.mobility;
    }

    getControl(){
        return this.control;
    }

    getLevel(){
        return this.level;
    }

    getType(){
        return this.type;
    }

    setId( id: number  ){
        this.id = id;
    }

    setName( name: string ){
        this.name = name;
    }

    setDamage( damage: number ){
        this.damage = damage;
    }

    setPrice( price: number ){
        this.price = price;
    }

    setPrecision( precision: number ){
        this.precision = precision;
    }

    setScope( scope: number ){
        this.scope = scope;
    }

    setCadence( cadence: number ){
        this.cadence = cadence;
    }

    setMobility( mobility: number ){
        this.mobility = mobility;
    }

    setControl( control: number ){
        this.control = control;
    }

    setLevel( level: number ){
        this.level = level;
    }

    setType( type: number){
        this.type = type;
    }

    read(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    create(): Promise<any> {
        const query = `INSERT INTO ${bd}.accessorys (name, price, damage, prec, scope, cadence, mobility, control, level, type_id) VALUES ('${this.name}', ${this.price}, ${this.damage}, ${this.precision}, ${this.scope}, ${this.cadence}, ${this.mobility}, ${this.control}, ${this.level}, ${this.type})`;
        return Model.execQuery(query);
    }
    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }


}