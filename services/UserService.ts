import User from "../models/User";
//import UserInterface from "../interfaces/UserInterface";

const { db } = require('../conf');

module UserService {

    /**
    * Retorna todos los usuarios por id
    * 
    * @param id: Id => atributo de User
    */
    export function getById(id: number): User {
        const user = db.users.filter((el: User) => {
            return el.getId() == id;
        })
        return user;
    };

    /**
     * 
     */
    export function getAll(): Promise<any> {
        return User.findAll();
    }

    /**
      * Retorna todos los usuarios por clan
      * 
      * @param clan: Clan => atributo de User
      */
    export function getByClan(clan: string): User {
        const user = db.users.filter((el: User) => {
            return el.getClan() == clan;
        })
        return user;
    };

    /**
      * Retorna todos los usuarios por rango
      * 
      * @param rank: Rank => atributo de User
      */
    export function getByRank(rank: string): User {
        const user = db.users.filter((el: User) => {
            return el.getUsername() == rank;
        })
        return user;
    };



}

export default UserService;