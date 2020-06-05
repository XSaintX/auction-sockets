export class ProductItem {
    public sku: string;
    public name: string;
    public imageUrl: string;
    public price: number;
    public bidding: boolean;
    public status: string;

    constructor() {
        this.sku = '';
        this.name = '';
        this.imageUrl = '';
        this.price = 0;
        this.bidding = false;
        this.status = '';
    }
    
}