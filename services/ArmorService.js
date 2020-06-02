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
const Armor_1 = __importDefault(require("../models/Armor"));
const Model_1 = __importDefault(require("../libs/Model"));
var ArmorService;
(function (ArmorService) {
    //CRUD
    function create(name, price, weight, mobility, protection, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const armor = new Armor_1.default(name, price, weight, mobility, protection, type);
            const query = yield armor.create();
            return query;
        });
    }
    ArmorService.create = create;
    ;
    function update(id, name, price, weight, mobility, protection, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = Model_1.default.update("armor", `SET name = '${name}', price = ${price}, weight = ${weight}, mobility = ${mobility}, protection = ${protection}, type_id = ${type}`, id);
            return query;
        });
    }
    ArmorService.update = update;
    ;
    function getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = Model_1.default.select("armor", `WHERE id = ${id}`);
            return query;
        });
    }
    ArmorService.getById = getById;
    ;
    function eliminar(id) {
        const query = Model_1.default.delete("armor", id);
        return query;
    }
    ArmorService.eliminar = eliminar;
    ;
    //GETS
    function getAll() {
        const query = Model_1.default.select("armor", "");
        return query;
    }
    ArmorService.getAll = getAll;
    ;
    function getByType(type) {
        const query = Model_1.default.select("armor", `WHERE type_id = ${type}`);
        return query;
    }
    ArmorService.getByType = getByType;
    ;
    function getByProtection(min, max) {
        const query = Model_1.default.select("armor", `WHERE protection BETWEEN ${min} and ${max}`);
        return query;
    }
    ArmorService.getByProtection = getByProtection;
    ;
    function getByPrice(min, max) {
        const query = Model_1.default.select("armor", `WHERE price BETWEEN ${min} and ${max}`);
        return query;
    }
    ArmorService.getByPrice = getByPrice;
    ;
})(ArmorService || (ArmorService = {}));
exports.default = ArmorService;
