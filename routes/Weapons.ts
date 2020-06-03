import express from "express";
import * as WeaponsController from "../controllers/WeaponsController";
import Policies from "../sso/Policies";

    const router = express.Router();
        router.route('/'),
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
            }, WeaponsController.eliminar),
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
            }, WeaponsController.create),
            router.post('/customcreate', (req, res, next) => {
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
            }, WeaponsController.customCreate),
            router.get('/model', WeaponsController.getByModel),
            router.get('/kills', WeaponsController.getByKills);
            router.get('/price', WeaponsController.getByPrice),
            router.get('/modellist', WeaponsController.modelList),
            router.get('/all', WeaponsController.getAll)


module.exports = router;