export interface AccessoryInterface {
    getByType(type: string): Promise<any>;
    getByPrice(min: number, max: number): Promise<any>;
    getByLevel(min: number, max: number): Promise<any>;
    getAll(): Promise<any>;
}