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
exports.getByType = exports.getByProtection = exports.getByPrice = exports.getById = exports.armors = exports.eliminar = exports.update = exports.createArmors = void 0;
const ArmorService_1 = __importDefault(require("../services/ArmorService"));
function createArmors(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield ArmorService_1.default.create(req.body.name, req.body.price, req.body.weight, req.body.mobility, req.body.protection, req.body.type_id);
        res.status(200).json(armor);
    });
}
exports.createArmors = createArmors;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield ArmorService_1.default.update(req.body.id, req.body.name, req.body.price, req.body.weight, req.body.mobility, req.body.protection, req.body.type);
        res.status(200).json(armor);
    });
}
exports.update = update;
function eliminar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield ArmorService_1.default.eliminar(req.body.id);
        res.status(200).json(armor);
    });
}
exports.eliminar = eliminar;
function armors(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield ArmorService_1.default.getAll();
        res.status(200).json(armor);
    });
}
exports.armors = armors;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield ArmorService_1.default.getById(req.body.id);
        res.status(200).json(armor);
    });
}
exports.getById = getById;
function getByPrice(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield ArmorService_1.default.getByPrice(req.body.min, req.body.max);
        res.status(200).json(armor);
    });
}
exports.getByPrice = getByPrice;
function getByProtection(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield ArmorService_1.default.getByProtection(req.body.min, req.body.max);
        res.status(200).json(armor);
    });
}
exports.getByProtection = getByProtection;
function getByType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const armor = yield ArmorService_1.default.getByType(req.body.type_id);
        res.status(200).json(armor);
    });
}
exports.getByType = getByType;
