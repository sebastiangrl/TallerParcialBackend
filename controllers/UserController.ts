import { Request, Response} from "express";
import UserService from "../services/UserService";

<<<<<<< HEAD
=======


export async function createUser(req: Request, res: Response){
    const user: any = await UserService.create(req.body.username, req.body.clan, req.body.password);
    res.status(200).json(user);
}


>>>>>>> Sebas
export async function users(req: Request, res: Response){
    const user: any = await UserService.getAll();
    res.status(200).json(user);
}

//consume api amiga.
<<<<<<< HEAD
export async function UserRank(req: Request, res: Response){
    const user: any = await UserService.UserRank(req.body.id);
=======
export async function getByRank(req: Request, res: Response){
    const user: any = await UserService.getByRank(req.body.id);
>>>>>>> Sebas
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