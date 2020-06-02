import { crud } from "../interfaces/crud";
import Model from "../libs/Model";
import { UserInterface } from "../interfaces/UserInterface";

export default class User implements crud, UserInterface{

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
        const query = Model.create("users",`(username, clan, password) VALUES ('${this.username}', '${this.clan}', '${this.password}')`);
        return query;
    }

    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }


}