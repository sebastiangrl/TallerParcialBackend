import { crud } from "../interfaces/crud";
<<<<<<< HEAD
=======
import Model from "../libs/Model";
>>>>>>> Sebas

export default class User implements crud{

    id: number  | null = null;
    username: string;
    clan: string;
    password: string;

    constructor( username: string, clan: string, password: string ){
        this.username = username;
        this.clan = clan;
        this.password = password;
    }

    getId(){
        return this.id;
    }

    getUsername(){
        return this.username;
    }

    getClan(){
        return this.clan;
    }

    getPassword(){
        return this.password;
    }

    setId( id: number ){
        this.id = id;
    }

    setUsername( username: string ){
        this.username = username;
    }

    setClan( clan: string ){
        this.clan = clan;
    }

    setPassword( password: string ){
        this.password = password;
    }
    
    read(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    create(): Promise<any> {
<<<<<<< HEAD
        throw new Error("Method not implemented.");
    }
=======
        const query = Model.create("users",`(username, clan, password) VALUES ('${this.username}', '${this.clan}', '${this.password}')`);
        return query;
    }

>>>>>>> Sebas
    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }


}