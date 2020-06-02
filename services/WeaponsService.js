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
const Model_1 = __importDefault(require("../libs/Model"));
const conf_1 = require("../conf");
const WeaponFactory_1 = __importDefault(require("../factory/WeaponFactory"));
var WeaponService;
(function (WeaponService) {
    function getByModel(model) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield validModel(model)) {
                return { "error": true, "ms": `El modelo con id ${model} no existe`, "code": 404 };
            }
            const query = `SELECT * from ${conf_1.bd}.weapons WHERE model_id = ${model}`;
            let result = yield Model_1.default.execQuery(query);
            result = WeaponFactory_1.default.addAccToWea(result);
            return result;
        });
    }
    WeaponService.getByModel = getByModel;
    ;
    //requiere api externa
    function getByKills() {
        const query = `SELECT * from ${conf_1.bd}.weapons`;
        const result = Model_1.default.execQuery(query);
        return result;
    }
    WeaponService.getByKills = getByKills;
    ;
    function create(price, name, model, damage) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO ${conf_1.bd}.weapons (price, name, damage, model_id) VALUES (${price}, '${name}', ${damage}, ${model})`;
            if (yield validModel(model)) {
                return { "error": true, "ms": `El modelo con id ${model} no existe`, "code": 404 };
            }
            const result = yield Model_1.default.execQuery(query);
            const obj = WeaponFactory_1.default.createNew(result, price, name, model, damage);
            return { "error": false, "ms": `El arma ${name} fue creada con exito`, "code": 201 };
        });
    }
    WeaponService.create = create;
    ;
    function customCreate(price, name, model, damage, accessory) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO ${conf_1.bd}.weapons (price, name, damage, model_id) VALUES (${price}, '${name}', ${damage}, ${model})`;
            let queryAcc = "";
            if (yield validModel(model)) {
                return { "error": true, "ms": `El modelo con id ${model} no existe`, "code": 404 };
            }
            for (let i = 0; i < accessory.length; i++) {
                if (yield validAcc(accessory[i])) {
                    return { "error": true, "ms": `El accesorio con id ${accessory[i]} no existe`, "code": 404 };
                }
            }
            const result = yield Model_1.default.execQuery(query);
            for (let c = 0; c < accessory.length; c++) {
                queryAcc = `INSERT INTO ${conf_1.bd}.assembler (weapons_id, accessorys_id) VALUES (${result.insertId}, ${accessory[c]})`;
                yield Model_1.default.execQuery(queryAcc);
            }
            return { "error": false, "ms": `El arma ${name} fue creada con exito`, "code": 201 };
        });
    }
    WeaponService.customCreate = customCreate;
    ;
    function getByPrice(min, max) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT * from ${conf_1.bd}.weapons WHERE price BETWEEN ${min} and ${max}`;
            let result = yield Model_1.default.execQuery(query);
            result = WeaponFactory_1.default.addAccToWea(result);
            return result;
        });
    }
    WeaponService.getByPrice = getByPrice;
    ;
    function modelList() {
        const query = `SELECT * from ${conf_1.bd}.model`;
        const result = Model_1.default.execQuery(query);
        return result;
    }
    WeaponService.modelList = modelList;
    ;
    function eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield validWeapon(id)) {
                return { "error": true, "ms": `El arma con id ${id} no existe`, "code": 404 };
            }
            const query = `DELETE FROM ${conf_1.bd}.assembler WHERE weapons_id = ${id}`;
            Model_1.default.execQuery(query);
            const weapon = Model_1.default.delete("weapons", id);
            return weapon;
        });
    }
    WeaponService.eliminar = eliminar;
    ;
    function validAcc(ida) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT id from ${conf_1.bd}.accessorys where id = ${ida}`;
            let max = yield Model_1.default.execQuery(query);
            try {
                return (max[0].id == ida) ? false : true;
            }
            catch (error) {
                return true;
            }
        });
    }
    function validWeapon(ida) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT id from ${conf_1.bd}.weapons where id = ${ida}`;
            let max = yield Model_1.default.execQuery(query);
            try {
                return (max[0].id == ida) ? false : true;
            }
            catch (error) {
                return true;
            }
        });
    }
    function validModel(ida) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT id from ${conf_1.bd}.model where id = ${ida}`;
            let max = yield Model_1.default.execQuery(query);
            try {
                return (max[0].id == ida) ? false : true;
            }
            catch (error) {
                return true;
            }
        });
    }
})(WeaponService || (WeaponService = {}));
exports.default = WeaponService;
