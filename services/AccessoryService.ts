import Accessory from "../models/Accessory";

const { db } = require('../conf');

module AccessoryService {

    /**
     * Retorna todos los accesorios por tipo
     * 
     * @param type: Type => atributo de Accessory
     */
    export function getByType(type: string): Accessory{
        const accessory = db.accessories.filter((el: Accessory) => {
            return el.getType() == type;
        })
        return accessory;
    };

     /**
      * Retorna todos los accesorios por precio
      * 
      * @param price: Price => atributo de Accessory
      */
     export function getByPrice(min: number, max: number): Accessory {
        const accessory = db.accessories.filter((el: Accessory) => {
            return el.getPrice() == min;//REVISAR
        })
        return accessory;
    }

    /**
      * Retorna todos los accesorios por nivel
      * 
      * @param Level: Level => atributo de Accessory
      */
    export function getByLevel(min: number, max: number): Accessory {
        const accessory = db.accessories.filter((el: Accessory) => {
            return el.getLevel() == min;//REVISAR
        })
        return accessory;
    };
    
    /**
     * 
     */
    export function getAll(): Promise<any> {
        return Accessory.findAll();
    }


}   

export default AccessoryService;