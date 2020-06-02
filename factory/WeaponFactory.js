"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conf_1 = require("../conf");
const Model_1 = __importDefault(require("../libs/Model"));
const Weapon_1 = __importDefault(require("../models/Weapon"));
const AccessoryFactory_1 = __importDefault(require("./AccessoryFactory"));
class WeaponFactory {
    static create(obj) {
        const weapon = new Weapon_1.default(obj.price, obj.name, obj.model_id, obj.damage);
        weapon.setId(obj.id);
        return weapon;
    }
    static createNew(info, price, name, model_id, damage) {
        const weapon = new Weapon_1.default(price, name, model_id, damage);
        weapon.setId(info.insertId);
        return weapon;
    }
    static addAccToWea(arr) {
        return __awaiter(this, void 0, void 0, function* () {
            var objArr = [];
            for (let i = 0; i < arr.length; i++) {
                let weapon = WeaponFactory.create(arr[i]);
                const query = `SELECT * from ${conf_1.bd}.accessorys WHERE id IN (SELECT accessorys_id from ${conf_1.bd}.assembler WHERE weapons_id = ${weapon.id})`;
                let result = yield Model_1.default.execQuery(query);
                for (let c = 0; c < result.length; c++) {
                    weapon.setAccessory(AccessoryFactory_1.default.Create(result[c]));
                }
                objArr.push(weapon);
            }
            return objArr;
        });
    }
}
exports.default = WeaponFactory;
