import { data } from "../index";

describe("index", () => {
  test("Data should be text from data.txt", () => {
    expect(data).toBe(
      "Type,normal,Normal Price\nType,clearance,Clearance Price\nType,price_in_cart,Price In Cart\nProduct,59.99,39.98,10,false\nProduct,49.99,49.99,8,false\nProduct,79.99,49.98,5,false"
    );
  });
});