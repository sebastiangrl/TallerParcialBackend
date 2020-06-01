import Weapon from "../models/Weapon";

export interface WeaponsFactoryInterface{

    static create(obj: any): Weapon;

    static createNew( info: any, price: number , name: string, model_id: number, damage:number ):Weapon;

    async addAccToWea(arr: any): Array<Weapon>;

}