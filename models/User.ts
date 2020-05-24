
export default class User {

    private id: number;
    private name: string;
    private clan: string;
    private password: number;

    constructor(id: number, name: string, clan: string, password: number) {
        //super();
        this.id = id;
        this.name = name;
        this.clan = clan;
        this.password = password;
    }


    getId() {
        return this.id;
    }

    setId(value: number) {
        this.id = value;
    }

    getName() {
        return this.name;
    }

    setName(value: string) {
        this.name = value;
    }

    getClan() {
        return this.clan;
    }

    setClan(value: string) {
        this.clan = value;
    }

    getPassword() {
        return this.password;
    }

    setPassword(value: number) {
        this.password = value;
    }

}