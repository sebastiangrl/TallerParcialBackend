"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Weapon {
    constructor(name, model, accessory, damage) {
        this.id = null;
        this.name = name;
        this.model = model;
        this.accessory = accessory;
        this.damage = damage;
    }
    getId() {
        return this.id;
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
