import Armor from "../models/Armor";
import Model from "../libs/Model";
import { bd } from "../conf";

module ArmorService{

    export function getByType(type: string): Promise<any> {

        return new Promise(()=>{});
    };

    export function getByProtection(min: number, max: number): Promise<any> {

        return new Promise(()=>{});
    };

    export function getAll(): Promise<any> {
        const query = `SELECT * from ${bd}.armor`;
        const result = Model.execQuery(query);
        return result;
    };

    export function getByPrice(min: number, max: number): Promise<any> {

        return new Promise(()=>{});
    };

}

export default ArmorService;