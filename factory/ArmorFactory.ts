import Armor from "../models/Armor";

export default class ArmorFactory{
    
    static armorCreate(array: Array<any>):Armor {
        const dato:Armor = new Armor();

        return dato;
    }
}