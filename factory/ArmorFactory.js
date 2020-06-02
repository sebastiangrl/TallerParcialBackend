"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Armor_1 = __importDefault(require("../models/Armor"));
class ArmorFactory {
    static Create(obj) {
        const dato = new Armor_1.default(obj.name, obj.price, obj.weight, obj.mobility, obj.protection, obj.type);
        dato.setId(obj.id);
        return dato;
    }
    static CreateNew(info, name, price, weight, mobility, protection, type) {
        const dato = new Armor_1.default(name, price, weight, mobility, protection, type);
        dato.setId(info.insertId);
        return dato;
    }
}
exports.default = ArmorFactory;
