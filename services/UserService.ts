import User from "../models/User";
import Model from "../libs/Model";
import { bd } from "../conf";

module UserService{

    export function getById(id: number): Promise<any> {
        const query = `SELECT * from ${bd}.users WHERE id = ${id}`;
        const result = Model.execQuery(query);
        return result;
    };

    //requiee api externa
    export function UserRank(id: number): Promise<any> {
        const query = `SELECT * from ${bd}.users WHERE id = ${id}`;
        const result = Model.execQuery(query);
        return result;
    };

    export function getAll(): Promise<any> {
        const query = `SELECT * from ${bd}.users`;
        const result = Model.execQuery(query);
        return result;
    };

    export function getByClan(clan: string): Promise<any> {
        const query = `SELECT * from ${bd}.users WHERE clan LIKE '%${clan}%'`;
        const result = Model.execQuery(query);
        return result;
    };


}

export default UserService;