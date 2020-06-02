import express from "express";
import * as UserController from "../controllers/UserController";
import Policies from "../sso/Policies";

        const router = express.Router();
        router.route('/'),
            router.post('/create', UserController.createUser),
            router.get('/all', (req, res, next) => {
                let error = false;
                const host: string | undefined = req.headers.host;
                console.log(host);
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
            }, UserController.users),
            router.get('/id', UserController.getById),
            router.get('/clan', UserController.getByClan),
            router.get('/rank', UserController.getByRank)
            
module.exports = router;
