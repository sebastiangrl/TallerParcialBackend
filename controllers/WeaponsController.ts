import { Request, Response} from "express";
import WeaponsService from "../services/WeaponsService";
import WeaponFactory from "../factory/WeaponFactory";

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
    const weapon: any = await WeaponsService.customCreate(req.body.price, req.body.name, req.body.model, req.body.damage, req.body.accessory);
    res.status(weapon.code).json(weapon);
};

export async function create(req: Request, res: Response){
    const weapon: any = await WeaponsService.create(req.body.price, req.body.name, req.body.model, req.body.damage);
    res.status(weapon.code).json(weapon);
};

export async function getByPrice(req: Request, res: Response){
    const weapon: any = await WeaponsService.getByPrice(req.body.min, req.body.max);
    res.status(200).json(weapon);
};

export async function modelList(req: Request, res: Response){
    const model: any = await WeaponsService.modelList();
    res.status(200).json(model);
};

export async function eliminar(req: Request, res: Response){
    const model: any = await WeaponsService.eliminar(req.body.id);
    res.status(200).json(model);
};
