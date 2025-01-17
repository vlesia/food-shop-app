export type StockStatus = "INSTOCK" | "OUTOFSTOCK";

export interface Product {
    deliveryDays: number;
    name: string;
    image: string[];
    price: number;
    SKU: number;
    category: string;
    subcategory: string;
    farm: string;
    stoke: StockStatus; 
    freshness: number;
    buyBy: string[];
    delivery: number;
    deliveryAria: string;
    maxKgs: number;
    description: string;
    detailDescription: string;
    rate: number;
    tax: number;
    createdAt: string;
    updatedAt: string;
    id: string;
}
