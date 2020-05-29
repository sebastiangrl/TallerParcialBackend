import Weapon from "../models/Weapon"
import Model from "../libs/Model";
import { bd } from "../conf";
import WeaponFactory from "../factory/WeaponFactory";
import AccessoryFactory from "../factory/AccessoryFactory";

module WeaponService{

    export function getByModel(model: number): Promise<any> {
        const query = `SELECT * from ${bd}.weapons WHERE model_id = ${model}`;
        const result = Model.execQuery(query);
        return result;
    };

    //requiere api externa
    export function getByKills(): Promise<any> {
        const query = `SELECT * from ${bd}.weapons`;
        const result = Model.execQuery(query);
        return result;
    };

    export async function create(price: number, name: string, model: number, damage: number) {
        const query = `INSERT INTO ${bd}.weapons (price, name, damage, model_id) VALUES (${price}, '${name}', ${damage}, ${model})`;
        const result = await Model.execQuery(query);
        const obj = WeaponFactory.createNew(result, price, name, model, damage);
        return obj;
    };

    export async function customCreate(price: number, name: string, model: number, damage: number, accessory: Array<any>) {
        const query = `INSERT INTO ${bd}.weapons (price, name, damage, model_id) VALUES (${price}, '${name}', ${damage}, ${model})`;
        let queryAcc:string = "";
        for (let i = 0; i < accessory.length; i++) {
            if(await limitAcc(accessory[i])){
                return {"error": true, "ms":`El accesorio con id ${accessory[i]} no existe`, "code":404};
            }
        }
        const result:any = await Model.execQuery(query);
        for(let c = 0; c < accessory.length; c++){
            queryAcc = `INSERT INTO ${bd}.assembler (weapons_id, accessorys_id) VALUES (${result.insertId}, ${accessory[c]})`;
            await Model.execQuery(queryAcc);
        }
        return { "code": 200, "result": result };
    };

    export function getByPrice(min: number, max: number): Promise<any> {
        const query = `SELECT * from ${bd}.weapons WHERE price BETWEEN ${min} and ${max}`;
        const result = Model.execQuery(query);
        return result;
    };

    export function modelList(): Promise<any> {
        const query = `SELECT * from ${bd}.model`;
        const result = Model.execQuery(query);
        return result;
    };

    export function eliminar(id: number): Promise<any> {     
        const query = `DELETE FROM ${bd}.assembler WHERE weapons_id = ${id}`;
        Model.execQuery(query);
        const weapon = Model.delete("weapons",id);
        return weapon;
    };

    export async function addAccToWea(arr: any){
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

    async function limitAcc(ida: number){
        const query = `SELECT id from ${bd}.accessorys where id = ${ida}`;
        let max: any = await Model.execQuery(query);
        try{
        return (max[0].id == ida)? false: true;
        }catch(error){
            return true;
        }
    }


}

export default WeaponService;