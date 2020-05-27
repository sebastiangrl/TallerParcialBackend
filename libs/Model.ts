const mysql = require('mysql');
import { bd } from "../conf";

export default class Model {

    private static instance: Model;

    static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    }); 

    private constructor() {}

    
    static getConnection(): Model {
        if (!Model.instance) {
            Model.instance = new Model();
        }
        return Model.instance;
    }

     static execQuery(query: string) {
        let result = new Promise((resolve, reject) => {
            Model.dbc.query(query, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });

        return result;
    }


    public static select(table: string, where: string ) {
        Model.getConnection();
        const query = `SELECT * from ${bd}.${table} ${where} `;
        const result = this.execQuery(query);
        return result;
    }

    public static create(table: string, values: string) {
        Model.getConnection();
        const query = `INSERT INTO ${bd}.${table} ${values} `;
        const result = this.execQuery(query);
        return result;
    }

    public static delete(table: string, attr: string, values: string) {
        Model.getConnection();
        const query = `DELETE FROM ${bd}.${table} WHERE ${bd}.${table}.${attr}. = ${values}`;
        const result = this.execQuery(query);
        return result;
    }

}