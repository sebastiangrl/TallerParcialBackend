import { Request, Response} from "express";
import AccessoryService from "../services/AccessoryService";

export async function getByType(req: Request, res: Response){
    const accessory = await AccessoryService.getByType(req.body.type);
    res.status(200).json(accessory);
}

export async function getByLevel(req: Request, res: Response){
    const accessory = await AccessoryService.getByLevel(req.body.min, req.body.max);
    res.status(200).json(accessory);
}

export async function getAll(req: Request, res: Response){
    const accessory = await AccessoryService.getAll();
    res.status(200).json(accessory);
}

export async function getByPrice(req: Request, res: Response){
    const accessory = await AccessoryService.getByPrice(req.body.min, req.body.max);
    res.status(200).json(accessory);

}