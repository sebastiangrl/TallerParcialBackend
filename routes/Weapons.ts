import express from "express";
import * as WeaponsController from "../controllers/WeaponsController";

module weaponsRouter {

    export function getRoutes() {
        let router: any = express.Router();
        router.route('/')
            .get('/', )
            .post('/', )
            .put('/', )
            .delete('/', );
        return router;
    }

}

export default weaponsRouter;