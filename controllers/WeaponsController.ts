import { Request, Response} from "express";
import WeaponsService from "../services/WeaponsService";

export async function getByModel(req: Request, res: Response){
    const weapon: any = await WeaponsService.getByModel(req.body.model);
    res.status(200).json(weapon);
};

// requiere api amiga.
export async function getByKills(req: Request, res: Response){
    const weapon: any = await WeaponsService.getByKills();
    res.status(200).json(weapon);
};

export async function customCreate(req: Request, res: Response){
    const weapon: any = await WeaponsService.customCreate(req.body.weapon);
    res.status(200).json(weapon);
};

export async function getByPrice(req: Request, res: Response){
    const weapon: any = await WeaponsService.getByPrice(req.body.min, req.body.max);
    res.status(200).json(weapon);
};
