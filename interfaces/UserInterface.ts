export interface UserInterface{
    getById(id: number): Promise<any>;
    UserRank(user: string): Promise<any>;
    getAll(): Promise<any>;
    getByClan(clan: string): Promise<any>;
}