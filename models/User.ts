import { ModelI } from "../interfaces/ModelI";
import Model from "../libs/Model";

export default class User extends Model implements ModelI{

    id: number  | null = null;
    username: string;
    clan: string;
    password: string;

    constructor( username: string, clan: string, password: string ){
        super();
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

    static findAll() {
        const query = 'SELECT * from rest.god';
        const result = Model.execQuery(query);
        return result;
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