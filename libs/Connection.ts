const mysql = require('mysql');

class Connection {
    private static instance: Connection;
    private dbc: any = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    });    

    private constructor() { }

    static getConnection(): Connection {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }

        return Connection.instance;
    }

    public execQuery(query: string) {
        let result = new Promise((resolve, reject) => {
            this.dbc.query(query, (err: any, rows: any, fields: any) => {
                if (err) { reject(err); }
                resolve(rows);
            });
        });

        return result;
    }
}