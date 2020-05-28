import express from "express";
import bodyParser from "body-parser";
import {port} from "./conf"
<<<<<<< HEAD
import ArmorsRouter from "./routes/Armors";
const app = express();
import * as ArmorController from "./controllers/ArmorController";
=======
var ArmorsRouter = require("./routes/Armors");
var UsersRouter = require("./routes/Users");
var AccessoriesRouter = require("./routes/Accessories");

const app = express();


>>>>>>> Sebas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.status(200).send("Esto es un área libre de llaves");
});

<<<<<<< HEAD
app.route('/armor').get(ArmorController.armors);
app.route('/price').get(ArmorController.getByPrice);
app.route('/type').get(ArmorController.getByType);
=======
//Rutas
app.use('/armor', ArmorsRouter);
app.use('/user', UsersRouter);
app.use('/accessory', AccessoriesRouter);
>>>>>>> Sebas

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
})