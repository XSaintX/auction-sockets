import { Router, Request, Response } from 'express';
import Server from '../class/server';
import { Socket } from 'socket.io';

import { productlistz } from '../global/environment';
import { usersConnected } from '../global/environment';

const router = Router();

router.get('/productlist', (req: Request, res: Response) => {
    res.json(productlistz.getProductList());
});

router.post('/updatestate', (req: Request, res: Response) => {
    const sku = req.body.sku;
    const bidding = req.body.bidding;
    productlistz.updatestate(sku, bidding);
    const server = Server.instance;
    server.io.emit('change-state', productlistz.getProductList());
    server.io.emit('auction-products', productlistz.ListItemsAuction());
    res.json(productlistz.getProductList());
});

router.get('/checklogged', (req: Request, res: Response) => {
    res.json(usersConnected.getLogged());
});

router.get('/auctionlist', (req: Request, res: Response) => {
    res.json(productlistz.ListItemsAuction());
});
router.post('/checkifexists', (req: Request, res: Response) => {
    const username = req.body.username;
    res.json(usersConnected.checkifexists(username));
});
router.post('/logout', (req: Request, res: Response) => {
    const username = req.body.username;
    usersConnected.delete(username);
    const server = Server.instance;
    if (username == 'admin') {
        server.io.emit('auction-products', productlistz.finished());
    }
});


router.get('/users', (req: Request, res: Response) => {
    const server = Server.instance;
    server.io.clients((err: any, clients: string[]) => {
        if (err) {
            return res.json({
                ok: false,
                err
            })
        }
        res.json({
            ok: true,
            clients
        })
    })

})

export default router;