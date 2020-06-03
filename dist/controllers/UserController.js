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
exports.getById = exports.getByClan = exports.getByRank = exports.users = exports.eliminar = exports.update = exports.createUser = void 0;
const UserService_1 = __importDefault(require("../services/UserService"));
const ArmyService_1 = __importDefault(require("../services/ArmyService"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield UserService_1.default.create(req.body.username, req.body.clan, req.body.password);
        res.status(200).json(user);
    });
}
exports.createUser = createUser;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield UserService_1.default.update(req.body.id, req.body.username, req.body.clan, req.body.password);
        res.status(200).json(accessory);
    });
}
exports.update = update;
function eliminar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield UserService_1.default.eliminar(req.body.id);
        res.status(200).json(armor);
    });
}
exports.eliminar = eliminar;
function users(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield UserService_1.default.getAll();
        res.status(200).json(user);
    });
}
exports.users = users;
//consume api amiga.
function getByRank(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield ArmyService_1.default.getByRank(req.body.rank);
        res.status(200).json(user);
    });
}
exports.getByRank = getByRank;
function getByClan(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield UserService_1.default.getByClan(req.body.clan);
        res.status(200).json(user);
    });
}
exports.getByClan = getByClan;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield UserService_1.default.getById(req.body.id);
        res.status(200).json(user);
    });
}
exports.getById = getById;
