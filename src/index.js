"use strict";
exports.__esModule = true;
exports.data = void 0;
var helperFuncs_1 = require("../src/utils/helperFuncs");
// const { argv } = require("node:process");
// const fileName: string = argv[2]
var data = "Type,normal,Normal Price\nType,clearance,Clearance Price\nType,price_in_cart,Price In Cart\nProduct,59.99,39.98,10,false\nProduct,49.99,49.99,8,false\nProduct,79.99,49.98,5,false";
exports.data = data;
var entries = (0, helperFuncs_1.getEntries)(data);
var normal = { amount: 0 };
var clearance = { amount: 0 };
var shownInCart = 0;
entries.forEach(function (entry) {
    var values = (0, helperFuncs_1.getValues)(entry);
    var _a = (0, helperFuncs_1.formatProduct)(values), quantityInStock = _a.quantityInStock, normalPrice = _a.normalPrice, clearancePrice = _a.clearancePrice, isHiddenOutsideCart = _a.isHiddenOutsideCart;
    if (quantityInStock < 3) {
        return;
    }
    var price = (0, helperFuncs_1.getPrice)(normalPrice, clearancePrice);
    if ((0, helperFuncs_1.isOnSale)(normalPrice, clearancePrice)) {
        clearance.min = (0, helperFuncs_1.getNewMin)(clearance, price);
        clearance.max = (0, helperFuncs_1.getNewMax)(clearance, price);
        clearance.amount++;
    }
    else {
        normal.min = (0, helperFuncs_1.getNewMin)(normal, price);
        normal.max = (0, helperFuncs_1.getNewMax)(normal, price);
        normal.amount++;
    }
    if (!isHiddenOutsideCart) {
        shownInCart++;
    }
});
console.log(normal, clearance, shownInCart);
//
// node src/index.ts data.txt
//argv[2]
// split data into lines
// split entries in line by commas
/*
{
    normal:
    clearance:
    hidden:
}
15
{
    min: 10
    max: 15
    amount: 1

}
*/
// if less than 3, can't be sold
// if last val is true, hidden until add to cart
// if reg and clearance are the same, it's normal price
// else it's on clearance
// store max and min prices for each category
