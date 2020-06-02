import express from "express";
import * as AccessoryController from "../controllers/AccesoryController";
import Policies from "../sso/Policies";

        const router = express.Router();
        router.route('/')
            router.post('/create', (req, res, next) => {
                let error = false;
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
            }, AccessoryController.createAccessory),
            router.delete('/delete', (req, res, next) => {
                let error = false;
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
            }, AccessoryController.eliminar),
            router.route('/')
            router.put('/update', (req, res, next) => {
                let error = false;
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
            }, AccessoryController.update),
            router.get('/all', AccessoryController.accessories)
            router.get('/type', AccessoryController.getByType),
            router.get('/price', AccessoryController.getByPrice),
            router.get('/level', AccessoryController.getByLevel)
            
module.exports = router;
