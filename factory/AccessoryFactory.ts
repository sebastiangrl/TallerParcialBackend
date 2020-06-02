import Accessory from "../models/Accessory";

export default class AccessoryFactory{
    
    static Create(obj: any):Accessory {
        const Acc:Accessory = new Accessory(obj.name, obj.price, obj.damage, obj.precision, obj.scope, obj.cadence, obj.mobility, obj.control, obj.level, obj.type_id);
        Acc.setId(obj.id);
        return Acc;
    }

    static CreateNew(info: any, name: string, price: number, damage: number, precision: number, scope: number, cadence: number, mobility: number, control: number, level: number, type: number):Accessory {
        const Acc:Accessory = new Accessory(name, price, damage, precision, scope, cadence, mobility, control, level, type);
        Acc.setId(info.insertId);
        return Acc;
    }

    static createObject(obj: any){
        var objArr:Array<Accessory> = [];
        for( let i = 0; i < obj.length ; i ++ ){
            objArr.push(AccessoryFactory.Create(obj[i]));
        }
        return objArr;
    }
}