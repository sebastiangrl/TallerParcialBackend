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
const ArmorFactory_1 = __importDefault(require("../factory/ArmorFactory"));
var ArmorService;
(function (ArmorService) {
    //CRUD
    function create(name, price, weight, mobility, protection, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `INSERT INTO ${conf_1.bd}.armor (name, price, weight, mobility, protection, type_id) VALUES ('${name}', ${price}, ${weight}, ${mobility}, ${protection}, ${type})`;
            let result = yield Model_1.default.execQuery(query);
            const armor = ArmorFactory_1.default.CreateNew(result, name, price, weight, mobility, protection, type);
            return { "error": false, "ms": `La armadura ${name} fue creada con exito`, "code": 201 };
        });
    }
    ArmorService.create = create;
    ;
    function update(id, name, price, weight, mobility, protection, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE ${conf_1.bd}.armor SET name = '${name}', price = ${price}, weight = ${weight}, mobility = ${mobility}, protection = ${protection}, type_id = ${type} WHERE id = ${id}`;
            yield Model_1.default.execQuery(query);
            return { "error": false, "ms": `La armadura con id ${id} fue actualizada con exito`, "code": 200 };
        });
    }
    ArmorService.update = update;
    ;
    function getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("armor", `WHERE id = ${id}`);
            const result = ArmorFactory_1.default.createObject(query);
            return result;
        });
    }
    ArmorService.getById = getById;
    ;
    function eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Model_1.default.delete("armor", id);
            return { "error": false, "ms": `La armadura con id ${id} fue eliminado con exito`, "code": 200 };
        });
    }
    ArmorService.eliminar = eliminar;
    ;
    //GETS
    function getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("armor", "");
            const result = ArmorFactory_1.default.createObject(query);
            return result;
        });
    }
    ArmorService.getAll = getAll;
    ;
    function getByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("armor", `WHERE type_id = ${type}`);
            const result = ArmorFactory_1.default.createObject(query);
            return result;
        });
    }
    ArmorService.getByType = getByType;
    ;
    function getByProtection(min, max) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("armor", `WHERE protection BETWEEN ${min} and ${max}`);
            const result = ArmorFactory_1.default.createObject(query);
            return result;
        });
    }
    ArmorService.getByProtection = getByProtection;
    ;
    function getByPrice(min, max) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("armor", `WHERE price BETWEEN ${min} and ${max}`);
            const result = ArmorFactory_1.default.createObject(query);
            return result;
        });
    }
    ArmorService.getByPrice = getByPrice;
    ;
})(ArmorService || (ArmorService = {}));
exports.default = ArmorService;
