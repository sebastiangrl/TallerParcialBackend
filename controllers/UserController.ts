import { Request, Response} from "express";
import UserService from "../services/UserService";



export async function createUser(req: Request, res: Response){
    const user: any = await UserService.create(req.body.username, req.body.clan, req.body.password);
    res.status(200).json(user);
}

export async function update(req: Request, res: Response){
    const user: any = await UserService.update(req.body.id, req.body.username, req.body.clan, req.body.password);
    res.status(200).json(user);
}

export  async function eliminar(req: Request, res: Response){
    const user: any = await UserService.eliminar(req.body.id);
    res.status(200).json(user);
}

export async function users(req: Request, res: Response){
    const user: any = await UserService.getAll();
    res.status(200).json(user);
}

//consume api amiga.
export async function getByRank(req: Request, res: Response){
    const user: any = await UserService.getByRank(req.body.id);
    res.status(200).json(user);
}

export async function getByClan(req: Request, res: Response){
    const user: any = await UserService.getByClan(req.body.clan);
    res.status(200).json(user);
}

export async function getById(req: Request, res: Response){
    const user: any = await UserService.getById(req.body.id);
    res.status(200).json(user);
}