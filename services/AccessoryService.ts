import Accessory from "../models/Accessory";
import Model from "../libs/Model";

module AccessoryService {

    //CRUD
    export async function create(name: string, price: number, damage: number, precision: number, scope: number, cadence: number, mobility: number, control: number, level: number, type: number): Promise<any> {
        const accessory = new Accessory(name, price, damage, precision, scope, cadence, mobility, control, level, type);
        const query = await accessory.create();
        return query;
    };


    //GETS
    export function getAll(): Promise<any> {
        const query = Model.select("accessorys", "");
        return query;
    };

    export function getByType(type: string): Promise<any> {
        const query = Model.select("accessorys",`WHERE type LIKE '%${type}%'`);
        return query;
    };

    export function getByPrice(min: number, max: number): Promise<any> {
        const query = Model.select("accessorys",`WHERE price BETWEEN ${min} and ${max}`);
        return query;
    };

    export function getByLevel(level: number): Promise<any> {
        const query = Model.select("accessorys", `WHERE level LIKE '%${level}%'`);
        return query;
    };

}

export default AccessoryService;