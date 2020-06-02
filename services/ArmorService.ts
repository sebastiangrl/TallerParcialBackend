import Armor from "../models/Armor";
import Model from "../libs/Model";
import { bd } from "../conf";
import ArmorFactory from "../factory/ArmorFactory";

module ArmorService{

    //CRUD
    export async function create(name: string, price: number, weight: number, mobility: number, protection: number, type: number): Promise<any> {
        const query =`INSERT INTO ${bd}.armor (name, price, weight, mobility, protection, type_id) VALUES ('${name}', ${price}, ${weight}, ${mobility}, ${protection}, ${type})`;
        let result:any = await Model.execQuery(query);
        const armor = ArmorFactory.CreateNew(result, name, price, weight, mobility, protection, type);
        return { "error": false, "ms":`La armadura ${name} fue creada con exito`, "code":201 };
    };

    export async function update(id: number, name: string, price: number, weight: number, mobility: number, protection: number, type: number): Promise<any> {
        const query = `UPDATE ${bd}.armor SET (name = '${name}', price = ${price}, weight = ${weight}, mobility = ${mobility}, protection = ${protection}, type_id = ${type}) WHERE id = ${id}`;
        await Model.execQuery(query);
        return { "error": false, "ms":`La armadura con id ${id} fue actualizada con exito`, "code":200 };
    };

    export async function getById(id: number): Promise<any> {
        const query = await Model.select("armor",`WHERE id = ${id}`);
        const result = ArmorFactory.createObject(query);
        return result;
    };

    export function eliminar(id: number): Promise<any> {
        const query = Model.delete("armor",id);
        return query;
    };

    //GETS
    export async function getAll(): Promise<any> {
        const query = await Model.select("armor","");
        const result = ArmorFactory.createObject(query);
        return result;
    };

    export async function getByType(type: string): Promise<any> {
        const query = await Model.select("armor",`WHERE type_id = ${type}`);
        const result = ArmorFactory.createObject(query);
        return result;
    };

    export async function getByProtection(min: number, max: number): Promise<any> {
        const query = await Model.select("armor",`WHERE protection BETWEEN ${min} and ${max}`);
        const result = ArmorFactory.createObject(query);
        return result;
    };

    export async function getByPrice(min: number, max: number): Promise<any> {
        const query = await Model.select("armor",`WHERE price BETWEEN ${min} and ${max}`);
        const result = ArmorFactory.createObject(query);
        return result;
    };

}

export default ArmorService;