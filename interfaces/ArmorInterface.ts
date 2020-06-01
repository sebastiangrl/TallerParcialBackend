export interface ArmorInterface{
    getByType(type: string): Promise<any>;
    getByProtection(min: number, max: number): Promise<any>;
    getAll(): Promise<any>;
    getByPrice(min: number, max: number): Promise<any>;
}