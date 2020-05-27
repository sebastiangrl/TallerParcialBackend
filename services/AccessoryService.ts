import Accessory from "../models/Accessory";
import Model from "../libs/Model";
import { bd } from "../conf";

module AccessoryService {

    export function getByType(type: string): Promise<any> {
        const query = `SELECT * from ${bd}.accessorys WHERE type LIKE '%${type}%'`;
        const result = Model.execQuery(query);
        return result;
    };

    export function getByLevel(min: number, max: number): Promise<any> {
        const query = `SELECT * from ${bd}.accessorys WHERE level BETWEEN ${min} and ${max}`;
        const result = Model.execQuery(query);
        return result;
    };
    
    export function getAll(): Promise<any> {
        const query = `SELECT * from ${bd}.accessorys`;
        const result = Model.execQuery(query);
        return result;
    }; 

    export function getByPrice(min: number, max: number): Promise<any> {
        const query = `SELECT * from ${bd}.accessorys WHERE price BETWEEN ${min} and ${max}`;
        const result = Model.execQuery(query);
        return result;
    };

}   

export default AccessoryService;