import Weapon from "../models/Weapon";

const { db } = require('../conf');

module WeaponsService {

    //Obtener arma por modelo
    export function getByModel(model: string): Weapon {
        const weapon = db.weapon.filter((el: Weapon) => {
            return el.getModel() == model;
        })
        return weapon;
    }

    //Obtener arma por bajas
    //Revisar
    /*export function getByName(name: string): God {
        const god = db.gods.filter((el: God) => {
            return el.name == name;
        })
        return god;
    }*/

    //Arma personalizada
    export async function create(name: string, origin: string): Promise<any> {
        const god = new God(name, origin);
        const response = await god.create();
        if (response) {
            return god;
        }
    }

    //Obtener arma por precio
    export function getByPrice(price: number): Weapon {
        const weapon = db.gods.filter((el: Weapon) => {
            return el.getPrice() == price;
        })
        return weapon;
    }


}

export default WeaponsService;