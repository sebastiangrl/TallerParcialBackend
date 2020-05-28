import express from "express";
import * as ArmorController from "../controllers/ArmorController";
<<<<<<< HEAD

module ArmorsRouter {

    export function getRoutes() {
        let router: any = express.Router();
        router.route('/')
            .get(`/bar`, ArmorController.armors)
            .post('/', )
            .put('/', )
            .delete('/', );
        return router;
    }

}

export default ArmorsRouter;
=======
import Policies from "../sso/Policies";


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
            router.get('/all', ArmorController.armors),
            router.get('/price', ArmorController.getByPrice),
            router.get('/type', ArmorController.getByType),
            router.get('/protection', ArmorController.getByProtection)
            
            

module.exports = router;
>>>>>>> Sebas
