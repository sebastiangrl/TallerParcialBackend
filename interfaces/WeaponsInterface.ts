import Accessory from "../models/Accessory";

export interface WeaponInterface{
    id: number | null;
    price: number;
    name: string;
    model: number;
    accessory: Array<Accessory>;
    damage: number;
}