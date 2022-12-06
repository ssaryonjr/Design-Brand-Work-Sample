import { getEntries, getValues, formatProduct, isOnSale, ProductMetrics, getNewMin, getNewMax, getPrice, formatResult, parseInput } from "../src/utils/helperFuncs";

//Allows data.txt to be passed in as a second argument into CLI.
const { argv } = require("node:process");
const fileName: string = argv[2] ?? "no file found"

const data: string = parseInput(fileName);

const entries: string[] = getEntries(data).slice(3)

//Storage for pricing amount
const normal: ProductMetrics = {amount: 0}
const clearance: ProductMetrics = {amount: 0}
let shownInCart: ProductMetrics = {amount: 0}

entries.forEach(entry => {
  const values = getValues(entry);
  const {quantityInStock, normalPrice, clearancePrice, isHiddenOutsideCart} = formatProduct(values);

  if (quantityInStock < 3) {
    return;
  }

	const price = getPrice(normalPrice, clearancePrice)

	//Check if both prices points are different
	if(isOnSale(normalPrice, clearancePrice)){
		clearance.min = getNewMin(clearance, price)
		clearance.max = getNewMax(clearance, price)
		clearance.amount++
	} 
	//Return normal price
	else{
		normal.min = getNewMin(normal, price)
		normal.max = getNewMax(normal, price)
		normal.amount++
	}

	if(isHiddenOutsideCart){
		shownInCart.amount++
	}
});

//Returns product results
console.log(formatResult("Clearance Price", clearance))
console.log(formatResult("Normal Price", normal))
console.log(formatResult("Price In Cart", shownInCart))



export { data };


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
