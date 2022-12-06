import { getEntries, getValues, formatProduct, isOnSale, getPrice, ProductMetrics, getNewMin, getNewMax, formatResult } from '../utils/helperFuncs'

describe("index", () => {

  test('Get entries from string', () => {
    const data: string = 'Type,normal,Normal Price\nType,clearance,Clearance Price\nType,price_in_cart,Price In Cart'

		expect(getEntries(data)).toStrictEqual(
			['Type,normal,Normal Price',
			'Type,clearance,Clearance Price',
			'Type,price_in_cart,Price In Cart'])
  });

  test('Get values from entry', () => {
    const entry: string = 'Product,49.99,49.99,8,false'

		expect(getValues(entry)).toStrictEqual(
			['Product', '49.99', '49.99', '8', 'false'])
  });

  test('Format product', () => {
    const product: string[] = ['Product', '49.99', '49.99', '8', 'false']

		expect(formatProduct(product)).toStrictEqual(
			{
				normalPrice: 49.99,
				clearancePrice: 49.99,
				quantityInStock: 8,
				isHiddenOutsideCart: false,
			}
			)
  });

  test('Should be on sale', () => {
    const normalPrice: number = 49.99
    const clearancePrice: number = 39.99

		expect(isOnSale(normalPrice, clearancePrice)).toBe(true)
  });

  test('Should get the price', () => {
    const normalPrice: number = 49.99
    const clearancePrice: number = 39.99

		expect(getPrice(normalPrice, clearancePrice)).toBe(39.99)
  });

  test('Should get the price', () => {
    const normalPrice: number = 49.99
    const clearancePrice: number = 39.99

		expect(getPrice(normalPrice, clearancePrice)).toBe(39.99)
  });

  test('Should set a min when there is none', () => {
    const productType: ProductMetrics = {amount:0}
		productType.min = getNewMin(productType, 300)

		expect(productType.min).toBe(300)
  });

  test('Should set a new min if the price is lower', () => {
    const productType: ProductMetrics = {amount:0, min: 434}
		productType.min = getNewMin(productType, 300)

		expect(productType.min).toBe(300)
  });

  test('Should set a max when there is none', () => {
    const productType: ProductMetrics = {amount:0}
		productType.max = getNewMax(productType, 300)

		expect(productType.max).toBe(300)
  });

  test('Should set a new max if the price is higher', () => {
    const productType: ProductMetrics = {amount:0, max: 23}
		productType.max = getNewMax(productType, 300)

		expect(productType.max).toBe(300)
  });

	describe.only('format result', () => {
		describe('plurality', () => {
			test('should not add s if there is only 1 product', () => {
				const productType: ProductMetrics = {amount:1}
				
				expect(formatResult("title", productType)).toBe('title: 1 product')
			});
	
			test('should not add s if there is only 1 product', () => {
				const productType: ProductMetrics = {amount:2}
				
				expect(formatResult("title", productType)).toBe('title: 2 products')
			});
		});

		describe('Ranges', () => {
			test('should only have one number', () => {
				const productType: ProductMetrics = {amount:2, min: 1, max: 1}
					
					expect(formatResult("title", productType)).toBe('title: 2 products @ $1')
			});

			test('should only have two numbers', () => {
				const productType: ProductMetrics = {amount:2, min: 1, max: 2}
					
					expect(formatResult("title", productType)).toBe('title: 2 products @ $1-$2')
			});
		});
	});
});

/*
Type,normal,Normal Price
Type,clearance,Clearance Price
Type,price_in_cart,Price In Cart
-------------------
[Product| 59.99 | 39.98 | 10 |false]
Product,49.99,49.99,8,false
Product,79.99,49.98,5,false
*/

/* 
Clearance Price: 2 products @ $39.98-$49.98
Normal Price: 1 product @ $49.99
Price In Cart: 0 products
*/