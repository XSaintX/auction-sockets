export class Product {
    constructor(
      public sku: string,
      public name: string,
      public imageUrl: string,
      public price: number,
      public bidding: boolean,
      public status: string) 
    {}
  }