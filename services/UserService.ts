import User from "../models/User";
import Model from "../libs/Model";

module UserService{

    //CRUD
    export async function create(username: string, clan: string, password: string): Promise<any> {
        const user = new User(username, clan, password);
        const query = await user.create();
        return query;
    };
 
    export function eliminar(id: number): Promise<any> {
        const query = Model.delete("users",id);
        return query;
    };

    export function update(id: number, username: string, clan: string, password: string): Promise<any> {
        const query = Model.update("users",`SET username = '${username}', clan = '${clan}', password = '${password}' `,id);
        return query;
    };

    //GETS
    export function getAll(): Promise<any> {
        const query = Model.select("users","");
        return query;
    };

    export function getById(id: number): Promise<any> {
        const query = Model.select("users",`WHERE id = ${id}`);
        return query;
    };

    //requiere api externa
    export function getByRank(id: number): Promise<any> {
        const query = Model.select("users",`WHERE id = ${id}`);
        return query;
    };

    export function getByClan(clan: string): Promise<any> {
        const query = Model.select("users",`WHERE clan LIKE '%${clan}%'`);
        return query;
    };


}

export default UserService;