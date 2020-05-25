import User from "../models/User";

module UserService{

    export function getById(id: number): Promise<any> {

        return new Promise( () => {} );
    };

    export function UserRank(user: string): Promise<any> {

        return new Promise( () => {} );
    };

    export function getAll(): Promise<any> {

        return new Promise( () => {} );
    };

    export function getByClan(clan: string): Promise<any> {

        return new Promise( () => {} );
    };


}

export default UserService;