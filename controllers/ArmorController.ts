import { Request, Response} from "express";
import ArmorService from "../services/ArmorService";

export async function createArmors(req: Request, res: Response){
    const armor: any = await ArmorService.create(req.body.name, req.body.price, req.body.weight, req.body.mobility, req.body.protection, req.body.type_id);
    res.status(200).json(armor);
}

export  async function update(req: Request, res: Response){
    const armor: any = await ArmorService.update(req.body.name, req.body.price, req.body.weight, req.body.mobility, req.body.protection, req.body.type_id);
    res.status(200).json(armor);
}

export async function armors(req: Request, res: Response){
    const armor: any = await ArmorService.getAll();
    res.status(200).json(armor);
}

export async function getByPrice(req: Request, res: Response){
    const armor: any = await ArmorService.getByPrice(req.body.min, req.body.max);
    res.status(200).json(armor);
}

export async function getByProtection(req: Request, res: Response){
    const armor: any = await ArmorService.getByProtection(req.body.min, req.body.max);
    res.status(200).json(armor);
}

export async function getByType(req: Request, res: Response){
    const armor: any = await ArmorService.getByType(req.body.type_id);
    res.status(200).json(armor);
}