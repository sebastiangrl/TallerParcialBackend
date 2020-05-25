import express from "express";
import * as ArmorController from "../controllers/ArmorController";

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