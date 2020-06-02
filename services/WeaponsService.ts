import Weapon from "../models/Weapon"
import Model from "../libs/Model";
import { bd } from "../conf";
import WeaponFactory from "../factory/WeaponFactory";
module WeaponService{

    export async function getByModel(model: number): Promise<any> {
        if(await validModel(model)){
            return {"error": true, "ms":`El modelo con id ${model} no existe`, "code":404};
        }
            const query = `SELECT * from ${bd}.weapons WHERE model_id = ${model}`;
            let result:any = await Model.execQuery(query);
            result = WeaponFactory.addAccToWea(result);
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
        if(await validModel(model)){
            return {"error": true, "ms":`El modelo con id ${model} no existe`, "code":404};
        }
        const result = await Model.execQuery(query);
        const obj = WeaponFactory.createNew(result, price, name, model, damage);
        return {"error": false, "ms":`El arma ${name} fue creada con exito`, "code":201 };
    };

    export async function customCreate(price: number, name: string, model: number, damage: number, accessory: Array<any>) {
        const query = `INSERT INTO ${bd}.weapons (price, name, damage, model_id) VALUES (${price}, '${name}', ${damage}, ${model})`;
        let queryAcc:string = "";
        if(await validModel(model)){
            return {"error": true, "ms":`El modelo con id ${model} no existe`, "code":404};
        }
        for (let i = 0; i < accessory.length; i++) {
            if(await validAcc(accessory[i])){
                return {"error": true, "ms":`El accesorio con id ${accessory[i]} no existe`, "code":404};
            }
        }
        const result:any = await Model.execQuery(query);
        for(let c = 0; c < accessory.length; c++){
            queryAcc = `INSERT INTO ${bd}.assembler (weapons_id, accessorys_id) VALUES (${result.insertId}, ${accessory[c]})`;
            await Model.execQuery(queryAcc);
        }
        return { "error": false, "ms":`El arma ${name} fue creada con exito`, "code":201 };
    };

    export async function getByPrice(min: number, max: number): Promise<any> {
        const query = `SELECT * from ${bd}.weapons WHERE price BETWEEN ${min} and ${max}`;
        let result = await Model.execQuery(query);
        result = WeaponFactory.addAccToWea(result);
        return result;
    };

    export function modelList(): Promise<any> {
        const query = `SELECT * from ${bd}.model`;
        const result = Model.execQuery(query);
        return result;
    };

    export  async function eliminar(id: number): Promise<any> {   
        if(await validWeapon(id)){
            return {"error": true, "ms":`El arma con id ${id} no existe`, "code":404};
        }  
        const query = `DELETE FROM ${bd}.assembler WHERE weapons_id = ${id}`;
        Model.execQuery(query);
        const weapon = Model.delete("weapons",id);
        return weapon;
    };

    async function validAcc(ida: number){
        const query = `SELECT id from ${bd}.accessorys where id = ${ida}`;
        let max: any = await Model.execQuery(query);
        try{
        return (max[0].id == ida)? false: true;
        }catch(error){
            return true;
        }
    }

    async function validWeapon(ida: number){
        const query = `SELECT id from ${bd}.weapons where id = ${ida}`;
        let max: any = await Model.execQuery(query);
        try{
        return (max[0].id == ida)? false: true;
        }catch(error){
            return true;
        }
    }

    async function validModel(ida: number){
        const query = `SELECT id from ${bd}.model where id = ${ida}`;
        let max: any = await Model.execQuery(query);
        try{
        return (max[0].id == ida)? false: true;
        }catch(error){
            return true;
        }
    }


}

export default WeaponService;