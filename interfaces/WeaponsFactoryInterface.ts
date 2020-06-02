import Weapon from "../models/Weapon";

export interface WeaponsFactoryInterface{

    create(obj: any): Weapon;

    createNew( info: any, price: number , name: string, model_id: number, damage:number ):Weapon;

    addAccToWea(arr: any): Array<Weapon>;

}