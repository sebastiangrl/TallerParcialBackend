import Armor from "../models/Armor";
import Model from "../libs/Model";
import { bd } from "../conf";

module ArmorService{

    export function getByType(type: string): Promise<any> {
        const query = `SELECT * from ${bd}.armor WHERE type LIKE '%${type}%' `;
        const result = Model.execQuery(query);
        return result;
    };

    export function getByProtection(min: number, max: number): Promise<any> {
        const query = `SELECT * from ${bd}.armor WHERE protection BETWEEN ${min} and ${max}`;
        const result = Model.execQuery(query);
        return result;
    };

    export function getAll(): Promise<any> {
        const query = `SELECT * from ${bd}.armor`;
        const result = Model.execQuery(query);
        return result;
    };

    export function getByPrice(min: number, max: number): Promise<any> {
        const query = `SELECT * from ${bd}.armor WHERE price BETWEEN ${min} and ${max}`;
        const result = Model.execQuery(query);
        return result;
    };

}

export default ArmorService;