import { User } from "./user";

export class UsersList {
    private list: User[] = []
    constructor() {

    }

    public add(user: User) {
        this.list.push(user);
        return user;
    }

    public updateName(id: string, name: string) {
        for (let user of this.list) {
            if (user.id === id) {
                user.username = name;
                break;
            }
        }
    }

    public getList() {
        return this.list.filter(user => user.username !== 'no user');
    }
    public getLogged() {
        return this.list.filter(user => user.username !== 'no user' && user.username !== 'admin');
    }
    public checkifexists(username: string) {
        return this.list.filter(user => user.username == username);
    }
    public getOrderedList() {
        return this.list.sort((a, b) => b.points.localeCompare(a.points));
    }

    public getUser(id: string) {
        return this.list.find(user => {
            return user.id === id;
        })
    }
    public increasepoints(username: string) {
        for (var i in this.list) {
            if (this.list[i].username === username) {
                this.list[i].points = String(Number(this.list[i].points) + 1);
            }
        }
    }

    public resetall() {
        for (var i in this.list) {
            this.list[i].points = '0'
        }
    }

    public getUserinRoom(room: string) {
        return this.list.filter(user => user.room === room);
    }

    public deleteUser(id: string) {
        const tempUser = this.getUser(id);
        this.list = this.list.filter(user => {
            return user.id !== id;
        });
        return tempUser;
    }
    public delete(username: string) {
        return this.list.filter(user => user.username !== username);
    }
}