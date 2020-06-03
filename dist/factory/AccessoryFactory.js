"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Accessory_1 = __importDefault(require("../models/Accessory"));
class AccessoryFactory {
    static Create(obj) {
        const Acc = new Accessory_1.default(obj.name, obj.price, obj.damage, obj.precision, obj.scope, obj.cadence, obj.mobility, obj.control, obj.level, obj.type_id);
        Acc.setId(obj.id);
        return Acc;
    }
    static CreateNew(info, name, price, damage, precision, scope, cadence, mobility, control, level, type) {
        const Acc = new Accessory_1.default(name, price, damage, precision, scope, cadence, mobility, control, level, type);
        Acc.setId(info.insertId);
        return Acc;
    }
    static createObject(obj) {
        var objArr = [];
        for (let i = 0; i < obj.length; i++) {
            objArr.push(AccessoryFactory.Create(obj[i]));
        }
        return objArr;
    }
}
exports.default = AccessoryFactory;
