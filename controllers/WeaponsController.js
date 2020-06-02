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
exports.eliminar = exports.modelList = exports.getByPrice = exports.create = exports.customCreate = exports.getByKills = exports.getByModel = void 0;
const WeaponsService_1 = __importDefault(require("../services/WeaponsService"));
function getByModel(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const weapon = yield WeaponsService_1.default.getByModel(req.body.model);
        res.status(200).json(weapon);
    });
}
exports.getByModel = getByModel;
;
// requiere api amiga.
function getByKills(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const weapon = yield WeaponsService_1.default.getByKills();
        res.status(200).json(weapon);
    });
}
exports.getByKills = getByKills;
;
function customCreate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const weapon = yield WeaponsService_1.default.customCreate(req.body.price, req.body.name, req.body.model, req.body.damage, req.body.accessory);
        res.status(weapon.code).json(weapon);
    });
}
exports.customCreate = customCreate;
;
function create(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const weapon = yield WeaponsService_1.default.create(req.body.price, req.body.name, req.body.model, req.body.damage);
        res.status(weapon.code).json(weapon);
    });
}
exports.create = create;
;
function getByPrice(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const weapon = yield WeaponsService_1.default.getByPrice(req.body.min, req.body.max);
        res.status(200).json(weapon);
    });
}
exports.getByPrice = getByPrice;
;
function modelList(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = yield WeaponsService_1.default.modelList();
        res.status(200).json(model);
    });
}
exports.modelList = modelList;
;
function eliminar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const model = yield WeaponsService_1.default.eliminar(req.body.id);
        res.status(200).json(model);
    });
}
exports.eliminar = eliminar;
;
