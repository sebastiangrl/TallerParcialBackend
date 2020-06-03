"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const conf_1 = require("../conf");
let Model = /** @class */ (() => {
    class Model {
        constructor() { }
        static getConnection() {
            if (!Model.instance) {
                Model.instance = new Model();
            }
            return Model.instance;
        }
        static execQuery(query) {
            let result = new Promise((resolve, reject) => {
                Model.dbc.query(query, (err, rows, fields) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(rows);
                });
            });
            return result;
        }
        static select(table, where) {
            Model.getConnection();
            const query = `SELECT * from ${conf_1.bd}.${table} ${where} `;
            const result = this.execQuery(query);
            return result;
        }
        static create(table, values) {
            Model.getConnection();
            const query = `INSERT INTO ${conf_1.bd}.${table} ${values} `;
            const result = this.execQuery(query);
            return result;
        }
        static delete(table, id) {
            Model.getConnection();
            const query = `DELETE FROM ${conf_1.bd}.${table} WHERE id = ${id}`;
            const result = this.execQuery(query);
            return result;
        }
    }
    Model.dbc = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: ''
    });
    return Model;
})();
exports.default = Model;
