import express from "express";
import bodyParser from "body-parser";
import {port} from "./conf"
import ArmorsRouter from "./routes/Armors";
const app = express();
import * as ArmorController from "./controllers/ArmorController";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.status(200).send("Esto es un área libre de llaves");
});

app.route('/armor').get(ArmorController.armors);

app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
})