import express from "express";
import bodyParser from "body-parser";
import {conf} from "./conf"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(conf.port, () => {
    console.log(`Node JS Server started at port ${conf.port}`);
})