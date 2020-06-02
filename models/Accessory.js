"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("../libs/Model"));
class Accessory {
    constructor(name, price, damage, precision, scope, cadence, mobility, control, level, type) {
        this.id = null;
        this.name = name;
        this.price = price;
        this.damage = damage;
        this.precision = precision;
        this.scope = scope;
        this.cadence = cadence;
        this.mobility = mobility;
        this.control = control;
        this.level = level;
        this.type = type;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getPrice() {
        return this.price;
    }
    getPrecision() {
        return this.precision;
    }
    getScope() {
        return this.scope;
    }
    getCadence() {
        return this.cadence;
    }
    getMobility() {
        return this.mobility;
    }
    getControl() {
        return this.control;
    }
    getLevel() {
        return this.level;
    }
    getType() {
        return this.type;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setDamage(damage) {
        this.damage = damage;
    }
    setPrice(price) {
        this.price = price;
    }
    setPrecision(precision) {
        this.precision = precision;
    }
    setScope(scope) {
        this.scope = scope;
    }
    setCadence(cadence) {
        this.cadence = cadence;
    }
    setMobility(mobility) {
        this.mobility = mobility;
    }
    setControl(control) {
        this.control = control;
    }
    setLevel(level) {
        this.level = level;
    }
    setType(type) {
        this.type = type;
    }
    read() {
        throw new Error("Method not implemented.");
    }
    create() {
        const query = Model_1.default.create("accessorys", `(name, price, damage, precision, scope, cadence, mobility, control, level, type) VALUES ('${this.name}', ${this.price}, ${this.damage}, ${this.precision}, ${this.scope}, ${this.cadence}, ${this.mobility}, ${this.control}, ${this.level}, '${this.type}')`);
        return query;
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}
exports.default = Accessory;
