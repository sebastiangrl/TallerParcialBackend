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
const User_1 = __importDefault(require("../models/User"));
const Model_1 = __importDefault(require("../libs/Model"));
var UserService;
(function (UserService) {
    //CRUD
    function create(username, clan, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new User_1.default(username, clan, password);
            const query = yield user.create();
            return query;
        });
    }
    UserService.create = create;
    ;
    //GETS
    function getAll() {
        const query = Model_1.default.select("users", "");
        return query;
    }
    UserService.getAll = getAll;
    ;
    function getById(id) {
        const query = Model_1.default.select("users", `WHERE id = ${id}`);
        return query;
    }
    UserService.getById = getById;
    ;
    //requiere api externa
    function getByRank(id) {
        const query = Model_1.default.select("users", `WHERE id = ${id}`);
        return query;
    }
    UserService.getByRank = getByRank;
    ;
    function getByClan(clan) {
        const query = Model_1.default.select("users", `WHERE clan LIKE '%${clan}%'`);
        return query;
    }
    UserService.getByClan = getByClan;
    ;
})(UserService || (UserService = {}));
exports.default = UserService;
