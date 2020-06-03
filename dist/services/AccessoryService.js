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
const AccessoryFactory_1 = __importDefault(require("../factory/AccessoryFactory"));
const conf_1 = require("../conf");
var AccessoryService;
(function (AccessoryService) {
    //CRUD
    function create(name, price, damage, precision, scope, cadence, mobility, control, level, type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (validType(type)) {
                return { "error": true, "ms": `El tipo con id ${type} no esta disponible parae ste objeto`, "code": 400 };
            }
            const query = `INSERT INTO ${conf_1.bd}.accessorys (name, price, damage, prec, scope, cadence, mobility, control, level, type_id) VALUES ('${name}', ${price}, ${damage}, ${precision}, ${scope}, ${cadence}, ${mobility}, ${control}, ${level}, ${type})`;
            let result = yield Model_1.default.execQuery(query);
            const accessory = AccessoryFactory_1.default.CreateNew(result, name, price, damage, precision, scope, cadence, mobility, control, level, type);
            return { "error": false, "ms": `El accesorio ${name} fue creada con exito`, "code": 201 };
        });
    }
    AccessoryService.create = create;
    ;
    function update(id, name, price, damage, precision, scope, cadence, mobility, control, level, type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (validType(type)) {
                return { "error": true, "ms": `El tipo con id ${type} no esta disponible parae ste objeto`, "code": 400 };
            }
            const query = `UPDATE ${conf_1.bd}.accessorys SET name = '${name}', price = ${price}, damage = ${damage}, prec = ${precision}, scope = ${scope}, cadence = ${cadence}, mobility = ${mobility}, control = ${control}, level = ${level}, type_id = ${type} WHERE id = ${id}`;
            yield Model_1.default.execQuery(query);
            return { "error": false, "ms": `El accesorio con id ${id} fue actualizada con exito`, "code": 200 };
        });
    }
    AccessoryService.update = update;
    ;
    function getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("accessorys", `WHERE d = ${id}`);
            const result = AccessoryFactory_1.default.createObject(query);
            return result;
        });
    }
    AccessoryService.getById = getById;
    ;
    function eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield validAcc(id)) {
                return { "error": true, "ms": `El accesorio con id ${id} no existe`, "code": 404 };
            }
            const query1 = `DELETE FROM ${conf_1.bd}.assembler WHERE accessorys_id = ${id}`;
            Model_1.default.execQuery(query1);
            const query2 = `DELETE FROM ${conf_1.bd}.accessorys WHERE id = ${id}`;
            Model_1.default.execQuery(query2);
            return { "error": false, "ms": `El accesorio ${id} fue eliminado con exito`, "code": 200 };
        });
    }
    AccessoryService.eliminar = eliminar;
    ;
    //GETS
    function getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("accessorys", "");
            const result = AccessoryFactory_1.default.createObject(query);
            return result;
        });
    }
    AccessoryService.getAll = getAll;
    ;
    function getByType(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("accessorys", `WHERE type_id = ${type}`);
            const result = AccessoryFactory_1.default.createObject(query);
            return result;
        });
    }
    AccessoryService.getByType = getByType;
    ;
    function getByPrice(min, max) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("accessorys", `WHERE price BETWEEN ${min} and ${max}`);
            const result = AccessoryFactory_1.default.createObject(query);
            return result;
        });
    }
    AccessoryService.getByPrice = getByPrice;
    ;
    function getByLevel(level) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("accessorys", `WHERE level = ${level}`);
            const result = AccessoryFactory_1.default.createObject(query);
            return result;
        });
    }
    AccessoryService.getByLevel = getByLevel;
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
    function validType(type) {
        return (type > 5 && type < 10) ? false : true;
    }
})(AccessoryService || (AccessoryService = {}));
exports.default = AccessoryService;
