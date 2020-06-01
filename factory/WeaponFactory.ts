import Weapons from "../models/Weapon";
import { bd } from "../conf";
import Model from "../libs/Model";
import Weapon from "../models/Weapon";
import AccessoryFactory from "./AccessoryFactory";

export default class WeaponFactory{
    
    static create(obj: any):Weapon {
        const weapon:Weapon = new Weapon(obj.price ,obj.name, obj.model_id, obj.damage);
        weapon.setId(obj.id);
        return weapon;
    }

    static createNew( info: any, price: number , name: string, model_id: number, damage:number ):Weapon {
        const weapon:Weapon = new Weapon(price ,name, model_id, damage);
        weapon.setId(info.insertId);
        return weapon;
    }

    static async addAccToWea(arr: any){
        var objArr:Array<Weapon> = [];
        for( let i = 0; i < arr.length ; i ++){
            let weapon = WeaponFactory.create(arr[i]);
            const query = `SELECT * from ${bd}.accessorys WHERE id IN (SELECT accessorys_id from ${bd}.assembler WHERE weapons_id = ${weapon.id})`;
            let result:any = await Model.execQuery(query);
            for( let c = 0; c < result.length ; c++){
                weapon.setAccessory(AccessoryFactory.Create(result[c]));
            }
            objArr.push(weapon);
        }
        return objArr;
    }
}