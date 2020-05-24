import Accessory from "../models/Accessory";

module AccessoryService {

    export function getByType(type: string): Promise<any>{

    };

    export function getByLevel(min: number, max: number): Promise<any>{

    };
    
    export function getAll(): Promise<any>  {

    }; 

    export function getByPrice(min: number, max: number): Promise<any> {

    };

}   

export default AccessoryService;