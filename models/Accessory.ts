
import { ModelI } from "../interfaces/ModelI";
import Model from "../libs/Model";

export default class Accessory extends Model implements ModelI{

    id: number | null = null;
    name: string;
    damage: number;
    precision: number;
    scope: number;
    cadence: number;
    mobility: number;
    control: number;
    level: number;
    type: string;
    price: number;
    
    constructor(name: string, damage: number, precision: number, scope: number, cadence: number, mobility: number, control: number, level: number, type: string, price: number){
        super();
        this.name = name;
        this.damage = damage;
        this.precision = precision;
        this.scope = scope;
        this.cadence = cadence;
        this.mobility = mobility;
        this.control = control;
        this.level = level;
        this.type = type;
        this.price = price;
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

    getPrice(){
        return this.price;
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

    setType( type: string ){
        this.type = type;
    } 

    setPrice( price: number ){
        this.price = price;
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