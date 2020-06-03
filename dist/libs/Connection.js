"use strict";
const mysql = require('mysql');
class Connection {
    constructor() {
        this.dbc = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: ''
        });
    }
    static getConnection() {
        if (!Connection.instance) {
            Connection.instance = new Connection();
        }
        return Connection.instance;
    }
    execQuery(query) {
        let result = new Promise((resolve, reject) => {
            this.dbc.query(query, (err, rows, fields) => {
                if (err) {
                    reject(err);
                }
                resolve(rows);
            });
        });
        return result;
    }
}
