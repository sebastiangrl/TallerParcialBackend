export interface crud{
    read(id?: number): Promise<any>;
    create(): Promise<any>;
    update(): Promise<any>;
    delete(): Promise<any>;
}