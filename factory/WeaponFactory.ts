import Weapons from "../models/Weapon";
import { bd } from "../conf";
import Model from "../libs/Model";

export default class WeaponFactory{
    
    static create(obj: any):Weapons {
        const weapon:Weapons = new Weapons(obj.price ,obj.name, obj.model_id, obj.damage);
        weapon.setId(obj.id);
        return weapon;
    }

    static createNew( info: any, price: number , name: string, model_id: number, damage:number ):Weapons {
        const weapon:Weapons = new Weapons(price ,name, model_id, damage);
        weapon.setId(info.insertId);
        return weapon;
    }
}