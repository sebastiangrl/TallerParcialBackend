"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Weapon {
    constructor(price, name, model, damage) {
        this.id = null;
        this.accessory = [];
        this.price = price;
        this.name = name;
        this.model = model;
        this.damage = damage;
    }
    getId() {
        return this.id;
    }
    getprice() {
        return this.price;
    }
    getName() {
        return this.name;
    }
    getModel() {
        return this.model;
    }
    getAccessory() {
        return this.accessory;
    }
    getDamage() {
        return this.damage;
    }
    setId(id) {
        this.id = id;
    }
    setPrice(price) {
        this.price = price;
    }
    setName(name) {
        this.name = name;
    }
    setModel(model) {
        this.model = model;
    }
    setAccessory(accessory) {
        this.accessory.push(accessory);
    }
    setDamage(damage) {
        this.damage = damage;
    }
    read() {
        throw new Error("Method not implemented.");
    }
    create() {
        throw new Error("Method not implemented.");
    }
    update() {
        throw new Error("Method not implemented.");
    }
    delete() {
        throw new Error("Method not implemented.");
    }
}
exports.default = Weapon;
