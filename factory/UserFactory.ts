import User from "../models/User";

export default class UserFactory{
    
    static Create(obj: any):User {
        const user:User = new User(obj.username, obj.clan, obj.password);
        user.setId(obj.id);
        return user;
    }

    static CreateNew(info: any, username: string, clan: string, password: string):User {
        const user:User = new User(username, clan, password);
        user.setId(info.insertId);
        return user;
    }
}