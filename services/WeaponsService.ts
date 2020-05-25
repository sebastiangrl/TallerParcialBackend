import Weapon from "../models/Weapon"

module WeaponService{

    export function getByModel(model: string): Promise<any> {

        return new Promise( () =>  {} );
    };
    export function getByKills(): Promise<any> {

        return new Promise( () =>  {} );
    };
    export function customCreate(accessory: Array<any>): Promise<any> {

        return new Promise( () =>  {} );
    };
    export function getByPrice(min: number, max: number): Promise<any> {

        return new Promise( () =>  {} );
    };

}

export default WeaponService;