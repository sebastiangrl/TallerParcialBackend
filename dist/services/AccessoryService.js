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
const Accessory_1 = __importDefault(require("../models/Accessory"));
const Model_1 = __importDefault(require("../libs/Model"));
var AccessoryService;
(function (AccessoryService) {
    //CRUD
    function create(name, price, damage, precision, scope, cadence, mobility, control, level, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const accessory = new Accessory_1.default(name, price, damage, precision, scope, cadence, mobility, control, level, type);
            const query = yield accessory.create();
            return query;
        });
    }
    AccessoryService.create = create;
    ;
    //GETS
    function getAll() {
        const query = Model_1.default.select("accessorys", "");
        return query;
    }
    AccessoryService.getAll = getAll;
    ;
    function getByType(type) {
        const query = Model_1.default.select("accessorys", `WHERE type LIKE '%${type}%'`);
        return query;
    }
    AccessoryService.getByType = getByType;
    ;
    function getByPrice(min, max) {
        const query = Model_1.default.select("accessorys", `WHERE price BETWEEN ${min} and ${max}`);
        return query;
    }
    AccessoryService.getByPrice = getByPrice;
    ;
    function getByLevel(level) {
        const query = Model_1.default.select("accessorys", `WHERE level LIKE '%${level}%'`);
        return query;
    }
    AccessoryService.getByLevel = getByLevel;
    ;
})(AccessoryService || (AccessoryService = {}));
exports.default = AccessoryService;
