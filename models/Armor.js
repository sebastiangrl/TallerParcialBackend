"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("../libs/Model"));
const conf_1 = require("../conf");
class Armor {
    constructor(name, price, weight, mobility, protection, type) {
        this.id = null;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.mobility = mobility;
        this.protection = protection;
        this.type = type;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getWeight() {
        return this.weight;
    }
    getMobility() {
        return this.mobility;
    }
    getProtection() {
        return this.protection;
    }
    getType() {
        return this.type;
    }
    setId(id) {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
    setWeight(weight) {
        this.weight = weight;
    }
    setMobility(mobility) {
        this.mobility = mobility;
    }
    setProtection(protection) {
        this.protection = protection;
    }
    setType(type) {
        this.type = type;
    }
    read(id) {
        const query = `SELECT * from ${conf_1.bd}.armor WHERE id = ${id}`;
        const result = Model_1.default.execQuery(query);
        return result;
    }
    create() {
        const query = `INSERT INTO ${conf_1.bd}.armor (name, price, weight, mobility, protection, type_id) VALUES ('${this.name}', ${this.price}, ${this.weight}, ${this.mobility}, ${this.protection}, ${this.type})`;
        const result = Model_1.default.execQuery(query);
        return result;
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}
exports.default = Armor;
