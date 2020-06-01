import express from "express";
import bodyParser from "body-parser";
import {port} from "./conf"
var weaponsRouter = require("./routes/Weapons");
var ArmorsRouter = require("./routes/Armors");
var UsersRouter = require("./routes/Users");
var AccessoriesRouter = require("./routes/Accessories");

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.status(200).send("Esto es un área libre de llaves");
});

//Rutas
app.use('/armor', ArmorsRouter);
app.use('/user', UsersRouter);
app.use('/accessory', AccessoriesRouter);
app.use('/weapon', weaponsRouter);

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
})