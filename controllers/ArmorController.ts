import { Request, Response} from "express";
import ArmorService from "../services/ArmorService";

export async function armors(req: Request, res: Response){
    const armor: any = await ArmorService.getAll();
    res.status(200).json(armor);
}