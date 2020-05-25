import Accessory from "../models/Accessory";

module AccessoryService {

    export function getByType(type: string): Promise<any> {

        return new Promise(()=>{});
    };

    export function getByLevel(min: number, max: number): Promise<any> {

        return new Promise(()=>{});
    };
    
    export function getAll(): Promise<any> {

        return new Promise(()=>{});
    }; 

    export function getByPrice(min: number, max: number): Promise<any> {

        return  new Promise(()=>{});
    };

}   

export default AccessoryService;