import { Product } from './bai8';
export class Order {
    private products : Product[] = [];
    constructor(products : Product[]){
        this.products = products;
    }

    calculateTotalPrice(): number {
        return this.products.reduce((sum, p) => sum + p.getPrice(), 0);
    }
}