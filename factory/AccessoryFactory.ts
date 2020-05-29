import Accessory from "../models/Accessory";

export default class AccessoryFactory{
    
    static Create(obj: any):Accessory {
        const Acc:Accessory = new Accessory(obj.name, obj.price, obj.damage, obj.precision, obj.scope, obj.cadence, obj.mobility, obj.control, obj.level, obj.type);
        Acc.setId(obj.id);
        return Acc;
    }
}