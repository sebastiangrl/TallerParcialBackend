import { crud } from "../interfaces/crud";

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
    
    findOne(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    create(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }


}