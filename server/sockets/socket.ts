import { Socket } from 'socket.io';
import socketIO from 'socket.io';
import { User } from '../class/user';
import { Counter } from '../class/counter';
import { CounterDown } from '../class/counterdown';
import { productlistz } from '../global/environment';
import { usersConnected } from '../global/environment';

export const initialcounter = new CounterDown();
export let initial = new Counter();
let decrease = false;

export const connectClient = (client: Socket, io: socketIO.Server) => {
    const user = new User(client.id);
    usersConnected.add(user);
}

export const desconectar = (client: Socket, io: socketIO.Server) => {
    client.on('disconnect', () => {
        usersConnected.deleteUser(client.id);
        io.emit('active-users', usersConnected.getList())
    })
}

export const auctionstartsocket = (client: Socket, io: socketIO.Server) => {
    client.on('auctionstartsocket', (payload: { from: string }) => {
        productlistz.bidding();
        usersConnected.increasepoints(payload.from)
        io.emit('active-users', usersConnected.getOrderedList());
        io.emit('auction-products', productlistz.ListItemsAuction());
        initialcounter.reboot();
        if (!decrease) {
            doEverySecond(io);
        }
    })
}

let doEverySecond = (io: socketIO.Server) => {
    decrease = true
    var win = setInterval(() => {
        console.log(initialcounter.result())
        initialcounter.decrease();
        io.emit('counter', initialcounter.result());
        if (Number(initialcounter.result()) === 0) {
            decrease = false
            initialcounter.restart();
            io.emit('counter', usersConnected.getOrderedList()[0].username + " WON!!");
            productlistz.sold(usersConnected.getOrderedList()[0].username)
            usersConnected.resetall()
            setTimeout(function () {
                io.emit('change-state', productlistz.getProductList());
                io.emit('active-users', usersConnected.getOrderedList());
                io.emit('auction-products', productlistz.ListItemsAuction());
            }, 10000);
            clearInterval(win);
        }
    }, 1000);
}

export const configureUser = (client: Socket, io: socketIO.Server) => {
    client.on('configure-user', (payload: { name: string }, callback: Function) => {
        usersConnected.updateName(client.id, payload.name);
        io.emit('active-users', usersConnected.getList())
        callback({
            ok: true,
            mensaje: `user ${payload.name} configured`
        })
    })
}

export const getUsers = (client: Socket, io: socketIO.Server) => {
    client.on('get-users', () => {
        io.to(client.id).emit('active-users', usersConnected.getList())
    })
}

export const productlist = (client: Socket, io: socketIO.Server) => {
    client.on('productlist', () => {
        io.emit('productlist-get', productlistz.ListItemsAuction());
    })
}
export default socketIO;