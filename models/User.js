"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("../libs/Model"));
class User {
    constructor(username, clan, password) {
        this.id = null;
        this.username = username;
        this.clan = clan;
        this.password = password;
    }
    getId() {
        return this.id;
    }
    getUsername() {
        return this.username;
    }
    getClan() {
        return this.clan;
    }
    getPassword() {
        return this.password;
    }
    setId(id) {
        this.id = id;
    }
    setUsername(username) {
        this.username = username;
    }
    setClan(clan) {
        this.clan = clan;
    }
    setPassword(password) {
        this.password = password;
    }
    read() {
        throw new Error("Method not implemented.");
    }
    create() {
        const query = Model_1.default.create("users", `(username, clan, password) VALUES ('${this.username}', '${this.clan}', '${this.password}')`);
        return query;
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}
exports.default = User;
