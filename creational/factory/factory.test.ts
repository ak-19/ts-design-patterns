import { Product1, Product2, ProductGeneric, Factory } from "../factory/factory";

describe('When called with parameter 1', () => {
    test('should return instance of Product1 class ', () => expect(Factory.create(1)).toBeInstanceOf(Product1));
});

describe('When called with parameter 2', () => {
    test('should return instance of Product2 class ', () => expect(Factory.create(2)).toBeInstanceOf(Product2));
    test('should return object that contains property name with value Product 2', () => expect(Factory.create(2)).toHaveProperty('name', 'Product 2')); 
});

describe('When called with non handled parameter', () => {
    test('should return instance of ProductGeneric class ', () => expect(Factory.create(22)).toBeInstanceOf(ProductGeneric));
});

describe('When called with non handled parameter', () => {
    test('should return object that contains property name with value Generic Product', () => expect(Factory.create(22)).toHaveProperty('name', 'Generic Product')); 
});
