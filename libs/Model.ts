const mysql = require('mysql');

export default class Model {
    static dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    }); 

    private constructor() {}

    static execQuery(query: string) {
        let result = new Promise((resolve, reject) => {
            Model.dbc.query(query, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });

        return result;
    }

    getConnection(){

    }
}