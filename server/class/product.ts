import { ProductItem } from "./product-item";

export class ProductList {
    private finished_list: ProductItem[] = [
        {
            sku: 'N/A',
            name: 'Thanks for coming. The auction has finished.',
            imageUrl: 'http://www.breakhours.com/wp-content/uploads/2018/02/Understand-How-The-Auctions-Come-About.png',
            price: 0,
            bidding: false,
            status: ''
        }
    ]
    private list_products: ProductItem[] = [
        {
            sku: 'A-01',
            name: 'Tempus ZW20145U',
            imageUrl: 'https://images-americanas.b2w.io/produtos/01/00/img/495025/0/495025065_1GG.jpg',
            price: 160,
            bidding: false,
            status: ''
        },
        {
            sku: 'B-01',
            name: 'HUBLOT CLASSIC FUSION CHRONOGRAPH BLACK MAGIC',
            imageUrl: 'https://www.rabat.net/pub/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/5/2/521.cm.1771.rx-sd-hr-w.jpg',
            price: 370,
            bidding: false,
            status: ''
        },
        {
            sku: 'C-01',
            name: 'NIBOSI Mens Watches Luxury Fashion Casual Dress',
            imageUrl: 'http://compratodousa.com/image/cache/catalog/nibosi/nibosi-mens-watches-luxury-fashion-casual-dress-chronograph-waterproof-military-quartz-wristwatches-for-men-stainless-steel-band-black-color-2309-B078GM6WKT-500x500.jpg',
            price: 200,
            bidding: false,
            status: ''
        },
        {
            sku: 'D-01',
            name: 'Big Bang Meca-10 Black Magic Mens Watch',
            imageUrl: 'https://cdn2.jomashop.com/media/catalog/product/h/u/hublot-big-bang-meca-10-black-magic-men_s-watch-414.ci.1123.rx.jpg',
            price: 220,
            bidding: false,
            status: ''
        },
        {
            sku: 'E-01',
            name: 'TECHFRAME FERRARI TOURBILLON CHRONOGRAPH CARBON YELLOW',
            imageUrl: 'https://office.amjwatches.co.uk/storage/images/inventory/50305/primary_image.jpg',
            price: 250,
            bidding: false,
            status: ''
        }
    ]
    constructor() {

    }

    public getProductList() {
        return [
            { data: this.list_products, label: 'Ventas' }
        ]
    }
    public ListItemsAuction() {        
        var output = this.list_products.filter(function (x) { return x.bidding == true });     
        return [
            { data: output }
        ]
    }
    public finished() {    
        console.log('this.finished_list')  
        console.log(this.finished_list)        
        return [
            { data: this.finished_list }
        ]
    }
    public bidding() {
        for (var i in this.list_products) {
            if (this.list_products[i].bidding === true) {
                this.list_products[i].price = this.list_products[i].price + 10;
            }
        }
    };

    public updatestate(sku: string, bidding: string) {
        for (let i in this.list_products) {
            if (this.list_products[i].sku === sku) {
                this.list_products[i].bidding = bidding == '1' ? true : false;
                this.list_products[i].status = bidding == '1' ? 'WAITING' : '';
            }
        }
        return this.getProductList();
    }

    public sold(user: string) {
        for (let i in this.list_products) {
            if (this.list_products[i].status === 'WAITING') {
                this.list_products[i].status = 'SOLD OUT TO ' + user;
                this.list_products[i].bidding = false;
            }
        }
        return this.getProductList();
    }
}

