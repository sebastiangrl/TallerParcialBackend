import { crud } from "../interfaces/crud";

export default class Accessory implements crud{

    id: number | null = null;
    name: string;
    damage: number;
    precision: number;
    scope: number;
    cadence: number;
    mobility: number;
    control: number;
    level: number;
    
    constructor(name: string, damage: number, precision: number, scope: number, cadence: number, mobility: number, control: number, level: number){
        this.name = name;
        this.damage = damage;
        this.precision = precision;
        this.scope = scope;
        this.cadence = cadence;
        this.mobility = mobility;
        this.control = control;
        this.level = level;
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