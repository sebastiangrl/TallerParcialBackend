"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UserFactory {
    static Create(obj) {
        const user = new User_1.default(obj.username, obj.clan, obj.password);
        user.setId(obj.id);
        return user;
    }
    static CreateNew(info, username, clan, password) {
        const user = new User_1.default(username, clan, password);
        user.setId(info.insertId);
        return user;
    }
    static createObject(obj) {
        var objArr = [];
        for (let i = 0; i < obj.length; i++) {
            objArr.push(UserFactory.Create(obj[i]));
        }
        return objArr;
    }
}
exports.default = UserFactory;
