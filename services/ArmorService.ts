import Armor from "../models/Armor";
import Model from "../libs/Model";

module ArmorService{

    //CRUD
    export async function create(name: string, price: number, weight: number, mobility: number, protection: number, type: number): Promise<any> {
        const armor = new Armor(name, price, weight, mobility, protection, type);
        const query = await armor.create();
        return query;
    };

    export async function update(name: string, price: number): Promise<any> {
        const query = null
        return query;
    };

    //GETS
    export function getAll(): Promise<any> {
        const query = Model.select("armor","");
        return query;
    };

    export function getByType(type: string): Promise<any> {
        const query = Model.select("armor",`WHERE type_id = ${type}`);
        return query;
    };

    export function getByProtection(min: number, max: number): Promise<any> {
        const query = Model.select("armor",`WHERE protection BETWEEN ${min} and ${max}`);
        return query;
    };

    export function getByPrice(min: number, max: number): Promise<any> {
        const query = Model.select("armor",`WHERE price BETWEEN ${min} and ${max}`);
        return query;
    };

}

export default ArmorService;