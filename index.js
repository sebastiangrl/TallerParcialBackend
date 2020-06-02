"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const conf_1 = require("./conf");
var weaponsRouter = require("./routes/Weapons");
var ArmorsRouter = require("./routes/Armors");
var UsersRouter = require("./routes/Users");
var AccessoriesRouter = require("./routes/Accessories");
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.status(200).send("Esto es un área libre de llaves");
});
//Rutas
app.use('/armor', ArmorsRouter);
app.use('/user', UsersRouter);
app.use('/accessory', AccessoriesRouter);
app.use('/weapon', weaponsRouter);
app.listen(conf_1.port, () => {
    console.log(`Node JS Server started at port ${conf_1.port}`);
});
