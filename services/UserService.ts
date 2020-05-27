import User from "../models/User";
import Model from "../libs/Model";
import { bd } from "../conf";

module UserService{

    //CRUD
    export async function create(username: string, clan: string, password: string): Promise<any> {
        const user = new User(username, clan, password);
        const query = await user.create();
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