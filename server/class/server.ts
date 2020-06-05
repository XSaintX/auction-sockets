import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO, { Socket } from 'socket.io';
import http from 'http';
import * as socket from '../sockets/socket';

export default class Server {
    private static _instance: Server;
    public app: express.Application;
    public port: number;
    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer = new http.Server(this.app);
        this.io = socketIO(this.httpServer);
        this.listeningsockets();
    }
    public static get instance() {
        return this._instance || (this._instance = new this());
    }
    private listeningsockets() {
        this.io.on('connection', (client: Socket) => {
            socket.connectClient(client, this.io);
            socket.configureUser(client, this.io);
            socket.getUsers(client, this.io);
            socket.desconectar(client, this.io);
            socket.auctionstartsocket(client, this.io);
        })
    }

    start() {
        this.httpServer.listen(this.port, () => {
            console.log(`httpServer listening on the http://localhost:${SERVER_PORT}`);
        })
    }
}