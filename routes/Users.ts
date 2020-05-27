import express from "express";
import * as UserController from "../controllers/UserController";

        const router = express.Router();
        router.route('/')
            router.post('/create', UserController.createUser),
            router.get('/all', UserController.users)
            router.get('/id', UserController.getById),
            router.get('/clan', UserController.getByClan),
            router.get('/rank', UserController.getByRank)
            


module.exports = router;
