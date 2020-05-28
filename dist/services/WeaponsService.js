"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Model_1 = __importDefault(require("../libs/Model"));
const conf_1 = require("../conf");
var WeaponService;
(function (WeaponService) {
    function getByModel(model) {
        const query = `SELECT * from ${conf_1.bd}.weapons WHERE model_nombre LIKE '%${model}%'`;
        const result = Model_1.default.execQuery(query);
        return result;
    }
    WeaponService.getByModel = getByModel;
    ;
    //requiere api externa
    function getByKills() {
        const query = `SELECT * from ${conf_1.bd}.weapons`;
        const result = Model_1.default.execQuery(query);
        return result;
    }
    WeaponService.getByKills = getByKills;
    ;
    function customCreate(accessory) {
        const query = `INSERT INTO ${conf_1.bd}.weapons (name, damage, model_nombre) VALUES ('${accessory.name}', ${accessory.damage}, ${accessory.model})`;
        Model_1.default.execQuery(query);
        const id = getId(accessory.name);
        addAccToWea(id, accessory.accessorys);
    }
    WeaponService.customCreate = customCreate;
    ;
    function getByPrice(min, max) {
        const query = `SELECT * from ${conf_1.bd}.weapons WHERE price BETWEEN ${min} and ${max}`;
        const result = Model_1.default.execQuery(query);
        return result;
    }
    WeaponService.getByPrice = getByPrice;
    ;
    //arreglar
    function getId(name) {
        const query = `SELECT id from ${conf_1.bd}.weapons WHERE name = '${name}'`;
        //const result =  Model.execQuery(query)[0]['id'];
        return 0;
    }
    function addAccToWea(id, accessorys) {
        var query = "";
        for (let acc in accessorys.id) {
            query += `INSERT INTO ${conf_1.bd}.assembler (weapons_id, accessorys_id) VALUES (${id} , ${acc});`;
        }
        Model_1.default.execQuery(query);
    }
})(WeaponService || (WeaponService = {}));
exports.default = WeaponService;
