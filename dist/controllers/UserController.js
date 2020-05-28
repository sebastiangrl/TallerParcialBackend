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
exports.getById = exports.getByClan = exports.getByRank = exports.users = exports.createUser = void 0;
const UserService_1 = __importDefault(require("../services/UserService"));
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield UserService_1.default.create(req.body.username, req.body.clan, req.body.password);
        res.status(200).json(user);
    });
}
exports.createUser = createUser;
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
        const user = yield UserService_1.default.getByRank(req.body.id);
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
