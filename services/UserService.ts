import User from "../models/User";
import Model from "../libs/Model";
import { bd } from "../conf";
import UserFactory from "../factory/UserFactory";

module UserService{

    //CRUD
    export async function create(username: string, clan: string, password: string): Promise<any> {
        if(await validName(username)){
            return {"error": true, "ms":`El nombre de usuario ${username} no esta disponible`, "code":400};
        }
        const query = `INSERT INTO ${bd}.users (username, clan, password) VALUES ('${username}', '${clan}', '${password}')`;
        let result:any = await Model.execQuery(query);
        const user = UserFactory.CreateNew(result ,username, clan, password);
        return { "error": false, "ms":`El usuario ${username} fue creada con exito`, "code":201 };
    };

    //GETS
    export async function getAll(): Promise<any> {
        const query = await Model.select("users","");
        const result = UserFactory.createObject(query);
        return result;
    };

    export async function getById(id: number): Promise<any> {
        const query = await Model.select("users",`WHERE id = ${id}`);
        const result = UserFactory.createObject(query);
        return result;
    };

    //requiere api externa
    export async function getByRank(id: number): Promise<any> {
        const query = await Model.select("users",`WHERE id = ${id}`);
        const result = UserFactory.createObject(query);
        return result;
    };

    export async function getByClan(clan: string): Promise<any> {
        const query = await Model.select("users",`WHERE clan LIKE '%${clan}%'`);
        const result = UserFactory.createObject(query);
        return result;
    };

    async function validName(name: string){
        const query = `SELECT username from ${bd}.users where username = '${name}'`;
        let max: any = await Model.execQuery(query);
        try{
        return (max[0].username == name)? true: false;
        }catch(error){
            return false;
        }
    }


}

export default UserService;