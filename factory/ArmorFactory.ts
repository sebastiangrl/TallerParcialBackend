import Armor from "../models/Armor";

export default class ArmorFactory{
    
    static armorCreate(obj: object):Armor {
        const dato:Armor = new Armor();

        return dato;
    }
}