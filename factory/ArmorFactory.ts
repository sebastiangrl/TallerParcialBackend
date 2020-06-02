import Armor from "../models/Armor";

export default class ArmorFactory{
    
    static Create(obj: any):Armor {
        const dato:Armor = new Armor(obj.name, obj.price, obj.weight, obj.mobility, obj.protection, obj.type);
        dato.setId(obj.id);
        return dato;
    }

    static CreateNew(info: any, name: string, price: number, weight: number, mobility: number, protection: number, type: number):Armor {
        const dato:Armor = new Armor(name, price, weight, mobility, protection, type);
        dato.setId(info.insertId);
        return dato;
    }

    static createObject(obj: any){
        var objArr:Array<Armor> = [];
        for( let i = 0; i < obj.length ; i ++ ){
            objArr.push(ArmorFactory.Create(obj[i]));
        }
        return objArr;
    }
}