import express from "express";
import bodyParser from "body-parser";
import {port} from "./conf"
var ArmorsRouter = require("./routes/Armors");
var UsersRouter = require("./routes/Users");

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.status(200).send("Esto es un área libre de llaves");
});

//Rutas
app.use('/armor', ArmorsRouter);
app.use('/user', UsersRouter);

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
})