import Accessory from "../models/Accessory";
import Model from "../libs/Model";

module AccessoryService {

    //CRUD
    export async function create(name: string, price: number, damage: number, precision: number, scope: number, cadence: number, mobility: number, control: number, level: number, type: number): Promise<any> {
        const accessory = new Accessory(name, price, damage, precision, scope, cadence, mobility, control, level, type);
        const query = await accessory.create();
        return query;
    };

    export function eliminar(id: number): Promise<any> {
        const query = Model.delete("accessorys",id);
        return query;
    };

    export function update(id: number, name: string, price: number, damage: number, precision: number, scope: number, cadence: number, mobility: number, control: number, level: number, type: number): Promise<any> {
        const query = Model.update("accessorys",`SET name = '${name}', price = ${price}, damage = ${damage}, prec = ${precision}, scope = ${scope}, cadence = ${cadence}, mobility = ${mobility}, control = ${control}, level = ${level}, type_id = ${type} `,id);
        return query;
    };


    //GETS
    export function getAll(): Promise<any> {
        const query = Model.select("accessorys", "");
        return query;
    };

    export function getByType(type: number): Promise<any> {
        const query = Model.select("accessorys",`WHERE type_id LIKE '%${type}%'`);
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