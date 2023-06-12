interface IProduct {
    name: string;
}


export class Product1 implements IProduct {
    name: string = 'Product 1';
}

export class Product2 implements IProduct {
    name: string = 'Product 2';
}

export class ProductGeneric implements IProduct {
    name: string = 'Generic Product';
}

export class Factory {
    static create(type: number): IProduct {
        if (type === 1) return new Product1();
        if (type === 2) return new Product2;        
        return new ProductGeneric();
    }
}

