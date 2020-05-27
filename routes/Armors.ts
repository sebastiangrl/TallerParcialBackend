import express from "express";
import * as ArmorController from "../controllers/ArmorController";

        const router = express.Router();
        router.route('/')
            router.post('/create', ArmorController.createArmors),
            router.get('/all', ArmorController.armors),
            router.get('/price', ArmorController.getByPrice),
            router.get('/type', ArmorController.getByType),
            router.get('/type', ArmorController.getByProtection)
            


module.exports = router;
