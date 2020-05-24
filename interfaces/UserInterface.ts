export interface UserInterface{
    getById(id: number): Promise<any>;
    getAll(): Promise<any>;
    getByClan(clan: string): Promise<any>;
    UserRank(user: string): Promise<any>;
}