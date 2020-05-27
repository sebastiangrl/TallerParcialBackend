import express from "express";
import * as AccessoryController from "../controllers/AccesoryController";

        const router = express.Router();
        router.route('/')
            router.post('/create', AccessoryController.createAccessory),
            router.get('/all', AccessoryController.accessories)
            router.get('/type', AccessoryController.getByType),
            router.get('/price', AccessoryController.getByPrice),
            router.get('/level', AccessoryController.getByLevel)
            
module.exports = router;
