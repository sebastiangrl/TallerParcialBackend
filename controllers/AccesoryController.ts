import { Request, Response} from "express";
import AccessoryService from "../services/AccessoryService";


export async function createAccessory(req: Request, res: Response){
    const accessory: any = await AccessoryService.create(req.body.name, req.body.price, req.body.damage, req.body.precision, req.body.scope, req.body.cadence, req.body.mobility, req.body.control, req.body.level, req.body.type);
    res.status(200).json(accessory);
}


export async function accessories(req: Request, res: Response){
    const accessory: any = await AccessoryService.getAll();
    res.status(200).json(accessory);
}

export async function getByType(req: Request, res: Response){
    const accessory: any = await AccessoryService.getByType(req.body.type);
    res.status(200).json(accessory);
}

export async function getByPrice(req: Request, res: Response){
    const accessory: any = await AccessoryService.getByPrice(req.body.min, req.body.max);
    res.status(200).json(accessory);
}

export async function getByLevel(req: Request, res: Response){
    const accessory: any = await AccessoryService.getByLevel(req.body.level);
    res.status(200).json(accessory);
}