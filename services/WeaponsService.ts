import Weapon from "../models/Weapon"
import Model from "../libs/Model";
import { bd } from "../conf";

module WeaponService{

    export function getByModel(model: string): Promise<any> {
        const query = `SELECT * from ${bd}.weapons WHERE model_nombre LIKE '%${model}%'`;
        const result = Model.execQuery(query);
        return result;
    };

    //requiere api externa
    export function getByKills(): Promise<any> {
        const query = `SELECT * from ${bd}.weapons`;
        const result = Model.execQuery(query);
        return result;
    };
    export function customCreate(accessory: any) {
        const query = `INSERT INTO ${bd}.weapons (name, damage, model_nombre) VALUES ('${accessory.name}', ${accessory.damage}, ${accessory.model})`;
        Model.execQuery(query);
        const id = getId(accessory.name);
        addAccToWea(id, accessory.accessorys);
    };
    export function getByPrice(min: number, max: number): Promise<any> {
        const query = `SELECT * from ${bd}.weapons WHERE price BETWEEN ${min} and ${max}`;
        const result = Model.execQuery(query);
        return result;
    };

    //arreglar
    function getId(name: string): number{
        const query = `SELECT id from ${bd}.weapons WHERE name = '${name}'`;
<<<<<<< HEAD
        const result = Model.execQuery(query)[0]['id'];
        return result;
=======
        //const result =  Model.execQuery(query)[0]['id'];
        return 0;
>>>>>>> Sebas
    }

    function addAccToWea(id: number, accessorys: any){
        var query: string = "";
        for( let acc in accessorys.id){
            query += `INSERT INTO ${bd}.assembler (weapons_id, accessorys_id) VALUES (${id} , ${acc});`;
        }
        Model.execQuery(query);
    }


}

export default WeaponService;