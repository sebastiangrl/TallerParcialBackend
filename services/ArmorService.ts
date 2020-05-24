import Armor from "../models/Armor";

const { db } = require('../conf');

module ArmorService{

     /**
     * Retorna todas las armaduras por tipo
     * 
     * @param type: Type => atributo de Accessory
     */
    export function getByType(type: string): Armor{
        const armor = db.armors.filter((el: Armor) => {
            return el.getType() == type;
        })
        return armor;
    };

     /**
      * Retorna las armaduras en un rango de precio
      * 
      * @param min: Min => valor de precio minimo
      * @param max: Max => valor de precio maximo 
      */
     export function getByPrice(min: number, max: number): Armor {
        const armor = db.armors.filter((el: Armor) => {
            return el.getPrice() == min; //REVISAR
        })
        return armor;
    }

    /**
      * Retorna las armaduras en un rango de protecciones
      * 
      * @param min: Min => valor de proteccion minimo
      * @param max: Max => valor de proteccion maximo 
      */
     export function getByProtection(min: number, max: number): Armor {
        const armor = db.armors.filter((el: Armor) => {
            return el.getPrice() == min; //REVISAR
        })
        return armor;
    }
    
    /**
     * 
     */
    export function getAll(): Promise<any> {
        return Armor.findAll();
    }

}

export default ArmorService;