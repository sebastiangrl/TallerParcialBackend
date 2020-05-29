import express from "express";
import * as UserController from "../controllers/UserController";
import Policies from "../sso/Policies";

        const router = express.Router();
        router.route('/')
            router.post('/create', UserController.createUser),
            router.get('/all', UserController.users)
            router.get('/id', UserController.getById),
            router.get('/clan', UserController.getByClan),
            router.get('/rank', UserController.getByRank)
            
module.exports = router;
/*
        const router = express.Router();
        router.route('/')
            router.post('/create', (req, res, next) => {
                let error = false;
                const host: string | undefined = req.headers.host;
                if (!Policies.verifyHost(host, 'localhost:3000')) {
                    error = true;
                    res.status(401).json({ error: true, msg: 'Not an Authorized host' });
                }
                if (!error) {
                    const apiKey = req.header("API-KEY");
                    const apiKeyVerification = Policies.verifyApiKey(apiKey);
                    if (apiKeyVerification.error) {
                        error = true;
                        res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
                    }
                }
                if (!error) {
                    next();
                }
            }, ArmorController.createArmors),
            router.delete('/delete', (req, res, next) => {
                let error = false;
                const host: string | undefined = req.headers.host;
                if (!Policies.verifyHost(host, 'localhost:3000')) {
                    error = true;
                    res.status(401).json({ error: true, msg: 'Not an Authorized host' });
                }
                if (!error) {
                    const apiKey = req.header("API-KEY");
                    const apiKeyVerification = Policies.verifyApiKey(apiKey);
                    if (apiKeyVerification.error) {
                        error = true;
                        res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
                    }
                }
                if (!error) {
                    next();
                }
            }, ArmorController.eliminar),
            router.get('/all', ArmorController.armors),
            router.get('/price', ArmorController.getByPrice),
            router.get('/type', ArmorController.getByType),
            router.get('/protection', ArmorController.getByProtection),
            router.get('/id', ArmorController.getById)
            
            

module.exports = router;