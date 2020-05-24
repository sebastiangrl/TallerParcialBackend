const mysql = require('mysql');

export default class Model {

    static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    }); 
    
    constructor() { }
    
    private execQuery(query: string) {
        let result = new Promise((resolve, reject) => {
            Model.dbc.query(query, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });

        return result;
    }

/*
    static select (table: string, attr: string) {
        const query = `SELECT ${attr} from ${table}`;
        this.execQuery(query);
    }


    static findAll() {
        const query = 'SELECT * from rest.god';
        const result = Model.execQuery(query);
        return result;
    }*/
}
