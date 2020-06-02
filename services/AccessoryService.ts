import Accessory from "../models/Accessory";
import Model from "../libs/Model";
import AccessoryFactory from "../factory/AccessoryFactory";
import { bd } from "../conf";

module AccessoryService {

    //CRUD
    export async function create(name: string, price: number, damage: number, precision: number, scope: number, cadence: number, mobility: number, control: number, level: number, type: number): Promise<any> {
        const query = `INSERT INTO ${bd}.accessorys (name, price, damage, prec, scope, cadence, mobility, control, level, type_id) VALUES ('${name}', ${price}, ${damage}, ${precision}, ${scope}, ${cadence}, ${mobility}, ${control}, ${level}, ${type})`;
        let result:any = await Model.execQuery(query);
        const accessory = AccessoryFactory.CreateNew(result, name, price, damage, precision, scope, cadence, mobility, control, level, type);
        return { "error": false, "ms":`El accesorio ${name} fue creada con exito`, "code":201 };
    };

    export async function getById(id: number): Promise<any> {
        const query = await Model.select("accessorys",`WHERE d = ${id}`);
        const result = AccessoryFactory.createObject(query);
        return result;
    };

    export  async function eliminar(id: number): Promise<any> {   
        if(await validAcc(id)){
            return {"error": true, "ms":`El accesorio con id ${id} no existe`, "code":404};
        }  
        const query1 = `DELETE FROM ${bd}.assembler WHERE accessorys_id = ${id}`;
        Model.execQuery(query1);
        const query2 = `DELETE FROM ${bd}.accessorys WHERE id = ${id}`;
        Model.execQuery(query2);
        return { "error": false, "ms":`El accesorio ${id} fue eliminado con exito`, "code":200 };
    };


    //GETS
    export async function getAll(): Promise<any> {
        const query = await Model.select("accessorys", "");
        const result = AccessoryFactory.createObject(query);
        return result;
    };

    export async function getByType(type: number): Promise<any> {
        const query = await Model.select("accessorys",`WHERE type_id = ${type}`);
        const result = AccessoryFactory.createObject(query);
        return result;
    };

    export async function getByPrice(min: number, max: number): Promise<any> {
        const query = await Model.select("accessorys",`WHERE price BETWEEN ${min} and ${max}`);
        const result = AccessoryFactory.createObject(query);
        return result;
    };

    export async function getByLevel(level: number): Promise<any> {
        const query = await Model.select("accessorys", `WHERE level = ${level}`);
        const result = AccessoryFactory.createObject(query);
        return result;
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

}

export default AccessoryService;