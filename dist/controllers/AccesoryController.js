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
exports.getByLevel = exports.getByPrice = exports.getByType = exports.eliminar = exports.getById = exports.accessories = exports.update = exports.createAccessory = void 0;
const AccessoryService_1 = __importDefault(require("../services/AccessoryService"));
function createAccessory(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield AccessoryService_1.default.create(req.body.name, req.body.price, req.body.damage, req.body.precision, req.body.scope, req.body.cadence, req.body.mobility, req.body.control, req.body.level, req.body.type);
        res.status(200).json(accessory);
    });
}
exports.createAccessory = createAccessory;
function update(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield AccessoryService_1.default.update(req.body.id, req.body.name, req.body.price, req.body.damage, req.body.precision, req.body.scope, req.body.cadence, req.body.mobility, req.body.control, req.body.level, req.body.type);
        res.status(200).json(accessory);
    });
}
exports.update = update;
function accessories(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield AccessoryService_1.default.getAll();
        res.status(200).json(accessory);
    });
}
exports.accessories = accessories;
function getById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield AccessoryService_1.default.getById(req.body.id);
        res.status(200).json(accessory);
    });
}
exports.getById = getById;
function eliminar(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield AccessoryService_1.default.eliminar(req.body.id);
        res.status(200).json(accessory);
    });
}
exports.eliminar = eliminar;
function getByType(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield AccessoryService_1.default.getByType(req.body.type);
        res.status(200).json(accessory);
    });
}
exports.getByType = getByType;
function getByPrice(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield AccessoryService_1.default.getByPrice(req.body.min, req.body.max);
        res.status(200).json(accessory);
    });
}
exports.getByPrice = getByPrice;
function getByLevel(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const accessory = yield AccessoryService_1.default.getByLevel(req.body.level);
        res.status(200).json(accessory);
    });
}
exports.getByLevel = getByLevel;
