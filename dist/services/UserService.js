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
const UserFactory_1 = __importDefault(require("../factory/UserFactory"));
var UserService;
(function (UserService) {
    //CRUD
    function create(username, clan, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield validName(username)) {
                return { "error": true, "ms": `El nombre de usuario ${username} no esta disponible`, "code": 400 };
            }
            const query = `INSERT INTO ${conf_1.bd}.users (username, clan, password) VALUES ('${username}', '${clan}', '${password}')`;
            let result = yield Model_1.default.execQuery(query);
            const user = UserFactory_1.default.CreateNew(result, username, clan, password);
            return { "error": false, "ms": `El usuario ${username} fue creada con exito`, "code": 201 };
        });
    }
    UserService.create = create;
    ;
    function update(id, username, clan, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `UPDATE ${conf_1.bd}.users SET username = '${username}', clan = '${clan}', password = '${password}' WHERE id = ${id}`;
            yield Model_1.default.execQuery(query);
            return { "error": false, "ms": `El usuario con id ${id} fue actualizada con exito`, "code": 200 };
        });
    }
    UserService.update = update;
    ;
    function eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Model_1.default.delete("users", id);
            return { "error": false, "ms": `El usuario con id ${id} fue eliminado con exito`, "code": 200 };
        });
    }
    UserService.eliminar = eliminar;
    ;
    //GETS
    function getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("users", "");
            const result = UserFactory_1.default.createObject(query);
            return result;
        });
    }
    UserService.getAll = getAll;
    ;
    function getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("users", `WHERE id = ${id}`);
            const result = UserFactory_1.default.createObject(query);
            return result;
        });
    }
    UserService.getById = getById;
    ;
    //requiere api externa
    function getByRank(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("users", `WHERE id = ${id}`);
            const result = UserFactory_1.default.createObject(query);
            return result;
        });
    }
    UserService.getByRank = getByRank;
    ;
    function getByClan(clan) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = yield Model_1.default.select("users", `WHERE clan LIKE '%${clan}%'`);
            const result = UserFactory_1.default.createObject(query);
            return result;
        });
    }
    UserService.getByClan = getByClan;
    ;
    function validName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `SELECT username from ${conf_1.bd}.users where username = '${name}'`;
            let max = yield Model_1.default.execQuery(query);
            try {
                return (max[0].username == name) ? true : false;
            }
            catch (error) {
                return false;
            }
        });
    }
})(UserService || (UserService = {}));
exports.default = UserService;
