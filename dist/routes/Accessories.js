"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const AccessoryController = __importStar(require("../controllers/AccesoryController"));
const Policies_1 = __importDefault(require("../sso/Policies"));
const router = express_1.default.Router();
router.route('/');
router.post('/create', (req, res, next) => {
    let error = false;
    if (!error) {
        const apiKey = req.header("API-KEY");
        const apiKeyVerification = Policies_1.default.verifyApiKey(apiKey);
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
            const apiKeyVerification = Policies_1.default.verifyApiKey(apiKey);
            if (apiKeyVerification.error) {
                error = true;
                res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
            }
        }
        if (!error) {
            next();
        }
    }, AccessoryController.eliminar),
    router.route('/');
router.put('/update', (req, res, next) => {
    let error = false;
    if (!error) {
        const apiKey = req.header("API-KEY");
        const apiKeyVerification = Policies_1.default.verifyApiKey(apiKey);
        if (apiKeyVerification.error) {
            error = true;
            res.status(apiKeyVerification.status).json({ error: true, msg: apiKeyVerification.msg });
        }
    }
    if (!error) {
        next();
    }
}, AccessoryController.update),
    router.get('/all', AccessoryController.accessories);
router.get('/type', AccessoryController.getByType),
    router.get('/price', AccessoryController.getByPrice),
    router.get('/level', AccessoryController.getByLevel);
module.exports = router;
