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
Object.defineProperty(exports, "__esModule", { value: true });
var ArmyService;
(function (ArmyService) {
    const WeaponKey = "368ea6bbba3116e0906aa85cb68dda616f966a6c551254305aa19ba82acaabb158405b5ea112554512857600963bce20ea53e7b937ef777739f6abc68c9ea6ce";
    const fetch = require("node-fetch");
    function getByKills() {
        return __awaiter(this, void 0, void 0, function* () {
            return fetch('http://api.backendarmy.com/weapons_get_kills_10')
                .then((response) => response.json())
                .then((data) => {
                return data;
            })
                .catch(Error);
        });
    }
    ArmyService.getByKills = getByKills;
    function getByRank(rank) {
        return __awaiter(this, void 0, void 0, function* () {
            const fetch = require("node-fetch");
            return fetch(`http://api.backendarmy.com/soldiers_get_rank/${rank}`)
                .then((response) => response.json())
                .then((data) => {
                return data;
            })
                .catch(Error);
        });
    }
    ArmyService.getByRank = getByRank;
})(ArmyService || (ArmyService = {}));
exports.default = ArmyService;
