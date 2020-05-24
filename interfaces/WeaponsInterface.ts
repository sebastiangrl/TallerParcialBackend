export interface WeaponsInterface{
    getByModel(model: string): Promise<any>;
    getByKills(): Promise<any>;
    customCreate(accessory: Array<any>): Promise<any>;
    getByPrice(min: number, max: number): Promise<any>;
}