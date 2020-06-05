export class User {
    public id: string;
    public username: string;
    public room: string;
    public points: string;

    constructor(id: string) {
        this.id = id;
        this.username = 'no user';
        this.room = 'no room';
        this.points = '0';
    }

}